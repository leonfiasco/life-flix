import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyD5z0lS_oeKHDxi0zL2I8xWcxJjOejGy-w',
	authDomain: 'lifeflix-42227.firebaseapp.com',
	projectId: 'lifeflix-42227',
	storageBucket: 'lifeflix-42227.appspot.com',
	messagingSenderId: '543758144467',
	appId: '1:543758144467:web:2fa5029002c5ecf6f25526',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
