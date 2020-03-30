import mongoose from "mongoose";


// GET JWT INTO DATABASE

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  JWT: { type: String, default: "no" }
});
const User = mongoose.models.user || mongoose.model("user", userSchema);

export default User;
