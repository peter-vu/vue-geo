import firebase from 'firebase'
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAFI7gIeR0dwUY_qclU2lfvGSoKIZtK2-A",
    authDomain: "p-vue-geo.firebaseapp.com",
    projectId: "p-vue-geo",
    storageBucket: "p-vue-geo.appspot.com",
    messagingSenderId: "67604016232",
    appId: "1:67604016232:web:531c4096fc8159a1179fdd",
    measurementId: "G-GBFNMMYZPK"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
firebaseApp.firestore().settings({ timestampsInSnapshots: true })
export default firebaseApp.firestore()