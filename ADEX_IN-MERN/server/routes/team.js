import { Router } from "express";
import TeamMember from "../models/TeamMember.js";
import { defaultTeam } from "../data/defaults.js";

const router = Router();
router.get("/", async (_req, res, next) => {
  try {
    if (TeamMember.db.readyState === 1) {
      const records = await TeamMember.find({ active: true }).sort({ order: 1, name: 1 }).lean();
      return res.json(records.length ? records : defaultTeam);
    }
    return res.json(defaultTeam);
  } catch (err) { next(err); }
});
export default router;
