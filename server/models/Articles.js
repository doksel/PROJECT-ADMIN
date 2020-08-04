import { Schema, model, Types } from "mongoose";

const schema = new Schema({
    id: {type: Types.ObjectId, required: true, unique: true, auto: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    categoryId: { type: String, required: true },
    owner: { type: Object, ref: "User" },
  },
  { timestamps: true,
    _v: false
   }
);

export default model("Articles", schema);
