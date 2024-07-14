// // backend/routes/documents.js
// import express from 'express';
// import multer from 'multer';
// import { authMiddleware } from '../middleware/auth';
// import Document from '../models/document';

// const router = express.Router();
// const upload = multer({ dest: 'uploads/' });

// router.post('/upload', authMiddleware, upload.single('file'), async (req, res) => {
//   const { title } = req.body;
//   const file = req.file;

//   if (!file) {
//     return res.status(400).json({ message: 'No file uploaded' });
//   }

//   const newDocument = new Document({
//     title,
//     path: file.path,
//     owner: req.user.username,
//   });

//   try {
//     await newDocument.save();
//     res.status(201).json({ message: 'File uploaded successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Error uploading file' });
//   }
// });

// router.get('/', authMiddleware, async (req, res) => {
//   try {
//     const documents = await Document.find({ owner: req.user.username });
//     res.json(documents);
//   } catch (error) {
//     res.status(500).json({ error: 'Error fetching documents' });
//   }
// });

// export default router;


// routes/documents.js -- CODE SNIPPET 2
// const express = require('express');
// const multer = require('multer');
// const authMiddleware = require('../middleware');
// const Document = require('../models/document');

// const router = express.Router();
// const upload = multer({ dest: 'uploads/' });

// router.post('/upload', authMiddleware, upload.single('file'), async (req, res) => {
//   try {
//     const { title } = req.body;
//     const newDocument = new Document({
//       title,
//       filePath: req.file.path,
//       owner: req.user,
//     });

//     await newDocument.save();
//     res.status(201).json({ message: 'Document uploaded successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = router;


// // routes/documents.js
// const express = require('express');
// const mongoose = require('mongoose');
// const multer = require('multer');
// const { GridFSBucket } = require('mongodb');
// const authMiddleware = require('../middleware');

// const router = express.Router();
// const upload = multer({ dest: 'uploads/' });

// // Initialize GridFS
// let gfs;
// mongoose.connection.once('open', () => {
//   gfs = new GridFSBucket(mongoose.connection.db, {
//     bucketName: 'documents',
//   });
// });

// router.post('/upload', authMiddleware, upload.single('file'), async (req, res) => {
//   try {
//     const { title } = req.body;
//     const fileStream = gfs.openUploadStream(req.file.originalname, {
//       metadata: { title, owner: req.user },
//     });

//     fileStream.end(req.file.buffer);

//     fileStream.on('finish', () => {
//       res.status(201).json({ message: 'Document uploaded successfully' });
//     });

//     fileStream.on('error', (error) => {
//       res.status(500).json({ message: 'Error uploading document', error });
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = router;


// const express = require('express');
// const multer = require('multer');
// const { getGFS } = require('../db');
// const { GridFSBucket } = require('mongodb');

// const router = express.Router();
// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// router.post('/upload', upload.single('file'), (req, res) => {
//   const gfs = getGFS();

//   if (!gfs) {
//     return res.status(500).json({ message: 'GridFS not initialized' });
//   }

//   const { title } = req.body;

//   const uploadStream = gfs.openUploadStream(title, {
//     metadata: { title },
//   });

//   uploadStream.end(req.file.buffer);

//   uploadStream.on('finish', () => {
//     res.status(201).json({ message: 'File uploaded successfully' });
//   });

//   uploadStream.on('error', (err) => {
//     res.status(500).json({ message: 'Error uploading file', error: err });
//   });
// });

// router.get('/:filename', (req, res) => {
//   const gfs = getGFS();

//   if (!gfs) {
//     return res.status(500).json({ message: 'GridFS not initialized' });
//   }

//   const { filename } = req.params;
//   const downloadStream = gfs.openDownloadStreamByName(filename);

//   downloadStream.pipe(res);

//   downloadStream.on('error', (err) => {
//     res.status(404).json({ message: 'File not found', error: err });
//   });
// });

// module.exports = router;


// const express = require('express');
// const multer = require('multer');
// const { getGFS } = require('../db');
// const { GridFSBucket } = require('mongodb');

// const router = express.Router();

// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// router.post('/upload', upload.single('file'), async (req, res) => {
//   const gfs = getGFS();
//   if (!gfs) {
//     return res.status(500).send('GridFSBucket not initialized');
//   }

//   const { file } = req;
//   const { title } = req.body;

//   if (!file || !title) {
//     return res.status(400).send('Title and file are required');
//   }

//   const stream = gfs.openUploadStream(title, {
//     contentType: file.mimetype,
//   });

//   stream.write(file.buffer);
//   stream.end();

//   stream.on('finish', () => {
//     res.status(200).send('File uploaded successfully');
//   });

//   stream.on('error', (err) => {
//     console.error(err);
//     res.status(500).send('Error uploading file');
//   });
// });

// module.exports = router;

const express = require('express');
const multer = require('multer');
const { getGFS } = require('../db');

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/upload', upload.single('file'), async (req, res) => {
  const gfs = getGFS();
  if (!gfs) {
    return res.status(500).send('GridFSBucket not initialized');
  }

  const { title } = req.body;
  const { file } = req;

  if (!title || !file) {
    return res.status(400).send('Title and file are required');
  }

  const stream = gfs.openUploadStream(title, {
    contentType: file.mimetype,
  });

  stream.write(file.buffer);
  stream.end();

  stream.on('finish', () => {
    res.status(200).send('File uploaded successfully');
  });

  stream.on('error', (err) => {
    console.error(err);
    res.status(500).send('Error uploading file');
  });
});

module.exports = router;
