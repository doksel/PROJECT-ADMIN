import {Schema, model, Types} from "mongoose";

const schema = new Schema ({
  message: {type: String, required: true},
  lastName: {type: String, required: true},
  ownerId: [{type: Types.ObjectId, ref: "User"}]  
}, {timestamps: true})

export default model("Chat", schema);