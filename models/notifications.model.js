import mongoose from "mongoose";

const Schema = mongoose.Schema;

const NotificationsSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  content: { type: String, required: true },
  topic: { type: String, required: true },
  date: { type: Date, default: new Date() },
});

const Notification = mongoose.model("Notifications", NotificationsSchema);

export default Notification;
