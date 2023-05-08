const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
},{
    timestamps:true
});

mongoose.models={}
const User = mongoose.model("user", UserSchema);
User.createIndexes();

export default User;
