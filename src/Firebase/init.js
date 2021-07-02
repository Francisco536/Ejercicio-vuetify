import firebase from 'firebase'
import  'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyD4DvsPBGtj5q7wpQqDi0UlX8fjCIqmNaY",
    authDomain: "vuetify-e95dc.firebaseapp.com",
    projectId: "vuetify-e95dc",
    storageBucket: "vuetify-e95dc.appspot.com",
    messagingSenderId: "149156235182",
    appId: "1:149156235182:web:d4e452c0497bc031992a3f"
  };
 const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true});

export const db = firebaseApp.firestore();
