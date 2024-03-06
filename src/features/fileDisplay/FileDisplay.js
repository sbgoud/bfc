import React, { useState, useEffect } from 'react';
import imageIcon from './icons/image.svg';  // Path to your image type icon
import defaultIcon from './icons/default-file.svg'; // Path to your default icon

const FileDisplay = () => {
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); // For error handling

  useEffect(() => {
    const fetchFiles = async () => {
      setIsLoading(true); // Set loading to true before the fetch
      setError(null); // Clear any previous errors

      try {
        const response = await fetch('/fetchFiles');
        const data = await response.json();
        console.log('Data:', data);

        // Assuming your data is structured like this:
        // data = [{name: 'my_document.pdf', ...}, {name: 'cool_photo.jpg', ...}] 

        setFiles(data);
      } catch (error) {
        setError(error); // Store the error if something goes wrong
        console.error('Error fetching files:', error);  // Log the error 
      } finally {
        setIsLoading(false);
      }
    };

    fetchFiles();
  }, []);

  // Rendering logic with loading and error display  
  return (
    <div className="file-display"> {/* Updated class */}
      {isLoading && <p>Loading...</p>}

      {error && (  
        <p className="error-message">Error: {error.message}</p> 
      )}

      {!isLoading && !error && (
        <ul className="file-list">
          {files.map((file) => (
            <li key={file.id}>  {/* Assuming 'id' exists, else use a unique key */}
              {renderFileItem(file)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Helper to render each file item
const renderFileItem = (file) => {
    const fileType = getFileType(file.name); 
    let fileIcon = defaultIcon; // Some default
  
    // Simple file type detection based on extension
    if (['jpg', 'jpeg', 'png', 'gif'].includes(fileType)) {
      fileIcon = imageIcon; 
    } else if (['pdf'].includes(fileType)) {
      fileIcon = defaultIcon;
    } 
  
    return (
      <div className="file-item"> 
        <img src={`/icons/${fileIcon}`} alt={fileType} className="file-icon" />
        <a href={`download/${file.name}`}>{file.name}</a>
      </div>
    );
  }; 
  const getFileType = (filename) => {
    return filename.split('.').pop().toLowerCase();
  }; 
  

export default FileDisplay;
