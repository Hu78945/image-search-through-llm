import React from 'react'
import Layout from './Layout'
import SidePanel from './shared/SidePanel'

const Module3 = () => {
  const data=["How can Click help you today?", "Find me some pictures of people on the street", "Here are 28 pictures of people on the street"]
  const imageData = [
    [{imagePath: './icons/module_3a.png', time: 'Monday・September 26, 2023・14:45', source: 'Via Farini, Bologna, Italy'},
    {imagePath: './icons/module_3b.png', time: 'Monday・September 26, 2023・14:45', source: 'Via Farini, Bologna, Italy'},
    {imagePath: './icons/module_3c.png', time: 'Monday・September 26, 2023・14:45', source: 'Via Farini, Bologna, Italy'},
    {imagePath: './icons/module_3d.png', time: 'Monday・September 26, 2023・14:45', source: 'Via Farini, Bologna, Italy'},
    {imagePath: './icons/module_3e.png', time: 'Monday・September 26, 2023・14:45', source: 'Via Farini, Bologna, Italy'}],
    '+24'
  ]
  return (
    <div className='flex'>
      <div className=''>
        <Layout data={data} imageData={imageData} />
      </div>

    </div>
  )
}

export default Module3