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
| `contact.html` | Contact details + **Supabase** form |
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
- [Supabase](https://supabase.com) — PostgreSQL database for form submissions
- Google Fonts: Playfair Display, Poppins
- GitHub Pages — static hosting (no backend)

---

## Contact form — Supabase setup

Submissions are stored in **Supabase PostgreSQL database**. All form data is saved securely.

### 1. Create a Supabase table

1. Go to [https://supabase.com](https://supabase.com) and open your project
2. In **Database → Table Editor**, create a table named `form`
3. Add these columns:
   - `id` (int8, primary key, auto-increment)
   - `full_name` (text)
   - `email` (text)
   - `subject` (text)
   - `message` (text)
   - `created_at` (timestamp with time zone, default `now()`)
   - `is_read` (boolean, default `false`)

### 2. Set up authentication

1. In **Settings → API**, copy your **Project URL** and **anon public key**
2. Enable Row Level Security (RLS) on the `form` table for public inserts
3. Add an RLS policy: `CREATE POLICY "Allow public inserts" ON form FOR INSERT WITH CHECK (true);`

### 3. Add credentials to HTML

Open `contact.html` and add this in the `<head>` (before `script.js`):

```html
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script>
  window.supabaseClient = supabase.createClient(
    'YOUR_PROJECT_URL',
    'YOUR_ANON_KEY'
  );
</script>
```

Replace `YOUR_PROJECT_URL` and `YOUR_ANON_KEY` with your Supabase credentials.

### 4. Test the form

1. Run a local server (`npx serve .`)
2. Open `http://localhost:3000/contact.html`
3. Submit a test message
4. Check your Supabase dashboard → `form` table for the entry
5. Confirm success message appears on the page

---

## Deploy to GitHub Pages

### Step 1 — Create a GitHub repository

On GitHub, create a new repository (e.g. `payal-portfolio`). Do not add a README if you already have one locally.

### Step 2 — Push your code

In PowerShell or Terminal, from the `payal-portfolio` folder:

```bash
git init
git add .
git commit -m "Add contact form with Supabase"
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
