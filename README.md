# w4zir.github.io

Static personal site for **Muhammad Mudassir Khan**, hosted on [GitHub Pages](https://pages.github.com/) from the `master` branch (or your configured default branch). There is no build step: the site is plain HTML, CSS, and a small script for the mobile navigation.

## What is in this repository

| Path | Purpose |
|------|--------|
| [`index.html`](index.html) | Landing page: hero, AI focus, experience, open-source projects, teaching link, research, skills, contact, footer. |
| [`style.css`](style.css) | Layout, typography, colors (CSS custom properties), responsive rules, and component styles. |
| [`assets/`](assets/) | Images and the resume PDF referenced from the homepage (e.g. headshot, `Muhammad_Mudassir_Khan_Resume_DS.pdf`). |
| [`about/index.html`](about/index.html) | Redirects `/about/` to the research section on the home page (`/#research`). |

Other directories or sites (for example course materials under `ml17s/`) may live in the same branch or in separate repos; this README describes the main site files above.

## How to add or change content

### Edit existing sections

1. Open **`index.html`** and find the `<section>` you want (each has an `id` such as `experience`, `projects`, `research`).
2. Change headings, paragraphs, lists, or links inside that section.
3. If you rename a section’s `id`, update every link that points to it: the **header nav** (desktop and mobile lists), any **in-page anchors** (`href="#..."`), and **`about/index.html`** if it should still redirect to the same topic.

### Add a new section

1. In **`index.html`**, add a new `<section id="your-section">` with a unique `id` in the order you want (usually after an existing section, before `contact` or `footer`).
2. Add matching entries in both navigation lists in the `<header>` (the main `.nav` and the `#nav-panel` mobile menu).
3. In **`style.css`**, reuse existing classes (`.section`, `.section-alt`, `.container`, `.narrow`, `.card`, etc.) so the new block matches the rest of the site. Add new classes only if you need a distinct layout.

### Styling and branding

- **Colors and spacing**: adjust the `:root` variables at the top of **`style.css`**.
- **Fonts**: the page loads **DM Sans** and **DM Serif Display** from Google Fonts in the `<head>` of **`index.html`**; change the `<link>` and the `--font-sans` / `--font-display` variables if you switch typefaces.

### Assets (images, PDFs)

1. Place files under **`assets/`**.
2. Reference them with paths relative to the site root, e.g. `src="assets/your-photo.jpg"` or `href="assets/your-file.pdf"`.
3. Commit new files so GitHub Pages can serve them.

### Resume PDF

Replace **`assets/Muhammad_Mudassir_Khan_Resume_DS.pdf`** with an updated file and keep the same filename, or add a new file and update every link in **`index.html`** and the footer that points to the resume.

## Local preview

From the repository root, start a simple HTTP server (Python 3 example):

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/` in a browser. This avoids `file://` quirks with paths and scripts.

## Publishing

Push commits to the branch GitHub Pages uses for this project. After a minute or two, changes appear at **https://w4zir.github.io/** (or your configured custom domain).
