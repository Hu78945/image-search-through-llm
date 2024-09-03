import React from 'react'
import Layout from './Layout'

const Module2 = () => {
  const data=["How can Click help you today?", "Find me some pictures of people on the street"]
  return (
    <div>
      <Layout data={data} inProgress={true} displaySidePanel={false} />
    </div>
  )
}

export default Module2