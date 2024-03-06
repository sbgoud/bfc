// src/features/fileDisplay/FileDisplay.js
import React, { useState, useEffect } from 'react';

const FileDisplay = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const response = await fetch('http://127.0.0.1:5000/fetchFiles'); 
      const data = await response.json();
      setFiles(data.files); // Assuming 'files' key in API response
    };

    fetchFiles();
  }, []);

  return (
    <div className="file-grid">
      {files.map((file) => (
        <div className="file-item" key={file.id}> 
          {file.name} 
        </div>
      ))}
    </div>
  );
};

export default FileDisplay;
