import React from 'react';

const ImagesPanel = ({ data, onClose }) => {
  return (
    <div className='bg-black'>
      <div className='flex justify-between items-center border-b border-dark-gray h-[5vh]'>
        <div className='flex gap-2 p-4 text-13'>
          <span className='text-white'>16 IMAGES Found</span>
          <span className='text-medium-gray'>UPDATED 5 SEC AGO</span>
        </div>
        {/* Cross icon to close the ImagesPanel */}
        <img
          src='./icons/cross_icon.png'
          className='h-6 cursor-pointer'
          alt="close icon"
          onClick={onClose} // Call the onClose function when clicked
        />
      </div>

      <div className='flex flex-wrap h-[95vh]'>
        {data[2].imageData[0].map((element, index) => {
          // Check if it's the fourth image
          const isLandscape = index === 3;

          return (
            <div key={index} className='w-1/2 h-1/2 border border-dark-gray relative'>
              <div className='flex justify-center items-center h-full'>
                {/* Conditional width and height for the 4th image (landscape) */}
                <img
                  src={element.imagePath}
                  alt=""
                  className={`${isLandscape ? 'mx-auto' : ''}`}
                  style={{
                    width: isLandscape ? '320px' : '213.36px',
                    height: isLandscape ? '213.36px' : '320px',
                  }}
                />
              </div>
              <div className='absolute bottom-2 text-10 pl-3 uppercase'>
                <p className='text-white'>{element.time}</p>
                <p className='text-medium-gray'>{element.source}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImagesPanel;
