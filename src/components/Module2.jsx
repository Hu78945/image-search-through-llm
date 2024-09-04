import React from "react";
import Layout from "./Layout";
import Layout1 from "./Layout1";

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
      <Layout1 data={data} inProgress={true} />
    </div>
  );
};

export default Module2;
