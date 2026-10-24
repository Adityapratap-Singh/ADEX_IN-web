import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import teamRoutes from "./routes/team.js";
import productRoutes from "./routes/products.js";

const app = express();
let mongoConnection;

async function connectToMongo() {
  if (!process.env.MONGODB_URI || mongoose.connection.readyState === 1) return;

  if (!mongoConnection) {
    mongoConnection = mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000
    }).then(() => {
      console.log("MongoDB connected");
    }).catch(err => {
      mongoConnection = undefined;
      console.error("MongoDB connection failed; API will use fallback data:", err.message);
    });
  }

  await mongoConnection;
}

app.use(express.json({ limit: "1mb" }));
app.use("/api", async (_req, _res, next) => {
  await connectToMongo();
  next();
});

app.get("/api/health", (_req, res) => res.json({
  ok: true,
  service: "ADEX_IN",
  database: mongoose.connection.readyState === 1 ? "connected" : "fallback mode"
}));
app.use("/api/team", teamRoutes);
app.use("/api/products", productRoutes);
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: "Internal server error" });
});

export default app;
