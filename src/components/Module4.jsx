import React, { useState } from "react";
import Layout from "./shared/Layout";
import ImagesPanel from "./shared/ImagesPanel";

const Module4 = () => {
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
      {
        imagePath: "./icons/module_3e.png",
        time: "Monday・September 26, 2023・14:45",
        source: "Via Farini, Bologna, Italy",
      },
    ],
    "+24",
  ];

  const imageData2 = [
    [
      {
        imagePath: "./icons/module_4a.png",
        time: "Monday・September 26, 2023・14:45",
        source: "Via Farini, Bologna, Italy",
      },
      {
        imagePath: "./icons/module_4b.png",
        time: "Monday・September 26, 2023・14:45",
        source: "Via Farini, Bologna, Italy",
      },
      {
        imagePath: "./icons/module_4c.png",
        time: "Monday・September 26, 2023・14:45",
        source: "Via Farini, Bologna, Italy",
      },
      {
        imagePath: "./icons/module_4d.png",
        time: "Monday・September 26, 2023・14:45",
        source: "Via Farini, Bologna, Italy",
      },
      {
        imagePath: "./icons/module_4e.png",
        time: "Monday・September 26, 2023・14:45",
        source: "Via Farini, Bologna, Italy",
      },
    ],
    "+11",
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
    { description: "Can you show me only the portraits?", imageData: [] },
    { description: "Sure, here are 16 portraits", imageData: imageData2 },
  ];

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
        <Layout data={data} /> {/* Layout will take full width initially, then shrink */}
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

export default Module4;
