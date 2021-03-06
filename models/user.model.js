import mongoose from "mongoose";
const Schema = mongoose.Schema

const UserSchema = new Schema({
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
  phone: {
    type: String,
    required: true,
  },
  balance: {
    type: String,
    required: false,
    default: "0",
  },
  withdrawls: {
    type: String,
    required: false,
    default: "0",
  },
  earning: {
    type: String,
    required: false,
    default: "0",
  },
  deposit: {
    type: String,
    required: false,
    default: "0",
  },
  role: {
    type: String,
    required: true,
  },
  notifications: [{ type: Schema.Types.ObjectId, ref: "Notifications" }],
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
