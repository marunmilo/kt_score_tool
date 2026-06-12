import { ensureAnonymousUser } from "./auth.js";
import { firebaseStatus, getFirestoreTools } from "./firebaseApp.js";

const syncState = {
  roomId: "",
  role: "host",
  uid: "",
  unsubscribe: null
};

async function readyFirestore() {
  const userResult = await ensureAnonymousUser();
  if (!userResult.ok) return userResult;
  const firestoreResult = await getFirestoreTools();
  if (!firestoreResult.ok) return firestoreResult;
  syncState.uid = userResult.user.uid;
  return {
    ok: true,
    user: userResult.user,
    db: firestoreResult.db,
    tools: firestoreResult.tools
  };
}

function roomRef(ready, roomId) {
  return ready.tools.doc(ready.db, "killTeamRooms", roomId);
}

export async function init() {
  const ready = await readyFirestore();
  if (!ready.ok) return ready;
  return { ok: true, uid: syncState.uid };
}

export async function createRoom(roomId, payload, role = "host") {
  const ready = await readyFirestore();
  if (!ready.ok) return ready;
  const { setDoc, serverTimestamp } = ready.tools;
  syncState.roomId = roomId;
  syncState.role = role;
  await setDoc(roomRef(ready, roomId), {
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    hostUid: syncState.uid,
    lastWriterUid: syncState.uid,
    schemaVersion: 1,
    payload
  }, { merge: true });
  return { ok: true, uid: syncState.uid };
}

export async function push(roomId, payload) {
  const ready = await readyFirestore();
  if (!ready.ok) return ready;
  const { setDoc, serverTimestamp } = ready.tools;
  await setDoc(roomRef(ready, roomId), {
    updatedAt: serverTimestamp(),
    lastWriterUid: syncState.uid,
    payload
  }, { merge: true });
  return { ok: true, uid: syncState.uid };
}

export async function subscribe(roomId, callback) {
  const ready = await readyFirestore();
  if (!ready.ok) return ready;
  const { onSnapshot } = ready.tools;
  if (syncState.unsubscribe) syncState.unsubscribe();
  syncState.roomId = roomId;
  syncState.unsubscribe = onSnapshot(roomRef(ready, roomId), (snapshot) => {
    if (!snapshot.exists()) return;
    callback(snapshot.data());
  });
  return { ok: true, uid: syncState.uid };
}

export async function joinRoom(roomId, role, callback) {
  syncState.role = role || "spectator";
  return subscribe(roomId, callback);
}

export function status() {
  const firebase = firebaseStatus();
  return {
    ready: firebase.ready,
    reason: firebase.reason,
    roomId: syncState.roomId,
    role: syncState.role,
    uid: syncState.uid
  };
}
