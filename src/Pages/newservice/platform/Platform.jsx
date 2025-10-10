import serviceData from "../../../Components/ServicesJson/service.json"
import PageHeader from '../../../Common/PageHeader'
import CommonBtn from '../../../Common/CommonBtn'
import Pagecontent from '../../../Common/Pagecontent'

const Platform = () => {
const service = serviceData[6];


  return (
    <div>
      <PageHeader title={"Plateform Optimisation"}/>
    <Pagecontent service={service} />
    <div className="platform_btn">
      <CommonBtn btntxt={"Back To Home"} link={"/"}/>
    </div>
    </div>
   
  )
}

export default Platform
