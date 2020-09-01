import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDgMhz5PgIOULuRzooN99wUEoI4b0p7H0I',
  authDomain: 'clone-36c36.firebaseapp.com',
  databaseURL: 'https://clone-36c36.firebaseio.com',
  projectId: 'clone-36c36',
  storageBucket: 'clone-36c36.appspot.com',
  messagingSenderId: '17348045906',
  appId: '1:17348045906:web:35755d6b13f56533ab838b',
  measurementId: 'G-XXNRQ0VD51',
})

const db = firebaseApp.firestore()
const auth = firebaseApp.auth()

export {auth, db}
