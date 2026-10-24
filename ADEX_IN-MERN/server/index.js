import app from "./app.js";
import express from "express";
import { createServer as createViteServer } from "vite";
import { fileURLToPath } from "node:url";

const port = process.env.PORT || 5000;
const clientRoot = fileURLToPath(new URL("../client", import.meta.url));
const clientDist = fileURLToPath(new URL("../client/dist", import.meta.url));

if (process.env.NODE_ENV !== "development") {
  app.use(express.static(clientDist));
  app.use((req, res, next) => {
    if (req.method !== "GET" || req.path.startsWith("/api/")) return next();
    res.sendFile(fileURLToPath(new URL("../client/dist/index.html", import.meta.url)));
  });
} else {
  const vite = await createViteServer({
    root: clientRoot,
    server: { middlewareMode: true },
    appType: "spa"
  });
  app.use(vite.middlewares);
  app.on("close", () => vite.close());
}

app.listen(port, () => console.log(`ADEX_IN running at http://localhost:${port}`));
