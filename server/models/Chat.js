import {Schema, model, Types} from "mongoose";

const schema = new Schema ({
  message: {type: String, required: true},
  name: {type: String, required: true},
}, {timestamps: true})

export default model("Chat", schema);