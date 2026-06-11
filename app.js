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
    { name: "Murderwing", faction: "Aeldari", classified: true, archetypes: ["Seek and Destroy","Recon"], notes: "Tac Op archetypes updated from player-verified faction reference." },
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
    b: false
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
  gameMode: "live",
  page: "setup"
};

const $ = (id) => document.getElementById(id);

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
  state.liveKillsByTp[player][tpIndex] = clampNumber(
    Number(state.liveKillsByTp[player][tpIndex] || 0) + delta,
    0,
    maxForThisTp
  );
  syncLiveKillsToInputs();
  updateKillOpScores();
  renderLiveQuickControls();
}

function makeLiveKillStepper(player, tpIndex) {
  const wrapper = document.createElement("div");
  wrapper.className = "stepper-row compact-stepper live-kill-stepper";
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
        makeStepper("Tac", scoreInput(player, "tac", index), "compact-stepper")
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
  if ($("setupPreviewPlayers")) $("setupPreviewPlayers").textContent = `${nameA} - ${teamA} vs ${nameB} - ${teamB}`;
  if ($("setupPreviewMission")) $("setupPreviewMission").textContent = `Mission: ${crit} / ${killzone} / ${map}`;
}

function renderSources() {
  $("sourceCard").innerHTML = `<span class="status-dot"></span><span>${rules.rulesVersion.name}<br>Checked ${rules.rulesVersion.checkedDate}</span>`;
  $("sourceLinks").replaceChildren(
    ...rules.rulesVersion.sources.map((source) => {
      const link = document.createElement("a");
      link.href = source.url;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = source.label;
      return link;
    })
  );
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
  select.value = "";
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
  updateDeployReadinessSummary();
  updateBattleLog();
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
  const node = document.createElement("div");
  node.className = "battle-log-item team-line-item";
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
}

function resetScores() {
  if (!confirm("Clear all scores, kills, and match notes?")) return;
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
}

function resetMatch() {
  if (!confirm("Reset the whole match and clear all current information? This cannot be undone.")) return;

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
  setPage("setup");
}

