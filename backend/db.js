
// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     const mongoURI = 'mongodb://localhost:27017/tijori'; // Corrected URI without collection name
//     await mongoose.connect(mongoURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB connected...');
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
// };

//  module.exports = connectDB;

// const mongoose = require('mongoose');
// const { GridFSBucket } = require('mongodb');

// let gfs;

// const connectDB = async () => {
//   try {
//     const mongoURI = 'mongodb://localhost:27017/tijori';
//     const conn = await mongoose.connect(mongoURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB connected...');

//     conn.connection.once('open', () => {
//       gfs = new GridFSBucket(conn.connection.db, {
//         bucketName: 'documents',
//       });
//       console.log('GridFS initialized...');
//     });
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
// };

// const getGFS = () => gfs;

// module.exports = { connectDB, getGFS };

const mongoose = require('mongoose');
const { GridFSBucket } = require('mongodb');

let gfs;

const connectDB = async () => {
  try {
    const mongoURI = 'mongodb://localhost:27017/tijori';
    const conn = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected...');
    console.log('everything great till here');
    // Wait for connection to open before initializing GridFS
    conn.connection.once('open', () => {
            gfs = new GridFSBucket(conn.connection.db, {
              bucketName: 'documents',
            });
            console.log('GridFS initialized...');
          });
        } catch (err) {
          console.error(err.message);
          process.exit(1);
        }
      };
      
    
const getGFS = () => gfs;

module.exports = { connectDB, getGFS };
