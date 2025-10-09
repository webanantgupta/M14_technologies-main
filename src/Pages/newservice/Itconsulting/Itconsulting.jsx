import React from 'react'
import PageHeader from '../../../Common/PageHeader';
import Comingsoon from '../../../Common/Comingsoon';
import CommonBtn from '../../../Common/CommonBtn';

const Itconsulting = () => {
  return (
    <div>
      <PageHeader title={"IT consulting and Support"}/>
  <div className='Itconsulting'>
     <Comingsoon/>
     <CommonBtn  btntxt={"Back To Home"} link={"/"}/>

    </div>
    </div>
  
  )
}

export default Itconsulting;
