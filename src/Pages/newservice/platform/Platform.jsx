import serviceData from "../../../Components/ServicesJson/service.json"
import PageHeader from '../../../Common/PageHeader'
import Pagecontent from '../../../Common/Pagecontent'

const Platform = () => {
const service = serviceData[6];


  return (
    <div>
      <PageHeader title={"Plateform Optimisation"}/>
    <Pagecontent service={service} />
    </div>
   
  )
}

export default Platform
