import React from 'react'
import PageHeader from '../../../Common/PageHeader';
import Comingsoon from '../../../Common/Comingsoon';
import CommonBtn from '../../../Common/CommonBtn';

const Education = () => {
  return (
    <div>
      <PageHeader title={"Education"}/>
   <div>
    <Comingsoon/>
     <CommonBtn  btntxt={"Back To Home"} link={"/"}/>

   </div>
    </div>
  )
}

export default Education;