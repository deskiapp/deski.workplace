import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCZYabW3qQltf91s5H5xRyxsaTljvl3FcA",
    authDomain: "deski-deployment.firebaseapp.com",
    projectId: "deski-deployment",
    storageBucket: "deski-deployment.appspot.com",
    messagingSenderId: "686241795638",
    appId: "1:686241795638:web:c3c56c9326d0ba79ec5297",
    measurementId: "G-MND5R331VM",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;
