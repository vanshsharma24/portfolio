# Vansh | Web Developer Portfolio

A modern, responsive personal portfolio built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

## Sections

- **Hero** — intro, tagline, resume download, quick contact links
- **About** — summary and contact details
- **Skills** — animated technical & soft skill bars
- **Experience** — internship timeline
- **Projects** — featured project cards (To-Do List App, Expense Tracker)
- **Education** — academic background & achievements
- **Contact** — contact form (opens a pre-filled email)

## Tech Stack

- React 19 + Vite
- Tailwind CSS v4
- Framer Motion (animations)
- React Icons

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

## Deploy

This is a static Vite app — deploy the `dist/` folder to **Vercel**, **Netlify**, or **GitHub Pages**.
