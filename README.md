# TerraBot – Autonomous Agricultural Robotics Platform

![TerraBot field robot](./src/assets/hero-robot.jpg)

TerraBot is RoboSpark Solutions’ interactive product site for AI-powered agricultural robotics. The experience covers product positioning, feature deep dives, dynamic simulations, and performance dashboards aimed at growers and agritech partners.

## Project info

- **Maintainer**: RoboSpark Solutions
- **Stack**: Vite · React · TypeScript · Tailwind CSS · shadcn/ui · Supabase client
- **Default port**: `8080`

## Work locally

```sh
git clone <repository-url>
cd robospark-solutions
npm install
npm run dev
```

Open `http://localhost:8080/` to explore the site. The dev server hot-reloads as you edit files. To lint the project run `npm run lint`.

### Build & preview

```sh
npm run build
npm run preview
```

`npm run build` outputs the production bundle to `dist/`. Use `npm run preview` to serve the compiled assets locally before deploying.

## Editing options

- **Local IDE**: Use your preferred editor (VS Code, WebStorm, etc.). Update files in `src/` for UI/logic, `supabase/` for data migrations, and `public/` for static assets.
- **GitHub UI**: Quick patches can be made in-browser—commit directly to feature branches and open pull requests.
- **Codespaces**: Launch a cloud dev environment from the repository’s **Code → Codespaces** menu when you need an on-demand workspace.

## Key directories

- `src/pages` – route-level layouts and orchestration components
- `src/components` – reusable UI blocks, data visualisations, and simulators
- `src/hooks` – shared hooks (responsive helpers, toast utilities, Supabase helpers)
- `src/assets` – images and media used across the experience
- `supabase/` – configuration and SQL migrations for backend services

## Environment configuration

Copy `.env.example` to `.env` and populate Supabase keys plus any third-party tokens prior to running builds or the dev server. Never commit secrets to version control.

## Deployment guidance

1. Build the project: `npm run build`
2. Deploy the `dist/` directory to your hosting platform (Vercel, Netlify, GitHub Pages, S3 + CloudFront, etc.)
3. Configure rewrites so all routes fall back to `index.html` for SPA navigation
4. Attach your domain via your provider’s DNS tools if you need a custom URL

## Support

File issues or feature requests via the RoboSpark Solutions tracker, or reach the maintainers through the usual internal channels. Update this section with your preferred contact path if needed.
