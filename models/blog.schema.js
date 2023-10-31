const { default: mongoose } = require("mongoose");

const blogschema = new mongoose.Schema({
    title: String,
  content: String,
  image: String,
  author: String,
  category:String,
  likedBy: [{ username: String }],
  comments: [{
      text: String,
      username: String,
      date: { type: Date, default: Date.now } }]
})