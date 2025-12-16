# Academic Jekyll Site

Minimal, typography-first academic homepage designed for AI/ML researchers and PhD applications. Compatible with GitHub Pages (no unsupported plugins).

## Quick Start
1. Clone this repo and install Ruby (>=2.7).  
2. Install dependencies: `bundle install` (optional for local preview on GitHub Pages stack).  
3. Run locally: `bundle exec jekyll serve` then open `http://localhost:4000`.

## Deploy on GitHub Pages
1. Create a new GitHub repo and push this project.  
2. In **Settings → Pages**, choose the default branch and `/ (root)` as the source.  
3. GitHub Pages builds automatically with the bundled Jekyll; no extra plugins are required.  
4. Update `_config.yml` with your `url` (e.g., `https://username.github.io/repo`) and `baseurl` if using a project site.

## Editing Content (Markdown Workflow)
- **Home, Research, Publications, Experience, CV pages:** Edit the corresponding `.md` files in the root (`index.md`, `research.md`, `publications.md`, `experience.md`, `cv.md`).  
- **Research projects:** Add Markdown files in `_research/` with front matter fields such as `title`, `description`, `keywords`, `priority`, and optional `links`.  
- **Publications:** Add Markdown files in `_publications/` using fields like `title`, `authors`, `venue`, `year`, `status`, `abstract`, and optional `links`.  
- **Navigation:** Controlled via `_data/navigation.yml`.  
- **Global settings:** `_config.yml` holds your name, description, colors, fonts, and social links.

## Replacing Assets
- **Profile photo:** Replace `assets/img/profile.svg` with your own image (keep the same filename or update the path in `_includes/sidebar.html`). Recommended size: ~400x400, square, it will be cropped to a circle.  
- **CV PDF:** Replace `assets/cv.pdf` with your CV. The link in the sidebar and `/cv/` page will update automatically.

## Theming & Styling
- Primary theme color and accent shades are set in `_config.yml` (`theme_color`, `accent_color`, `secondary_color`). Adjust these and rebuild to change the palette.  
- Typography uses serif for headings and clean sans-serif for body text; fonts are loaded via Google Fonts in `_includes/head.html`.  
- Styles live in `assets/css/main.scss` and use CSS variables for easy tweaks. A CSS-only dark mode toggle is built in.

## Accessibility & Performance Notes
- Responsive layout with a left sidebar that moves to the top on mobile.  
- Minimal animations; high-contrast text; semantic HTML for screen readers.  
- Avoid heavy media on the homepage to keep load fast on GitHub Pages.
