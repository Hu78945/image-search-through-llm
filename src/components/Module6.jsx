import React, { useState } from 'react';
import Header from './shared/Header';
import logo from '../click_logo_textless.svg';

const Module6 = () => {
  // State for image, location, camera, and video settings
  const [imageSrc, setImageSrc] = useState(null);
  const [location, setLocation] = useState('48.866659 N, 2.36344 W'); // Default location
  const [place, setPlace] = useState('Toronto, Canada'); // Default place
  const [cameraSettings, setCameraSettings] = useState('iPhone 14 Pro back camera 6.86 mm f/1.78'); // Default camera settings
  const [fps, setFps] = useState('30 FPS'); // Default FPS
  const [videoSettings, setVideoSettings] = useState('0:07 S・MOV・3024x4032・21.7 MB'); // Default video settings
  
  // Handle image upload and simulate fetching metadata
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a URL for the uploaded image
      const imageUrl = URL.createObjectURL(file);
      setImageSrc(imageUrl);

      // Simulate metadata for the uploaded image (you can replace this with real metadata extraction logic)
      setLocation('52.5200 N, 13.4050 E');  // Example location (Berlin)
      setPlace('Berlin, Germany');
      setCameraSettings('Samsung Galaxy S21 Ultra back camera 8.32 mm f/2.4');
      setFps('24 FPS');
      setVideoSettings('0:15 S・MOV・4032x3024・30.4 MB');
    }
  };

  return (
    <div className='flex bg-black h-fit min-h-screen'>
      <div className='w-3/4'>
        <div className='fixed w-[1047px] z-10'><Header /></div>
        <div className='flex justify-center items-center h-full'>
          <div className='relative'>
            {imageSrc ? (
              <img src={imageSrc} className='w-[726px] h-[484px]' alt='Uploaded' />
            ) : (
              <img src='./icons/hero_image.png' className='w-[726px] h-[484px]' alt='Module' />
            )}
            <div className='flex justify-between p-2'>
              <div>
                <p className='text-10 text-white uppercase'>Monday・September 26, 2023・14:45</p>
                <p className='text-10 text-medium-gray uppercase'>Via Farini, Bologna, Italy</p>
              </div>
              <div className='h-fit p-1 rounded-md bg-[#4c3d14]'>
                <p className='text-10 font-normal text-yellow'>CLOSE INFO</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-[393px] border-l border-dark-gray'>
        {/* Upload image button */}
        <div className='p-4'>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </div>

        {/* Signature box */}
        <div className='p-2 h-[196px] bg-custom-gradient flex flex-col justify-between'>
          <div className='flex justify-between items-center'>
            <p className='text-13 text-white'>SIGNED BY CLICK APP</p>
            <img src='./icons/cross_icon.png' className='h-6 w-6' alt='Close'></img>
          </div>
          <div className='flex justify-between items-center'>
            <div>
              <img src='./icons/signature.png' className='w-[221px]'></img>
              <p className='text-10 text-white/60'>Monday・September 26, 2023・14:45:12 (cet)</p>
            </div>
            <div className='bg-custom-gradient-2 h-12 w-14 rounded-2xl flex justify-center items-center'>
              <img src={logo} className='w-[125px]'></img>
            </div>
          </div>
        </div>

        <div className='px-4'>
          {/* Location Section */}
          <div className='border-b border-dark-gray py-10'>
            <p className='text-10 text-medium-gray mb-2'>LOCATION</p>
            <p className='text-13 text-white'>{location}</p>
            <p className='text-13 text-medium-gray uppercase mb-2'>{place}</p>
            <div className='bg-medium-gray w-full flex justify-center items-center'>
              <img src='icons/map_locator.png' className='w-[361px] h-[196px]' alt='Map' />
            </div>
          </div>

          {/* Device and Camera Section */}
          <div className='border-b border-dark-gray py-10'>
            <p className='text-10 text-medium-gray mb-2'>DEVICE AND CAMERA</p>
            <p className='text-13 text-white uppercase'>Samsung Galaxy S21 Ultra</p>
            <p className='text-13 text-medium-gray uppercase mb-4'>{cameraSettings}</p>

            <p className='text-10 text-medium-gray mb-2'>CAMERA SETTINGS</p>
            <p className='text-13 text-white mb-4'>{fps}</p>

            <p className='text-10 text-medium-gray mb-2'>VIDEO SETTINGS</p>
            <p className='text-13 text-white'>{videoSettings}</p>
          </div>

          <div className='flex gap-2 pt-10 mb-10'>
            <img src='./icons/power_icon.png' className='h-4'></img>
            <p className='text-10 text-yellow'>POWERED BY NODLE CONTENTSIGN SDK</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module6;
