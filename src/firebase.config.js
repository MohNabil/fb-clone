import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyD6Zp6sv_cA1o4-VEtYNNnOlpD4bMRarwI",
	authDomain: "fb-clone-44e40.firebaseapp.com",
	databaseURL: "https://fb-clone-44e40.firebaseio.com",
	projectId: "fb-clone-44e40",
	storageBucket: "fb-clone-44e40.appspot.com",
	messagingSenderId: "68957979166",
	appId: "1:68957979166:web:018a424e6da5ad3260e40f",
	measurementId: "G-DWDQXJT0LF",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export default db;
