import React from 'react'
import PageHeader from '../../../Common/PageHeader';
import Comingsoon from '../../../Common/Comingsoon';
import CommonBtn from '../../../Common/CommonBtn';

const Management = () => {
  return (
    <div>
      <PageHeader title={"Management Services"}/>
<div className='management_container'>
       <Comingsoon/>
     <CommonBtn  btntxt={"Back To Home"} link={"/"}/>
       
    </div>
    </div>
    
  )
}

export default Management;