function syncPrimary(player) {
  const label = player.toUpperCase();
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

function revealPrimary(player) {
  const label = player.toUpperCase();
  state.primary[player].revealed = true;
  updatePrimarySelectTone(player);
  $(`primaryBox${label}`).classList.remove("primary-hidden");
  $(`primarySealed${label}`).hidden = true;
  recalculatePrimary(player);
  updateTotals();
  updateTp4PrimarySummary();
  renderGameTp1Controls();
  updateDeployReadinessSummary();
}

function resetPrimary(player) {
  const label = player.toUpperCase();
  state.primary[player].choice = "";
  $(`primary${label}`).value = "";
  revealPrimary(player);
  syncPrimary(player);
}

function endgameUnlockPrimary() {
  revealPrimary("a");
  revealPrimary("b");
  updateTp4PrimarySummary();
}

function sealTac(player) {
  const label = player.toUpperCase();
  state.tacOps[player].revealed = false;
  $(`tac${label}`).classList.add("tac-hidden");
  $(`tac${label}Help`).textContent = "";
  $(`tacSealed${label}`).hidden = false;
  updateBattleLog();
}

function revealTac(player) {
  const label = player.toUpperCase();
  state.tacOps[player].revealed = true;
  $(`tac${label}`).classList.remove("tac-hidden");
  $(`tacSealed${label}`).hidden = true;
  updateTacHelp(player);
  updateBattleLog();
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
  if (selectedTac(player)) {
    sealTac(player);
    return;
  }
  revealTac(player);
}

function handleTurningPointChange() {
  syncTurningPointDisplay();
  updateKillOpScores();
  updateBattleLog();
  renderLiveQuickControls();
  renderTpAccordion();
  syncStepperDisplays();
}

function syncTurningPointDisplay() {
  const tp = clampNumber(Number($("turningPoint")?.value || 1), 1, 4);
  if ($("turningPointDisplay")) $("turningPointDisplay").textContent = `TURNING POINT ${tp}`;
  if ($("tpMinus")) $("tpMinus").disabled = tp <= 1;
  if ($("tpPlus")) $("tpPlus").disabled = tp >= 4;
  if ($("tp1GameSetupPanel")) $("tp1GameSetupPanel").hidden = false;
  if ($("gamePrimaryGroup")) $("gamePrimaryGroup").hidden = tp !== 1;
  if ($("tp4PrimaryPanel")) $("tp4PrimaryPanel").hidden = tp !== 4;
  if ($("liveTp4PrimaryPanel")) $("liveTp4PrimaryPanel").hidden = tp !== 4;
  updateTp4PrimarySummary();
  renderGameTp1Controls();
}

function adjustTurningPoint(delta) {
  const select = $("turningPoint");
  const next = clampNumber(Number(select.value || 1) + delta, 1, 4);
  select.value = String(next);
  handleTurningPointChange();
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
function toggleInitiative(player) {
  state.initiative.a = player === "a";
  state.initiative.b = player === "b";
  syncInitiativeButton("a");
  syncInitiativeButton("b");
  renderGameTp1Controls();
  updateDeployReadinessSummary();
}

function syncInitiativeButton(player) {
  const label = playerLabel(player);
  const name = playerName(player);
  [`initiative${label}`, `gameInitiative${label}`].forEach((id) => {
    const button = $(id);
    if (!button) return;
    button.classList.toggle("ready-active", state.initiative[player]);
    button.textContent = state.initiative[player] ? `Initiative - ${name}` : `Player ${label} - ${name}`;
  });
}

function deployReadiness(player) {
  const tacReady = Boolean(selectedTac(player)) || !state.tacOps[player].revealed;
  const steps = [
    state.initiative[player],
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

function otherVpLine(player) {
  const value = Number(state.scores[player].other || 0);
  return value === 0 ? null : `Other VP: ${value}`;
}

function otherVpDetail(player) {
  const value = Number(state.scores[player].other || 0);
  return value === 0 ? null : reportDetail("Ruling / Other VP", value, "report-vp-row");
}

function reportTeamLabel(player) {
  const team = selectedTeam(player);
  return team ? `${team.name} - ${team.faction}` : "Not selected";
}

function reportTacLabel(player) {
  const tac = selectedTac(player);
  if (!state.tacOps[player].revealed) return "Sealed up - locked";
  return tac ? `${tac.name} - ${tac.archetype}` : "Not selected";
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
    ["Archetype", team?.archetypes.join(" / ") || "Not selected"],
    ["Tac Op", state.tacOps[player].revealed ? (tac ? `${tac.name} - ${tac.archetype}` : "Not selected") : "Sealed up - locked"],
    ["Primary", exportedPrimaryLabel(player)],
    ["Primary VP", exportedPrimaryScore(player) || 0],
    ["Equipment Selection", state.equipment[player] ? "Revealed" : "Not revealed"],
    ["Equipment Setup", state.equipmentSetup[player] ? "Ready" : "Not marked ready"],
    ["CP", state.cp[player]],
    ["Starting Enemy Operatives", kill.startingEnemies],
    ["Enemy Operatives Incapacitated", kill.kills],
    ["Kill Grade", `KG ${kill.grade}`],
    ["Kill Op VP", state.scores[player].kill],
    ["Total VP", sumScore(player)]
  ];
}

function tpReportRows() {
  return [1, 2, 3].map((index) => {
    const tp = index + 1;
    const aCrit = Number(state.scores.a.crit[index] || 0);
    const bCrit = Number(state.scores.b.crit[index] || 0);
    const aTac = Number(state.scores.a.tac[index] || 0);
    const bTac = Number(state.scores.b.tac[index] || 0);
    return [
      `TP${tp}`,
      aCrit,
      aTac,
      aCrit + aTac,
      bCrit,
      bTac,
      bCrit + bTac
    ];
  });
}

function playerReportLine(player) {
  const label = playerLabel(player);
  const team = selectedTeam(player);
  const kill = killOpDetails(player);
  const critTotal = state.scores[player].crit.reduce((total, value) => total + Number(value || 0), 0);
  const tacTotal = state.scores[player].tac.reduce((total, value) => total + Number(value || 0), 0);
  return [
    `Player ${label}: ${playerName(player)}`,
    `Team: ${team ? `${team.name} - ${team.faction}` : "Not selected"}`,
    `Tac Op: ${reportTacLabel(player)}`,
    `Primary: ${exportedPrimaryLabel(player)}`,
    `Crit VP: ${critTotal}`,
    `Tac VP: ${tacTotal}`,
    `Kill Op VP: ${state.scores[player].kill}`,
    `Primary VP: ${exportedPrimaryScore(player) || 0}`,
    otherVpLine(player),
    `Total VP: ${sumScore(player)}`,
    `Kill Grade: KG ${kill.grade}`,
    `Enemy Operatives Incapacitated: ${kill.kills}`
  ].filter(Boolean).join("\n");
}

function reportPlayerCard(player) {
  const label = playerLabel(player);
  const kill = killOpDetails(player);
  const card = document.createElement("article");
  card.className = `report-player-card player-tone-${player}`;

  const head = document.createElement("div");
  head.className = "report-player-head";
  const title = document.createElement("div");
  const eyebrow = document.createElement("p");
  eyebrow.className = "eyebrow";
  eyebrow.textContent = `Player ${label}`;
  const name = document.createElement("h3");
  name.textContent = playerName(player);
  const team = document.createElement("p");
  team.textContent = reportTeamLabel(player);
  title.append(eyebrow, name, team);
  const total = document.createElement("output");
  total.textContent = `${sumScore(player)} VP`;
  head.append(title, total);

  const details = document.createElement("div");
  details.className = "report-detail-grid";
  details.append(...[
    reportDetail("Archetype", selectedTeam(player)?.archetypes.join(" / ") || "Not selected"),
    reportDetail("Tac Op", reportTacLabel(player)),
    reportDetail("Primary", exportedPrimaryLabel(player)),
    reportDetail("Crit Op VP", scoreTotal(player, "crit"), "report-vp-row"),
    reportDetail("Tac Op VP", scoreTotal(player, "tac"), "report-vp-row"),
    reportDetail("Kill Op VP", state.scores[player].kill, "report-vp-row"),
    reportDetail("Primary VP", exportedPrimaryScore(player) || 0, "report-vp-row"),
    otherVpDetail(player),
    reportDetail("Kill Grade", `KG ${kill.grade}`),
    reportDetail("Enemy Operatives Incapacitated", kill.kills),
    reportDetail("Final Total VP", `${sumScore(player)} VP`, "report-vp-row report-total-row")
  ].filter(Boolean));

  card.append(head, details);
  return card;
}

function battleReportWhatsappText() {
  const crit = selectedCrit();
  const notes = $("matchNotes").value.trim();
  const tpLines = tpReportRows().map((row) => {
    const [tp, aCrit, aTac, aTotal, bCrit, bTac, bTotal] = row;
    return `${tp} - ${playerName("a")} Crit ${aCrit} / Tac ${aTac} / TP VP ${aTotal} | ${playerName("b")} Crit ${bCrit} / Tac ${bTac} / TP VP ${bTotal}`;
  });

  return [
    "Kill Team Battle Report",
    "",
    `${playerName("a")} ${sumScore("a")} - ${sumScore("b")} ${playerName("b")}`,
    `Result: ${reportWinnerText()}`,
    "",
    `Mission: ${crit?.name || "Not selected"}`,
    `Killzone: ${$("killzone").value}`,
    `Map: ${$("mapNumber").value}`,
    `Current TP: TP${$("turningPoint").value}`,
    "",
    playerReportLine("a"),
    "",
    playerReportLine("b"),
    "",
    "Turning Point Breakdown:",
    ...tpLines,
    "",
    "Notes:",
    notes || "No notes recorded.",
    "",
    `Generated: ${new Date().toLocaleString()}`
  ].join("\n");
}

function generateBattleReport() {
  tickClock();
  const report = $("battleReport");
  const panel = $("battleReportPanel");
  const crit = selectedCrit();
  const notes = $("matchNotes").value.trim();
  const teamA = selectedTeam("a");
  const teamB = selectedTeam("b");
  const totalA = sumScore("a");
  const totalB = sumScore("b");

  const summaryCard = document.createElement("section");
  summaryCard.className = `report-summary-card ${totalA > totalB ? "winner-a" : totalB > totalA ? "winner-b" : "winner-draw"}`;
  const score = document.createElement("h2");
  score.className = "report-final-score";
  score.innerHTML = `<span class="score-a">${playerName("a")} ${totalA}</span><span>-</span><span class="score-b">${totalB} ${playerName("b")}</span>`;
  const winner = document.createElement("p");
  winner.className = "report-winner";
  winner.textContent = `Result: ${reportWinnerText()}`;
  const facts = document.createElement("div");
  facts.className = "report-summary-facts";
  facts.append(
    reportDetail("Mission", crit?.name || "Not selected"),
    reportDetail("Killzone / Map", `${$("killzone").value} / ${$("mapNumber").value}`),
    reportDetail("Teams", `${teamA?.name || "Not selected"} vs ${teamB?.name || "Not selected"}`),
    reportDetail("Generated", new Date().toLocaleString())
  );
  summaryCard.append(score, winner, facts);

  const playerGrid = document.createElement("div");
  playerGrid.className = "report-player-grid";
  playerGrid.append(reportPlayerCard("a"), reportPlayerCard("b"));

  const tpTable = makeReportTable(
    ["Turning Point", `${playerName("a")} Crit`, `${playerName("a")} Tac`, `${playerName("a")} TP VP`, `${playerName("b")} Crit`, `${playerName("b")} Tac`, `${playerName("b")} TP VP`],
    tpReportRows(),
    "tp-report-table"
  );
  const tpSection = document.createElement("section");
  tpSection.className = "report-section report-tp-section";
  const tpTitle = document.createElement("h3");
  tpTitle.textContent = "Turning Point Breakdown";
  const tpCards = document.createElement("div");
  tpCards.className = "report-tp-accordion";
  tpReportRows().forEach((row) => {
    const [tp, aCrit, aTac, aTotal, bCrit, bTac, bTotal] = row;
    const details = document.createElement("details");
    details.className = "report-tp-card";
    details.open = true;
    const summary = document.createElement("summary");
    summary.textContent = tp;
    const body = document.createElement("div");
    body.className = "report-tp-card-body";
    body.append(
      reportDetail(playerName("a"), `Crit ${aCrit} / Tac ${aTac} / TP VP ${aTotal}`, "player-a-text"),
      reportDetail(playerName("b"), `Crit ${bCrit} / Tac ${bTac} / TP VP ${bTotal}`, "player-b-text")
    );
    details.append(summary, body);
    tpCards.append(details);
  });
  tpSection.append(tpTitle, tpTable, tpCards);

  const notesBlock = document.createElement("section");
  notesBlock.className = "report-notes";
  const notesTitle = document.createElement("h3");
  notesTitle.textContent = "Notes / Rulings";
  const notesText = document.createElement("p");
  notesText.textContent = notes || "No notes recorded.";
  notesBlock.append(notesTitle, notesText);

  report.replaceChildren(summaryCard, playerGrid, tpSection, notesBlock);
  panel.hidden = false;
}

function battleReportPlainText() {
  return battleReportWhatsappText();
}

async function copyBattleReport() {
  const text = battleReportPlainText();
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
  const button = $("copyBattleReportButton");
  [button, $("stickyCopyBattleReport")].filter(Boolean).forEach((copyButton) => {
    copyButton.textContent = "Copied";
  });
  setTimeout(() => {
    [button, $("stickyCopyBattleReport")].filter(Boolean).forEach((copyButton) => {
      copyButton.textContent = "Copy Summary";
    });
  }, 1400);
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
  });
  $("critOp").addEventListener("change", () => {
    updateCritHelp();
    updateResult();
  });
  ["killzone", "mapNumber"].forEach((id) => $(id).addEventListener("change", updateBattleLog));
  $("turningPoint").addEventListener("change", handleTurningPointChange);
  $("tpMinus").addEventListener("click", () => adjustTurningPoint(-1));
  $("tpPlus").addEventListener("click", () => adjustTurningPoint(1));
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
  $("initiativeA").addEventListener("click", () => toggleInitiative("a"));
  $("initiativeB").addEventListener("click", () => toggleInitiative("b"));
  $("gameInitiativeA").addEventListener("click", () => toggleInitiative("a"));
  $("gameInitiativeB").addEventListener("click", () => toggleInitiative("b"));
  $("setupGameStart").addEventListener("click", () => setPage("deploy"));
  $("deployGameStart").addEventListener("click", () => setPage("game"));
  $("gameEndButton").addEventListener("click", () => setPage("endgame"));
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
      state.cp[playerKey] = Number($(`cp${player}`).value || 0);
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
  $("stickyCopyBattleReport").addEventListener("click", copyBattleReport);
  $("stickyExportCsv").addEventListener("click", exportCsv);
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
  setPage("setup");
}

init();
