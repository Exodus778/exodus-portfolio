# Exodus Portfolio

A clean, responsive personal portfolio I  built with React and Vite. This project provides a fast development experience (HMR), a minimal ESLint setup, and a structure that's easy to customize and extend.

## Features

- Fast development with Vite and React
- Hot Module Replacement (HMR) for instant feedback during development
- Minimal ESLint configuration to help maintain consistent code quality
- Responsive layout suitable for showcasing projects, experience, and contact info
- Easy to deploy to Vercel, Netlify, GitHub Pages, and other static hosts

## Tech stack

- React
- Vite
- JavaScript (ESNext)
- HTML & CSS
- ESLint

## Demo

https://exodus-portfolio-nine.vercel.app/

## Quick start

Prerequisites

- Node.js 16+ (or latest LTS)
- npm, Yarn, or pnpm

Clone the repository:

```bash
git clone https://github.com/Exodus778/exodus-portfolio.git
cd exodus-portfolio
```

Install dependencies (npm):

```bash
npm install
```

Or with Yarn:

```bash
yarn
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open the app at http://localhost:5173 (or the URL shown in the terminal).

Build for production:

```bash
npm run build
# or
yarn build
```

Preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

Lint the code:

```bash
npm run lint
# or
yarn lint
```

> If your project uses a different package manager (pnpm), replace the commands accordingly.

## Project structure 

A typical structure for this portfolio repository:

```
.
├─ public/                # Static assets
├─ src/
│  ├─ assets/             # Images, fonts, icons
│  ├─ components/         # Reusable UI components
│  ├─ pages/              # Page-level components (Home, Projects, About, Contact)
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ styles/             # Global and component styles
├─ index.html
├─ package.json
├─ vite.config.js
└─ README.md
```

Adjust paths to match your repository layout.

## Customization notes

- Replace placeholder content (name, bio, projects, contact) in `src/pages` and components.
- Add or update images in `src/assets`.
- Update metadata (title, description) in `index.html`.
- If you want stricter linting, enable TypeScript and add type-aware ESLint rules or extend the ESLint configuration.

## Deployment

This is a static single-page app — it can be deployed to most static hosts.

- Vercel: Import the repository and set the build command to `npm run build` and the output directory to `dist`.
- Netlify: Connect the repo, set build command to `npm run build` and publish directory to `dist`.
- GitHub Pages: Build locally and push `dist` to the branch used for Pages (or use a deploy action).

Example (generic):

```bash
npm run build
# Deploy the contents of the 'dist' folder to your chosen host
```

## Contributing

Contributions are welcome. Suggested flow:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feat/my-feature`.
3. Make your changes and run the app locally to verify.
4. Open a pull request with a clear description of the change.

If you plan to submit code, run the linter and keep commits focused and documented.



## Contact

CREATED and Maintained by Exodus — https://github.com/Exodus778

---

Made with ❤️ using React and Vite.
