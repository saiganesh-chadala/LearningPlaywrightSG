# LearningPlaywrightSG

Lightweight Playwright examples and notes used while learning Playwright.

Project layout
- `Chapter01/` — example Playwright script(s). Current file: `playwright1.js`.

Quick setup (Windows)
1. Install Node.js (LTS) and npm: https://nodejs.org/en/download/ or use `nvm-windows`.
2. From the project root run (PowerShell):

```powershell
cd C:\Users\10667616\PlayWright
# install project dependencies if package.json exists
npm install
```

Running Playwright examples
- This repo currently contains example scripts only. If you add `package.json` and install `playwright`, use:

```powershell
npx playwright test
# or run a single script with: node Chapter01/playwright1.js
```

Notes
- `.gitignore` is configured to ignore `node_modules/`, Playwright test outputs (`playwright-report/`, `screenshots/`, `videos/`), and common editor/OS files.
- This repo was initialized and pushed to `https://github.com/saiganesh-chadala/LearningPlaywrightSG.git`.

If you want, I can:
- Add a `package.json` scaffold and install `playwright`.
- Add GitHub Actions workflow to run Playwright tests on push.
- Update the initial commit author to your name/email and force-push.

— Created by automation. Ask for any changes.
