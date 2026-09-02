# Vansh | Web Developer Portfolio

A modern, responsive personal portfolio built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

## Sections

- **Hero** — intro, tagline, resume download, quick contact links
- **About** — summary and contact details
- **Skills** — animated technical & soft skill bars
- **Experience** — internship timeline
- **Projects** — featured project cards (To-Do List App, Expense Tracker)
- **Education** — academic background & achievements
- **Contact** — contact form that sends real emails via EmailJS (falls back to a pre-filled mailto link if EmailJS isn't configured)

## Tech Stack

- React 19 + Vite
- Tailwind CSS v4
- Framer Motion (animations)
- React Icons
- EmailJS (contact form email delivery)

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

### Build for production

```bash
npm run build
npm run preview
```

## Customizing

All personal content (name, contact info, skills, projects, experience, education) lives in one place:

`src/data/portfolioData.js`

Update that file to change the content without touching any component code. To add a resume PDF, drop it in `public/` and update `resumeUrl` in `portfolioData.js`.

## Contact form setup (EmailJS)

The contact form sends real emails without a backend, using [EmailJS](https://www.emailjs.com):

1. Create a free account at [emailjs.com](https://www.emailjs.com).
2. **Email Services** → add a service (e.g. Gmail) → copy its **Service ID**.
3. **Email Templates** → create a template with `{{from_name}}`, `{{from_email}}`, and `{{message}}` variables → copy its **Template ID**.
4. **Account → General** → copy your **Public Key**.
5. Copy `.env.example` to `.env` and fill in the three values:

```bash
cp .env.example .env
```

6. Restart `npm run dev` so Vite picks up the new env vars.

Without these set, the button falls back to opening the visitor's own email app (mailto) instead of sending directly.

## Deploy

This is a static Vite app — deploy the `dist/` folder to **Vercel**, **Netlify**, or **GitHub Pages**. Remember to add the same `VITE_EMAILJS_*` environment variables in your hosting provider's dashboard so the contact form works on the live site.
