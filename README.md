# Samson Jebaraj - Personal Portfolio

A premium, modern, and interactive 3D portfolio website built with Next.js, Tailwind CSS, Framer Motion, and React Three Fiber.

## Features
- **3D Background**: Interactive particle system built with Three.js.
- **Glassmorphism Design**: Sleek and modern UI.
- **Animations**: Smooth scroll effects and page transitions using Framer Motion.
- **Dark Mode First**: Premium aesthetic tailored for high-end SaaS feel.
- **Fully Responsive**: Optimized for desktop, tablet, and mobile.
- **SEO Optimized**: Metadata, Open Graph, Sitemap, and Robots.txt configured.
- **Static Export**: Ready to be hosted on GitHub Pages.

## Tech Stack
- **Framework**: [Next.js](https://nextjs.org/) (App Router, Static Export)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics**: [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) & Drei
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```
   *This will generate a static HTML export in the `out` directory.*

## Deployment to GitHub Pages

1. In your `next.config.ts`, ensure `output: 'export'` and `images: { unoptimized: true }` are set (already configured).
2. If your repository name is NOT `your-username.github.io` (i.e., it's a project site like `samson-portfolio`), you must add a `basePath: '/samson-portfolio'` to `next.config.ts`.
3. Push your code to GitHub.
4. Go to **Settings > Pages**. (Note: If you are using a free GitHub account, your repository **must be Public** to use GitHub Pages).
5. Change the **Source** to **GitHub Actions**.
6. Use the Next.js workflow template provided by GitHub to build and deploy.

Alternatively, you can manually deploy the `out` directory to the `gh-pages` branch using a package like `gh-pages`.
