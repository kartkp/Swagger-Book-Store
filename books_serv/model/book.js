const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  isbn: { type: String, required: true, unique: true, trim: true },
  title: { type: String, required: true, trim: true },
  subTitle: { type: String, trim: true },
  author: { type: String, required: true, trim: true },
  publish_date: { type: Date },
  publisher: { type: String, trim: true },
  pages: { type: Number },
  description: { type: String },
  website: { type: String }
}, {
  timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);
