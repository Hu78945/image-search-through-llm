import React from "react";
import Layout from "./shared/Layout";

const Module2 = () => {
  const data = [
    { description: "How can Click help you today?", imageData: [] },
    {
      description: "Find me some pictures of people on the street",
      imageData: [],
    },
    {
      description: "Looking for photos",
      imageData: [], 
    },
  ];
  
  return (
    <div>
      <Layout data={data} inProgress={true} />
    </div>
  );
};

export default Module2;
