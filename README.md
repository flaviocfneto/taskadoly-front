# Taskadoly Front

Public GitHub Pages host for the [Taskadoly](https://github.com/flaviocfneto/taskadoly)
front-end — the household jobs "Today" list. Same system as
[OCSW-ASSETS-PAGE](https://github.com/flaviocfneto/ocsw-assets-page): this repo
holds only the built Vite output; the source lives in the private backend repo
under [`taskadoly/app/`](https://github.com/flaviocfneto/taskadoly/tree/main/app).

## Deploy mode: "Deploy from a branch" (workflow-free)

Pages serves directly from files committed to the default branch:

- **Settings → Pages → Source**: **Deploy from a branch**
- **Branch**: the default branch
- **Folder**: `/ (root)`

Root of the repo contains the built Vite output:

```
index.html
config.js          ← runtime config (EXEC_URL + CLIENT_ID)
assets/
  index-<hash>.js
  index-<hash>.css
```

`config.js` is deliberately un-fingerprinted and loaded at runtime by
`index.html` — so a deployment change (new Apps Script `/exec` URL or OAuth
client) is a one-line edit here, no rebuild required.

## First-time setup

`config.js` ships with placeholders. The full go-live walkthrough (OAuth
client, sign-in configuration, Users allowlist, web-app deployment) lives in
the backend repo's
[SETUP.md](https://github.com/flaviocfneto/taskadoly/blob/main/SETUP.md).
The short version for this repo: put the Apps Script `/exec` URL in
`EXEC_URL`, the OAuth Web client ID in `CLIENT_ID`, push, and turn on Pages
as above. Only Google accounts on the spreadsheet's `Users` tab can sign in.

## Updating the site

1. In the private repo, `cd app && npm install && npm run build`.
2. Copy `app/dist/*` into this repo's root, overwriting — **but keep this
   repo's `config.js`** (the build ships placeholder values).
3. Commit and push. Pages picks up the change within a minute.

If you only need to rotate `config.js` (e.g. new Apps Script deployment URL),
edit it here directly and skip the rebuild.
