import Firebase from 'firebase'

 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyAGolPcdL6gRwBQLgiV9QVhBZgesZClM-k",
    authDomain: "mumu-project.firebaseapp.com",
    databaseURL: "https://mumu-project.firebaseio.com",
    projectId: "mumu-project",
    storageBucket: "mumu-project.appspot.com",
    messagingSenderId: "666893624082"
  };
  let firebaseApp = Firebase.initializeApp(config);
  let db = firebaseApp.database()

  export {firebaseApp , db};