import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import mongoData from './mongoData.js'
import Pusher from 'pusher'
// or 

//app config
const app = express()
const port = process.env.PORT || 5000



const pusher = new Pusher({
    appId: "1098768",
    key: "da0e3c03385c0e7de9e5",
    secret: "8a2fe322e3f2932dc25d",
    cluster: "ap2",
    useTLS: true
});


//middlewares
app.use(express.json())
app.use(cors())


//db config
const mongoURI = 'mongodb+srv://admin:3818200@cluster0.2hhl2.mongodb.net/discordDB?retryWrites=true&w=majority'



mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
}).then(() => console.log("Connect to MongoDB.."))
    .catch((err) =>
        console.error("Could not connct to MongoDB....", err.message)
    );


mongoose.connection.once('open', () => {
    console.log('some Change')
    console.log('DB Connected')
    const changeStream = mongoose.connection.collection('conversations').watch()

    changeStream.on('change', change => {
        if (change.operationType === 'insert') {
            console.log('new Channel')
            pusher.trigger('channels', 'newChannel', {
                'change': change
            })
        } else if (change.operationType === 'update') {
            console.log('new message')
            pusher.trigger('conversations', 'newMessage', {
                'change': change
            })
        } else {
            console.log('Error trigger Pushers')
        }
    })
})


//api routes
app.get('/', (req, res) => res.status(200).send('hello world discord'))

app.post('/new/channel', (req, res) => {
    //  console.log(req.body)
    const dbData = req.body


    mongoData.create(dbData, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})


app.get('/get/channelList', (req, res) => {


    mongoData.find((err, data) => {

        if (err) {
            res.status(500).send(err)
        } else {
            let channels = []
            data.map((channelData) => {
                const channelInfo = {
                    _id: channelData._id,
                    channelName: channelData.channelName
                }
                channels.push(channelInfo)
            })
            res.status(201).send(channels)

        }
    })
})

app.post('/new/message', (req, res) => {
    //  console.log(req.body)
    const id = req.id
    const newMessage = req.body

    //  console.log(req)
    mongoData.updateMany(
        { _id: req.query.id },
        { $push: { conversation: req.body } },
        (err, data) => {
            if (err) {
                console.log("error saving mgs")
                console.log(err)
                res.status(500).send(err)
            } else {
                res.status(201).send(data)
            }
        }
    )
})


app.get('/get/data', (req, res) => {
    mongoData.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.post('/get/conversation', (req, res) => {

    mongoData.findOne({
        _id: req.body.cid
    }, (err, data) => {
        if (err) {
            res.send(err)
        } else {
            res.send(data)
        }
    })



})

//listen
app.listen(port, () => console.log(`listening on localhost:${port}`))