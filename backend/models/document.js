// // backend/models/document.js
// import mongoose from 'mongoose';

// const documentSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   path: { type: String, required: true },
//   owner: { type: String, required: true },
// });

// const Document = mongoose.model('Document', documentSchema);

// export default Document;


// models/document.js
const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  filePath: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Document = mongoose.model('Document', DocumentSchema);
module.exports = Document;
