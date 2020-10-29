import firebase from 'firebase'




const firebaseConfig = {
    apiKey: "AIzaSyD5GTLQ5vSZzPQFnvdlFFhP-RbAU_pfxow",
    authDomain: "discord-clone-e1ab6.firebaseapp.com",
    databaseURL: "https://discord-clone-e1ab6.firebaseio.com",
    projectId: "discord-clone-e1ab6",
    storageBucket: "discord-clone-e1ab6.appspot.com",
    messagingSenderId: "144387664381",
    appId: "1:144387664381:web:2feea3545a85e436f01194",
    measurementId: "G-D15ERT64B0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db;