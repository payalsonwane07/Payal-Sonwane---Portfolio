# Payal Sonwane — AI Automation Portfolio

A professional static portfolio for **Payal Sonwane**, Electrical Engineering graduate focused on AI automation, Python, data workflows, and practical business tools.

**Live site (after GitHub Pages):** `https://payalsonwane07.github.io/Payal-Sonwane---Portfolio/`

---

## Pages

| File | Description |
|------|-------------|
| `index.html` | Home — hero, stats, skills |
| `about.html` | About — bio, timeline, skill bars |
| `projects.html` | Six automation projects with filters |
| `contact.html` | Contact details + Supabase contact form |
| `styles.css` | Shared styles (dark/light theme, animations) |
| `script.js` | Navigation, theme toggle, form, scroll effects |

---

## Run locally

### Option 1 — Open directly
Double-click `index.html` or open it in your browser.

> For the contact form, use a local server (Option 2) so `fetch` to Supabase works reliably.

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
- [Supabase](https://supabase.com) — browser-side database storage for contact submissions
- Google Fonts: Playfair Display, Poppins
- GitHub Pages — static hosting (no backend)

---

## Contact form — Supabase setup

This contact form saves messages directly to your Supabase `contacts` table using the browser-side Supabase client.

### 1. Create a Supabase project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up and create a new project
3. In the SQL Editor, run:

```sql
CREATE TABLE contacts (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 2. Enable Row Level Security (RLS)

1. Go to your table → **RLS** tab
2. Create a policy to allow public inserts:
   - Policy type: **Insert**
   - Role: **anon**
   - Condition: Always true
   - With check: Always true

### 3. Add your credentials

1. Go to **Settings** → **API** in Supabase
2. Copy your **Project URL** and **anon key**
3. Open `supabase-config.js` and replace:

```javascript
window.SUPABASE_URL = "https://YOUR_PROJECT_URL.supabase.co";
window.SUPABASE_ANON_KEY = "YOUR_ANON_KEY";
```

### 4. Test the form

1. Run a local server (`npx serve .`)
2. Open `http://localhost:3000/contact.html`
3. Submit a test message
4. Check your Supabase `contacts` table to confirm the row appears

---

## Deploy to GitHub Pages

### Step 1 — Create a GitHub repository

On GitHub, create a new repository (e.g. `payal-portfolio`). Do not add a README if you already have one locally.

### Step 2 — Push your code

In PowerShell or Terminal, from the `payal-portfolio` folder:

```bash
git init
git add .
git commit -m "Add Supabase contact form"
git branch -M main
git remote add origin https://github.com/payalsonwane07/Payal-Sonwane---Portfolio.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages

1. Open your repo on GitHub
2. **Settings** → **Pages**
3. **Source:** Deploy from a branch
4. **Branch:** `main` → folder **`/ (root)`**
5. Click **Save**
6. Wait **2–30 minutes** for the site to build
7. Your URL will be: `https://payalsonwane07.github.io/Payal-Sonwane---Portfolio/`

### Important for GitHub Pages

- All site files (`index.html`, `styles.css`, `script.js`, etc.) must be at the **repository root**, not inside a subfolder, unless you use a custom publish path.
- After deploying, test the contact form on the live URL (Supabase works on HTTPS).

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
