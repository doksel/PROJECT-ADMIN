import {Schema, model, Types} from "mongoose";

const schema = new Schema ({
  message: {type: String, required: true},
  lastName: {type: String, required: true},
  ownerId: [{type: Types.ObjectId, ref: "User"}]   
})
 
schema.method('transform', function() {
  let obj = this.toObject();
  
  obj.id = obj._id;
  delete obj._id;

  return obj;
});


export default model("Chat", schema);