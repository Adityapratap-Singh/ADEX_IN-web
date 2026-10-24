# ADEX_IN — MERN migration starter

This project migrates the ADEX_IN HTML/CSS/JS site into a React frontend + Express API + MongoDB data layer.

## What's included
- React + Vite frontend
- React Router routes `/` and `/adityapratap-singh`
- Express API: `GET /api/health`, `GET /api/team`, `GET /api/products`
- Mongoose models for team members and products
- Seed script for MongoDB
- Existing `style.css` carried over as `client/src/legacy.css`, plus migration CSS
- Person JSON-LD on the personal profile page

## 1. Copy your existing assets
From your old `adex-project` folder, copy the contents of its `images` folder into:
`client/public/images/`

Copy the `audio` folder into:
`client/public/audio/`

The app uses paths like `/images/adex-logo.png`. Keep filenames and capitalization the same. If you don't have a particular image, the site has fallbacks.

## 2. Install dependencies
Use Node.js 20+ (Node 22 is fine). From the root folder:

```powershell
npm install
npm install --prefix client
npm install --prefix server
```

## 3. Configure MongoDB
Copy `server/.env.example` to `server/.env` and set `MONGODB_URI`.

For local MongoDB:
`MONGODB_URI=mongodb://127.0.0.1:27017/adex_in`

For MongoDB Atlas, use the connection string from your Atlas cluster. Never commit `.env` to GitHub.

The API has fallback data if MongoDB is not connected, so the UI can be previewed before DB setup. To store the initial team and product records in MongoDB, run:

```powershell
npm run seed --prefix server
```

## 4. Run locally
From the root:

```powershell
npm run dev
```

- Frontend: http://localhost:5173
- Vite proxies `/api/*` to Express in development. For a separately deployed frontend/backend, create `client/.env` with `VITE_API_URL=https://your-api-domain` and redeploy.
- API health: http://localhost:5000/api/health
- Team JSON: http://localhost:5000/api/team
- Products JSON: http://localhost:5000/api/products
- Personal page: http://localhost:5173/adityapratap-singh

## 5. Important before deployment
- This is a migration starter, not a one-click replacement of your live site. Test it locally first.
- Copy all image/audio assets from the original project.
- Verify team names, roles, profile URLs and product claims.
- Update canonical URLs and sitemap configuration to match the final production domain.
- Vite SPA routes require host rewrite rules so `/adityapratap-singh` serves `index.html`; otherwise direct refreshes can return 404.
- For Google SEO, a React SPA can be indexed, but server-side rendering or prerendering is stronger for reliable metadata per route. Consider migrating the frontend to a framework with SSR/prerendering if SEO visibility is the top priority. The current JSON-LD is emitted by the client route, so server-rendered structured data is preferable for robust crawling.
- No authentication/admin CRUD routes are included yet. Public API endpoints are read-only by design.
