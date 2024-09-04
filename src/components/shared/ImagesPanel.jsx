import React from 'react'

const ImagesPanel = ({data}) => {
  return (
    <div className='bg-black border-2 border-red-900 w-1/2'>
        <div className='flex justify-between items-center border-b border-light-gray'>
          <div className='flex gap-2 p-4 text-13'>
            <span className='text-white'>16 IMAGES Found</span><span className='text-medium-gray'>UPDATED 6 SEC AGO</span>
          </div>
          <img src='./icons/cross_icon.png' className='h-6'></img>
        </div>

        <div className='flex flex-wrap h-full'>
          {data[2].imageData[0].map((element, index)=> {
            if (index < 4) {
              return (<div key={index} className='w-1/2 h-1/2 border-4 border-green-500'>
                <div className='h-3/4 border'>
                  <img src={element.imagePath} alt="" />
                </div>
                <div className='text-10 p-2'>
                  <p className='text-white'>{element.time}</p>
                  <p className='text-medium-gray'>{element.source}</p>
                </div>
              </ div>)
            }
            
          })}
          {/* {data.map((item, index) => {
            console.log('data:', data);
            console.log('item:', item);

            if (item.imageData.length >0) {
              return (
                item.imageData[0].map((element, index)=>{
                  console.log('element:', element);
                  if (index < 4) {
                    return (
                      <div key={index} className='w-1/2 h-1/2 border-medium-gray'>
                        <div className='h-3/4 border'>
                          <img src={element.imagePath} alt="" />
  
                        </div>
                        <div className='text-10 p-2'>
                          <p className='text-white'>{element.time}</p>
                          <p className='text-medium-gray'>{element.source}</p>
                        </div>
                      </ div>
                    )
                  }
                  
                })
                
              );

            }
            
          })} */}
        </div>

        {/* <div className='flex flex-wrap'>
          {imageData && imageData[0].map((item, index) => {
            console.log('data:', data);
            
            if (index < 4) {
              return (
                <div key={index} className='w-1/2 h-1/2 border-medium-gray'>
                  <div className='h-3/4 border'>
                    <img src={item.imagePath} alt="" />

                  </div>
                  <div className='text-10 p-2'>
                    <p className='text-white'>{item.time}</p>
                    <p className='text-medium-gray'>{item.source}</p>
                  </div>
                </div>
              );
            } else {
              return null; // If the condition is not met, return null
            }
          })}
        </div> */}

      </div>
  )
}

export default ImagesPanel