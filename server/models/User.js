import {Schema, model, Types} from "mongoose";

const schema = new Schema ({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  avatar: {type: String}, 
  articles: [{type: Types.ObjectId, ref: "Articles"}] 
})

export default model("User", schema);