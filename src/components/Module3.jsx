import React from "react";
import Layout from "./shared/Layout";
import ImagesPanel from "./shared/ImagesPanel";

const Module3 = () => {
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
  
  return (
    <div className="flex w-full">
      {/* Layout component takes 55% of the width */}
      <div className="w-[55%]">
        <Layout data={data} />
      </div>
      
      {/* ImagesPanel component takes 45% of the width */}
      <div className="w-[45%]">
        <ImagesPanel data={data} />
      </div>
    </div>
  );
};

export default Module3;
