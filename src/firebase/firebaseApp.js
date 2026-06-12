const FIREBASE_VERSION = "10.12.5";
const CONFIG_MODULE = "./firebase-config.js";

const firebaseState = {
  app: null,
  auth: null,
  db: null,
  reason: "Firebase not initialized"
};

function hasPlaceholderValues(config) {
  if (!config || typeof config !== "object") return true;
  return Object.values(config).some((value) => {
    const text = String(value || "");
    return !text || text.includes("YOUR_") || text.includes("REPLACE_");
  });
}

async function loadFirebaseConfig() {
  try {
    const module = await import(CONFIG_MODULE);
    const config = module.firebaseConfig;
    if (hasPlaceholderValues(config)) {
      return { ok: false, reason: "Firebase config still has placeholder values" };
    }
    return { ok: true, config };
  } catch {
    return { ok: false, reason: "src/firebase/firebase-config.js not found; offline mode active" };
  }
}

export async function ensureFirebaseApp() {
  if (firebaseState.app && firebaseState.auth && firebaseState.db) {
    return {
      ok: true,
      app: firebaseState.app,
      auth: firebaseState.auth,
      db: firebaseState.db
    };
  }

  const loaded = await loadFirebaseConfig();
  if (!loaded.ok) {
    firebaseState.reason = loaded.reason;
    return { ok: false, reason: loaded.reason };
  }

  try {
    const [
      { initializeApp },
      { getAuth },
      { getFirestore }
    ] = await Promise.all([
      import(`https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-app.js`),
      import(`https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-auth.js`),
      import(`https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-firestore.js`)
    ]);

    firebaseState.app = initializeApp(loaded.config);
    firebaseState.auth = getAuth(firebaseState.app);
    firebaseState.db = getFirestore(firebaseState.app);
    firebaseState.reason = "";
    return {
      ok: true,
      app: firebaseState.app,
      auth: firebaseState.auth,
      db: firebaseState.db
    };
  } catch (error) {
    firebaseState.reason = `Firebase initialization failed: ${error.message}`;
    return { ok: false, reason: firebaseState.reason };
  }
}

export async function getFirestoreTools() {
  const app = await ensureFirebaseApp();
  if (!app.ok) return app;
  const tools = await import(`https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-firestore.js`);
  return {
    ok: true,
    db: app.db,
    tools
  };
}

export function firebaseStatus() {
  return {
    ready: Boolean(firebaseState.app && firebaseState.auth && firebaseState.db),
    reason: firebaseState.reason
  };
}

