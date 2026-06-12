// Copy this file to firebase-config.js, then paste your real Firebase web app
// config below. Do not commit firebase-config.js; it is ignored by .gitignore.
//
// Firebase Console path:
// Project settings -> General -> Your apps -> Web app -> SDK setup and config
//
// Firestore is used for live game room sync. Anonymous Auth is used so each
// browser session has a lightweight user id for room updates.
export const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_FIREBASE_APP_ID"
};

