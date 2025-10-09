import React from 'react'
import PageHeader from '../../../Common/PageHeader'
import Comingsoon from '../../../Common/Comingsoon'
import CommonBtn from '../../../Common/CommonBtn'

const Mixed = () => {
  return (
<div>
  <PageHeader title={"Mixed Reality"}/>
<div className='mixed_container'>
       <Comingsoon/>
     <CommonBtn  btntxt={"Back To Home"} link={"/"}/>

    </div>
</div>

    
  )
}

export default Mixed
