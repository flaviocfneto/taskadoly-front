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
  EXEC_URL: 'https://script.google.com/macros/s/AKfycbzeT2--q8n7nSj5fYwtdwDCCUh2RKTq1O_75-LK7k1EcHw1ph_R4e3AYC_ezG0wmkvb/exec',

  // OAuth 2.0 Web client ID from Google Cloud Console.
  //   APIs & Services > Credentials > OAuth client ID (Web application)
  //   Must end in .apps.googleusercontent.com
  //   The SAME value must be set in Apps Script via
  //   "taskadoollii > Set Sign-In Client ID".
  CLIENT_ID: '843575155529-hik9h9atsufe0ilrds6uaf50pm3nnu2k.apps.googleusercontent.com',
};
