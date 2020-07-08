import {Schema, model, Types} from "mongoose";

const schema = new Schema ({
  title: {type: String, required: true},
  description: {type: String, required: true},
  owner: {type: Object, ref: "User"},
}, {timestamps: true})
 
schema.method('transform', function() {
  let obj = this.toObject();
  
  obj.id = obj._id;
  delete obj._id;

  return obj;
});


export default model("Articles", schema);