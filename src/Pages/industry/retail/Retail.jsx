import React from 'react'
import PageHeader from '../../../Common/PageHeader';
import Comingsoon from '../../../Common/Comingsoon';
import CommonBtn from '../../../Common/CommonBtn';

const Retail = () => {
  return (
    <div className='retail_continer'>
      <PageHeader title={"Retail"} />
      <div>
     <Comingsoon />
     <CommonBtn  btntxt={"Back To Home"} link={"/"}/>
      </div>
    </div>

  )
}

export default Retail;