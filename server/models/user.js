import moment from "momnet";
import mongoose from "mongoose";

//create schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["MainJuin", "SubJuin", "User"],
    default: "User",
  },
  register_date: {
    type: Date,
    default: moment().format("YYYY-MM-DD"),
  },
  comments: [
    {
      post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
      },
      comments_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "comments",
      },
    },
  ],
  post: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
  ],
});

const User = mongoose.model("user", UserSchema);

export default User;
