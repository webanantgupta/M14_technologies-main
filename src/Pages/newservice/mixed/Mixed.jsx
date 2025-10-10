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

         <div className="mixed_btn">
          <CommonBtn btntxt={"Back To Home"} link={"/"}/>
         </div>
</div>

    
  )
}

export default Mixed
