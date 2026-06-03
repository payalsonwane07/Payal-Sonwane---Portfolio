# Payal Sonwane — AI Automation Portfolio

A professional static portfolio for **Payal Sonwane**, Electrical Engineering graduate focused on AI automation, Python, data workflows, and practical business tools.

**Live site (after GitHub Pages):** `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

---

## Pages

| File | Description |
|------|-------------|
| `index.html` | Home — hero, stats, skills |
| `about.html` | About — bio, timeline, skill bars |
| `projects.html` | Six automation projects with filters |
| `contact.html` | Contact details + **Web3Forms** email form |
| `styles.css` | Shared styles (dark/light theme, animations) |
| `script.js` | Navigation, theme toggle, form, scroll effects |

---

## Run locally

### Option 1 — Open directly
Double-click `index.html` or open it in your browser.

> For the contact form, use a local server (Option 2) so `fetch` to Web3Forms works reliably.

### Option 2 — Simple local server (recommended)

```bash
cd payal-portfolio
npx --yes serve .
```

Then open `http://localhost:3000` (or the URL shown in the terminal).

### Option 3 — npm script (optional)

```bash
npm install
npm run dev
```

---

## Technologies

- HTML5, CSS3 (custom properties, glass-morphism, animations)
- Vanilla JavaScript (Intersection Observer, Fetch API)
- [Web3Forms](https://web3forms.com) — serverless contact form → your email
- Google Fonts: Playfair Display, Poppins
- GitHub Pages — static hosting (no backend)

---

## Contact form — Web3Forms setup

Submissions go **directly to your email inbox** via Web3Forms. No server code required.

### 1. Get your access key

1. Go to [https://web3forms.com](https://web3forms.com)
2. Sign up with **payalsonwane791@gmail.com** (or your preferred inbox)
3. Verify your email
4. Copy your **Access Key** from the dashboard

### 2. Add the key to the project

Open `contact.html` and find:

```html
<input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
```

Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your real key.

> **Note:** The access key is public in static HTML (normal for Web3Forms). You can restrict domains in the Web3Forms dashboard after deploy.

### 3. Where the data goes

- Visitor fills: **Name**, **Email**, **Message**
- Browser sends a POST request to `https://api.web3forms.com/submit`
- Web3Forms emails the submission to the address you verified at signup
- You can also view submissions in the Web3Forms dashboard

### 4. Test the form

1. Run a local server (`npx serve .`)
2. Open `http://localhost:3000/contact.html`
3. Submit a test message with your real email
4. Check your inbox (and spam folder)
5. Confirm success message appears on the page

### Spam protection

A hidden **honeypot** field (`botcheck`) is included. Bots that fill it are rejected by Web3Forms.

---

## Deploy to GitHub Pages

### Step 1 — Create a GitHub repository

On GitHub, create a new repository (e.g. `payal-portfolio`). Do not add a README if you already have one locally.

### Step 2 — Push your code

In PowerShell or Terminal, from the `payal-portfolio` folder:

```bash
git init
git add .
git commit -m "Add contact form with Web3Forms"
git branch -M main
git remote add origin https://github.com/PayalSonwane07/payal-portfolio.git
git push -u origin main
```

Replace `PayalSonwane07/payal-portfolio` with your username and repo name.

### Step 3 — Enable GitHub Pages

1. Open your repo on GitHub
2. **Settings** → **Pages**
3. **Source:** Deploy from a branch
4. **Branch:** `main` → folder **`/ (root)`**
5. Click **Save**
6. Wait **2–30 minutes** for the site to build
7. Your URL will be: `https://PayalSonwane07.github.io/payal-portfolio/`

### Important for GitHub Pages

- All site files (`index.html`, `styles.css`, `script.js`, etc.) must be at the **repository root**, not inside a subfolder, unless you use a custom publish path.
- After deploying, test the contact form on the live URL (Web3Forms works on HTTPS).

---

## Project structure

```
payal-portfolio/
├── index.html
├── about.html
├── projects.html
├── contact.html
├── styles.css
├── script.js
├── README.md
├── .gitignore
└── package.json          (optional, for local dev)
```

---

## Contact

- **Email:** payalsonwane791@gmail.com  
- **Phone:** 8149160901  
- **Location:** Nagpur, Maharashtra  
- **GitHub:** [github.com/PayalSonwane07](https://github.com/PayalSonwane07)

---

© 2026 Payal Sonwane | Built with curiosity and creativity.
>>>>>>> dd2e558 (Add contact form with Web3Forms)
