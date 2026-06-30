# Md Mushfique Rahman — Personal Portfolio

A fast, responsive academic portfolio built with HTML, CSS, and minimal JavaScript. Designed for PhD applications, research assistantships, internships, and professional networking.

## Live Preview

Open `index.html` in your browser, or serve locally:

```bash
# Python
python -m http.server 8080

# Node.js (if npx is available)
npx serve .
```

Then visit `http://localhost:8080`.

## Project Structure

```
PortFolio/
├── index.html          # Main page
├── contact.html        # Contact page with email form
├── style.css           # Styles
├── script.js           # Navigation & scroll behavior
├── assets/
│   ├── profile.png     # Profile photo
│   ├── favicon.svg     # Site favicon
│   └── Resume_Md_Mushfique_Rahman_2026 (Main).pdf
└── README.md
```

## Customization

### Profile Photo

The profile photo is at `assets/profile.png`. To replace it, swap that file and keep the same filename, or update the `<img>` tag in `index.html`.

### CV

Place your CV at `assets/Resume_Md_Mushfique_Rahman_2026 (Main).pdf`. If you rename the file, update both download links in `index.html`.

### Custom Domain (CNAME)

If you use a custom domain with GitHub Pages:

1. Create a file named `CNAME` in the project root (not inside `assets/`)
2. Add your domain on a single line, e.g.:

```
yourdomain.com
```

3. Configure DNS with your domain provider (A records or CNAME to GitHub Pages)

## Deploy to GitHub Pages

### Option 1: Deploy from the `main` branch (simplest)

1. Create a new GitHub repository (e.g. `portfolio` or `MdMushfiqueRahman.github.io`)

2. Push this project:

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

3. On GitHub: **Settings → Pages**

4. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main** / **/ (root)**

5. Save. Your site will be live at:
   - `https://YOUR_USERNAME.github.io/YOUR_REPO/` (project repo)
   - `https://YOUR_USERNAME.github.io/` (if repo is named `YOUR_USERNAME.github.io`)

### Option 2: User/organization site

Name the repository exactly `YOUR_USERNAME.github.io` and push to `main`. GitHub Pages serves it from the root automatically.

### Verify after deploy

- [ ] Home page loads
- [ ] Navigation and mobile menu work
- [ ] CV PDF downloads correctly
- [ ] External links (GitHub, LinkedIn, email) work
- [ ] Site looks correct on mobile

## Performance Notes

- No JavaScript frameworks — vanilla HTML/CSS/JS only
- SVG profile placeholder and favicon (minimal file size)
- System fonts with optional Google Fonts preload
- Semantic HTML and accessible color contrast
- `prefers-reduced-motion` respected

## License

Personal portfolio — content © Md Mushfique Rahman.
