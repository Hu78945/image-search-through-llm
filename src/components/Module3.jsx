import React from 'react'
import Layout from './Layout'
import SidePanel from './shared/ImagesPanel'

const Module3 = () => {

  const imageData1 = [
    [
      {imagePath: './icons/module_3a.png', time: 'Monday・September 26, 2023・14:45', source: 'Via Farini, Bologna, Italy'},
      {imagePath: './icons/module_3b.png', time: 'Monday・September 26, 2023・14:45', source: 'Via Farini, Bologna, Italy'},
      {imagePath: './icons/module_3c.png', time: 'Monday・September 26, 2023・14:45', source: 'Via Farini, Bologna, Italy'},
      {imagePath: './icons/module_3d.png', time: 'Monday・September 26, 2023・14:45', source: 'Via Farini, Bologna, Italy'},
      {imagePath: './icons/module_3e.png', time: 'Monday・September 26, 2023・14:45', source: 'Via Farini, Bologna, Italy'}
    ],
    '+24'
  ]

  const data = [
    {description: "How can Click help you today?", imageData: []},
    {description: "Find me some pictures of people on the street", imageData: []},
    {description: "Here are 28 pictures of people on the street", imageData: imageData1},
  ]
  return (
    <div className='flex'>
      <div className=''>
        <Layout data={data} />
      </div>

    </div>
  )
}

export default Module3