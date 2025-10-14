import serviceData from "../../../Components/ServicesJson/service.json"
import PageHeader from '../../../Common/PageHeader'
import Pagecontent from '../../../Common/Pagecontent'

const Website = () => {

const service = serviceData[1];

  return (
    <div>
      <PageHeader title={"Website & Software Development"}/>
        <Pagecontent service={service} />
    </div>
   
  )
}

export default Website
Website