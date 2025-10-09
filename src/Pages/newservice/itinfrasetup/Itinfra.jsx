import React from 'react'
import PageHeader from '../../../Common/PageHeader'
import Comingsoon from '../../../Common/Comingsoon'
import CommonBtn from '../../../Common/CommonBtn'

const Itinfra = () => {
  return (
    <div>
      <PageHeader title="It Infra Setup" />
      <div className='itinfra_container'>
     <Comingsoon/>
     <CommonBtn  btntxt={"Back To Home"} link={"/"} bg_color="bg_color"/>
     
      </div>
    </div>
  )
}

export default Itinfra
