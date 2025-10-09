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
     <CommonBtn  btntxt={"Back To Home"} link={"/"}/>
      
    </div>
    </div>
   
  )
}

export default Digital;