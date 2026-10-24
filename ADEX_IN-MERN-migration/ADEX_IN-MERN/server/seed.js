import "dotenv/config";
import mongoose from "mongoose";
import TeamMember from "./models/TeamMember.js";
import Product from "./models/Product.js";
import { defaultTeam, defaultProducts } from "./data/defaults.js";

if (!process.env.MONGODB_URI) throw new Error("Set MONGODB_URI in server/.env first.");
await mongoose.connect(process.env.MONGODB_URI);
await TeamMember.deleteMany({});
await Product.deleteMany({});
await TeamMember.insertMany(defaultTeam);
await Product.insertMany(defaultProducts);
console.log(`Seeded ${defaultTeam.length} team members and ${defaultProducts.length} product(s).`);
await mongoose.disconnect();
