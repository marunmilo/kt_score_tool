const embeddedRules = {
  rulesVersion: {
    name: "Kill Team 3rd Edition - Approved Ops 2025 live baseline",
    checkedDate: "2026-06-05",
    notes: [
      "Uses official Warhammer Community downloads and the Kill Team app as living-rule references.",
      "Approved Ops update log includes April 2026 errata for Dominate, Sweep and Clear, and earlier Crit/Tac Op changes.",
      "Score prompts are short aids, not full official rules text."
    ],
    sources: [
      {
        label: "Warhammer Community Kill Team downloads",
        url: "https://www.warhammer-community.com/en-gb/downloads/kill-team/"
      },
      {
        label: "Approved Ops 2025 Tournament Companion",
        url: "https://assets.warhammer-community.com/eng_28-01_kill_team_key_downloads_approved_ops_2025_tournament_companion-ow1mucx9p1-jk7rmolmfe.pdf"
      },
      {
        label: "Approved Ops April 2026 update log",
        url: "https://assets.warhammer-community.com/eng_29-04_kill_team_key_downloads_approved_ops_update_log-ojpqmwjxda-z4rtrjne3n.pdf"
      }
    ]
  },
  archetypes: ["Recon", "Security", "Seek and Destroy", "Infiltration"],
  killTeams: [
    { name: "Angels of Death", faction: "Adeptus Astartes", classified: true, archetypes: ["Seek and Destroy","Security"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Battleclade", faction: "Adeptus Mechanicus", classified: true, archetypes: ["Recon","Infiltration"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Blades of Khaine", faction: "Aeldari", classified: true, archetypes: ["Seek and Destroy","Security","Recon","Infiltration"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Blooded", faction: "Chaos", classified: true, archetypes: ["Seek and Destroy","Infiltration"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Brood Brothers", faction: "Genestealer Cults", classified: true, archetypes: ["Security","Infiltration"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Canoptek Circle", faction: "Necrons", classified: true, archetypes: ["Security","Recon"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Celestian Insidiants", faction: "Adepta Sororitas", classified: true, archetypes: ["Seek and Destroy","Security"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Chaos Cult", faction: "Chaos", classified: true, archetypes: ["Seek and Destroy","Infiltration"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Corsair Voidscarred", faction: "Aeldari", classified: true, archetypes: ["Recon","Infiltration"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Death Korps", faction: "Astra Militarum", classified: true, archetypes: ["Seek and Destroy","Security"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Deathwatch", faction: "Adeptus Astartes", classified: true, archetypes: ["Seek and Destroy","Security"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Elucidian Starstriders", faction: "Imperial Agents", classified: true, archetypes: ["Security","Recon"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Exaction Squad", faction: "Imperial Agents", classified: true, archetypes: ["Seek and Destroy","Security"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Farstalker Kinband", faction: "T'au Empire", classified: true, archetypes: ["Recon","Infiltration"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Fellgor Ravagers", faction: "Chaos", classified: true, archetypes: ["Seek and Destroy","Recon"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Gellerpox Infected", faction: "Chaos", classified: true, archetypes: ["Seek and Destroy","Security"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Goremongers", faction: "Chaos", classified: true, archetypes: ["Seek and Destroy","Recon"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Hand of the Archon", faction: "Drukhari", classified: true, archetypes: ["Seek and Destroy","Recon"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Hearthkyn Salvagers", faction: "Leagues of Votann", classified: true, archetypes: ["Security","Recon"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Hernkyn Yaegirs", faction: "Leagues of Votann", classified: true, archetypes: ["Seek and Destroy","Infiltration"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Hierotek Circle", faction: "Necrons", classified: true, archetypes: ["Security","Recon"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Hunter Clade", faction: "Adeptus Mechanicus", classified: true, archetypes: ["Seek and Destroy","Recon"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Imperial Navy Breachers", faction: "Imperial Agents", classified: true, archetypes: ["Seek and Destroy","Security"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Inquisitorial Agents", faction: "Imperial Agents", classified: true, archetypes: ["Seek and Destroy","Security","Recon","Infiltration"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Kasrkin", faction: "Astra Militarum", classified: true, archetypes: ["Seek and Destroy","Security"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Kommandos", faction: "Orks", classified: true, archetypes: ["Seek and Destroy","Infiltration"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Legionaries", faction: "Chaos Space Marines", classified: true, archetypes: ["Seek and Destroy","Security"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Mandrakes", faction: "Drukhari", classified: true, archetypes: ["Recon","Infiltration"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Murderwing", faction: "Chaos", classified: true, archetypes: ["Seek and Destroy","Recon"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Nemesis Claw", faction: "Chaos Space Marines", classified: true, archetypes: ["Seek and Destroy","Infiltration"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Novitiates", faction: "Adepta Sororitas", classified: true, archetypes: ["Security","Recon"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Pathfinders", faction: "T'au Empire", classified: true, archetypes: ["Infiltration","Recon"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Phobos Strike Team", faction: "Adeptus Astartes", classified: true, archetypes: ["Infiltration","Recon"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Plague Marines", faction: "Death Guard", classified: true, archetypes: ["Seek and Destroy","Security"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Ratlings", faction: "Astra Militarum", classified: true, archetypes: ["Security","Infiltration"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Raveners", faction: "Tyranids", classified: true, archetypes: ["Seek and Destroy","Infiltration"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Sanctifiers", faction: "Adepta Sororitas", classified: true, archetypes: ["Seek and Destroy","Security"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Scout Squad", faction: "Adeptus Astartes", classified: true, archetypes: ["Infiltration","Recon"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Spectre Squad", faction: "T'au Empire", classified: true, archetypes: ["Infiltration","Recon"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Strike Force Variel", faction: "Adeptus Astartes", classified: true, archetypes: ["Seek and Destroy","Infiltration"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Tempestus Aquilon", faction: "Astra Militarum", classified: true, archetypes: ["Seek and Destroy","Recon"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Vespid Stingwings", faction: "T'au Empire", classified: true, archetypes: ["Seek and Destroy","Recon"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Void-Dancer Troupe", faction: "Aeldari", classified: true, archetypes: ["Infiltration","Recon"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Warp Coven", faction: "Thousand Sons", classified: true, archetypes: ["Security","Recon"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Wolf Scouts", faction: "Adeptus Astartes", classified: true, archetypes: ["Seek and Destroy","Recon"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Wrecka Krew", faction: "Orks", classified: true, archetypes: ["Seek and Destroy","Security"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "Wyrmblade", faction: "Genestealer Cults", classified: true, archetypes: ["Seek and Destroy","Infiltration"], notes: "Tac Op archetypes updated from player-verified faction reference." },
    { name: "XV26 Stealth Battlesuits", faction: "T'au Empire", classified: true, archetypes: ["Infiltration","Recon"], notes: "Tac Op archetypes updated from player-verified faction reference." }
  ],
  tacOps: [
    { name: "Flank", archetype: "Recon", maxVp: 6, prompt: "Track flank control from TP2 onward. April/January updates clarify flank contesting and TP4 scoring." },
    { name: "Retrieval", archetype: "Recon", maxVp: 6, prompt: "Track Retrieve actions and carried retrieval markers. January update restricts first-turn and engagement use." },
    { name: "Scout Enemy Movement", archetype: "Recon", maxVp: 6, prompt: "Track monitored enemy operatives from TP2 onward." },
    { name: "Envoy", archetype: "Security", maxVp: 6, prompt: "Choose a different Envoy each eligible turning point; track territory and wound condition." },
    { name: "Plant Banner", archetype: "Security", maxVp: 6, prompt: "Track banner placement, whether it remains in enemy territory, and contesting." },
    { name: "Martyrs", archetype: "Security", maxVp: 6, prompt: "Track first incapacitation on objectives; April commentary confirms unusual incapacitation sources." },
    { name: "Rout", archetype: "Seek and Destroy", maxVp: 6, prompt: "Track qualifying incapacitations near the opponent's drop zone." },
    { name: "Sweep and Clear", archetype: "Seek and Destroy", maxVp: 6, prompt: "Track cleared objective markers and Swept tokens. April update changes VP wording." },
    { name: "Dominate", archetype: "Seek and Destroy", maxVp: 6, prompt: "Track Dominate tokens on qualifying incapacitations. April update changes token gain for 12+ wound operatives." },
    { name: "Track Enemy", archetype: "Infiltration", maxVp: 6, prompt: "Track concealed friendly operatives near enemies who cannot target them." },
    { name: "Plant Devices", archetype: "Infiltration", maxVp: 6, prompt: "Track device tokens planted on objectives and enemy contesting." },
    { name: "Steal Intelligence", archetype: "Infiltration", maxVp: 6, prompt: "Track Intelligence markers dropped by incapacitated enemy operatives and carried by your operatives." }
  ],
  critOps: [
    { name: "Secure", group: "1. Secure / 2. Loot / 3. Transmission", maxVp: 8, prompt: "Core objective-control pattern. Score by turning point using the official card/app wording." },
    { name: "Loot", group: "1. Secure / 2. Loot / 3. Transmission", maxVp: 8, prompt: "Core objective interaction pattern. Score by turning point using the official card/app wording." },
    { name: "Transmission", group: "1. Secure / 2. Loot / 3. Transmission", maxVp: 8, prompt: "Core objective interaction pattern. Score by turning point using the official card/app wording." },
    { name: "Orb", group: "4. Orb / 6. Energy Cells / 7. Download", maxVp: 8, prompt: "Track the Orb marker location and objective control from TP2 onward." },
    { name: "Stake Claim", group: "5. Stake Claim / 8. Data / 9. Reboot", maxVp: 8, prompt: "Select and resolve claimed objectives from TP2 onward. Update log changes timing wording." },
    { name: "Energy Cells", group: "4. Orb / 6. Energy Cells / 7. Download", maxVp: 8, prompt: "Track carried objective markers and control from TP2 onward. Update log changes timing wording." },
    { name: "Download", group: "4. Orb / 6. Energy Cells / 7. Download", maxVp: 8, prompt: "Track Download actions and objective control in later turning points." },
    { name: "Data", group: "5. Stake Claim / 8. Data / 9. Reboot", maxVp: 8, prompt: "Track Data objective requirements by turning point using the official card/app wording." },
    { name: "Reboot", group: "5. Stake Claim / 8. Data / 9. Reboot", maxVp: 8, prompt: "Track Reboot objective requirements by turning point using the official card/app wording." }
  ]
};

let rules = embeddedRules;
const killGradeThresholds = {
  5: [1, 2, 3, 4, 5],
  6: [1, 2, 4, 5, 6],
  7: [1, 3, 4, 6, 7],
  8: [2, 3, 5, 6, 8],
  9: [2, 4, 5, 7, 9],
  10: [2, 4, 6, 8, 10],
  11: [2, 4, 7, 9, 11],
  12: [2, 5, 7, 10, 12],
  13: [3, 5, 8, 10, 13],
  14: [3, 6, 8, 11, 14]
};

const operativeCountByTeam = {
  "Angels of Death": 6,
  "Battleclade": 11,
  "Blades of Khaine": 8,
  "Blooded": 12,
  "Brood Brothers": 13,
  "Canoptek Circle": 8,
  "Celestian Insidiants": 10,
  "Chaos Cult": 14,
  "Corsair Voidscarred": 9,
  "Death Korps": 14,
  "Deathwatch": 6,
  "Elucidian Starstriders": 10,
  "Exaction Squad": 11,
  "Farstalker Kinband": 12,
  "Fellgor Ravagers": 10,
  "Gellerpox Infected": 13,
  "Goremongers": 8,
  "Hand of the Archon": 10,
  "Hearthkyn Salvagers": 10,
  "Hernkyn Yaegirs": 10,
  "Hierotek Circle": 8,
  "Hunter Clade": 10,
  "Imperial Navy Breachers": 11,
  "Inquisitorial Agents": 12,
  "Kasrkin": 10,
  "Kommandos": 10,
  "Legionaries": 6,
  "Mandrakes": 10,
  "Murderwing": 8,
  "Nemesis Claw": 6,
  "Novitiates": 10,
  "Pathfinders": 13,
  "Phobos Strike Team": 6,
  "Plague Marines": 6,
  "Ratlings": 11,
  "Raveners": 6,
  "Sanctifiers": 11,
  "Scout Squad": 9,
  "Spectre Squad": 6,
  "Strike Force Variel": 6,
  "Tempestus Aquilon": 11,
  "Vespid Stingwings": 11,
  "Void-Dancer Troupe": 8,
  "Warp Coven": 6,
  "Wolf Scouts": 10,
  "Wrecka Krew": 8,
  "Wyrmblade": 10,
  "XV26 Stealth Battlesuits": 6
};

const state = {
  scores: {
    a: { crit: [0, 0, 0, 0], tac: [0, 0, 0, 0], kill: 0, primary: 0, other: 0 },
    b: { crit: [0, 0, 0, 0], tac: [0, 0, 0, 0], kill: 0, primary: 0, other: 0 }
  },
  primary: {
    a: { choice: "", revealed: true },
    b: { choice: "", revealed: true }
  },
  tacOps: {
    a: { revealed: true },
    b: { revealed: true }
  },
  equipment: {
    a: false,
    b: false
  },
  equipmentSetup: {
    a: false,
    b: false
  },
  deployDone: {
    a: false,
    b: false
  },
  initiative: {
    a: false,
    b: false,
    deploy: "",
    previous: ""
  },
  liveKillsByTp: {
    a: [0, 0, 0, 0],
    b: [0, 0, 0, 0]
  },
  cp: {
    a: 3,
    b: 3
  },
  clock: {
    featureHidden: true,
    enabled: true,
    active: "a",
    running: false,
    remaining: { a: 60 * 60, b: 60 * 60 },
    lastTick: null,
    timer: null
  },
  endTpChecks: {
    1: {},
    2: {},
    3: {},
    4: {}
  },
  activity: [],
  undoStack: [],
  online: {
    gameId: "",
    links: null,
    enabled: false,
    mode: "local"
  },
  gameMode: "live",
  page: "start"
};

const $ = (id) => document.getElementById(id);
const AUTOSAVE_KEY = "killTeamScoreTool.autosave.v1";
let appReady = false;
let suppressHistory = false;
let autosaveTimer = null;
let onlineSyncTimer = null;
let applyingOnlineUpdate = false;
let lastRemotePayload = null;

function runWithoutHistory(callback) {
  const previous = suppressHistory;
  suppressHistory = true;
  try {
    return callback();
  } finally {
    suppressHistory = previous;
  }
}

function displayValue(value) {
  if (value === undefined || value === null || value === "") return "Not set";
  return String(value);
}

function recordActivity(actor, action, oldValue, newValue, undo) {
  if (!appReady || suppressHistory) return;
  const item = {
    time: new Date().toLocaleTimeString(),
    actor,
    action,
    oldValue: displayValue(oldValue),
    newValue: displayValue(newValue)
  };
  state.activity.unshift(item);
  state.activity = state.activity.slice(0, 80);
  if (typeof undo === "function") {
    state.undoStack.push(undo);
    state.undoStack = state.undoStack.slice(-50);
  }
  renderActivityLog();
  scheduleAutosave();
}

function renderActivityLog() {
  const log = $("activityLog");
  if (!log) return;
  const entries = state.activity.slice(0, 12);
  if (!entries.length) {
    const empty = document.createElement("li");
    empty.className = "activity-empty";
    empty.textContent = "No actions yet.";
    log.replaceChildren(empty);
    return;
  }
  log.replaceChildren(...entries.map((entry) => {
    const item = document.createElement("li");
    item.innerHTML = `<time>${entry.time}</time><strong>${entry.actor}</strong><span>${entry.action}: ${entry.oldValue} -> ${entry.newValue}</span>`;
    return item;
  }));
}

function undoLastAction() {
  const undo = state.undoStack.pop();
  if (!undo) {
    alert("No action to undo.");
    return;
  }
  runWithoutHistory(() => undo());
  state.activity.unshift({
    time: new Date().toLocaleTimeString(),
    actor: "System",
    action: "Undo last action",
    oldValue: "",
    newValue: "Applied"
  });
  state.activity = state.activity.slice(0, 80);
  renderActivityLog();
  refreshAfterStateChange();
  saveAutosaveNow();
}

function option(value, label) {
  const element = document.createElement("option");
  element.value = value;
  element.textContent = label;
  return element;
}

function archetypeClass(archetype) {
  return `archetype-${String(archetype || "none").toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`;
}

function selectedTeam(player) {
  return rules.killTeams.find((team) => team.name === $(`team${player.toUpperCase()}`).value);
}

function selectedTac(player) {
  return rules.tacOps.find((op) => op.name === $(`tac${player.toUpperCase()}`).value);
}

function selectedCrit() {
  return rules.critOps.find((op) => op.name === $("critOp").value);
}

function playerLabel(player) {
  return player === "a" ? "A" : "B";
}

function formatTime(seconds) {
  const safeSeconds = Math.max(0, Math.floor(seconds));
  const mins = String(Math.floor(safeSeconds / 60)).padStart(2, "0");
  const secs = String(safeSeconds % 60).padStart(2, "0");
  return `${mins}:${secs}`;
}

function sumScore(player) {
  const score = state.scores[player];
  const visiblePrimary = state.primary[player].revealed ? score.primary : 0;
  return [...score.crit, ...score.tac, score.kill, visiblePrimary, score.other].reduce((total, value) => total + Number(value || 0), 0);
}

function opSubtotal(player, source) {
  const score = state.scores[player];
  if (source === "crit") return score.crit.reduce((total, value) => total + Number(value || 0), 0);
  if (source === "tac") return score.tac.reduce((total, value) => total + Number(value || 0), 0);
  if (source === "kill") return Number(score.kill || 0);
  return 0;
}

function primaryLabel(source) {
  if (source === "crit") return "Crit Op";
  if (source === "tac") return "Tac Op";
  if (source === "kill") return "Kill Op";
  return "Not selected";
}

function exportedPrimaryLabel(player) {
  return state.primary[player].revealed ? primaryLabel(state.primary[player].choice) : "Hidden until Endgame";
}

function exportedPrimaryScore(player) {
  return state.primary[player].revealed ? state.scores[player].primary : "";
}

function exportedTacLabel(player) {
  const tac = selectedTac(player);
  if (!state.tacOps[player].revealed) return "Hidden until TP2";
  return tac?.name || "";
}

function clampNumber(value, min, max) {
  return Math.min(max, Math.max(min, Number(value || 0)));
}

function playerName(player) {
  const label = playerLabel(player);
  return $(`player${label}Name`)?.value.trim() || `Player ${label}`;
}

function syncKillInputMax(input) {
  if (!input) return;
  if (input.id === "killsA" && $("startEnemiesA")) {
    input.max = $("startEnemiesA").value;
  }
  if (input.id === "killsB" && $("startEnemiesB")) {
    input.max = $("startEnemiesB").value;
  }
}

function setInputValue(input, value) {
  syncKillInputMax(input);
  const min = input.hasAttribute("min") ? Number(input.min) : 0;
  const max = input.hasAttribute("max") ? Number(input.max) : 99;
  input.value = clampNumber(value, min, max);
  if (input.dataset.score) {
    updateScoreFromInput(input);
  } else {
    input.dispatchEvent(new Event("input", { bubbles: true }));
  }
  syncStepperDisplays();
}

function adjustInputValue(input, delta) {
  setInputValue(input, Number(input.value || 0) + delta);
}

function killInputForPlayer(player) {
  return $(`kills${playerLabel(player)}`);
}

function maxKillsForPlayer(player) {
  return Number($(`startEnemies${playerLabel(player)}`)?.value || 0);
}

function liveKillTotal(player) {
  return state.liveKillsByTp[player].reduce((total, value) => total + Number(value || 0), 0);
}

function resetLiveKills() {
  state.liveKillsByTp.a = [0, 0, 0, 0];
  state.liveKillsByTp.b = [0, 0, 0, 0];
}

function syncLiveKillsToInputs() {
  ["a", "b"].forEach((player) => {
    let remaining = maxKillsForPlayer(player);
    state.liveKillsByTp[player] = state.liveKillsByTp[player].map((value) => {
      const clamped = clampNumber(value, 0, remaining);
      remaining -= clamped;
      return clamped;
    });
    const input = killInputForPlayer(player);
    if (input) input.value = liveKillTotal(player);
  });
}

function adjustLiveKills(player, tpIndex, delta) {
  const otherKills = state.liveKillsByTp[player].reduce((total, value, index) => (
    index === tpIndex ? total : total + Number(value || 0)
  ), 0);
  const maxForThisTp = Math.max(0, maxKillsForPlayer(player) - otherKills);
  const oldValue = Number(state.liveKillsByTp[player][tpIndex] || 0);
  const nextValue = clampNumber(
    Number(state.liveKillsByTp[player][tpIndex] || 0) + delta,
    0,
    maxForThisTp
  );
  state.liveKillsByTp[player][tpIndex] = nextValue;
  if (oldValue !== nextValue) {
    recordActivity(playerName(player), `TP${tpIndex + 1} enemy incapacitations`, oldValue, nextValue, () => {
      state.liveKillsByTp[player][tpIndex] = oldValue;
      syncLiveKillsToInputs();
      updateKillOpScores();
    });
  }
  syncLiveKillsToInputs();
  updateKillOpScores();
  renderLiveQuickControls();
}

function makeLiveKillStepper(player, tpIndex) {
  const wrapper = document.createElement("div");
  wrapper.className = "stepper-row compact-stepper live-kill-stepper";
  wrapper.dataset.rolePlayer = player;
  const title = document.createElement("span");
  title.className = "stepper-label";
  title.textContent = `TP${tpIndex + 1} enemy operatives incapacitated`;
  const minus = document.createElement("button");
  minus.type = "button";
  minus.className = "step-button";
  minus.textContent = "-";
  const value = document.createElement("output");
  value.className = "step-value";
  value.textContent = state.liveKillsByTp[player][tpIndex] || "0";
  const plus = document.createElement("button");
  plus.type = "button";
  plus.className = "step-button";
  plus.textContent = "+";
  minus.addEventListener("click", () => adjustLiveKills(player, tpIndex, -1));
  plus.addEventListener("click", () => adjustLiveKills(player, tpIndex, 1));
  wrapper.append(title, minus, value, plus);
  return wrapper;
}

function killGradeFor(startingEnemies, kills) {
  const row = killGradeThresholds[clampNumber(Math.round(startingEnemies), 5, 14)] || killGradeThresholds[6];
  const killCount = clampNumber(Math.floor(kills), 0, 99);
  return row.reduce((grade, threshold, index) => (killCount >= threshold ? index + 1 : grade), 0);
}

function killOpDetails(player) {
  const label = player.toUpperCase();
  const startingEnemies = clampNumber($(`startEnemies${label}`)?.value, 1, 30);
  const kills = clampNumber($(`kills${label}`)?.value, 0, startingEnemies);
  if ($(`kills${label}`)) $(`kills${label}`).value = kills;
  const grade = killGradeFor(startingEnemies, kills);
  return { startingEnemies, kills, grade };
}

function updateKillOpScores() {
  ["A", "B"].forEach((label) => {
    if ($(`kills${label}`) && $(`startEnemies${label}`)) {
      $(`kills${label}`).max = $(`startEnemies${label}`).value;
    }
  });
  const a = killOpDetails("a");
  const b = killOpDetails("b");
  const endgameBonusA = Number($("turningPoint")?.value || 1) >= 4 && a.grade > b.grade ? 1 : 0;
  const endgameBonusB = Number($("turningPoint")?.value || 1) >= 4 && b.grade > a.grade ? 1 : 0;
  const totalA = a.grade + endgameBonusA;
  const totalB = b.grade + endgameBonusB;

  state.scores.a.kill = totalA;
  state.scores.b.kill = totalB;
  $("killVpA").value = totalA;
  $("killVpB").value = totalB;
  $("killGradeA").textContent = `KG ${a.grade}${endgameBonusA ? "+1" : ""} - ${totalA}VP`;
  $("killGradeB").textContent = `KG ${b.grade}${endgameBonusB ? "+1" : ""} - ${totalB}VP`;
  recalculatePrimary("a");
  recalculatePrimary("b");
  updateTotals();
  syncStepperDisplays();
}

function recalculatePrimary(player) {
  const choice = state.primary[player].choice;
  const score = Math.ceil(opSubtotal(player, choice) * 0.5);
  state.scores[player].primary = score;
  const label = player.toUpperCase();
  $(`primaryScore${label}`).textContent = state.primary[player].revealed ? score : "";
  $(`primary${label}Value`).textContent = state.primary[player].revealed ? `Primary: ${score} VP` : "";
}

function recalculateAllPrimary() {
  recalculatePrimary("a");
  recalculatePrimary("b");
}

function updateOpSummaries() {
  ["a", "b"].forEach((player) => {
    const label = player.toUpperCase();
    const critParts = state.scores[player].crit.slice(1, 4).map((value) => Number(value || 0));
    const tacParts = state.scores[player].tac.slice(1, 4).map((value) => Number(value || 0));
    const critTotal = critParts.reduce((total, value) => total + value, 0);
    const tacTotal = tacParts.reduce((total, value) => total + value, 0);
    $(`critSummary${label}`).textContent = `${critTotal}VP`;
    $(`tacSummary${label}`).textContent = `${tacTotal}VP`;
  });
}

function scoreInput(player, bucket, index = "") {
  const selector = index === "" ? `[data-score="${player}.${bucket}"]` : `[data-score="${player}.${bucket}.${index}"]`;
  return document.querySelector(selector);
}

function makeStepper(label, input, className = "") {
  const wrapper = document.createElement("div");
  wrapper.className = `stepper-row ${className}`.trim();
  const scorePlayer = input.dataset.score ? input.dataset.score.split(".")[0] : "";
  if (scorePlayer) wrapper.dataset.rolePlayer = scorePlayer;
  const title = document.createElement("span");
  title.className = "stepper-label";
  title.textContent = label;
  const minus = document.createElement("button");
  minus.type = "button";
  minus.className = "step-button";
  minus.textContent = "-";
  minus.disabled = input.readOnly;
  const value = document.createElement("output");
  value.className = "step-value";
  value.dataset.forInput = input.id || input.dataset.score || "";
  value.textContent = input.value || "0";
  const plus = document.createElement("button");
  plus.type = "button";
  plus.className = "step-button";
  plus.textContent = "+";
  plus.disabled = input.readOnly;
  minus.addEventListener("click", () => adjustInputValue(input, -1));
  plus.addEventListener("click", () => adjustInputValue(input, 1));
  wrapper.append(title, minus, value, plus);
  return wrapper;
}

function makeReadOnlyCount(input, className = "") {
  const output = document.createElement("output");
  output.className = `readonly-count ${className}`.trim();
  output.dataset.forInput = input.id;
  output.textContent = input.value || "0";
  return output;
}

function syncStepperDisplays() {
  document.querySelectorAll("[data-for-input]").forEach((display) => {
    const key = display.dataset.forInput;
    const input = key.includes(".") ? document.querySelector(`[data-score="${key}"]`) : $(key);
    if (input) display.textContent = input.value || "0";
  });
  updateLiveMode();
  applyRolePermissions();
}

function collectFormValues() {
  const values = {};
  document.querySelectorAll("input, select, textarea").forEach((field) => {
    if (!field.id) return;
    values[field.id] = field.type === "checkbox" ? field.checked : field.value;
  });
  return values;
}

function applyFormValues(values = {}) {
  Object.entries(values).forEach(([id, value]) => {
    const field = $(id);
    if (!field) return;
    if (field.type === "checkbox") {
      field.checked = Boolean(value);
    } else {
      field.value = value;
    }
  });
}

function serializableState() {
  return {
    scores: state.scores,
    primary: state.primary,
    tacOps: state.tacOps,
    equipment: state.equipment,
    equipmentSetup: state.equipmentSetup,
    deployDone: state.deployDone,
    initiative: state.initiative,
    liveKillsByTp: state.liveKillsByTp,
    cp: state.cp,
    endTpChecks: state.endTpChecks,
    activity: state.activity,
    online: state.online,
    gameMode: state.gameMode,
    page: state.page,
    clock: {
      featureHidden: state.clock.featureHidden,
      enabled: state.clock.enabled,
      active: state.clock.active,
      running: false,
      remaining: state.clock.remaining,
      lastTick: null
    }
  };
}

function applySerializableState(saved = {}) {
  [
    "scores",
    "primary",
    "tacOps",
    "equipment",
    "equipmentSetup",
    "deployDone",
    "initiative",
    "liveKillsByTp",
    "cp",
    "endTpChecks",
    "activity",
    "online",
    "gameMode",
    "page"
  ].forEach((key) => {
    if (saved[key] !== undefined) state[key] = saved[key];
  });
  state.initiative = {
    a: false,
    b: false,
    deploy: "",
    previous: "",
    ...state.initiative
  };
  if (saved.clock) {
    state.clock = {
      ...state.clock,
      ...saved.clock,
      running: false,
      timer: state.clock.timer,
      lastTick: null
    };
  }
}

function saveAutosaveNow() {
  if (!appReady) return;
  try {
    localStorage.setItem(AUTOSAVE_KEY, JSON.stringify({
      savedAt: new Date().toISOString(),
      formValues: collectFormValues(),
      state: serializableState()
    }));
  } catch {
    // localStorage can be unavailable in private or locked-down browser modes.
  }
  scheduleOnlinePush();
}

function scheduleAutosave() {
  if (!appReady) return;
  clearTimeout(autosaveTimer);
  autosaveTimer = setTimeout(saveAutosaveNow, 250);
}

function currentMatchPayload() {
  return {
    savedAt: new Date().toISOString(),
    formValues: collectFormValues(),
    state: serializableState()
  };
}

function cloneMatchPayload(payload) {
  if (!payload) return null;
  return JSON.parse(JSON.stringify(payload));
}

function onlineRole() {
  return state.online?.role || "host";
}

function onlineRolePlayer() {
  if (onlineRole() === "player-a") return "a";
  if (onlineRole() === "player-b") return "b";
  return "";
}

function isOnlineRestrictedRole() {
  return Boolean(state.online?.gameId) && onlineRole() !== "host";
}

function canEditPlayer(player) {
  if (!isOnlineRestrictedRole()) return true;
  if (onlineRole() === "player-a") return player === "a";
  if (onlineRole() === "player-b") return player === "b";
  return false;
}

function canEditSharedOnlineFields() {
  return !isOnlineRestrictedRole();
}

function mergePlayerScopedPayload(basePayload, localPayload, player) {
  if (!basePayload || !localPayload || !player) return localPayload;
  const label = playerLabel(player);
  const formIds = [
    `player${label}Name`,
    `communityTeam${label}`,
    `team${label}`,
    `tac${label}`,
    `primary${label}`,
    `deployOps${label}`,
    `cp${label}`,
    `killVp${label}`,
    `startEnemies${label}`,
    `kills${label}`
  ];
  if (!basePayload.formValues) basePayload.formValues = {};
  formIds.forEach((id) => {
    if (localPayload.formValues && Object.prototype.hasOwnProperty.call(localPayload.formValues, id)) {
      basePayload.formValues[id] = localPayload.formValues[id];
    }
  });

  if (!basePayload.state) basePayload.state = {};
  [
    "scores",
    "primary",
    "tacOps",
    "equipment",
    "equipmentSetup",
    "deployDone",
    "liveKillsByTp",
    "cp"
  ].forEach((key) => {
    if (!localPayload.state?.[key]) return;
    if (!basePayload.state[key]) basePayload.state[key] = {};
    basePayload.state[key][player] = cloneMatchPayload(localPayload.state[key][player]);
  });
  basePayload.savedAt = localPayload.savedAt;
  basePayload.state.activity = localPayload.state?.activity || basePayload.state.activity;
  basePayload.state.undoStack = [];
  return basePayload;
}

function playerScopedPatch(localPayload, player) {
  if (!localPayload || !player) return null;
  const patch = {
    "payload.savedAt": localPayload.savedAt
  };
  const label = playerLabel(player);
  [
    `player${label}Name`,
    `communityTeam${label}`,
    `team${label}`,
    `tac${label}`,
    `primary${label}`,
    `deployOps${label}`,
    `cp${label}`,
    `killVp${label}`,
    `startEnemies${label}`,
    `kills${label}`
  ].forEach((id) => {
    if (localPayload.formValues && Object.prototype.hasOwnProperty.call(localPayload.formValues, id)) {
      patch[`payload.formValues.${id}`] = localPayload.formValues[id];
    }
  });
  [
    "scores",
    "primary",
    "tacOps",
    "equipment",
    "equipmentSetup",
    "deployDone",
    "liveKillsByTp",
    "cp"
  ].forEach((key) => {
    if (!localPayload.state?.[key]) return;
    patch[`payload.state.${key}.${player}`] = cloneMatchPayload(localPayload.state[key][player]);
  });
  return patch;
}

function scopedOnlinePayload() {
  const localPayload = currentMatchPayload();
  const player = onlineRolePlayer();
  if (!isOnlineRestrictedRole()) return localPayload;
  if (!player) return null;
  const basePayload = cloneMatchPayload(lastRemotePayload) || cloneMatchPayload(localPayload);
  return mergePlayerScopedPayload(basePayload, localPayload, player);
}

function applyRemoteMatchPayload(payload = {}) {
  if (!payload.formValues && !payload.state) return;
  lastRemotePayload = cloneMatchPayload(payload);
  const previousOnline = { ...state.online };
  applyingOnlineUpdate = true;
  runWithoutHistory(() => {
    applyFormValues(payload.formValues || {});
    applySerializableState(payload.state || {});
    state.online = {
      ...state.online,
      ...previousOnline,
      enabled: previousOnline.enabled,
      gameId: previousOnline.gameId,
      links: previousOnline.links,
      role: previousOnline.role,
      status: previousOnline.status
    };
    refreshAfterStateChange();
  });
  saveAutosaveNow();
  applyingOnlineUpdate = false;
}

function scheduleOnlinePush() {
  if (!appReady || applyingOnlineUpdate) return;
  if (!state.online.enabled || !state.online.gameId || !window.KTFirebaseSync) return;
  clearTimeout(onlineSyncTimer);
  onlineSyncTimer = setTimeout(async () => {
    const player = onlineRolePlayer();
    const localPayload = currentMatchPayload();
    const patch = isOnlineRestrictedRole() && player ? playerScopedPatch(localPayload, player) : null;
    const payload = patch ? null : scopedOnlinePayload();
    if (!patch && !payload) return;
    const result = patch && typeof window.KTFirebaseSync.pushPatch === "function"
      ? await window.KTFirebaseSync.pushPatch(state.online.gameId, patch)
      : await window.KTFirebaseSync.push(state.online.gameId, payload || localPayload);
    if (!result.ok) {
      state.online.enabled = false;
      state.online.status = result.reason || "Firebase sync stopped; offline mode active";
    } else {
      state.online.lastSyncAt = new Date().toISOString();
      state.online.status = "Live sync active";
      lastRemotePayload = patch
        ? mergePlayerScopedPayload(cloneMatchPayload(lastRemotePayload) || cloneMatchPayload(localPayload), localPayload, player)
        : cloneMatchPayload(payload);
    }
    renderOnlineRoom();
  }, 800);
}

function roleStatusText() {
  if (!state.online?.gameId) return "";
  if (onlineRole() === "host") return "Host controls shared match fields.";
  if (onlineRole() === "player-a") return "Player A link: only Player A fields can be edited.";
  if (onlineRole() === "player-b") return "Player B link: only Player B fields can be edited.";
  return "Spectator link: view only.";
}

function syncOnlineModeText() {
  const title = $("onlineRoleTitle");
  const description = $("onlineRoleDescription");
  if (!title || !description) return;
  if (!state.online?.gameId) {
    title.textContent = "Host setup";
    description.textContent = "Create a room, copy the links, then continue to Setup as host.";
    return;
  }
  if (onlineRole() === "player-a") {
    title.textContent = "Player A link";
    description.textContent = "You can edit Player A information only. Player B is view only.";
    return;
  }
  if (onlineRole() === "player-b") {
    title.textContent = "Player B link";
    description.textContent = "You can edit Player B information only. Player A is view only.";
    return;
  }
  if (onlineRole() === "spectator") {
    title.textContent = "Spectator link";
    description.textContent = "This room is view only.";
    return;
  }
  title.textContent = "Host controls";
  description.textContent = "Host can edit shared match fields and create player links.";
}

function controlledPlayerFromElement(element) {
  if (!element) return "";
  if (element.dataset?.rolePlayer) return element.dataset.rolePlayer;
  if (element.dataset?.score) return element.dataset.score.split(".")[0];
  const id = element.id || "";
  const playerAIds = new Set([
    "playerAName",
    "communityTeamA",
    "teamA",
    "tacA",
    "primaryA",
    "deployOpsA",
    "equipmentReadyA",
    "equipmentSetupA",
    "deployDoneA",
    "confirmTacA",
    "unlockTacA",
    "unlockPrimaryA",
    "cpA",
    "killsA",
    "startEnemiesA",
    "killVpA"
  ]);
  const playerBIds = new Set([
    "playerBName",
    "communityTeamB",
    "teamB",
    "tacB",
    "primaryB",
    "deployOpsB",
    "equipmentReadyB",
    "equipmentSetupB",
    "deployDoneB",
    "confirmTacB",
    "unlockTacB",
    "unlockPrimaryB",
    "cpB",
    "killsB",
    "startEnemiesB",
    "killVpB"
  ]);
  if (playerAIds.has(id)) return "a";
  if (playerBIds.has(id)) return "b";
  const roleNode = element.closest("[data-role-player]");
  if (roleNode) return roleNode.dataset.rolePlayer;
  const scoreNode = element.closest("[data-score]");
  if (scoreNode) return scoreNode.dataset.score.split(".")[0];
  return "";
}

function isSharedOnlineControl(element) {
  const id = element?.id || "";
  return new Set([
    "critOp",
    "killzone",
    "mapNumber",
    "turningPoint",
    "tpMinus",
    "tpPlus",
    "gameEndButton",
    "clearScores",
    "resetMatchButton",
    "matchNotes",
    "clockToggle",
    "clockMinutes",
    "startPause",
    "resetClock",
    "passTurnA",
    "passTurnB",
    "livePassTurn",
    "endgamePrimary",
    "liveEndgamePrimary",
    "endgamePrimaryReveal",
    "initiativeA",
    "initiativeB",
    "gameInitiativeA",
    "gameInitiativeB",
    "chooseLocalMode",
    "chooseOnlineMode",
    "createOnlineGame",
    "testFirebaseSync"
  ]).has(id);
}

function canUseControl(element) {
  const spectatorAllowedIds = new Set([
    "battleReportButton",
    "copyBattleReportButton",
    "copyMarkdownReport",
    "copyDiscordReport",
    "exportReportImage",
    "reportExportCsv",
    "stickyCopyBattleReport",
    "stickyExportCsv",
    "onlineProceedSetup"
  ]);
  const player = controlledPlayerFromElement(element);
  if (player) return canEditPlayer(player);
  if (isSharedOnlineControl(element)) return canEditSharedOnlineFields();
  if (onlineRole() === "spectator" && element?.matches?.("input, select, textarea, button")) {
    return Boolean(element.closest(".page-nav") || element.closest(".online-link-row") || spectatorAllowedIds.has(element.id));
  }
  return true;
}

function setControlRoleState(element, canUse) {
  if (!element) return;
  const shouldDisable = !canUse;
  const wasRoleDisabled = element.dataset.roleDisabled === "true";
  if (!wasRoleDisabled) {
    element.dataset.nonRoleDisabled = element.disabled ? "true" : "false";
  }
  element.disabled = shouldDisable;
  element.classList.toggle("role-locked-control", shouldDisable);
  if (shouldDisable) {
    element.dataset.roleDisabled = "true";
    element.title = roleStatusText() || "Locked for this online role.";
  } else {
    element.disabled = element.dataset.nonRoleDisabled === "true";
    delete element.dataset.roleDisabled;
    element.removeAttribute("title");
  }
}

function applyRolePermissions() {
  const restricted = isOnlineRestrictedRole();
  document.body.classList.toggle("online-role-restricted", restricted);
  document.body.dataset.onlineRole = state.online?.gameId ? onlineRole() : "offline";
  [
    ["battlePlayerA", "a"],
    ["battlePlayerB", "b"],
    ["liveCardA", "a"],
    ["liveCardB", "b"],
    ["hudPlayerA", "a"],
    ["hudPlayerB", "b"],
    ["detailCpA", "a"],
    ["detailCpB", "b"],
    ["liveCpA", "a"],
    ["liveCpB", "b"],
    ["deployPlanA", "a"],
    ["deployPlanB", "b"],
    ["primaryBoxA", "a"],
    ["primaryBoxB", "b"],
    ["primarySealedA", "a"],
    ["primarySealedB", "b"],
    ["tacSealedA", "a"],
    ["tacSealedB", "b"]
  ].forEach(([id, player]) => {
    const node = $(id);
    if (node) node.dataset.rolePlayer = player;
  });

  document.querySelectorAll("input, select, textarea, button").forEach((element) => {
    if (element.closest(".page-nav")) return;
    if (element.closest(".online-link-row")) return;
    setControlRoleState(element, canUseControl(element));
  });

  document.querySelectorAll("[data-role-player]").forEach((node) => {
    const player = node.dataset.rolePlayer;
    node.classList.toggle("role-locked-section", restricted && !canEditPlayer(player));
  });

  document.querySelectorAll(".stepper-row").forEach((row) => {
    const display = row.querySelector("[data-for-input]");
    if (!display) return;
    const key = display.dataset.forInput;
    const input = key.includes(".") ? document.querySelector(`[data-score="${key}"]`) : $(key);
    row.querySelectorAll("button").forEach((button) => {
      button.disabled = Boolean(input?.disabled || input?.readOnly);
      button.classList.toggle("role-locked-control", Boolean(input?.disabled));
    });
  });
}

function refreshAfterStateChange() {
  renderTeamMeta("a");
  renderTeamMeta("b");
  renderTacSelect("A");
  renderTacSelect("B");
  updateTacHelp("a");
  updateTacHelp("b");
  renderAllDeployPlans();
  syncEquipmentButtons("a");
  syncEquipmentButtons("b");
  syncInitiativeButton("a");
  syncInitiativeButton("b");
  syncLiveKillsToInputs();
  updateOpSummaries();
  recalculateAllPrimary();
  updateKillOpScores();
  syncTurningPointDisplay();
  renderCpControls();
  renderLiveQuickControls();
  renderTpAccordion();
  renderEndTpChecklist();
  renderActivityLog();
  renderOnlineRoom();
  syncNames();
  updateBattleLog();
  updateResult();
  paintClock();
  setGameMode(state.gameMode || "live");
  applyRolePermissions();
}

function enhanceScoreTableInputs() {
  document.querySelectorAll(".score-table [data-score]").forEach((input) => {
    if (input.closest(".score-stepper-cell")) return;
    const cell = input.closest("td");
    const label = input.dataset.score.split(".").slice(1).join(" ").toUpperCase();
    const stepper = makeStepper(label, input, "table-stepper");
    const holder = document.createElement("div");
    holder.className = "score-stepper-cell";
    input.classList.add("native-score-input");
    holder.append(input, stepper);
    cell.replaceChildren(holder);
  });
}

function enhanceKillHelperInputs() {
  ["startEnemiesA", "startEnemiesB"].forEach((id) => {
    const input = $(id);
    const field = input?.closest(".kill-helper-field");
    if (!input || !field || field.querySelector(".readonly-count")) return;
    input.classList.add("native-count-input");
    field.append(makeReadOnlyCount(input, "operative-readout"));
  });

  ["killsA", "killsB"].forEach((id) => {
    const input = $(id);
    const field = input?.closest(".kill-helper-field");
    if (!input || !field || field.querySelector(".operative-stepper")) return;
    syncKillInputMax(input);
    input.classList.add("native-count-input");
    field.append(makeStepper("Count", input, "operative-stepper"));
  });
}

function enhanceDeployOperativeInputs() {
  ["deployOpsA", "deployOpsB"].forEach((id) => {
    const input = $(id);
    const field = input?.closest(".deploy-operative-row");
    if (!input || !field || field.querySelector(".deploy-operative-stepper")) return;
    input.classList.add("native-count-input");
    field.append(makeStepper("Starting Operatives", input, "operative-stepper deploy-operative-stepper"));
  });
}

function renderTpAccordion() {
  const accordion = $("tpAccordion");
  if (!accordion) return;
  accordion.replaceChildren();
  [1, 2, 3].forEach((index) => {
    const tp = index + 1;
    const details = document.createElement("details");
    details.className = "tp-card";
    details.open = Number($("turningPoint")?.value || 1) === tp;
    const summary = document.createElement("summary");
    summary.textContent = `TP${tp}`;
    const body = document.createElement("div");
    body.className = "tp-card-body";
    ["a", "b"].forEach((player) => {
      const block = document.createElement("div");
      block.className = `tp-player-block player-tone-${player}`;
      const heading = document.createElement("h3");
      heading.textContent = playerName(player);
      block.append(
        heading,
        makeStepper("Crit", scoreInput(player, "crit", index), "compact-stepper"),
        makeStepper("Tac", scoreInput(player, "tac", index), "compact-stepper"),
        makeLiveKillStepper(player, index)
      );
      body.append(block);
    });
    details.append(summary, body);
    accordion.append(details);
  });
}

function renderLiveQuickControls() {
  syncLiveKillsToInputs();
  ["a", "b"].forEach((player) => {
    const panel = $(`liveQuick${playerLabel(player)}`);
    if (!panel) return;
    const tp = clampNumber(Number($("turningPoint")?.value || 1), 1, 4);
    const scoringIndex = Math.max(1, tp - 1);
    const tpIndex = tp - 1;
    panel.replaceChildren();
    if (tp === 1) {
      const note = document.createElement("p");
      note.className = "hint";
      note.textContent = "TP1: use setup. Crit/Tac scoring starts from TP2.";
      panel.append(note, makeLiveKillStepper(player, tpIndex));
      return;
    }
    panel.append(
      makeStepper(`TP${tp} Crit`, scoreInput(player, "crit", scoringIndex), "compact-stepper"),
      makeStepper(`TP${tp} Tac`, scoreInput(player, "tac", scoringIndex), "compact-stepper"),
      makeLiveKillStepper(player, tpIndex)
    );
  });
}

function renderCpControls() {
  [
    ["liveCpA", "a"],
    ["liveCpB", "b"],
    ["detailCpA", "a"],
    ["detailCpB", "b"]
  ].forEach(([containerId, player]) => {
    const container = $(containerId);
    if (!container) return;
    const label = playerLabel(player);
    container.replaceChildren(makeStepper("CP", $(`cp${label}`), "cp-stepper"));
  });
  syncStepperDisplays();
}

function syncNames() {
  const nameA = playerName("a");
  const nameB = playerName("b");
  updateSetupPlayerHeading("a");
  updateSetupPlayerHeading("b");
  $("scoreNameA").textContent = nameA;
  $("scoreNameB").textContent = nameB;
  $("clockAName").textContent = nameA;
  $("clockBName").textContent = nameB;
  if ($("liveNameA")) $("liveNameA").textContent = nameA;
  if ($("liveNameB")) $("liveNameB").textContent = nameB;
  updateOpSummaries();
  updateResult();
  renderCpControls();
  syncInitiativeButton("a");
  syncInitiativeButton("b");
  updateDeployReadinessSummary();
  paintClock();
}

function updateSetupPlayerHeading(player) {
  const label = playerLabel(player);
  const team = selectedTeam(player);
  const nameTarget = $(`name${label}Label`);
  const teamTarget = $(`setupTeam${label}Label`);
  if (nameTarget) nameTarget.textContent = `Player ${label} - ${playerName(player)}`;
  if (teamTarget) teamTarget.textContent = team?.name || "No Kill Team";
  updateSetupPreview();
}

function updateSetupPreview() {
  const nameA = playerName("a");
  const nameB = playerName("b");
  const teamA = selectedTeam("a")?.name || "No Kill Team";
  const teamB = selectedTeam("b")?.name || "No Kill Team";
  const crit = selectedCrit()?.name || "No Crit Op";
  const killzone = $("killzone")?.value || "Volkus";
  const map = $("mapNumber")?.value || "Map 1";
  if ($("setupPreviewPlayers")) {
    const playerA = document.createElement("span");
    playerA.className = "preview-player-a";
    playerA.textContent = `${nameA} - ${teamA}`;
    const playerB = document.createElement("span");
    playerB.className = "preview-player-b";
    playerB.textContent = `${nameB} - ${teamB}`;
    $("setupPreviewPlayers").replaceChildren(playerA, document.createTextNode(" vs "), playerB);
  }
  if ($("setupPreviewMission")) $("setupPreviewMission").textContent = `Mission: ${crit} / ${killzone} / ${map}`;
}

function renderSources() {
  $("sourceCard").innerHTML = `<span class="status-dot"></span><span>${rules.rulesVersion.name}<br>Checked ${rules.rulesVersion.checkedDate}</span>`;
  $("sourceLinks")?.remove();
}

function renderSetupDate() {
  if (!$("setupDate")) return;
  const now = new Date();
  $("setupDate").textContent = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`;
}

function renderTeamSelects() {
  const teams = [...rules.killTeams].sort((a, b) => a.name.localeCompare(b.name));
  ["A", "B"].forEach((player) => {
    const select = $(`team${player}`);
    select.replaceChildren(...teams.map((team) => option(team.name, `${team.name} - ${team.faction}`)));
  });
  $("teamA").value = "Angels of Death";
  $("teamB").value = "Plague Marines";
  setDeployOperativeDefault("a");
  setDeployOperativeDefault("b");
}

function renderCritSelect() {
  $("critOp").replaceChildren(...rules.critOps.map((op) => option(op.name, op.name)));
  $("critOp").value = "Secure";
  updateCritHelp();
}

function renderTeamMeta(player) {
  const team = selectedTeam(player);
  const meta = $(`team${player.toUpperCase()}Meta`);
  if (!team) {
    meta.replaceChildren();
    return;
  }

  const nodes = [
    ...team.archetypes.map((archetype) => tag(archetype))
  ];
  meta.replaceChildren(...nodes);
}

function tag(text, className = "") {
  const node = document.createElement("span");
  node.className = `tag ${className}`.trim();
  node.textContent = text;
  return node;
}

function renderTacSelect(player) {
  const playerKey = player.toLowerCase();
  const team = selectedTeam(playerKey);
  const select = $(`tac${player}`);
  const previousValue = select.value;
  const allowed = allowedTacOps(playerKey);
  const empty = option("", "Not selected");
  empty.className = "archetype-none";
  select.replaceChildren(
    empty,
    ...allowed.map((op) => {
      const node = option(op.name, `${op.archetype} - ${op.name}`);
      node.className = archetypeClass(op.archetype);
      node.dataset.archetype = op.archetype;
      return node;
    })
  );
  select.value = allowed.some((op) => op.name === previousValue) ? previousValue : "";
  updateTacSelectTone(playerKey);
  updateTacHelp(playerKey);
}

function allowedTacOps(player) {
  const team = selectedTeam(player);
  return team ? rules.tacOps.filter((op) => team.archetypes.includes(op.archetype)) : rules.tacOps;
}

function updateTacHelp(player) {
  const tac = selectedTac(player);
  const target = $(`tac${player.toUpperCase()}Help`);
  target.textContent = tac && state.tacOps[player].revealed ? `${tac.archetype}: ${tac.prompt}` : "";
  updateTacSelectTone(player);
  syncTacConfirmButton(player);
  updateDeployReadinessSummary();
  updateBattleLog();
}

function syncTacConfirmButton(player) {
  const label = player.toUpperCase();
  const button = $(`confirmTac${label}`);
  if (!button) return;
  button.hidden = !(selectedTac(player) && state.tacOps[player].revealed);
  button.textContent = "Confirm Seal Up";
}

function updateTacSelectTone(player) {
  const label = player.toUpperCase();
  const select = $(`tac${label}`);
  const tac = selectedTac(player);
  select.classList.remove("archetype-security", "archetype-seek-and-destroy", "archetype-infiltration", "archetype-recon", "archetype-none");
  select.classList.add(tac ? archetypeClass(tac.archetype) : "archetype-none");
}

function updatePrimarySelectTone(player) {
  const label = player.toUpperCase();
  const select = $(`primary${label}`);
  if (!select) return;
  select.classList.toggle("primary-unselected", !state.primary[player].choice);
}

function updateCritHelp() {
  const target = $("critHelp");
  if (target) target.textContent = "";
}

function updateScoreFromInput(input) {
  const [player, bucket, index] = input.dataset.score.split(".");
  const oldValue = bucket === "crit" || bucket === "tac"
    ? Number(state.scores[player][bucket][Number(index)] || 0)
    : Number(state.scores[player][bucket] || 0);
  let value = Number(input.value || 0);
  if (bucket === "crit") {
    const scoreIndex = Number(index);
    const otherCritTotal = state.scores[player].crit.reduce((total, score, currentIndex) => (
      currentIndex === scoreIndex ? total : total + Number(score || 0)
    ), 0);
    value = clampNumber(value, 0, Math.min(3, Math.max(0, 6 - otherCritTotal)));
    input.value = value;
  }
  if (bucket === "tac") {
    const scoreIndex = Number(index);
    const otherTacTotal = state.scores[player].tac.reduce((total, score, currentIndex) => (
      currentIndex === scoreIndex ? total : total + Number(score || 0)
    ), 0);
    value = clampNumber(value, 0, Math.min(6, Math.max(0, 6 - otherTacTotal)));
    input.value = value;
  }
  if (bucket === "crit" || bucket === "tac") {
    state.scores[player][bucket][Number(index)] = value;
  } else {
    state.scores[player][bucket] = value;
  }
  if (oldValue !== value) {
    const label = bucket === "crit" || bucket === "tac" ? `TP${Number(index) + 1} ${bucket.toUpperCase()} VP` : `${bucket.toUpperCase()} VP`;
    recordActivity(playerName(player), label, oldValue, value, () => setInputValue(input, oldValue));
  }
  recalculatePrimary(player);
  updateOpSummaries();
  updateTotals();
  syncStepperDisplays();
}

function updateTotals() {
  const totalA = sumScore("a");
  const totalB = sumScore("b");
  $("totalA").textContent = `${totalA} VP`;
  $("totalB").textContent = `${totalB} VP`;
  if ($("totalCompareA")) $("totalCompareA").textContent = `${totalA}VP`;
  if ($("totalCompareB")) $("totalCompareB").textContent = `${totalB}VP`;
  if ($("liveTotalA")) $("liveTotalA").textContent = `${totalA} VP`;
  if ($("liveTotalB")) $("liveTotalB").textContent = `${totalB} VP`;
  updateResult();
  scheduleAutosave();
}

function updateResult() {
  const nameA = playerName("a");
  const nameB = playerName("b");
  const totalA = sumScore("a");
  const totalB = sumScore("b");
  const teamA = $("teamA").value || "No team";
  const teamB = $("teamB").value || "No team";

  if (totalA === totalB) {
    renderResultTitle(nameA, nameB);
    renderResultScore(totalA, totalB);
    updateBattleLog();
    updateEndgameResult();
    return;
  }

  renderResultTitle(nameA, nameB);
  renderResultScore(totalA, totalB);
  updateBattleLog();
  updateEndgameResult();
}

function renderResultTitle(nameA, nameB) {
  const title = $("resultText");
  const left = document.createElement("span");
  left.className = "result-player-a";
  left.textContent = nameA;
  const versus = document.createElement("span");
  versus.className = "result-versus";
  versus.textContent = " vs ";
  const right = document.createElement("span");
  right.className = "result-player-b";
  right.textContent = nameB;
  title.replaceChildren(left, versus, right);
}

function renderResultScore(totalA, totalB) {
  const detail = $("resultDetail");
  const left = document.createElement("span");
  left.className = "result-score-a";
  left.textContent = totalA;
  const dash = document.createElement("span");
  dash.className = "result-score-divider";
  dash.textContent = " - ";
  const right = document.createElement("span");
  right.className = "result-score-b";
  right.textContent = totalB;
  detail.replaceChildren(left, dash, right);
}

function battleLogItem(label, value, sealed = false) {
  const node = document.createElement("div");
  node.className = `battle-log-item ${sealed ? "sealed" : ""}`.trim();
  const labelNode = document.createElement("span");
  labelNode.textContent = label;
  const valueNode = document.createElement("strong");
  valueNode.textContent = value;
  node.append(labelNode, valueNode);
  return node;
}

function battleRevealItem(label, value, player, revealType, sealed = false) {
  const node = battleLogItem(label, value, sealed);
  if (sealed) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "inline-reveal-button";
    button.textContent = "Reveal";
    button.addEventListener("click", () => {
      if (revealType === "tac") revealTac(player);
      if (revealType === "primary") revealPrimary(player);
    });
    node.append(button);
  }
  return node;
}

function battleTacItem(player) {
  const tac = selectedTac(player);
  if (tac) {
    return battleRevealItem("Tac Op", visibleTacLabel(player), player, "tac", !state.tacOps[player].revealed);
  }

  const label = playerLabel(player);
  const node = document.createElement("label");
  node.className = "battle-log-item battle-select-item";
  const labelNode = document.createElement("span");
  labelNode.textContent = "Tac Op";
  const select = document.createElement("select");
  select.className = "battle-inline-select archetype-none";
  select.append(option("", "Not selected"));
  allowedTacOps(player).forEach((op) => {
    const item = option(op.name, `${op.archetype} - ${op.name}`);
    item.className = archetypeClass(op.archetype);
    item.dataset.archetype = op.archetype;
    select.append(item);
  });
  select.addEventListener("change", () => {
    $(`tac${label}`).value = select.value;
    updateTacSelectTone(player);
    syncTac(player);
  });
  node.append(labelNode, select);
  return node;
}

function battlePrimaryItem(player) {
  if (state.primary[player].choice) {
    return battleRevealItem("Primary", visiblePrimaryLabel(player), player, "primary", !state.primary[player].revealed);
  }

  const label = playerLabel(player);
  const node = document.createElement("label");
  node.className = "battle-log-item battle-select-item primary-choice-item";
  const labelNode = document.createElement("span");
  labelNode.textContent = "Primary";
  const select = document.createElement("select");
  select.className = "battle-inline-select primary-unselected";
  select.append(option("", "Not selected"));
  [
    ["crit", "Crit Op"],
    ["kill", "Kill Op"],
    ["tac", "Tac Op"]
  ].forEach(([value, text]) => select.append(option(value, text)));
  select.addEventListener("change", () => {
    $(`primary${label}`).value = select.value;
    syncPrimary(player);
  });
  node.append(labelNode, select);
  return node;
}

function primaryChoiceSelect(player) {
  const label = playerLabel(player);
  const select = document.createElement("select");
  select.className = "battle-inline-select primary-unselected";
  select.dataset.rolePlayer = player;
  select.append(option("", "Not selected"));
  [
    ["crit", "Crit Op"],
    ["kill", "Kill Op"],
    ["tac", "Tac Op"]
  ].forEach(([value, text]) => select.append(option(value, text)));
  select.value = state.primary[player].choice;
  select.addEventListener("change", () => {
    $(`primary${label}`).value = select.value;
    syncPrimary(player);
    updateBattleLog();
  });
  return select;
}

function renderGameTp1Controls() {
  const panel = $("tp1GameSetupPanel");
  const tp = Number($("turningPoint")?.value || 1);
  if (panel) panel.hidden = false;
  if ($("gamePrimaryGroup")) $("gamePrimaryGroup").hidden = tp !== 1;
  const target = $("gamePrimaryControls");
  if (!target) return;
  target.replaceChildren();
  ["a", "b"].forEach((player) => {
    const card = document.createElement("div");
    card.className = `tp1-primary-card player-tone-${player}`;
    card.dataset.rolePlayer = player;
    const heading = document.createElement("span");
    heading.textContent = `${playerName(player)} Primary`;
    if (!state.primary[player].choice) {
      card.append(heading, primaryChoiceSelect(player));
    } else if (!state.primary[player].revealed) {
      const value = document.createElement("strong");
      value.textContent = "Sealed up - locked";
      const button = document.createElement("button");
      button.type = "button";
      button.className = "inline-reset-button";
      button.dataset.rolePlayer = player;
      button.textContent = "Reset";
      button.addEventListener("click", () => {
        resetPrimary(player);
        updateBattleLog();
      });
      card.append(heading, value, button);
    } else {
      const value = document.createElement("strong");
      value.textContent = primaryLabel(state.primary[player].choice);
      const button = document.createElement("button");
      button.type = "button";
      button.className = "inline-reset-button";
      button.dataset.rolePlayer = player;
      button.textContent = "Reset";
      button.addEventListener("click", () => {
        resetPrimary(player);
        updateBattleLog();
      });
      card.append(heading, value, button);
    }
    target.append(card);
  });
}

function battleTeamItem(team) {
  const node = document.createElement("p");
  node.className = "battle-team-name";
  const nameNode = document.createElement("strong");
  nameNode.textContent = team?.name || "Not selected";
  node.append(nameNode);
  return node;
}

function battleCard(title, items) {
  const card = document.createElement("div");
  card.className = "battle-card";
  const heading = document.createElement("h3");
  heading.textContent = title;
  card.append(heading, ...items);
  return card;
}

function visibleTacLabel(player) {
  const tac = selectedTac(player);
  if (!state.tacOps[player].revealed) return "Sealed up - locked";
  return tac ? `${tac.name} (${tac.archetype})` : "Not selected";
}

function visiblePrimaryLabel(player) {
  if (!state.primary[player].revealed) return "Sealed up - locked";
  return primaryLabel(state.primary[player].choice);
}

function updateTp4PrimarySummary() {
  const playerA = visiblePrimaryLabel("a");
  const playerB = visiblePrimaryLabel("b");
  const primaryRevealed = state.primary.a.revealed && state.primary.b.revealed;
  ["tp4PrimarySummary", "liveTp4PrimarySummary", "endgamePrimarySummary"].forEach((summaryId) => {
    const summary = $(summaryId);
    if (!summary) return;
    summary.replaceChildren();
    ["a", "b"].forEach((player) => {
      const row = document.createElement("div");
      row.className = `tp4-primary-choice player-tone-${player}`;
      const label = document.createElement("span");
      label.textContent = `${playerName(player)} Primary`;
      const value = document.createElement("strong");
      value.textContent = player === "a" ? playerA : playerB;
      row.append(label, value);
      summary.append(row);
    });
  });
  ["endgamePrimary", "liveEndgamePrimary", "endgamePrimaryReveal"].forEach((buttonId) => {
    const button = $(buttonId);
    if (button) button.hidden = primaryRevealed;
  });
  if ($("endgamePrimaryPanel")) $("endgamePrimaryPanel").hidden = primaryRevealed;
}

function updateBattleLog() {
  updateSetupPreview();
  const nameA = $("playerAName")?.value.trim() || "Player A";
  const nameB = $("playerBName")?.value.trim() || "Player B";
  const communityA = $("communityTeamA")?.value.trim();
  const communityB = $("communityTeamB")?.value.trim();
  const teamA = selectedTeam("a");
  const teamB = selectedTeam("b");
  const crit = selectedCrit();
  if ($("battleTpLabel")) $("battleTpLabel").textContent = `Turning Point - ${$("turningPoint")?.value || "1"}`;
  const missionNode = document.createElement("div");
  missionNode.className = "mission-source-line";
  const missionCrit = document.createElement("strong");
  missionCrit.textContent = crit?.name || "No Crit Op";
  const missionMap = document.createElement("span");
  missionMap.textContent = `${$("killzone")?.value || "Volkus"} / ${$("mapNumber")?.value || "Map 1"}`;
  missionNode.append(missionCrit, missionMap);
  const playerAItems = [
    ...(communityA ? [battleLogItem("Community Team", communityA)] : []),
    battleTeamItem(teamA),
    battleTacItem("a")
  ];
  const playerBItems = [
    ...(communityB ? [battleLogItem("Community Team", communityB)] : []),
    battleTeamItem(teamB),
    battleTacItem("b")
  ];
  if ($("battlePlayerA")) $("battlePlayerA").replaceChildren(battleCard(nameA, playerAItems));
  if ($("battleMission")) $("battleMission").replaceChildren(missionNode);
  if ($("battlePlayerB")) $("battlePlayerB").replaceChildren(battleCard(nameB, playerBItems));
  updateTp4PrimarySummary();
  renderGameTp1Controls();
  updateLiveMode();
  updateEndgameBattleReport();
}

function updateLiveMode() {
  if (!$("liveCardA")) return;
  const nameA = playerName("a");
  const nameB = playerName("b");
  const teamA = selectedTeam("a");
  const teamB = selectedTeam("b");
  $("liveNameA").textContent = nameA;
  $("liveNameB").textContent = nameB;
  $("liveTeamA").textContent = teamA ? `${teamA.name} - ${teamA.faction}` : "Not selected";
  $("liveTeamB").textContent = teamB ? `${teamB.name} - ${teamB.faction}` : "Not selected";
  if ($("liveTimeA")) $("liveTimeA").textContent = formatTime(state.clock.remaining.a);
  if ($("liveTimeB")) $("liveTimeB").textContent = formatTime(state.clock.remaining.b);
  $("liveTotalA").textContent = `${sumScore("a")} VP`;
  $("liveTotalB").textContent = `${sumScore("b")} VP`;
  $("liveScoreLine").textContent = `${nameA} vs ${nameB}`;
  $("liveScoreDetail").textContent = `${sumScore("a")} - ${sumScore("b")}`;
  ["a", "b"].forEach((player) => {
    const label = playerLabel(player);
    const active = !state.clock.featureHidden && state.clock.enabled && state.clock.active === player;
    $(`liveCard${label}`).classList.toggle("active-clock-card", active);
    if ($(`liveStatus${label}`)) $(`liveStatus${label}`).textContent = active ? "Active turn" : "Waiting";
  });
  renderLiveHud();
}

function currentInitiativePlayer() {
  if (state.initiative.a) return "a";
  if (state.initiative.b) return "b";
  return "";
}

function previousInitiativePlayer() {
  return state.initiative.previous || currentInitiativePlayer();
}

function currentTurningPoint() {
  return clampNumber(Number($("turningPoint")?.value || 1), 1, 4);
}

function setCurrentInitiative(player) {
  state.initiative.a = player === "a";
  state.initiative.b = player === "b";
}

function ensureTp1DeployInitiative() {
  const deployInitiative = state.initiative.deploy;
  if (currentTurningPoint() === 1 && deployInitiative) {
    setCurrentInitiative(deployInitiative);
  }
}

function primaryStatus(player) {
  if (!state.primary[player].choice) return "Not selected";
  if (!state.primary[player].revealed) return "Sealed";
  return `${primaryLabel(state.primary[player].choice)} (${vpLabel(state.scores[player].primary)})`;
}

function renderHudPlayer(player) {
  const card = $(`hudPlayer${playerLabel(player)}`);
  if (!card) return;
  const team = selectedTeam(player);
  const initiative = currentInitiativePlayer() === player;
  const crit = scoreTotal(player, "crit");
  const tac = scoreTotal(player, "tac");
  const kill = Number(state.scores[player].kill || 0);
  card.classList.toggle("initiative-active", initiative);
  card.replaceChildren();
  const head = document.createElement("div");
  head.className = "hud-player-head";
  const title = document.createElement("div");
  const name = document.createElement("h3");
  name.textContent = playerName(player);
  const teamNode = document.createElement("p");
  teamNode.textContent = team?.name || "No Kill Team";
  title.append(name, teamNode);
  const total = document.createElement("output");
  total.textContent = `${sumScore(player)} VP`;
  head.append(title, total);
  const stats = document.createElement("div");
  stats.className = "hud-stat-grid";
  [
    ["CP", state.cp[player]],
    ["CO", vpLabel(crit)],
    ["TO", vpLabel(tac)],
    ["KO", vpLabel(kill)],
    ["Primary", primaryStatus(player)]
  ].forEach(([label, value]) => {
    const item = document.createElement("div");
    item.className = "hud-stat";
    const key = document.createElement("span");
    key.textContent = label;
    const data = document.createElement("strong");
    data.textContent = String(value);
    item.append(key, data);
    stats.append(item);
  });
  card.append(head, stats);
}

function renderLiveHud() {
  const tp = clampNumber(Number($("turningPoint")?.value || 1), 1, 4);
  const initiative = currentInitiativePlayer();
  if ($("hudTpLine")) $("hudTpLine").textContent = `TP${tp}`;
  if ($("hudInitiative")) $("hudInitiative").textContent = initiative ? `Initiative: ${playerName(initiative)}` : "Initiative: Not selected";
  renderHudPlayer("a");
  renderHudPlayer("b");
}

function activeHudPlayer() {
  return currentInitiativePlayer() || "a";
}

function handleHudAction(action) {
  const player = activeHudPlayer();
  const label = playerLabel(player);
  const tp = clampNumber(Number($("turningPoint")?.value || 1), 1, 4);
  const scoringIndex = Math.max(1, tp - 1);
  if (action === "more") {
    setGameMode("detail");
    $("detailModePanel")?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  if (action === "cp") {
    adjustInputValue($(`cp${label}`), 1);
    return;
  }
  if (action === "kill") {
    adjustLiveKills(player, tp - 1, 1);
    return;
  }
  if (tp === 1 && (action === "crit" || action === "tac")) {
    alert("Crit and Tac scoring starts from TP2.");
    return;
  }
  if (action === "crit") adjustInputValue(scoreInput(player, "crit", scoringIndex), 1);
  if (action === "tac") adjustInputValue(scoreInput(player, "tac", scoringIndex), 1);
}

function setGameMode(mode) {
  state.gameMode = mode;
  $("liveModePanel").classList.toggle("active", mode === "live");
  $("detailModePanel").classList.toggle("active", mode === "detail");
  document.querySelectorAll("[data-mode-target]").forEach((button) => {
    button.classList.toggle("active", button.dataset.modeTarget === mode);
  });
}

function updateEndgameResult() {
  const nameA = playerName("a");
  const nameB = playerName("b");
  const totalA = sumScore("a");
  const totalB = sumScore("b");
  const teamA = selectedTeam("a")?.name || "No Kill Team";
  const teamB = selectedTeam("b")?.name || "No Kill Team";
  let victory = "Draw";
  if (totalA > totalB) victory = `Victory for ${nameA}`;
  if (totalB > totalA) victory = `Victory for ${nameB}`;
  const summary = document.querySelector(".endgame-summary-strip");
  if (summary) {
    summary.classList.remove("endgame-winner-a", "endgame-winner-b", "endgame-draw");
    summary.classList.add(totalA > totalB ? "endgame-winner-a" : totalB > totalA ? "endgame-winner-b" : "endgame-draw");
  }
  if ($("endgameVictoryText")) $("endgameVictoryText").textContent = victory;
  if ($("endgameResultText")) $("endgameResultText").textContent = `${nameA} (${teamA}) vs ${nameB} (${teamB})`;
  if ($("endgameResultDetail")) {
    $("endgameResultDetail").innerHTML = `<span class="result-score-a">${totalA}</span><span class="result-score-divider"> - </span><span class="result-score-b">${totalB}</span>`;
  }
  updateEndgameBattleReport();
}

function battleReportReady() {
  return state.tacOps.a.revealed && state.tacOps.b.revealed && state.primary.a.revealed && state.primary.b.revealed;
}

let isRenderingEndgameBattleReport = false;

function updateEndgameBattleReport() {
  const panel = $("endgameBattleReportPanel");
  const target = $("endgameBattleReport");
  if (!panel || !target || isRenderingEndgameBattleReport) return;
  const ready = battleReportReady();
  panel.hidden = !ready;
  if (!ready) {
    target.replaceChildren();
    return;
  }
  isRenderingEndgameBattleReport = true;
  try {
    target.replaceChildren(...visualBattleReportBlocks());
  } finally {
    isRenderingEndgameBattleReport = false;
  }
}

function setPage(page) {
  state.page = page;
  document.querySelectorAll("[data-page]").forEach((section) => {
    section.classList.toggle("active", section.dataset.page === page);
  });
  document.querySelectorAll("[data-page-target]").forEach((button) => {
    button.classList.toggle("active", button.dataset.pageTarget === page);
  });
  if (page === "report") generateBattleReport();
  if (page === "endgame") updateEndgameBattleReport();
}

function resetScores() {
  if (!confirm("Clear all scores, kills, and match notes?")) return;
  const oldSummary = `${sumScore("a")} - ${sumScore("b")}`;
  const previousSuppress = suppressHistory;
  suppressHistory = true;
  document.querySelectorAll("[data-score]").forEach((input) => {
    input.value = 0;
    updateScoreFromInput(input);
  });
  applyStartingEnemyDefaults();
  $("killsA").value = 0;
  $("killsB").value = 0;
  resetLiveKills();
  $("cpA").value = 3;
  $("cpB").value = 3;
  state.cp.a = 3;
  state.cp.b = 3;
  $("matchNotes").value = "";
  resetPrimary("a");
  resetPrimary("b");
  updateKillOpScores();
  updateOpSummaries();
  recalculateAllPrimary();
  syncStepperDisplays();
  renderLiveQuickControls();
  suppressHistory = previousSuppress;
  recordActivity("System", "Clear Scores", oldSummary, "0 - 0");
  saveAutosaveNow();
}

function resetMatch() {
  if (!confirm("Reset the whole match and clear all current information? This cannot be undone.")) return;
  const previousSuppress = suppressHistory;
  suppressHistory = true;

  $("playerAName").value = "maru";
  $("playerBName").value = "milo";
  $("communityTeamA").value = "";
  $("communityTeamB").value = "";
  $("teamA").value = "Angels of Death";
  $("teamB").value = "Plague Marines";
  $("critOp").value = "Secure";
  $("killzone").value = "Volkus";
  $("mapNumber").value = "Map 1";
  $("turningPoint").value = "1";

  state.equipment.a = false;
  state.equipment.b = false;
  state.equipmentSetup.a = false;
  state.equipmentSetup.b = false;
  state.deployDone.a = false;
  state.deployDone.b = false;
  state.initiative.a = false;
  state.initiative.b = false;
  state.initiative.deploy = "";
  state.initiative.previous = "";
  ["A", "B"].forEach((label) => {
    syncEquipmentButtons(label.toLowerCase());
    syncInitiativeButton(label.toLowerCase());
    const deployButton = $(`deployDone${label}`);
    if (deployButton) deployButton.classList.remove("ready-active");
  });

  document.querySelectorAll("[data-score]").forEach((input) => {
    input.value = 0;
    updateScoreFromInput(input);
  });

  $("cpA").value = 3;
  $("cpB").value = 3;
  state.cp.a = 3;
  state.cp.b = 3;
  $("killsA").value = 0;
  $("killsB").value = 0;
  resetLiveKills();
  $("matchNotes").value = "";

  renderTeamMeta("a");
  renderTeamMeta("b");
  renderTacSelect("A");
  renderTacSelect("B");
  setDeployOperativeDefault("a");
  setDeployOperativeDefault("b");
  resetTac("a");
  resetTac("b");
  resetPrimary("a");
  resetPrimary("b");
  applyStartingEnemyDefaults();

  state.clock.active = "a";
  state.clock.running = false;
  state.clock.remaining = { a: 60 * 60, b: 60 * 60 };
  state.clock.lastTick = null;
  $("clockMinutes").value = 60;
  $("startPause").textContent = "Start";

  updateCritHelp();
  updateOpSummaries();
  updateKillOpScores();
  syncTurningPointDisplay();
  renderCpControls();
  renderLiveQuickControls();
  renderTpAccordion();
  syncNames();
  updateBattleLog();
  updateResult();
  paintClock();
  setGameMode("live");
  setPage("start");
  suppressHistory = previousSuppress;
  localStorage.removeItem(AUTOSAVE_KEY);
  recordActivity("System", "Reset Match", "Current match", "Default match");
  saveAutosaveNow();
}

function syncPrimary(player) {
  const label = player.toUpperCase();
  const oldChoice = state.primary[player].choice;
  state.primary[player].choice = $(`primary${label}`).value;
  updatePrimarySelectTone(player);
  if (state.primary[player].choice) {
    hidePrimary(player);
  }
  recalculatePrimary(player);
  updateTotals();
  updateTp4PrimarySummary();
  renderGameTp1Controls();
  updateDeployReadinessSummary();
  if (oldChoice !== state.primary[player].choice) {
    recordActivity(playerName(player), "Primary choice", primaryLabel(oldChoice), primaryLabel(state.primary[player].choice), () => {
      state.primary[player].choice = oldChoice;
      $(`primary${label}`).value = oldChoice;
      recalculatePrimary(player);
      updateTotals();
      renderGameTp1Controls();
    });
  }
}

function hidePrimary(player) {
  const label = player.toUpperCase();
  state.primary[player].revealed = false;
  updatePrimarySelectTone(player);
  $(`primaryBox${label}`).classList.add("primary-hidden");
  $(`primarySealed${label}`).hidden = false;
  recalculatePrimary(player);
  updateTotals();
  updateTp4PrimarySummary();
  renderGameTp1Controls();
  updateDeployReadinessSummary();
}

function revealPrimary(player, skipConfirm = false) {
  if (!skipConfirm && appReady && !suppressHistory && !confirm(`Reveal ${playerName(player)} Primary Op?`)) return;
  const label = player.toUpperCase();
  const oldValue = state.primary[player].revealed ? "Revealed" : "Sealed";
  state.primary[player].revealed = true;
  updatePrimarySelectTone(player);
  $(`primaryBox${label}`).classList.remove("primary-hidden");
  $(`primarySealed${label}`).hidden = true;
  recalculatePrimary(player);
  updateTotals();
  updateTp4PrimarySummary();
  renderGameTp1Controls();
  updateDeployReadinessSummary();
  recordActivity(playerName(player), "Reveal Primary", oldValue, "Revealed", () => {
    state.primary[player].revealed = false;
    updatePrimarySelectTone(player);
    $(`primaryBox${label}`).classList.add("primary-hidden");
    $(`primarySealed${label}`).hidden = false;
    recalculatePrimary(player);
    updateTotals();
    updateTp4PrimarySummary();
    renderGameTp1Controls();
  });
}

function resetPrimary(player) {
  const label = player.toUpperCase();
  state.primary[player].choice = "";
  $(`primary${label}`).value = "";
  revealPrimary(player, true);
  syncPrimary(player);
}

function endgameUnlockPrimary() {
  if (appReady && !suppressHistory && !confirm("Reveal both players' Primary choices?")) return;
  revealPrimary("a", true);
  revealPrimary("b", true);
  updateTp4PrimarySummary();
}

function sealTac(player) {
  const label = player.toUpperCase();
  state.tacOps[player].revealed = false;
  $(`tac${label}`).classList.add("tac-hidden");
  $(`tac${label}Help`).textContent = "";
  $(`tacSealed${label}`).hidden = false;
  syncTacConfirmButton(player);
  updateBattleLog();
}

function revealTac(player) {
  if (appReady && !suppressHistory && !confirm(`Reveal ${playerName(player)} Tac Op?`)) return;
  const label = player.toUpperCase();
  const oldValue = state.tacOps[player].revealed ? "Revealed" : "Sealed";
  state.tacOps[player].revealed = true;
  $(`tac${label}`).classList.remove("tac-hidden");
  $(`tacSealed${label}`).hidden = true;
  updateTacHelp(player);
  updateBattleLog();
  recordActivity(playerName(player), "Reveal Tac Op", oldValue, "Revealed", () => {
    state.tacOps[player].revealed = false;
    $(`tac${label}`).classList.add("tac-hidden");
    $(`tac${label}Help`).textContent = "";
    $(`tacSealed${label}`).hidden = false;
    syncTacConfirmButton(player);
    updateBattleLog();
  });
}

function unlockTac(player) {
  revealTac(player);
}

function resetTac(player) {
  const label = player.toUpperCase();
  state.tacOps[player].revealed = true;
  $(`tac${label}`).value = "";
  $(`tac${label}`).classList.remove("tac-hidden");
  $(`tacSealed${label}`).hidden = true;
  updateTacHelp(player);
}

function syncTac(player) {
  const oldLabel = visibleTacLabel(player);
  if (selectedTac(player)) {
    const label = player.toUpperCase();
    state.tacOps[player].revealed = true;
    $(`tac${label}`).classList.remove("tac-hidden");
    $(`tacSealed${label}`).hidden = true;
    updateTacHelp(player);
    recordActivity(playerName(player), "Tac Op choice", oldLabel, selectedTac(player)?.name || "Not selected", () => resetTac(player));
    return;
  }
  resetTac(player);
}

function confirmTac(player) {
  const tac = selectedTac(player);
  if (!tac) return;
  const label = player.toUpperCase();
  sealTac(player);
  recordActivity(playerName(player), "Confirm Tac Op", tac.name, "Sealed up - locked", () => {
    state.tacOps[player].revealed = true;
    $(`tac${label}`).classList.remove("tac-hidden");
    $(`tacSealed${label}`).hidden = true;
    updateTacHelp(player);
    updateBattleLog();
  });
}

function handleTurningPointChange() {
  ensureTp1DeployInitiative();
  syncTurningPointDisplay();
  updateKillOpScores();
  updateBattleLog();
  renderLiveQuickControls();
  renderTpAccordion();
  syncStepperDisplays();
}

function syncTurningPointDisplay() {
  ensureTp1DeployInitiative();
  const tp = clampNumber(Number($("turningPoint")?.value || 1), 1, 4);
  if ($("turningPointDisplay")) $("turningPointDisplay").textContent = `TURNING POINT ${tp}`;
  if ($("tpMinus")) $("tpMinus").disabled = tp <= 1;
  if ($("tpPlus")) $("tpPlus").disabled = tp >= 4;
  if ($("gameEndButton")) {
    $("gameEndButton").textContent = tp >= 4 ? "End Game" : `TURNING POINT ${tp + 1}`;
    $("gameEndButton").setAttribute("aria-label", tp >= 4 ? "End Game" : `Go to Turning Point ${tp + 1}`);
  }
  if ($("tp1GameSetupPanel")) $("tp1GameSetupPanel").hidden = false;
  if ($("gamePrimaryGroup")) $("gamePrimaryGroup").hidden = tp !== 1;
  if ($("tp4PrimaryPanel")) $("tp4PrimaryPanel").hidden = tp !== 4;
  if ($("liveTp4PrimaryPanel")) $("liveTp4PrimaryPanel").hidden = tp !== 4;
  updateTp4PrimarySummary();
  renderGameTp1Controls();
  renderEndTpChecklist();
}

function adjustTurningPoint(delta) {
  const select = $("turningPoint");
  const oldTp = Number(select.value || 1);
  const next = clampNumber(Number(select.value || 1) + delta, 1, 4);
  if (oldTp === next) return;
  const oldInitiative = currentInitiativePlayer();
  const oldPrevious = state.initiative.previous || "";
  if (oldInitiative && next > oldTp) {
    state.initiative.previous = oldInitiative;
  }
  select.value = String(next);
  recordActivity("Match", "Turning Point", `TP${oldTp}`, `TP${next}`, () => {
    select.value = String(oldTp);
    setCurrentInitiative(oldInitiative);
    state.initiative.previous = oldPrevious;
    handleTurningPointChange();
  });
  handleTurningPointChange();
}

function advanceBattleFlow() {
  const tp = clampNumber(Number($("turningPoint")?.value || 1), 1, 4);
  if (tp >= 4) {
    if (!confirm("End the game and move to Endgame?")) return;
    setPage("endgame");
    return;
  }
  if (!confirm(`End TP${tp} and go to TP${tp + 1}?`)) return;
  adjustTurningPoint(1);
}

function checklistLabels() {
  return {
    crit: "Crit VP entered",
    tac: "Tac VP entered",
    cp: "CP checked",
    kills: "Enemy incapacitations recorded",
    notes: "Notes/rulings added if needed"
  };
}

function missingEndTpChecklistItems(tp) {
  const checks = state.endTpChecks[tp] || {};
  return Object.entries(checklistLabels())
    .filter(([key]) => !checks[key])
    .map(([, label]) => label);
}

function renderEndTpChecklist() {
  const tp = clampNumber(Number($("turningPoint")?.value || 1), 1, 4);
  if ($("endTpChecklistTitle")) $("endTpChecklistTitle").textContent = tp >= 4 ? "Before ending the game" : `Before ending TP${tp}`;
  document.querySelectorAll("[data-end-tp-check]").forEach((input) => {
    const key = input.dataset.endTpCheck;
    input.checked = Boolean(state.endTpChecks[tp]?.[key]);
  });
  const missing = missingEndTpChecklistItems(tp);
  if ($("endTpWarning")) {
    $("endTpWarning").textContent = missing.length
      ? `Unchecked: ${missing.join(", ")}. You can still continue after confirmation.`
      : "Checklist complete for this TP.";
  }
}

function updateEndTpCheck(input) {
  const tp = clampNumber(Number($("turningPoint")?.value || 1), 1, 4);
  const key = input.dataset.endTpCheck;
  if (!state.endTpChecks[tp]) state.endTpChecks[tp] = {};
  const oldValue = Boolean(state.endTpChecks[tp][key]);
  state.endTpChecks[tp][key] = input.checked;
  recordActivity("Match", `TP${tp} checklist ${checklistLabels()[key]}`, oldValue ? "Checked" : "Open", input.checked ? "Checked" : "Open", () => {
    state.endTpChecks[tp][key] = oldValue;
    renderEndTpChecklist();
  });
  renderEndTpChecklist();
}

function toggleEquipmentReady(player) {
  state.equipment[player] = !state.equipment[player];
  syncEquipmentButtons(player);
}

function toggleEquipmentSetup(player) {
  state.equipmentSetup[player] = !state.equipmentSetup[player];
  syncEquipmentButtons(player);
}

function syncEquipmentButtons(player) {
  const label = playerLabel(player);
  const selectionButton = $(`equipmentReady${label}`);
  if (selectionButton) {
    selectionButton.classList.toggle("ready-active", state.equipment[player]);
    selectionButton.textContent = state.equipment[player] ? "Selection done" : "Reveal";
  }
  const setupButton = $(`equipmentSetup${label}`);
  if (setupButton) {
    setupButton.classList.toggle("ready-active", state.equipmentSetup[player]);
    setupButton.textContent = state.equipmentSetup[player] ? "Set up done" : "Ready";
  }
  updateDeployReadinessSummary();
}
function toggleInitiative(player, source = "battle") {
  const oldPlayer = currentInitiativePlayer();
  const oldDeploy = state.initiative.deploy || "";
  const oldPrevious = state.initiative.previous || "";
  const tp = currentTurningPoint();
  const isDeployChoice = source === "deploy" || tp === 1;

  if (isDeployChoice) {
    state.initiative.deploy = player;
  } else if (oldPlayer && oldPlayer !== player) {
    state.initiative.previous = oldPlayer;
  }
  setCurrentInitiative(player);
  syncInitiativeButton("a");
  syncInitiativeButton("b");
  renderGameTp1Controls();
  updateDeployReadinessSummary();
  if (oldPlayer !== player || (isDeployChoice && oldDeploy !== player)) {
    const activityLabel = isDeployChoice ? "Deploy Initiative" : "Initiative";
    const oldValue = isDeployChoice
      ? (oldDeploy ? playerName(oldDeploy) : "Not selected")
      : (oldPlayer ? playerName(oldPlayer) : "Not selected");
    recordActivity("Match", activityLabel, oldValue, playerName(player), () => {
      setCurrentInitiative(oldPlayer);
      state.initiative.deploy = oldDeploy;
      state.initiative.previous = oldPrevious;
      syncInitiativeButton("a");
      syncInitiativeButton("b");
      renderGameTp1Controls();
    });
  }
}

function syncInitiativeButton(player) {
  const label = playerLabel(player);
  const name = playerName(player);
  const deployButton = $(`initiative${label}`);
  if (deployButton) {
    const activeDeploy = state.initiative.deploy === player;
    deployButton.classList.toggle("ready-active", activeDeploy);
    deployButton.textContent = activeDeploy ? `Initiative - ${name}` : `Player ${label} - ${name}`;
  }
  const battleButton = $(`gameInitiative${label}`);
  if (battleButton) {
    const activeBattle = currentInitiativePlayer() === player;
    battleButton.classList.toggle("ready-active", activeBattle);
    battleButton.textContent = activeBattle ? `Initiative - ${name}` : `Player ${label} - ${name}`;
  }
  updatePreviousInitiativeText();
}

function updatePreviousInitiativeText() {
  const target = $("previousInitiativeText");
  if (!target) return;
  if (currentTurningPoint() === 1) {
    const deployInitiative = state.initiative.deploy || currentInitiativePlayer();
    target.textContent = `Deploy initiative: ${deployInitiative ? playerName(deployInitiative) : "Not selected"}`;
    return;
  }
  const previous = previousInitiativePlayer();
  target.textContent = `Previous initiative: ${previous ? playerName(previous) : "Not selected"}`;
}

function deployReadiness(player) {
  const tacReady = Boolean(selectedTac(player)) || !state.tacOps[player].revealed;
  const steps = [
    state.initiative.deploy === player,
    state.equipment[player],
    state.equipmentSetup[player],
    tacReady,
    state.deployDone[player]
  ];
  return { ready: steps.filter(Boolean).length, total: steps.length };
}

function updateDeployReadinessSummary() {
  ["a", "b"].forEach((player) => {
    const label = playerLabel(player);
    const { ready, total } = deployReadiness(player);
    const text = `Player ${label}: ${ready} / ${total} ready`;
    const compact = `${ready} / ${total} ready`;
    if ($(`deployReady${label}`)) $(`deployReady${label}`).textContent = text;
    if ($(`deployStatus${label}`)) {
      $(`deployStatus${label}`).textContent = compact;
      $(`deployStatus${label}`).classList.toggle("ready-complete", ready === total);
    }
  });
}

function teamOperativeCount(player) {
  const team = selectedTeam(player);
  return operativeCountByTeam[team?.name] || 6;
}

function deployOperativeCount(player) {
  const label = playerLabel(player);
  return clampNumber($(`deployOps${label}`)?.value || teamOperativeCount(player), 5, 14);
}

function setDeployOperativeDefault(player) {
  const label = playerLabel(player);
  if ($(`deployOps${label}`)) $(`deployOps${label}`).value = clampNumber(teamOperativeCount(player), 5, 14);
  renderDeployPlan(player);
}

function deployGroups(player) {
  const total = deployOperativeCount(player);
  const x = Math.ceil(total / 3);
  const first = Math.min(x, total);
  const remaining = Math.max(0, total - first);
  const second = Math.ceil(remaining / 2);
  const third = Math.max(0, total - first - second);
  return { total, x, groups: [first, second, third] };
}

function renderDeployPlan(player) {
  const label = playerLabel(player);
  const target = $(`deploySlots${label}`);
  const button = $(`deployDone${label}`);
  if (!target) return;
  const { total, x, groups } = deployGroups(player);
  target.replaceChildren();
  groups.forEach((count, index) => {
    const slot = document.createElement("div");
    slot.className = "deploy-slot";
    const title = document.createElement("span");
    title.textContent = `Deploy ${index + 1}`;
    const value = document.createElement("strong");
    value.textContent = `${count}`;
    slot.append(title, value);
    target.append(slot);
  });
  if (button) {
    button.classList.toggle("ready-active", state.deployDone[player]);
    button.textContent = state.deployDone[player] ? "Deploy done" : "Done";
  }
  updateDeployReadinessSummary();
}

function renderAllDeployPlans() {
  renderDeployPlan("a");
  renderDeployPlan("b");
}

function toggleDeployDone(player) {
  state.deployDone[player] = !state.deployDone[player];
  renderDeployPlan(player);
}

function applyStartingEnemyDefaults() {
  if ($("startEnemiesA")) $("startEnemiesA").value = deployOperativeCount("b");
  if ($("startEnemiesB")) $("startEnemiesB").value = deployOperativeCount("a");
  syncLiveKillsToInputs();
  updateKillOpScores();
  renderAllDeployPlans();
  renderLiveQuickControls();
}

function setClockFromMinutes() {
  if (!state.clock.enabled) return;
  tickClock();
  const minutes = Math.max(1, Number($("clockMinutes").value || 60));
  state.clock.remaining = { a: minutes * 60, b: minutes * 60 };
  state.clock.active = "a";
  state.clock.running = false;
  state.clock.lastTick = null;
  $("startPause").textContent = "Start";
  paintClock();
}

function resetClockWithConfirm() {
  if (!confirm("Reset both clocks to the selected minutes?")) return;
  setClockFromMinutes();
}

function tickClock() {
  if (!state.clock.enabled || !state.clock.running) return;
  const now = Date.now();
  const elapsed = state.clock.lastTick ? (now - state.clock.lastTick) / 1000 : 0;
  state.clock.lastTick = now;
  state.clock.remaining[state.clock.active] = Math.max(0, state.clock.remaining[state.clock.active] - elapsed);
  if (state.clock.remaining[state.clock.active] <= 0) {
    state.clock.running = false;
    $("startPause").textContent = "Start";
  }
  paintClock();
}

function paintClock() {
  if (state.clock.featureHidden) {
    state.clock.enabled = false;
    state.clock.running = false;
    state.clock.lastTick = null;
    $("startPause").textContent = "Start";
  }
  document.body.classList.toggle("clock-feature-hidden", state.clock.featureHidden);
  document.body.classList.toggle("clock-disabled", !state.clock.enabled);
  $("timeA").textContent = formatTime(state.clock.remaining.a);
  $("timeB").textContent = formatTime(state.clock.remaining.b);
  if ($("activeTurnBanner")) $("activeTurnBanner").textContent = `Current turn: ${playerName(state.clock.active)}`;
  $("clockA").classList.toggle("active", state.clock.active === "a");
  $("clockB").classList.toggle("active", state.clock.active === "b");
  $("passTurnA").hidden = !state.clock.enabled || state.clock.active !== "a";
  $("passTurnB").hidden = !state.clock.enabled || state.clock.active !== "b";
  $("startPause").disabled = !state.clock.enabled;
  $("resetClock").disabled = !state.clock.enabled;
  $("clockMinutes").disabled = !state.clock.enabled;
  $("livePassTurn").disabled = !state.clock.enabled;
  $("clockToggle").classList.add("active");
  $("clockToggle").setAttribute("aria-pressed", String(state.clock.enabled));
  $("clockToggle").textContent = state.clock.enabled ? "No Clock" : "Use Clock";
  updateLiveMode();
}

function toggleClock() {
  if (!state.clock.enabled) return;
  state.clock.running = !state.clock.running;
  state.clock.lastTick = Date.now();
  $("startPause").textContent = state.clock.running ? "Pause" : "Start";
}

function passTurn(nextPlayer) {
  if (!state.clock.enabled) return;
  tickClock();
  state.clock.active = nextPlayer || (state.clock.active === "a" ? "b" : "a");
  state.clock.lastTick = Date.now();
  paintClock();
}

function toggleClockEnabled() {
  if (state.clock.enabled) tickClock();
  state.clock.enabled = !state.clock.enabled;
  state.clock.running = false;
  state.clock.lastTick = null;
  $("startPause").textContent = "Start";
  paintClock();
}

function csvCell(value) {
  const text = String(value ?? "");
  return `"${text.replaceAll('"', '""')}"`;
}

function buildExportRows() {
  const nameA = $("playerAName").value.trim() || "Player A";
  const nameB = $("playerBName").value.trim() || "Player B";
  const communityA = $("communityTeamA").value.trim();
  const communityB = $("communityTeamB").value.trim();
  const teamA = selectedTeam("a");
  const teamB = selectedTeam("b");
  const tacA = selectedTac("a");
  const tacB = selectedTac("b");
  const crit = selectedCrit();
  return [
    ["Exported At", new Date().toISOString()],
    ["Rules Version", rules.rulesVersion.name],
    ["Rules Checked", rules.rulesVersion.checkedDate],
    ["Turning Point", `TP${$("turningPoint").value}`],
    [],
    ["Field", "Player A", "Player B"],
    ["Player", nameA, nameB],
    ["Community Team", communityA, communityB],
    ["Kill Team", teamA?.name, teamB?.name],
    ["Faction", teamA?.faction, teamB?.faction],
    ["Archetypes", teamA?.archetypes.join(" / "), teamB?.archetypes.join(" / ")],
    ["Equipment Selection", state.equipment.a ? "Revealed" : "", state.equipment.b ? "Revealed" : ""],
    ["Equipment Setup", state.equipmentSetup.a ? "Ready" : "", state.equipmentSetup.b ? "Ready" : ""],
    ["Command Points", state.cp.a, state.cp.b],
    ["Tac Op", exportedTacLabel("a"), exportedTacLabel("b")],
    ["Crit Op", crit?.name, crit?.name],
    ["Killzone / Map", `${$("killzone").value} - ${$("mapNumber").value}`, `${$("killzone").value} - ${$("mapNumber").value}`],
    ["Primary Op", exportedPrimaryLabel("a"), exportedPrimaryLabel("b")],
    ["Crit VP", state.scores.a.crit.reduce((a, b) => a + b, 0), state.scores.b.crit.reduce((a, b) => a + b, 0)],
    ["Tac VP", state.scores.a.tac.reduce((a, b) => a + b, 0), state.scores.b.tac.reduce((a, b) => a + b, 0)],
    ["Kill Op VP", state.scores.a.kill, state.scores.b.kill],
    ["Primary VP", exportedPrimaryScore("a"), exportedPrimaryScore("b")],
    ["Ruling / Other VP", state.scores.a.other, state.scores.b.other],
    ["Total VP", sumScore("a"), sumScore("b")],
    ["Enemy Operatives Incapacitated", $("killsA").value, $("killsB").value],
    ["Starting Enemy Operatives", $("startEnemiesA").value, $("startEnemiesB").value],
    ["Clock Remaining", formatTime(state.clock.remaining.a), formatTime(state.clock.remaining.b)],
    ["Result", $("resultText").textContent, $("resultDetail").textContent],
    ["Notes", $("matchNotes").value]
  ];
}

function exportCsv() {
  tickClock();
  const csv = buildExportRows().map((row) => row.map(csvCell).join(",")).join("\r\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const date = new Date().toISOString().slice(0, 10);
  link.href = url;
  link.download = `kill-team-scoreboard-${date}.csv`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function reportValue(value, fallback = "Not selected") {
  return value || fallback;
}

function reportCell(text, tagName = "td") {
  const cell = document.createElement(tagName);
  cell.textContent = String(text ?? "");
  return cell;
}

function makeReportTable(headers, rows, className = "") {
  const table = document.createElement("table");
  table.className = `report-table ${className}`.trim();
  const thead = document.createElement("thead");
  const headRow = document.createElement("tr");
  headers.forEach((header) => headRow.append(reportCell(header, "th")));
  thead.append(headRow);
  const tbody = document.createElement("tbody");
  rows.forEach((row) => {
    const tr = document.createElement("tr");
    row.forEach((value, index) => tr.append(reportCell(value, index === 0 ? "th" : "td")));
    tbody.append(tr);
  });
  table.append(thead, tbody);
  return table;
}

function reportWinnerText() {
  const totalA = sumScore("a");
  const totalB = sumScore("b");
  if (totalA === totalB) return "Draw";
  return totalA > totalB ? "Player A wins" : "Player B wins";
}

function scoreTotal(player, bucket) {
  return state.scores[player][bucket].reduce((total, value) => total + Number(value || 0), 0);
}

function reportDetail(label, value, className = "") {
  const row = document.createElement("div");
  row.className = `report-detail ${className}`.trim();
  const key = document.createElement("span");
  key.textContent = label;
  const data = document.createElement("strong");
  data.textContent = String(value ?? "");
  row.append(key, data);
  return row;
}

function vpLabel(value) {
  return `${Number(value || 0)} VP`;
}

function scoreNumber(value) {
  return Number(value || 0);
}

function reportTeamName(player) {
  const team = selectedTeam(player);
  return team ? team.name : "Not selected";
}

function compactTpLine(row) {
  const [tp, aCrit, aTac, aKill, bCrit, bTac, bKill] = row;
  const aTotal = scoreNumber(aCrit) + scoreNumber(aTac) + scoreNumber(aKill);
  const bTotal = scoreNumber(bCrit) + scoreNumber(bTac) + scoreNumber(bKill);
  return [
    `${tp}:`,
    `${playerName("a")} CO ${aCrit} / TO ${aTac} / KO ${aKill} / VP ${aTotal} |`,
    `${playerName("b")} CO ${bCrit} / TO ${bTac} / KO ${bKill} / VP ${bTotal}`
  ].join("\n");
}

function otherVpLine(player) {
  const value = Number(state.scores[player].other || 0);
  return value === 0 ? null : `Other: ${vpLabel(value)}`;
}

function otherVpDetail(player) {
  const value = Number(state.scores[player].other || 0);
  return value === 0 ? null : reportDetail("Ruling / Other VP", vpLabel(value), "report-vp-row");
}

function reportTeamLabel(player) {
  const team = selectedTeam(player);
  return team ? `${team.name} - ${team.faction}` : "Not selected";
}

function reportTacLabel(player) {
  const tac = selectedTac(player);
  if (!state.tacOps[player].revealed) return "Sealed up - locked";
  return tac ? tac.name : "Not selected";
}

function playerReportRows(player) {
  const label = playerLabel(player);
  const team = selectedTeam(player);
  const tac = selectedTac(player);
  const kill = killOpDetails(player);
  return [
    ["Player", playerName(player)],
    ["Community Team", reportValue($(`communityTeam${label}`)?.value.trim(), "Not set")],
    ["Kill Team", team ? `${team.name} - ${team.faction}` : "Not selected"],
    ["Tac Op", state.tacOps[player].revealed ? (tac ? tac.name : "Not selected") : "Sealed up - locked"],
    ["Primary", exportedPrimaryLabel(player)],
    ["Primary VP", vpLabel(exportedPrimaryScore(player) || 0)],
    ["Equipment Selection", state.equipment[player] ? "Revealed" : "Not revealed"],
    ["Equipment Setup", state.equipmentSetup[player] ? "Ready" : "Not marked ready"],
    ["CP", state.cp[player]],
    ["Starting Enemy Operatives", kill.startingEnemies],
    ["Enemy Operatives Incapacitated", kill.kills],
    ["Kill Grade", `KG ${kill.grade}`],
    ["Kill Op VP", vpLabel(state.scores[player].kill)],
    ["Total VP", vpLabel(sumScore(player))]
  ];
}

function killOpVpAtTp(player, tpIndex) {
  const label = playerLabel(player);
  const startingEnemies = clampNumber($(`startEnemies${label}`)?.value, 1, 30);
  const kills = state.liveKillsByTp[player]
    .slice(0, tpIndex + 1)
    .reduce((total, value) => total + Number(value || 0), 0);
  const grade = killGradeFor(startingEnemies, kills);
  if (tpIndex < 3) return grade;
  const opponent = player === "a" ? "b" : "a";
  const opponentLabel = playerLabel(opponent);
  const opponentStartingEnemies = clampNumber($(`startEnemies${opponentLabel}`)?.value, 1, 30);
  const opponentKills = state.liveKillsByTp[opponent]
    .slice(0, tpIndex + 1)
    .reduce((total, value) => total + Number(value || 0), 0);
  const opponentGrade = killGradeFor(opponentStartingEnemies, opponentKills);
  return grade + (grade > opponentGrade ? 1 : 0);
}

function tpReportRows() {
  return [1, 2, 3].map((index) => {
    const tp = index + 1;
    const aCrit = Number(state.scores.a.crit[index] || 0);
    const bCrit = Number(state.scores.b.crit[index] || 0);
    const aTac = Number(state.scores.a.tac[index] || 0);
    const bTac = Number(state.scores.b.tac[index] || 0);
    const aKill = killOpVpAtTp("a", index);
    const bKill = killOpVpAtTp("b", index);
    return [
      `TP${tp}`,
      aCrit,
      aTac,
      aKill,
      bCrit,
      bTac,
      bKill
    ];
  });
}

function formattedTpReportRows() {
  const rows = tpReportRows();
  const totals = rows.reduce((total, row) => {
    row.slice(1).forEach((value, index) => {
      total[index] += Number(value || 0);
    });
    return total;
  }, [0, 0, 0, 0, 0, 0]);
  return [
    ...rows.map(([tp, aCrit, aTac, aKill, bCrit, bTac, bKill]) => [
      tp,
      vpLabel(aCrit),
      vpLabel(aTac),
      vpLabel(aKill),
      vpLabel(scoreNumber(aCrit) + scoreNumber(aTac) + scoreNumber(aKill)),
      vpLabel(bCrit),
      vpLabel(bTac),
      vpLabel(bKill),
      vpLabel(scoreNumber(bCrit) + scoreNumber(bTac) + scoreNumber(bKill))
    ]),
    [
      "Total",
      vpLabel(totals[0]),
      vpLabel(totals[1]),
      vpLabel(totals[2]),
      vpLabel(totals[0] + totals[1] + totals[2]),
      vpLabel(totals[3]),
      vpLabel(totals[4]),
      vpLabel(totals[5]),
      vpLabel(totals[3] + totals[4] + totals[5])
    ]
  ];
}

function tpReportTextValue(value) {
  return vpLabel(value);
}

function playerReportLine(player) {
  const kill = killOpDetails(player);
  const critTotal = state.scores[player].crit.reduce((total, value) => total + Number(value || 0), 0);
  const tacTotal = state.scores[player].tac.reduce((total, value) => total + Number(value || 0), 0);
  return [
    `${playerName(player)} - ${reportTeamLabel(player)}`,
    `TO: ${reportTacLabel(player)}`,
    `Primary: ${exportedPrimaryLabel(player)}`,
    `CO: ${vpLabel(critTotal)}`,
    `TO VP: ${vpLabel(tacTotal)}`,
    `KO: ${vpLabel(state.scores[player].kill)}`,
    `Primary VP: ${vpLabel(exportedPrimaryScore(player) || 0)}`,
    otherVpLine(player),
    `Total: ${vpLabel(sumScore(player))}`,
    `KG: ${kill.grade}`,
    `Incap: ${kill.kills}`
  ].filter(Boolean).join("\n");
}

function playerTeamReportLine(player) {
  return `${playerName(player)} - ${reportTeamLabel(player)}`;
}

function reportComparisonLine(label, valueA, valueB) {
  return `${label}: ${playerName("a")} ${valueA} ${playerName("b")} ${valueB}`;
}

function reportPlayerCard(player) {
  const label = playerLabel(player);
  const kill = killOpDetails(player);
  const card = document.createElement("article");
  card.className = `report-player-card player-tone-${player}`;

  const head = document.createElement("div");
  head.className = "report-player-head";
  const title = document.createElement("div");
  const name = document.createElement("h3");
  name.textContent = playerName(player);
  const team = document.createElement("p");
  team.textContent = reportTeamLabel(player);
  title.append(name, team);
  const total = document.createElement("output");
  total.textContent = `${sumScore(player)} VP`;
  head.append(title, total);

  const details = document.createElement("div");
  details.className = "report-detail-grid";
  details.append(...[
    reportDetail("TO", reportTacLabel(player)),
    reportDetail("Primary", exportedPrimaryLabel(player)),
    reportDetail("CO", vpLabel(scoreTotal(player, "crit")), "report-vp-row"),
    reportDetail("TO VP", vpLabel(scoreTotal(player, "tac")), "report-vp-row"),
    reportDetail("KO", vpLabel(state.scores[player].kill), "report-vp-row"),
    reportDetail("Primary VP", vpLabel(exportedPrimaryScore(player) || 0), "report-vp-row"),
    otherVpDetail(player),
    reportDetail("KG", kill.grade),
    reportDetail("Incap", kill.kills),
    reportDetail("Total", vpLabel(sumScore(player)), "report-vp-row report-total-row")
  ].filter(Boolean));

  card.append(head, details);
  return card;
}

function battleReportWhatsappText() {
  const crit = selectedCrit();
  const notes = $("matchNotes").value.trim();
  const tpLines = tpReportRows().map(compactTpLine);
  const killA = killOpDetails("a");
  const killB = killOpDetails("b");
  const otherA = Number(state.scores.a.other || 0);
  const otherB = Number(state.scores.b.other || 0);
  const lines = [
    `${playerName("a")} ${sumScore("a")} - ${playerName("b")} ${sumScore("b")}`,
    `${reportTeamName("a")} - ${reportTeamName("b")}`,
    reportWinnerText(),
    "",
    `Mission: ${crit?.name || "Not selected"} / ${$("killzone").value} / ${$("mapNumber").value}`,
    `TP: ${$("turningPoint").value}`,
    "",
    playerTeamReportLine("a"),
    playerTeamReportLine("b"),
    `${playerName("a")} TO: ${reportTacLabel("a")}`,
    `${playerName("b")} TO: ${reportTacLabel("b")}`,
    `${playerName("a")} Primary: ${exportedPrimaryLabel("a")}`,
    `${playerName("b")} Primary: ${exportedPrimaryLabel("b")}`,
    reportComparisonLine("CO", vpLabel(scoreTotal("a", "crit")), vpLabel(scoreTotal("b", "crit"))),
    reportComparisonLine("TO VP", vpLabel(scoreTotal("a", "tac")), vpLabel(scoreTotal("b", "tac"))),
    reportComparisonLine("KO", vpLabel(state.scores.a.kill), vpLabel(state.scores.b.kill)),
    reportComparisonLine("Primary VP", vpLabel(exportedPrimaryScore("a") || 0), vpLabel(exportedPrimaryScore("b") || 0))
  ];

  if (otherA || otherB) {
    lines.push(reportComparisonLine("Other", vpLabel(otherA), vpLabel(otherB)));
  }

  lines.push(
    reportComparisonLine("Total", vpLabel(sumScore("a")), vpLabel(sumScore("b"))),
    reportComparisonLine("KG", killA.grade, killB.grade),
    reportComparisonLine("Incap", killA.kills, killB.kills),
    "",
    "TP Breakdown:",
    ...tpLines,
    "",
    "Notes:",
    notes || "No notes recorded.",
    "",
    `Generated: ${new Date().toLocaleString()}`
  );

  return lines.join("\n");
}

function reportTextBlock() {
  const block = document.createElement("section");
  block.className = "report-text-block";
  const title = document.createElement("h3");
  title.textContent = "Share Summary";
  const text = document.createElement("pre");
  text.textContent = battleReportWhatsappText();
  block.append(title, text);
  return block;
}

function visualBattleReportBlocks() {
  const crit = selectedCrit();
  const notes = $("matchNotes").value.trim();
  const totalA = sumScore("a");
  const totalB = sumScore("b");

  const summaryCard = document.createElement("section");
  summaryCard.className = `report-summary-card ${totalA > totalB ? "winner-a" : totalB > totalA ? "winner-b" : "winner-draw"}`;
  const score = document.createElement("h2");
  score.className = "report-final-score";
  score.innerHTML = `<span class="score-a">${playerName("a")} ${totalA}</span><span>-</span><span class="score-b">${playerName("b")} ${totalB}</span>`;
  const teamLine = document.createElement("p");
  teamLine.className = "report-team-line";
  teamLine.textContent = `${reportTeamName("a")} - ${reportTeamName("b")}`;
  const winner = document.createElement("p");
  winner.className = "report-winner";
  winner.textContent = reportWinnerText();
  const facts = document.createElement("div");
  facts.className = "report-summary-facts";
  facts.append(
    reportDetail("Mission", crit?.name || "Not selected"),
    reportDetail("Killzone", $("killzone").value),
    reportDetail("Map", $("mapNumber").value),
    reportDetail("Generated", new Date().toLocaleString())
  );
  summaryCard.append(score, teamLine, winner, facts);

  const playerGrid = document.createElement("div");
  playerGrid.className = "report-player-grid";
  playerGrid.append(reportPlayerCard("a"), reportPlayerCard("b"));

  const tpTable = makeReportTable(
    ["TP", `${playerName("a")} CO`, `${playerName("a")} TO`, `${playerName("a")} KO`, `${playerName("a")} VP`, `${playerName("b")} CO`, `${playerName("b")} TO`, `${playerName("b")} KO`, `${playerName("b")} VP`],
    formattedTpReportRows(),
    "tp-report-table"
  );
  const tpSection = document.createElement("section");
  tpSection.className = "report-section report-tp-section";
  const tpTitle = document.createElement("h3");
  tpTitle.textContent = "VP Break Down Table";
  const tpCards = document.createElement("div");
  tpCards.className = "report-tp-accordion";
  tpReportRows().forEach((row) => {
    const [tp, aCrit, aTac, aKill, bCrit, bTac, bKill] = row;
    const details = document.createElement("details");
    details.className = "report-tp-card";
    details.open = true;
    const summary = document.createElement("summary");
    summary.textContent = tp;
    const body = document.createElement("div");
    body.className = "report-tp-card-body";
    body.append(
      reportDetail(playerName("a"), `CO ${aCrit} / TO ${aTac} / KO ${aKill} / VP ${scoreNumber(aCrit) + scoreNumber(aTac) + scoreNumber(aKill)}`, "player-a-text"),
      reportDetail(playerName("b"), `CO ${bCrit} / TO ${bTac} / KO ${bKill} / VP ${scoreNumber(bCrit) + scoreNumber(bTac) + scoreNumber(bKill)}`, "player-b-text")
    );
    details.append(summary, body);
    tpCards.append(details);
  });
  const formattedRows = formattedTpReportRows();
  const totalRow = formattedRows[formattedRows.length - 1];
  if (totalRow) {
    const details = document.createElement("details");
    details.className = "report-tp-card report-tp-total-card";
    details.open = true;
    const summary = document.createElement("summary");
    summary.textContent = "Total";
    const body = document.createElement("div");
    body.className = "report-tp-card-body";
    body.append(
      reportDetail(playerName("a"), `CO ${totalRow[1]} / TO ${totalRow[2]} / KO ${totalRow[3]} / VP ${totalRow[4]}`, "player-a-text"),
      reportDetail(playerName("b"), `CO ${totalRow[5]} / TO ${totalRow[6]} / KO ${totalRow[7]} / VP ${totalRow[8]}`, "player-b-text")
    );
    details.append(summary, body);
    tpCards.append(details);
  }
  tpSection.append(tpTitle, tpTable, tpCards);

  const notesBlock = document.createElement("section");
  notesBlock.className = "report-notes";
  const notesTitle = document.createElement("h3");
  notesTitle.textContent = "Notes / Rulings";
  const notesText = document.createElement("p");
  notesText.textContent = notes || "No notes recorded.";
  notesBlock.append(notesTitle, notesText);

  return [summaryCard, playerGrid, tpSection, notesBlock];
}

function generateBattleReport() {
  tickClock();
  const report = $("battleReport");
  const panel = $("battleReportPanel");
  report.replaceChildren(reportTextBlock());
  panel.hidden = false;
}

function battleReportPlainText() {
  return battleReportWhatsappText();
}

function battleReportMarkdownText() {
  return [
    `# ${playerName("a")} ${sumScore("a")} - ${playerName("b")} ${sumScore("b")}`,
    `**${reportTeamName("a")} - ${reportTeamName("b")}**`,
    `**${reportWinnerText()}**`,
    "",
    `**Mission:** ${selectedCrit()?.name || "Not selected"} / ${$("killzone").value} / ${$("mapNumber").value}`,
    `**TP:** ${$("turningPoint").value}`,
    "",
    "## Players",
    battleReportWhatsappText()
      .split("\n")
      .slice(7)
      .join("\n")
  ].join("\n");
}

function battleReportDiscordText() {
  return [
    "**Kill Team Battle Report**",
    "```",
    battleReportWhatsappText(),
    "```"
  ].join("\n");
}

async function copyText(text, buttons, doneLabel = "Copied") {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const box = document.createElement("textarea");
    box.value = text;
    box.setAttribute("readonly", "");
    box.style.position = "fixed";
    box.style.opacity = "0";
    document.body.append(box);
    box.select();
    document.execCommand("copy");
    box.remove();
  }
  buttons.filter(Boolean).forEach((copyButton) => {
    copyButton.dataset.originalText = copyButton.dataset.originalText || copyButton.textContent;
    copyButton.textContent = doneLabel;
  });
  setTimeout(() => {
    buttons.filter(Boolean).forEach((copyButton) => {
      copyButton.textContent = copyButton.dataset.originalText || "Copy Summary";
    });
  }, 1400);
}

async function copyBattleReport() {
  await copyText(battleReportPlainText(), [$("copyBattleReportButton"), $("stickyCopyBattleReport")]);
}

async function copyMarkdownReport() {
  await copyText(battleReportMarkdownText(), [$("copyMarkdownReport")]);
}

async function copyDiscordReport() {
  await copyText(battleReportDiscordText(), [$("copyDiscordReport")]);
}

function exportReportImage() {
  const text = battleReportWhatsappText();
  const lines = text.split("\n");
  const width = 1080;
  const lineHeight = 30;
  const padding = 42;
  const height = Math.max(520, padding * 2 + lines.length * lineHeight);
  const escaped = lines.map((line, index) => {
    const safe = line
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
    return `<text x="${padding}" y="${padding + index * lineHeight}" fill="#f4f0e8" font-size="${index < 3 ? 30 : 22}" font-weight="${index < 3 ? 800 : 500}">${safe}</text>`;
  }).join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="100%" height="100%" fill="#101513"/><rect x="18" y="18" width="${width - 36}" height="${height - 36}" rx="14" fill="#171d1a" stroke="#d7b46a" stroke-opacity="0.55"/>${escaped}</svg>`;
  const image = new Image();
  const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  image.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);
    URL.revokeObjectURL(url);
    canvas.toBlob((pngBlob) => {
      if (!pngBlob) return;
      const link = document.createElement("a");
      link.href = URL.createObjectURL(pngBlob);
      link.download = `kill-team-battle-report-${new Date().toISOString().slice(0, 10)}.png`;
      document.body.append(link);
      link.click();
      URL.revokeObjectURL(link.href);
      link.remove();
    });
  };
  image.src = url;
}

async function createOnlineGameRoom() {
  const id = `KT-${Math.random().toString(36).slice(2, 6).toUpperCase()}-${Date.now().toString(36).slice(-4).toUpperCase()}`;
  const base = `${location.href.split("#")[0]}#room=${encodeURIComponent(id)}`;
  state.online = {
    gameId: id,
    enabled: false,
    mode: "online",
    role: "host",
    status: "Preparing online room",
    links: {
      a: `${base}&role=player-a`,
      b: `${base}&role=player-b`,
      spectator: `${base}&role=spectator`
    }
  };
  if (window.KTFirebaseSync) {
    const result = await window.KTFirebaseSync.createRoom(id, currentMatchPayload(), "host");
    if (result.ok) {
      state.online.enabled = true;
      state.online.uid = result.uid;
      state.online.status = "Live sync active";
      const listenResult = await window.KTFirebaseSync.subscribe(id, (data) => applyRemoteMatchPayload(data.payload));
      if (!listenResult.ok) {
        state.online.enabled = false;
        state.online.status = listenResult.reason || "Firebase listener failed; offline links only";
      }
    } else {
      state.online.status = result.reason || "Firebase unavailable; offline links only";
    }
  } else {
    state.online.status = "Firebase module unavailable; offline links only";
  }
  renderOnlineRoom();
  recordActivity("Online Room", "Create Game ID", "None", id);
  saveAutosaveNow();
}

async function testFirebaseConnection() {
  const statusOutput = $("onlineGameStatus");
  if (statusOutput) statusOutput.textContent = "Testing Firebase...";
  if (!window.KTFirebaseSync) {
    state.online.status = "Firebase module unavailable; offline mode active";
    renderOnlineRoom();
    return;
  }
  const result = await window.KTFirebaseSync.init();
  if (result.ok) {
    state.online.status = `Firebase ready - anonymous user ${String(result.uid || "").slice(0, 6)}...`;
  } else {
    state.online.status = result.reason || "Firebase unavailable; offline mode active";
  }
  renderOnlineRoom();
}

function renderOnlineRoom() {
  if (!$("onlineGameStatus")) return;
  syncOnlineModeText();
  const links = state.online.links;
  $("onlineGameStatus").textContent = state.online.gameId
    ? `Game ID: ${state.online.gameId} - ${state.online.status || "Offline links only"}`
    : state.online.status || "Local offline match";
  const target = $("onlineJoinLinks");
  if (!target) return;
  target.hidden = !links;
  if (!links) {
    target.replaceChildren();
    return;
  }
  target.replaceChildren(...[
    ["Player A", links.a],
    ["Player B", links.b],
    ["Spectator", links.spectator]
  ].map(([label, link]) => {
    const row = document.createElement("label");
    row.className = "online-link-row";
    const span = document.createElement("span");
    span.textContent = label;
    const input = document.createElement("input");
    input.value = link;
    input.readOnly = true;
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Copy";
    button.addEventListener("click", () => copyText(link, [button]));
    row.append(span, input, button);
    return row;
  }));
  applyRolePermissions();
}

function chooseLocalMode() {
  state.online = {
    gameId: "",
    links: null,
    enabled: false,
    mode: "local",
    role: "host",
    status: "Local offline match"
  };
  renderOnlineRoom();
  setPage("setup");
  saveAutosaveNow();
}

function chooseOnlineMode() {
  state.online = {
    ...state.online,
    mode: "online",
    role: state.online?.role || "host",
    status: state.online?.status || "Online room not created yet"
  };
  renderOnlineRoom();
  setPage("online");
  saveAutosaveNow();
}

async function joinOnlineGameFromUrl() {
  const params = new URLSearchParams(location.hash.replace(/^#/, ""));
  const roomId = params.get("room");
  if (!roomId) return;
  const role = params.get("role") || "spectator";
  const base = `${location.href.split("#")[0]}#room=${encodeURIComponent(roomId)}`;
  state.online = {
    gameId: roomId,
    enabled: false,
    mode: "online",
    role,
    status: "Joining online room",
    links: {
      a: `${base}&role=player-a`,
      b: `${base}&role=player-b`,
      spectator: `${base}&role=spectator`
    }
  };
  renderOnlineRoom();
  setPage("online");
  if (!window.KTFirebaseSync) {
    state.online.status = "Firebase module unavailable; offline mode active";
    renderOnlineRoom();
    return;
  }
  const result = await window.KTFirebaseSync.joinRoom(roomId, role, (data) => applyRemoteMatchPayload(data.payload));
  if (result.ok) {
    state.online.enabled = true;
    state.online.uid = result.uid;
    state.online.status = `Live sync active as ${role}`;
    state.page = "setup";
  } else {
    state.online.status = result.reason || "Firebase unavailable; offline mode active";
  }
  renderOnlineRoom();
  if (result.ok) setPage("setup");
}

async function loadRules() {
  try {
    const response = await fetch("data/kill-team-rules.json", { cache: "no-store" });
    if (response.ok) {
      rules = await response.json();
    }
  } catch {
    rules = embeddedRules;
  }
}

function wireEvents() {
  document.querySelectorAll("[data-page-target]").forEach((button) => {
    button.addEventListener("click", () => setPage(button.dataset.pageTarget));
  });
  document.querySelectorAll("[data-mode-target]").forEach((button) => {
    button.addEventListener("click", () => setGameMode(button.dataset.modeTarget));
  });
  ["playerAName", "playerBName", "communityTeamA", "communityTeamB"].forEach((id) => $(id).addEventListener("input", syncNames));
  ["A", "B"].forEach((player) => {
    $(`team${player}`).addEventListener("change", () => {
      renderTeamMeta(player.toLowerCase());
      updateSetupPlayerHeading(player.toLowerCase());
      renderTacSelect(player);
      resetTac(player.toLowerCase());
      setDeployOperativeDefault(player.toLowerCase());
      applyStartingEnemyDefaults();
      updateResult();
    });
    $(`tac${player}`).addEventListener("change", () => syncTac(player.toLowerCase()));
    $(`confirmTac${player}`).addEventListener("click", () => confirmTac(player.toLowerCase()));
  });
  $("critOp").addEventListener("change", () => {
    updateCritHelp();
    updateResult();
  });
  ["killzone", "mapNumber"].forEach((id) => $(id).addEventListener("change", updateBattleLog));
  $("turningPoint").addEventListener("change", handleTurningPointChange);
  $("tpMinus").addEventListener("click", () => adjustTurningPoint(-1));
  $("tpPlus").addEventListener("click", advanceBattleFlow);
  document.querySelectorAll("[data-end-tp-check]").forEach((input) => {
    input.addEventListener("change", () => updateEndTpCheck(input));
  });
  [
    ["equipmentReadyA", "a"],
    ["equipmentReadyB", "b"]
  ].forEach(([id, player]) => {
    const button = $(id);
    if (button) button.addEventListener("click", () => toggleEquipmentReady(player));
  });
  [
    ["equipmentSetupA", "a"],
    ["equipmentSetupB", "b"]
  ].forEach(([id, player]) => {
    const button = $(id);
    if (button) button.addEventListener("click", () => toggleEquipmentSetup(player));
  });
  $("initiativeA").addEventListener("click", () => toggleInitiative("a", "deploy"));
  $("initiativeB").addEventListener("click", () => toggleInitiative("b", "deploy"));
  $("gameInitiativeA").addEventListener("click", () => toggleInitiative("a", "battle"));
  $("gameInitiativeB").addEventListener("click", () => toggleInitiative("b", "battle"));
  $("setupGameStart").addEventListener("click", () => setPage("deploy"));
  $("deployGameStart").addEventListener("click", () => setPage("game"));
  $("gameEndButton").addEventListener("click", advanceBattleFlow);
  $("openBattleReportPage").addEventListener("click", () => setPage("report"));
  ["A", "B"].forEach((player) => {
    const playerKey = player.toLowerCase();
    $(`primary${player}`).addEventListener("change", () => syncPrimary(playerKey));
    $(`unlockPrimary${player}`).addEventListener("click", () => revealPrimary(playerKey));
  });
  document.querySelectorAll("[data-score]").forEach((input) => {
    input.addEventListener("input", () => updateScoreFromInput(input));
  });
  ["startEnemiesA", "startEnemiesB", "killsA", "killsB"].forEach((id) => {
    $(id).addEventListener("input", updateKillOpScores);
  });
  ["deployOpsA", "deployOpsB"].forEach((id) => {
    $(id).addEventListener("input", () => {
      const input = $(id);
      input.value = clampNumber(input.value, 5, 14);
      applyStartingEnemyDefaults();
      syncStepperDisplays();
    });
  });
  $("deployDoneA").addEventListener("click", () => toggleDeployDone("a"));
  $("deployDoneB").addEventListener("click", () => toggleDeployDone("b"));
  ["A", "B"].forEach((player) => {
    const playerKey = player.toLowerCase();
    $(`cp${player}`).addEventListener("input", () => {
      const oldValue = Number(state.cp[playerKey] || 0);
      state.cp[playerKey] = Number($(`cp${player}`).value || 0);
      if (oldValue !== state.cp[playerKey]) {
        recordActivity(playerName(playerKey), "CP", oldValue, state.cp[playerKey], () => {
          state.cp[playerKey] = oldValue;
          $(`cp${player}`).value = oldValue;
          syncStepperDisplays();
        });
      }
      syncStepperDisplays();
    });
  });
  $("clearScores").addEventListener("click", resetScores);
  $("resetMatchButton").addEventListener("click", resetMatch);
  $("endgamePrimary").addEventListener("click", endgameUnlockPrimary);
  $("liveEndgamePrimary").addEventListener("click", endgameUnlockPrimary);
  $("endgamePrimaryReveal").addEventListener("click", endgameUnlockPrimary);
  $("clockMinutes").addEventListener("change", setClockFromMinutes);
  $("clockToggle").addEventListener("click", toggleClockEnabled);
  $("startPause").addEventListener("click", toggleClock);
  $("passTurnA").addEventListener("click", () => passTurn("b"));
  $("passTurnB").addEventListener("click", () => passTurn("a"));
  $("livePassTurn").addEventListener("click", () => passTurn());
  $("resetClock").addEventListener("click", resetClockWithConfirm);
  $("unlockTacA").addEventListener("click", () => unlockTac("a"));
  $("unlockTacB").addEventListener("click", () => unlockTac("b"));
  if ($("exportCsv")) $("exportCsv").addEventListener("click", exportCsv);
  $("reportExportCsv").addEventListener("click", exportCsv);
  $("battleReportButton").addEventListener("click", generateBattleReport);
  $("copyBattleReportButton").addEventListener("click", copyBattleReport);
  $("copyMarkdownReport").addEventListener("click", copyMarkdownReport);
  $("copyDiscordReport").addEventListener("click", copyDiscordReport);
  $("exportReportImage").addEventListener("click", exportReportImage);
  $("stickyCopyBattleReport").addEventListener("click", copyBattleReport);
  $("stickyExportCsv").addEventListener("click", exportCsv);
  $("chooseLocalMode").addEventListener("click", chooseLocalMode);
  $("chooseOnlineMode").addEventListener("click", chooseOnlineMode);
  $("onlineProceedSetup").addEventListener("click", () => setPage("setup"));
  $("createOnlineGame").addEventListener("click", createOnlineGameRoom);
  $("testFirebaseSync").addEventListener("click", testFirebaseConnection);
  document.addEventListener("input", scheduleAutosave);
  document.addEventListener("change", scheduleAutosave);
  window.addEventListener("beforeunload", saveAutosaveNow);
  state.clock.timer = setInterval(tickClock, 250);
}

async function init() {
  await loadRules();
  renderSetupDate();
  renderSources();
  renderTeamSelects();
  renderCritSelect();
  renderTeamMeta("a");
  renderTeamMeta("b");
  renderTacSelect("A");
  renderTacSelect("B");
  enhanceScoreTableInputs();
  enhanceKillHelperInputs();
  enhanceDeployOperativeInputs();
  renderAllDeployPlans();
  renderLiveQuickControls();
  renderTpAccordion();
  renderCpControls();
  updatePrimarySelectTone("a");
  updatePrimarySelectTone("b");
  syncNames();
  recalculateAllPrimary();
  setClockFromMinutes();
  wireEvents();
  applyStartingEnemyDefaults();
  updateOpSummaries();
  updateKillOpScores();
  syncTurningPointDisplay();
  setGameMode("live");
  setPage(state.page || "start");
  renderEndTpChecklist();
  renderActivityLog();
  renderOnlineRoom();
  appReady = true;
  saveAutosaveNow();
  await joinOnlineGameFromUrl();
}

init();
