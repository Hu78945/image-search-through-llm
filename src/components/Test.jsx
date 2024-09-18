import React, { useState } from 'react';
import axios from 'axios';

const Test = () => {
  const [file, setFile] = useState(null); // State to store the file
  const [uploadStatus, setUploadStatus] = useState(''); // State to track upload status

  // Handle file input change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert('Please select a file first');
      return;
    }

    const formData = new FormData();
    formData.append('files', file); // Append the file to the form data

    try {
      const response = await axios.post('http://192.168.10.122:8001/upload-images/', formData, {
        headers: {
          'Content-Type': ' ',
        },
      });
      setUploadStatus('File uploaded successfully');
      console.log('Response:', response.data);
    } catch (error) {
      setUploadStatus('File upload failed');
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <h2>Upload Image</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
};

export default Test;
