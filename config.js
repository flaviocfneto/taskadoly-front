// ============================================================
// Taskadoly — deployment configuration
// ------------------------------------------------------------
// This is the ONLY file you edit when the Apps Script deployment
// or API key changes. It is copied verbatim into the build output
// (Vite serves the /public folder at the site root) and loaded at
// runtime by index.html as <script src="./config.js"></script>,
// so rotating either value on the published site is a one-line
// edit in taskadoly-front — no rebuild required.
// ============================================================
window.TASKADOLY_CONFIG = {
  // Apps Script Web App URL.
  //   Deploy > New deployment > Web app  (Execute as: Me, Access: Anyone)
  //   Must end in /exec
  EXEC_URL: 'https://script.google.com/macros/s/REPLACE_WITH_DEPLOYMENT_ID/exec',

  // Shared mutation key, set in the spreadsheet via
  // "Taskadoly > Set API key". Reads (today's list) work without it;
  // ticking a job done requires it. Anyone reading the page source can
  // see it — acceptable for a family chores list (see README).
  API_KEY: 'REPLACE_WITH_API_KEY',
};
