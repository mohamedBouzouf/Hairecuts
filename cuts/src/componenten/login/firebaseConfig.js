import firebase from "firebase";

var config = {
    apiKey: "AIzaSyAzcyQsDTCyhxahD05J0_wttH9r_cKy52c",
    authDomain: "haircuts-64748.firebaseapp.com",
    databaseURL: "https://haircuts-64748.firebaseio.com",
    projectId: "haircuts-64748",
    storageBucket: "haircuts-64748.appspot.com",
    messagingSenderId: "289556640582"
};

firebase.initializeApp(config)

export default firebase