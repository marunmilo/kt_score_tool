(() => {
  let syncModule = null;
  let loadError = null;

  const modulePromise = import("./src/firebase/gameSync.js")
    .then((module) => {
      syncModule = module;
      return module;
    })
    .catch((error) => {
      loadError = error;
      return null;
    });

  function offlineResult() {
    return {
      ok: false,
      reason: loadError
        ? `Firebase sync module failed to load: ${loadError.message}`
        : "Firebase sync module unavailable; offline mode active"
    };
  }

  async function withSync(method, args) {
    const module = syncModule || await modulePromise;
    if (!module || typeof module[method] !== "function") return offlineResult();
    return module[method](...args);
  }

  window.KTFirebaseSync = {
    init: (...args) => withSync("init", args),
    createRoom: (...args) => withSync("createRoom", args),
    joinRoom: (...args) => withSync("joinRoom", args),
    push: (...args) => withSync("push", args),
    pushPatch: (...args) => withSync("pushPatch", args),
    subscribe: (...args) => withSync("subscribe", args),
    status: () => {
      if (syncModule && typeof syncModule.status === "function") return syncModule.status();
      return {
        ready: false,
        reason: offlineResult().reason,
        roomId: "",
        role: "host",
        uid: ""
      };
    }
  };
})();
