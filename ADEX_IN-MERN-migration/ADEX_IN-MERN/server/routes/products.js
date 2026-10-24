import { Router } from "express";
import Product from "../models/Product.js";
import { defaultProducts } from "../data/defaults.js";

const router = Router();
router.get("/", async (_req, res, next) => {
  try {
    if (Product.db.readyState === 1) {
      const records = await Product.find({ active: true }).sort({ order: 1, name: 1 }).lean();
      return res.json(records.length ? records : defaultProducts);
    }
    return res.json(defaultProducts);
  } catch (err) { next(err); }
});
export default router;
