import React from 'react'
import PageHeader from '../../../Common/PageHeader'
import Comingsoon from '../../../Common/Comingsoon'
import CommonBtn from '../../../Common/CommonBtn'

const Platform = () => {
  return (
    <div>
      <PageHeader title={"Plateform Optimisation"}/>
 <div className='platform_container'>
      <Comingsoon/>
     <CommonBtn  btntxt={"Back To Home"} link={"/"}/>

    </div>
    </div>
   
  )
}

export default Platform
