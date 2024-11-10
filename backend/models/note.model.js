const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  isPinned: {
    type: Boolean,
    default: false,
  },
  createdOn: {
    type: Date,
    default: new Date().getTime(),
  },
  //   updatedOn: {
  //     type: Date,
  //     default: new Date().getTime(),
  //   },
  userId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Note", noteSchema);
