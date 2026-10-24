import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  category: { type: String, default: "ADEX_IN PRODUCT" },
  subtitle: { type: String, default: "" },
  summary: { type: String, default: "" },
  status: { type: String, default: "In development" },
  tags: { type: [String], default: [] },
  features: { type: [String], default: [] },
  order: { type: Number, default: 0 },
  active: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.models.Product || mongoose.model("Product", productSchema);
