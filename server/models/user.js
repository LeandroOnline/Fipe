const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  inputs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Inputs",
    },
  ],
  notes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Note",
    },
  ],
  checked: {
    type: Boolean,
    default: false,
  },
  rememberPassword: {
    type: String,
    default: "",
  },
  nickname: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("User", userSchema);
