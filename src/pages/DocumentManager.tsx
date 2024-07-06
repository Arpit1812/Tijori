//src/pages/DocumentManager.tsx CODE SNIPPET 1

import React from "react";
import "../styles/DocumentManager.css";
import Categories from "../components/Categories";
import eduPhoto from "../assets/education.jpg";
import identity from "../assets/identity.jpg";
import bankPhoto from "../assets/banking.jpg";

function DocumentManager() {
  return (
    <div className="documents">
      <Categories imageUrl={eduPhoto} name={"Education"} to="/documentForm" />
      <Categories imageUrl={identity} name={"Identity Cards"} to="/documentForm" />
      <Categories imageUrl={bankPhoto} name={"Banking"} to="/documentForm" />
    </div>
  );
}

export default DocumentManager;




// src/pages/DocumentManager.tsx CODE SNIPPET 2


// import React, { useState } from 'react';
// import '../styles/DocumentManager.css';
// import DocumentForm from '../components/DocumentFormPage';

// const DocumentManager: React.FC = () => {
//   const [documents, setDocuments] = useState<{ id: number }[]>([{ id: 1 }]);

//   const addDocument = () => {
//     const newId = documents.length + 1;
//     setDocuments([...documents, { id: newId }]);
//   };

//   const deleteDocument = (id: number) => {
//     setDocuments(documents.filter((doc) => doc.id !== id));
//   };

//   return (
//     <div className="documentManager">
//       <div className="documentType">
//         <h2>Documents</h2>
//         <div className="document-list">
//           {documents.map((doc) => (
//             <DocumentForm key={doc.id} id={doc.id} onDelete={deleteDocument} />
//           ))}
//         </div>
//         <button className="add-document-button" onClick={addDocument}>
//           Add Document
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DocumentManager;



// // src/pages/DocumentManager.tsx CODE SNIPPET 3
// import React, { useState } from 'react';
// import DocumentFormPage from '../components/DocumentFormPage';

// const DocumentManager: React.FC = () => {
//   const [documents, setDocuments] = useState<{ id: number }[]>([]);

//   const addDocument = () => {
//     setDocuments((prev) => [...prev, { id: Date.now() }]);
//   };

//   const deleteDocument = (id: number) => {
//     setDocuments((prev) => prev.filter((doc) => doc.id !== id));
//   };

//   return (
//     <div>
//       <h1>Document Manager</h1>
//       <button onClick={addDocument}>Add Document</button>
//       {documents.map((doc) => (
//         <DocumentFormPage key={doc.id} id={doc.id} onDelete={deleteDocument} />
//       ))}
//     </div>
//   );
// };

// export default DocumentManager;
