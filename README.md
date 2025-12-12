# TerraBot Deployment Briefing

![TerraBot field unit](./src/assets/hero-robot.jpg)

> _Designation: TerraBot v4_ – an autonomous agritech platform engineered by RoboSpark Solutions for precision crop stewardship.

| Metric | Target | Notes |
| ------ | ------ | ----- |
| Field Coverage | 250 acres / 24h | Autonomous path planning with ROS2 Humble stack |
| Yield Uplift | +60% | Continuous plant health telemetry + adaptive dosing |
| Cost Reduction | −40% OPEX | Labour displacement + predictive maintenance |
| Mission Uptime | 24/7 | Dual-redundant power rails, self-docking charge nodes |

## 1. System Overview

The repository powers terrabot.ag – an interactive console showcasing live mission feeds, CAD exploders, sensor simulations, and ROI dashboards. Front-end surfaces are rendered with React + shadcn/ui, while Supabase handles telemetry persistence and authenticated data pulls.

## 2. Local Operations Protocol

```sh
git clone <repository-url>
cd robospark-solutions
npm install
npm run dev
```

Command center boots on `http://localhost:8080/`. Hot module reload keeps telemetry panels in sync while iterating. Execute `npm run lint` before committing to ensure mission scripting stays within spec.

### Production Build Simulation

```sh
npm run build
npm run preview
```

Artifacts land in `dist/`. Preview spin-up allows validation of static exports and routing fallbacks prior to field deployment.

## 3. Module Topology

- `src/pages` – mission routing shells and layout orchestrators
- `src/components` – hero timeline, sensor vis layers, robotics simulators
- `src/hooks` – shared control logic (viewport breakpoints, toast bus, Supabase ops)
- `src/assets` – field photography, system renders, deck imagery
- `supabase/` – SQL migrations + configuration for telemetry services

## 4. Environment Payload

Duplicate `.env.example` to `.env` and populate:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- Any partner integration tokens (analytics, auth, operations)

Never transmit secrets in git payloads—use workspace-level vaults or CI secrets stores.

## 5. Deployment Runbook

1. `npm run build`
2. Ship `dist/` to target host (Vercel, Netlify, GitHub Pages, S3 + CDN, etc.)
3. Ensure SPA rewrites funnel all non-asset routes to `index.html`
4. Bind mission domain via provider DNS and validate SSL handshake

### GitHub Pages automation

- Workflow `.github/workflows/deploy.yml` builds `main` and publishes an artifact for GitHub Pages.
- The build step runs `npm run build -- --base=/<repo-name>/` so asset references resolve under the repository subpath.
- After the first successful run, enable **Settings → Pages → Source → GitHub Actions** and the site will be served at `https://<account>.github.io/robospark-solutions/`.

## 6. Maintenance Channels

- Open tickets through the RoboSpark Solutions tracker
- Escalate production incidents via on-call rotation channels
- For roadmap discussions, sync with the Robotics PM guild during weekly cadence

_End of briefing. Initiate deployment sequence when pre-flight checks pass._
