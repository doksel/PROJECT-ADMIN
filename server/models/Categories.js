import { Schema, model, Types } from "mongoose";

const schema = new Schema(
  {
    id: {type: Types.ObjectId, required: true, unique: true, auto: true },
    name: { type: String, required: true }
  },
  { timestamps: true,
    _v: false
  }
);

export default model("Categories", schema);
