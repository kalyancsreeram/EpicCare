import React from 'react'
import ResourcesComp from '../components/resources/ResourcesComp'
import useScrollToTop from '../hooks/useScrollToTop';

function Resources() {
  useScrollToTop();

  return (
    <div  style = {{minHeight:"100vh"}}>
        <ResourcesComp/>
    </div>
  )
}

export default Resources