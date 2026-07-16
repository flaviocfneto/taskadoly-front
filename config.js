// ============================================================
// taskadoollii — deployment configuration
// ------------------------------------------------------------
// This is the ONLY file you edit when the Apps Script deployment
// or OAuth client changes. It is copied verbatim into the build
// output (Vite serves the /public folder at the site root) and
// loaded at runtime by index.html as <script src="./config.js">,
// so rotating either value on the published site is a one-line
// edit in taskadoly-front — no rebuild required.
// ============================================================
window.TASKADOLY_CONFIG = {
  // Apps Script Web App URL.
  //   Deploy > New deployment > Web app  (Execute as: Me, Access: Anyone)
  //   Must end in /exec
  EXEC_URL: 'https://script.google.com/macros/s/REPLACE_WITH_DEPLOYMENT_ID/exec',

  // OAuth 2.0 Web client ID from Google Cloud Console.
  //   APIs & Services > Credentials > OAuth client ID (Web application)
  //   Must end in .apps.googleusercontent.com
  //   The SAME value must be set in Apps Script via
  //   "taskadoollii > Set Sign-In Client ID".
  CLIENT_ID: 'REPLACE_WITH_OAUTH_CLIENT_ID.apps.googleusercontent.com',
};
