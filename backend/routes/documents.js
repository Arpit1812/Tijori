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

// // module.exports = router;
// require('dotenv').config();
// const express = require('express');
// const multer = require('multer');
// const path = require('path');
// const fs = require('fs');

// const router = express.Router();

// // Directory to store files
// const UPLOADS_DIR = path.join(__dirname, '../uploads');
// if (!fs.existsSync(UPLOADS_DIR)) {
//   fs.mkdirSync(UPLOADS_DIR); // Create the directory if it doesn't exist
// }

// // Configure multer for local storage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const userUploadsDir = path.join(UPLOADS_DIR, req.user.id.toString());
//     if (!fs.existsSync(userUploadsDir)) {
//       fs.mkdirSync(userUploadsDir); // Create user-specific directory if it doesn't exist
//     }
//     cb(null, userUploadsDir);
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });

// const upload = multer({ storage });

// // Middleware to authenticate and get user from JWT token
// const authenticateUser = (req, res, next) => {
//   const authHeader = req.headers['authorization'];

//   if (!authHeader) {
//     return res.status(403).json({ message: 'Authorization token is missing' });
//   }

//   const token = authHeader.split(' ')[1]; // Extract the token after "Bearer"
//   if (!token) {
//     return res.status(403).json({ message: 'Invalid token format' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET); // Replace with your secret
//     req.user = decoded; // Store user info in request object
//     next();
//   } catch (err) {
//     return res.status(403).json({ message: 'Token is invalid or expired' });
//   }
// };

// // Upload a document (POST)
// router.post('/upload', authenticateUser, upload.single('file'), (req, res) => {
//   const { title } = req.body;
//   const { file } = req;

//   if (!title || !file) {
//     return res.status(400).send('Title and file are required');
//   }

//   res.status(200).send('File uploaded successfully');
// });

// // Get documents uploaded by the current user (GET)
// router.get('/my-documents', authenticateUser, (req, res) => {
//   const userId = req.user.id;
//   const userUploadsDir = path.join(UPLOADS_DIR, userId.toString());

//   if (!fs.existsSync(userUploadsDir)) {
//     return res.status(404).send('No documents found');
//   }

//   fs.readdir(userUploadsDir, (err, files) => {
//     if (err) return res.status(500).send('Error reading files');

//     const fileList = files.map((file) => ({
//       filename: file,
//       path: `/uploads/${userId}/${file}`, // Adjust this depending on your static files setup
//     }));

//     res.json(fileList);
//   });
// });

// module.exports = router;

// const express = require('express');
// const multer = require('multer');
// const path = require('path');
// const fs = require('fs');
// const { authenticateToken } = require('../middleware'); // Import the middleware

// const router = express.Router();

// // Directory to store files
// const UPLOADS_DIR = path.join(__dirname, '../uploads');
// if (!fs.existsSync(UPLOADS_DIR)) {
//   fs.mkdirSync(UPLOADS_DIR); // Create the directory if it doesn't exist
// }

// // Configure multer for local storage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const userUploadsDir = path.join(UPLOADS_DIR, req.user.id.toString());
//     if (!fs.existsSync(userUploadsDir)) {
//       fs.mkdirSync(userUploadsDir); // Create user-specific directory if it doesn't exist
//     }
//     cb(null, userUploadsDir);
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });

// const upload = multer({ storage });

// // Upload a document (POST)
// router.post('/upload', authenticateToken, upload.single('file'), (req, res) => {
//   const { title } = req.body;
//   const { file } = req;

//   if (!title || !file) {
//     return res.status(400).send('Title and file are required');
//   }

//   res.status(200).send('File uploaded successfully');
// });

// // Get documents uploaded by the current user (GET)
// router.get('/my-documents', authenticateToken, (req, res) => {
//   const userId = req.user.id;
//   const userUploadsDir = path.join(UPLOADS_DIR, userId.toString());

//   if (!fs.existsSync(userUploadsDir)) {
//     return res.status(404).send('No documents found');
//   }

//   fs.readdir(userUploadsDir, (err, files) => {
//     if (err) return res.status(500).send('Error reading files');

//     const fileList = files.map((file) => ({
//       filename: file,
//       path: `/uploads/${userId}/${file}`, // Adjust this depending on your static files setup
//     }));

//     res.json(fileList);
//   });
// });

// module.exports = router;
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const router = express.Router();

// Directory to store files
const UPLOADS_DIR = path.join(__dirname, '../uploads');
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR); // Create the directory if it doesn't exist
}

// Configure multer for local storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS_DIR); // Use the default upload directory
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Upload a document (POST)
router.post('/upload', upload.single('file'), (req, res) => {
  const { title } = req.body;
  const { file } = req;

  if (!title || !file) {
    return res.status(400).send('Title and file are required');
  }

  res.status(200).send('File uploaded successfully');
});

// Get documents (GET)
router.get('/my-documents', (req, res) => {
  if (!fs.existsSync(UPLOADS_DIR)) {
    return res.status(404).send('No documents found');
  }

  fs.readdir(UPLOADS_DIR, (err, files) => {
    if (err) return res.status(500).send('Error reading files');

    const fileList = files.map((file) => ({
      filename: file,
      path: `/uploads/${file}`, // Adjust this depending on your static files setup
    }));

    res.json(fileList);
  });
});

module.exports = router;
