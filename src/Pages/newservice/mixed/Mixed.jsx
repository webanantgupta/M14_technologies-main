import serviceData from "../../../Components/ServicesJson/service.json"
import PageHeader from '../../../Common/PageHeader'
import CommonBtn from '../../../Common/CommonBtn'
import Pagecontent from '../../../Common/Pagecontent'

const Mixed = () => {

const service = serviceData[2];

  return (
<div>
  <PageHeader title={"Mixed Reality"}/>
         <Pagecontent  service={service}/>
</div>

    
  )
}

export default Mixed
