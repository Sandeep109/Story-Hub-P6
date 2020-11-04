import { firebase } from '@firebase/app';

require("@firebase/firestore")
var firebaseConfig = {
    apiKey: "AIzaSyDlNPTn8RHf2zyaS0p-XXx3jjY6qrNy5Fo",
    authDomain: "story-hub-665ae.firebaseapp.com",
    databaseURL: "https://story-hub-665ae.firebaseio.com",
    projectId: "story-hub-665ae",
    storageBucket: "story-hub-665ae.appspot.com",
    messagingSenderId: "1094268334090",
    appId: "1:1094268334090:web:13bd36cc56b28726e76ff3"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()