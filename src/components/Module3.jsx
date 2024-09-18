import React, { useState } from "react";
import Layout from "./shared/Layout";
import ImagesPanel from "./shared/ImagesPanel";
import axiosInstance from '../utility/axios'; // Ensure axiosInstance is properly configured

const Module3 = () => {
  const [isImagesPanelVisible, setIsImagesPanelVisible] = useState(false); // State to control the visibility of ImagesPanel

  const imageData1 = [
    [
      {
        imagePath: "./icons/module_3a.png",
        time: "Monday・September 26, 2023・14:45",
        source: "Via Farini, Bologna, Italy",
      },
      {
        imagePath: "./icons/module_3b.png",
        time: "Monday・September 26, 2023・14:45",
        source: "Via Farini, Bologna, Italy",
      },
      {
        imagePath: "./icons/module_3c.png",
        time: "Monday・September 26, 2023・14:45",
        source: "Via Farini, Bologna, Italy",
      },
      {
        imagePath: "./icons/module_3d.png",
        time: "Monday・September 26, 2023・14:45",
        source: "Via Farini, Bologna, Italy",
      },
    ],
    "+24",
  ];

  const data = [
    { description: "How can Click help you today?", imageData: [] },
    {
      description: "Find me some pictures of people on the street",
      imageData: [],
    },
    {
      description: "Here are 28 pictures of people on the street",
      imageData: imageData1,
    },
  ];

  // Function to handle API call
  const handleSearch = async (query) => {
    try {
      // Use the `query` parameter for the API call
      const response = await axiosInstance.get(`/search-images`, {
        params: { query }, // Send the query as a parameter
      });
      console.log('API Response:', response.data);
      // You can handle the response data as needed
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Function to toggle the visibility of ImagesPanel
  const handleImageClick = () => {
    setIsImagesPanelVisible(true); // Show the ImagesPanel when an image is clicked
  };

  // Function to close the ImagesPanel when the cross icon is clicked
  const handleCloseImagesPanel = () => {
    setIsImagesPanelVisible(false); // Hide the ImagesPanel
  };

  return (
    <div className="flex w-full">
      {/* Adjust width based on whether the ImagesPanel is visible */}
      <div className={`${isImagesPanelVisible ? 'w-[55%]' : 'w-full'}`} onClick={handleImageClick}>
        <Layout data={data} onSearch={handleSearch} /> {/* Pass handleSearch as a prop */}
      </div>

      {/* Conditionally render ImagesPanel based on state */}
      {isImagesPanelVisible && (
        <div className="w-[45%]">
          <ImagesPanel data={data} onClose={handleCloseImagesPanel} /> {/* Pass handleCloseImagesPanel */}
        </div>
      )}
    </div>
  );
};

export default Module3;
