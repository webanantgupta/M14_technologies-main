import React from 'react'
import PageHeader from '../../../Common/PageHeader';
import Comingsoon from '../../../Common/Comingsoon';
import CommonBtn from '../../../Common/CommonBtn';

const Finance = () => {
  return (
    <div>
      <PageHeader title={"Finance"}/>
 <div>
      <Comingsoon/>
     <CommonBtn  btntxt={"Back To Home"} link={"/"}/>

    </div>
    </div>
   
  )
}

export default Finance;