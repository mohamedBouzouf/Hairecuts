import firebase from 'firebase/app';
import 'firebase/auth';

// var config = {
//     apiKey: "AIzaSyAzcyQsDTCyhxahD05J0_wttH9r_cKy52c",
//     authDomain: "haircuts-64748.firebaseapp.com",
//     databaseURL: "https://haircuts-64748.firebaseio.com",
//     projectId: "haircuts-64748",
//     storageBucket: "haircuts-64748.appspot.com",
//     messagingSenderId: "289556640582"
// };

var config = {
    apiKey: "AIzaSyCTeDghiYcpgo4elkWpDfnwDBHGOoyYsSw",
    authDomain: "cuts-4ee3a.firebaseapp.com",
    databaseURL: "https://cuts-4ee3a.firebaseio.com",
    projectId: "cuts-4ee3a",
    storageBucket: "https://cuts-4ee3a.firebaseio.com",
    messagingSenderId: "712167303563"
};

firebase.initializeApp(config)

export default firebase