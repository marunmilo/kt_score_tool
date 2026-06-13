import { ensureAnonymousUser } from "./auth.js";
import { firebaseStatus, getFirestoreTools } from "./firebaseApp.js";

const syncState = {
  roomId: "",
  role: "host",
  uid: "",
  unsubscribe: null,
  lastError: ""
};

function normalizeRole(role) {
  return ["host", "player-a", "player-b", "spectator"].includes(role) ? role : "spectator";
}

async function readyFirestore() {
  const userResult = await ensureAnonymousUser();
  if (!userResult.ok) {
    syncState.lastError = userResult.reason || "Anonymous Auth failed";
    return userResult;
  }
  const firestoreResult = await getFirestoreTools();
  if (!firestoreResult.ok) {
    syncState.lastError = firestoreResult.reason || "Firestore failed";
    return firestoreResult;
  }
  syncState.uid = userResult.user.uid;
  syncState.lastError = "";
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

export async function createRoom(roomId, payload, role = "host", accessTokens = {}) {
  const ready = await readyFirestore();
  if (!ready.ok) return ready;
  const { setDoc, serverTimestamp } = ready.tools;
  syncState.roomId = roomId;
  syncState.role = normalizeRole(role);
  const tokens = {
    host: accessTokens.host || crypto.randomUUID(),
    "player-a": accessTokens["player-a"] || crypto.randomUUID(),
    "player-b": accessTokens["player-b"] || crypto.randomUUID(),
    spectator: accessTokens.spectator || crypto.randomUUID()
  };
  await setDoc(roomRef(ready, roomId), {
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    hostUid: syncState.uid,
    lastWriterUid: syncState.uid,
    accessTokens: tokens,
    members: {
      [syncState.uid]: {
        role: syncState.role,
        token: tokens.host,
        joinedAt: serverTimestamp()
      }
    },
    schemaVersion: 1,
    payload
  }, { merge: true });
  return { ok: true, uid: syncState.uid };
}

export async function push(roomId, payload) {
  if (syncState.role === "spectator") {
    return { ok: false, reason: "Spectator is view only; local changes are not synced" };
  }
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

export async function pushPatch(roomId, patch) {
  if (syncState.role === "spectator") {
    return { ok: false, reason: "Spectator is view only; local changes are not synced" };
  }
  const ready = await readyFirestore();
  if (!ready.ok) return ready;
  const { updateDoc, serverTimestamp } = ready.tools;
  const update = {
    updatedAt: serverTimestamp(),
    lastWriterUid: syncState.uid
  };
  Object.entries(patch || {}).forEach(([path, value]) => {
    update[path] = value;
  });
  await updateDoc(roomRef(ready, roomId), update);
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
    syncState.lastError = "";
    callback(snapshot.data());
  }, (error) => {
    syncState.lastError = `Realtime listener failed: ${error.message}`;
  });
  return { ok: true, uid: syncState.uid };
}

export async function joinRoom(roomId, role, callback, token = "") {
  syncState.role = normalizeRole(role);
  const ready = await readyFirestore();
  if (!ready.ok) return ready;
  const { setDoc, serverTimestamp } = ready.tools;
  const ref = roomRef(ready, roomId);
  await setDoc(ref, {
    updatedAt: serverTimestamp(),
    members: {
      [syncState.uid]: {
        role: syncState.role,
        token,
        joinedAt: serverTimestamp()
      }
    }
  }, { merge: true });
  return subscribe(roomId, callback);
}

export function status() {
  const firebase = firebaseStatus();
  return {
    ready: firebase.ready,
    reason: syncState.lastError || firebase.reason,
    roomId: syncState.roomId,
    role: syncState.role,
    uid: syncState.uid
  };
}
