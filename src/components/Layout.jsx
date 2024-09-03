import React from 'react'
import Header from './shared/Header'
import Prompt from './shared/Prompt'
import SidePanel from './shared/SidePanel'

const Layout = ({data, inProgress, imageData, displaySidePanel = true}) => {
  return (
    <div className='flex'>
      <div className='bg-black h-screen flex flex-col items-center w-full'>
        <Header />
        <Prompt data={data} inProgress={inProgress} imageData={imageData}/>
      </div>
      {displaySidePanel && <SidePanel imageData={imageData}/>}
    </div>
  )
}

export default Layout