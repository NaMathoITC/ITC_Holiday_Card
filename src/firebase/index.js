import firebase from 'firebase';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyCzaV8yuQZdRfbiKBGDHcn7gmGSxx671fw",
    authDomain: "imageupload-97815.firebaseapp.com",
    databaseURL: "https://imageupload-97815.firebaseio.com",
    projectId: "imageupload-97815",
    storageBucket: "imageupload-97815.appspot.com",
    messagingSenderId: "169245183412",
    appId: "1:169245183412:web:6d9e149111fac32dd6b6e1",
    measurementId: "G-K64K355VJG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 

const storage = firebase.storage();

export{
    storage, firebase as default

}