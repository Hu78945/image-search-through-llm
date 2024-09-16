import React from "react";
import Layout from "./shared/Layout";
import axiosInstance from '../utility/axios'; // Ensure axiosInstance is properly configured

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

  return (
    <div>
      <Layout data={data} inProgress={true} width='w-1/2' onSearch={handleSearch} /> 
      {/* Pass handleSearch as a prop to Layout */}
    </div>
  );
};

export default Module2;
