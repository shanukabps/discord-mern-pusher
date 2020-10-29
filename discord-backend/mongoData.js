import mongoose from 'mongoose'

const discordSchema = mongoose.Schema({
    channelName: String,
    conversation: [
        {
            _id: String,
            messages: String,
            timestamp: String,
            user: {
                displayName: String,
                email: String,
                photo: String,
                uid: String
            }
        }
    ]
})

export default mongoose.model('conversations', discordSchema)