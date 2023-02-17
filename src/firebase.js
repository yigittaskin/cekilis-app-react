import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA04YHCtSVQq7Y2YE2_NyjC7iIkPtDoW5U",
    authDomain: "yilbasi-cekilis.firebaseapp.com",
    projectId: "yilbasi-cekilis",
    storageBucket: "yilbasi-cekilis.appspot.com",
    messagingSenderId: "488075075455",
    appId: "1:488075075455:web:48b0d46084b86ae372044a",
    measurementId: "G-EMFR32GFFL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider };
