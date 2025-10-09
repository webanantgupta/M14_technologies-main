import React from 'react'
import PageHeader from '../../../Common/PageHeader'
import Comingsoon from '../../../Common/Comingsoon'
import CommonBtn from '../../../Common/CommonBtn'

const Website = () => {
  return (
    <div>
      <PageHeader title={"Website & Software Development"}/>
 <div className='website_container'>
     <Comingsoon/>
     <CommonBtn className="commonBtn"  btntxt={"Back To Home"} link={"/"}/>
     
    </div>
    </div>
   
  )
}

export default Website
Website