import React from 'react'
import Header from './shared/Header'
import Prompt from './shared/Prompt'

const Layout = ({data, inProgress, imageData}) => {
  return (
    <div className='bg-black h-screen flex flex-col items-center'>
      <Header />
      <Prompt data={data} inProgress={inProgress} imageData={imageData}/>
    </div>
  )
}

export default Layout