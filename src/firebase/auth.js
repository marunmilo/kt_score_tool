import { ensureFirebaseApp } from "./firebaseApp.js";

let anonymousUser = null;

export async function ensureAnonymousUser() {
  if (anonymousUser) return { ok: true, user: anonymousUser };

  const app = await ensureFirebaseApp();
  if (!app.ok) return app;

  try {
    const { signInAnonymously } = await import("https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js");
    const credential = await signInAnonymously(app.auth);
    anonymousUser = credential.user;
    return { ok: true, user: anonymousUser };
  } catch (error) {
    return { ok: false, reason: `Anonymous Auth failed: ${error.message}` };
  }
}

