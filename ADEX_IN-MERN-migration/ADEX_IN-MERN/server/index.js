import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import teamRoutes from "./routes/team.js";
import productRoutes from "./routes/products.js";

const app = express();
const port = process.env.PORT || 5000;
app.use(cors({ origin: process.env.CLIENT_ORIGIN || "http://localhost:5173" }));
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (_req, res) => res.json({
  ok: true,
  service: "ADEX_IN API",
  database: mongoose.connection.readyState === 1 ? "connected" : "fallback mode"
}));
app.use("/api/team", teamRoutes);
app.use("/api/products", productRoutes);
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: "Internal server error" });
});

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection failed; API will use fallback data:", err.message));
}
app.listen(port, () => console.log(`ADEX_IN API running at http://localhost:${port}`));
