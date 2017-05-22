import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import * as firebase from 'firebase';


 var config = {
    apiKey: "AIzaSyDY9ZrQEdVBwnp-ix76tXwqMvQ9OQJXGeM",
    authDomain: "fir-react-test-ca8f3.firebaseapp.com",
    databaseURL: "https://fir-react-test-ca8f3.firebaseio.com",
    projectId: "fir-react-test-ca8f3",
    storageBucket: "fir-react-test-ca8f3.appspot.com",
    messagingSenderId: "1006023697418"
  };

firebase.initializeApp(config);  

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
