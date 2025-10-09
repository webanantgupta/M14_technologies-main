import React from 'react'
import PageHeader from '../../../Common/PageHeader';
import Comingsoon from '../../../Common/Comingsoon';
import CommonBtn from '../../../Common/CommonBtn';

const Digital = () => {
  return (
    <div>
      <PageHeader title={"Digital Marketing"}/>
 <div className='digital_container'>
      <Comingsoon/>
      <div style={{display:'flex',justifyContent:'center'}} className='mb-5'>
          <CommonBtn btntxt={"Back To Home"} link={"/"} bg_color="bg_color" />
        </div>
      
    </div>
    </div>
   
  )
}

export default Digital;