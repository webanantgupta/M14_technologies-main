import serviceData from "../../../Components/ServicesJson/service.json"
import PageHeader from '../../../Common/PageHeader'
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
