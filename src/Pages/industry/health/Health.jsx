import React from 'react'
import PageHeader from '../../../Common/PageHeader';
import Comingsoon from '../../../Common/Comingsoon';
import CommonBtn from '../../../Common/CommonBtn';

const Health = () => {
  return (
    <div>
      <PageHeader title={"Healthcare"} />
      <div>
        <Comingsoon />

      </div>
      <div>
     <CommonBtn btntxt={"Back To Home"} link={"/"}/>

      </div>
    </div>

  )
}

export default Health;