import {Schema, model, Types} from "mongoose";

const schema = new Schema ({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  avatar: [{type: Types.ObjectId, ref: "Foto"}]   
})
 
schema.method('transform', function() {
  let obj = this.toObject();
  
  obj.id = obj._id;
  delete obj._id;

  return obj;
});

export default model("User", schema);