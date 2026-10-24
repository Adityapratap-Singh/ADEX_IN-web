import mongoose from "mongoose";

const teamMemberSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  role: { type: String, required: true, trim: true },
  desc: { type: String, default: "" },
  image: { type: String, default: "" },
  linkedin: { type: String, default: "" },
  slug: { type: String, default: "" },
  order: { type: Number, default: 0 },
  active: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.models.TeamMember || mongoose.model("TeamMember", teamMemberSchema);
