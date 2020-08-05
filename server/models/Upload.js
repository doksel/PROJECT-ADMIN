import {Schema, model, Types} from "mongoose";

const schema = new Schema ({
  path: {type: String, required: true},
  ownerId: [{type: Types.ObjectId, ref: "User"}]
}, {timestamps: true})

export default model("Upload", schema);