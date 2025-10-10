import serviceData from "../../../Components/ServicesJson/service.json"
import PageHeader from '../../../Common/PageHeader';
import CommonBtn from '../../../Common/CommonBtn';
import Pagecontent from '../../../Common/Pagecontent';

const Management = () => {

const service = serviceData[5];

  return (
    <div>
      <PageHeader title={"Management Services"}/>
       <Pagecontent service={service} />
       <div className="management_btn">
       <CommonBtn btntxt={"Back To Home"} link={"/"}/>

       </div>
    </div>
    
  )
}

export default Management;