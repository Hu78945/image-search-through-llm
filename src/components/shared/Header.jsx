import React, { useRef, useState } from 'react';
import axios from 'axios';

const Header = () => {
  const fileInputRef = useRef(null); // Reference to the hidden file input
  const [uploadStatus, setUploadStatus] = useState(''); // State to track upload status

  // Function to trigger the file input when button is clicked
  const handleUploadClick = () => {
    fileInputRef.current.click(); // Programmatically click the hidden input
  };

  // Function to handle the file selection and upload
  const handleFileChange = async (event) => {
    const file = event.target.files[0]; // Get the first selected file

    if (file) {
      const formData = new FormData();
      formData.append('files', file); // Append the file to FormData

      try {
        const response = await axios.post('http://192.168.10.122:8001/upload-images/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        setUploadStatus('File uploaded successfully');
        console.log('Response:', response.data);
      } catch (error) {
        setUploadStatus('File upload failed');
        console.error('Error uploading file:', error);
      }
    }
  };

  return (
    <div className='flex justify-between items-center p-4 w-full bg-black'>
      <img src='./icons/click_logo.png' className='h-8' alt='Click Logo'></img>

      {/* right side */}
      <div className='flex items-center justify-center h-12 gap-1'>
        <div className='flex items-center px-2 rounded-md bg-[#4c3d14] h-full'>
          <button onClick={handleUploadClick} className='text-13 font-normal text-yellow'>
            UPLOAD FILES
          </button>
        </div>
        <div className='flex items-center px-2 rounded-md bg-[#4c3d14] h-full'>
          <p className='text-13 font-normal text-yellow'>MICH.CLICKAPP.ETH</p>
        </div>
        <div className='bg-slate-900 rounded-md h-full'>
          <img src='./icons/three_dots.png' className='h-full' alt='Menu Icon'></img>
        </div>
      </div>

      {/* Hidden file input */}
      <input
        type='file'
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />

      {/* Display upload status */}
      {uploadStatus && <p className='text-white mt-2'>{uploadStatus}</p>}
    </div>
  );
};

export default Header;
