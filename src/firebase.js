import firebase from "firebase"

 var firebaseApp =firebase.initializeApp({
   apiKey: "AIzaSyADbodmtx8wBtVwa7_fi9BO68AdyR8OsuQ",
   authDomain: "formsdb-a3bd6.firebaseapp.com",
   projectId: "formsdb-a3bd6",
   storageBucket: "formsdb-a3bd6.appspot.com",
   messagingSenderId: "717316519504",
   appId: "1:717316519504:web:4dbc4e4125c5a9d2450355",
   measurementId: "G-BB7731269N",
}) 
 
var db = firebaseApp.firestore();

export { db };