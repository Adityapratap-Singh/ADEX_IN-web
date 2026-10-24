# ADEX_IN — single-app MERN setup

The React site and Express/MongoDB API run as one application. Express serves
the API and the built React site from the same origin, so there is no separate
frontend service, backend service, API URL, or cross-origin setup.

## Install

Use Node.js 20 or newer. From this directory, install the single set of
dependencies:

```powershell
npm install
```

## Configure MongoDB

Copy `.env.example` to `.env` and set `MONGODB_URI`. For local MongoDB, the
example URI is:

```text
mongodb://127.0.0.1:27017/adex_in
```

The API uses fallback data when MongoDB is not configured or unavailable. To
seed the team and product records into MongoDB, run:

```powershell
npm run seed
```

## Run locally

Start the whole app with one command:

```powershell
npm run dev
```

Open `http://localhost:5000`. The same server handles the React routes and
these API endpoints:

- `GET /api/health`
- `GET /api/team`
- `GET /api/products`
- `/adityapratap-singh`

## Build and deploy on Vercel

The Vercel project serves the React build and the API function from one
deployment and one domain:

```powershell
npm run build
```

1. Push this project to a GitHub repository.
2. In Vercel, choose **Add New → Project**, import the repository, and set the
   **Root Directory** to `ADEX_IN-MERN`.
3. Keep the build settings from `vercel.json`: install `npm install`, build
   `npm run build`, and output `client/dist`.
4. In **Project Settings → Environment Variables**, add `MONGODB_URI` with
   your MongoDB Atlas connection string for Production (and Preview if needed).
5. Deploy. Vercel will serve the site and `/api/*` from the same domain.

Create a MongoDB Atlas database first if you do not have one. Add a database
user and allow network access from Vercel (Atlas's `0.0.0.0/0` access rule is
one option for Vercel-hosted functions without static egress IPs, but it allows
connection attempts from any IP. Use a restricted rule if your plan supports
static egress IPs, give the database user only the permissions it needs, and
keep the connection string private. Never commit it to Git.

After deployment, check `/api/health`, `/api/team`, and
`/api/products` on your Vercel domain. If no `MONGODB_URI` is configured, the
API intentionally responds with its built-in fallback data.

The original site assets are in `client/public/images/` and
`client/public/audio/`. Keep filenames and capitalization unchanged when
updating them.
