import React from 'react'
import Header from './shared/Header'
import Prompt from './shared/Prompt'
import SidePanel from './shared/SidePanel'

const Layout = ({data, inProgress, displaySidePanel = true}) => {
  return (
    <div className='flex'>
      <div className='bg-black h-screen flex flex-col items-center w-full'>
        <Header />
        <Prompt data={data} inProgress={inProgress} />
      </div>
      {displaySidePanel && <SidePanel data={data} />}
    </div>
  )
}

export default Layout