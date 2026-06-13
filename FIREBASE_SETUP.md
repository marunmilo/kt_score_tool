# Firebase Setup

This app keeps local/offline scoring working first. Firebase is only used when
you create or join an online game room.

## Firebase Console

1. Open the Firebase project `kt-scoreboard`.
2. Enable **Authentication > Sign-in method > Anonymous**.
3. Enable **Firestore Database**.
4. Keep the public web config in `src/firebase/firebase-config.js`.

The Firebase web config is public app configuration, not a password. Security is
handled by Firebase Authentication and Firestore Security Rules.

## Firestore Rules

This repo includes `firestore.rules` and `firebase.json`.

Deploy rules with Firebase CLI:

```powershell
firebase login
firebase use kt-scoreboard
firebase deploy --only firestore:rules
```

## Test In The App

1. Open the scoreboard.
2. Press **Test Firebase** in the Online Room panel.
3. If the status says Firebase is ready, press **Create Online Game**.
4. Copy the Player A, Player B, or Spectator link.

## Current Security Model

These rules are intended for personal/trusted rooms:

- Users must be anonymously signed in to read or update game rooms.
- The host UID is recorded when a room is created.
- The host can delete the room.

Important: this version syncs the match payload as one room document. Do not use
it for hidden-information competitive remote play unless the app is later split
into per-player private documents.
