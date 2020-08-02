import { Schema, model, Types } from "mongoose";

const schema = new Schema(
  {
    name: { type: String, required: true },
    owner: { type: String, required: true },
  },
  { timestamps: true }
);

schema.method("transform", function () {
  let obj = this.toObject();

  obj.id = obj._id;
  delete obj._id;

  return obj;
});

export default model("Categories", schema);
