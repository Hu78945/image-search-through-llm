import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Module = () => {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade-out transition after 4.5 seconds
    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true);
    }, 4500);

    // Navigate to Module1 after 5 seconds
    const timer = setTimeout(() => {
      navigate('/module1');
    }, 5000);

    // Clean up the timeouts if the component unmounts
    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <div
      className={`flex items-center justify-center min-h-screen bg-body p-4 transition-opacity duration-500 ease-in-out ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="max-w-2xl mx-auto bg-teal-500 text-white p-8 rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-semibold mb-4">Enterprise Assessment</h2>
        <div className="border-t-2 border-lemon-green my-4"></div>
        <p className="text-center text-md leading-relaxed">
          The goal is to evaluate where your company stands on the value creation spectrum. We use six key questions to measure performance across critical consumer metrics. The results will reveal whether your company is building or eroding value and identify the potential for improvement. This assessment is crucial for understanding your current position and guiding strategic decisions for growth.
        </p>
      </div>
    </div>
  );
};

export default Module;
