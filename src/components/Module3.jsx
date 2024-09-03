import React from 'react'
import Layout from './Layout'

const Module3 = () => {
  const data=["How can Click help you today?", "Find me some pictures of people on the street", "Here are 28 pictures of people on the street"]
  const imageData = [
    {imagePath: './icons/module_3a.png', time: 'Monday・September 26, 2023・14:45', source: 'Via Farini, Bologna, Italy'},
    {imagePath: './icons/module_3b.png', time: 'Monday・September 26, 2023・14:45', source: 'Via Farini, Bologna, Italy'},
    {imagePath: './icons/module_3c.png', time: 'Monday・September 26, 2023・14:45', source: 'Via Farini, Bologna, Italy'},
    {imagePath: './icons/module_3d.png', time: 'Monday・September 26, 2023・14:45', source: 'Via Farini, Bologna, Italy'},
    {imagePath: './icons/module_3e.png', time: 'Monday・September 26, 2023・14:45', source: 'Via Farini, Bologna, Italy'}
  ]
  return (
    <div className='flex'>
      <div className='w-1/2'>
        <Layout data={data} imageData={imageData} />
      </div>

      <div className='bg-black border-2 border-red-900 w-1/2'>
        <div className='flex justify-between items-center border-b border-light-gray'>
          <div className='flex gap-2 p-4 text-13'>
            <span className='text-white'>16 IMAGES Found</span><span className='text-medium-gray'>UPDATED 6 SEC AGO</span>
          </div>
          <img src='./icons/cross_icon.png' className='h-6'></img>
        </div>

        <div className='flex flex-wrap'>
          {imageData.map((item, index) => {
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
        </div>

      </div>
    </div>
  )
}

export default Module3