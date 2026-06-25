# Recovery Ready Static Site

Static ransomware readiness service site for Cloudflare Pages.

## Local testing

From this folder:

```bash
python3 -m http.server 8000
```

Open:

- English: http://127.0.0.1:8000/
- Spanish: http://127.0.0.1:8000/ES/

## Cloudflare Pages settings

Use these settings when creating the Pages project:

- Framework preset: None / Static site
- Build command: none
- Build output directory: ./
- Production branch: main

Deploy this folder as the site root:

```text
/Users/karen/Projects/RecoveryReady/ransomware-readiness-check/
```

## Formspree placeholder

The lead forms currently use this placeholder action:

```text
https://formspree.io/f/FORM_ID_HERE
```

Replace `FORM_ID_HERE` in both `index.html` and `ES/index.html` with the real Formspree form ID before publishing.
