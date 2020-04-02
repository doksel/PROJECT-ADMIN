import {Schema, model, Types} from "mongoose";

const schema = new Schema ({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  fotos: [{type: Types.ObjectId, ref: "Foto"}]   
})

export default model("User", schema);