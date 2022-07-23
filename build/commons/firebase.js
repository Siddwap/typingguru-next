// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAz5NesqVITE6oxkdNlT_FC-JLve0nokRQ',
  // authDomain: 'plasma-hope-299905.firebaseapp.com',

  // authDomain: 'localhost',
  projectId: 'plasma-hope-299905',
  storageBucket: 'plasma-hope-299905.appspot.com',
  messagingSenderId: '920738982052',
  appId: '1:920738982052:web:0a72c4269190ef5df9de31',
  measurementId: 'G-3CB3RH53ZX',
};

// Initialize Firebase
export const firebaseInit = (() => {
  if (!getApps().length) {
    // console.log('initializing firebase');
    initializeApp(firebaseConfig);
  }
})();
