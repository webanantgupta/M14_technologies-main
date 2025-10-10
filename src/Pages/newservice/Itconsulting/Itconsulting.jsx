import serviceData from "../../../Components/ServicesJson/service.json"
import PageHeader from '../../../Common/PageHeader';
import CommonBtn from '../../../Common/CommonBtn';
import Pagecontent from '../../../Common/Pagecontent';

const Itconsulting = () => {

const service = serviceData[7];

  return (
    <div>
      <PageHeader title={"IT consulting and Support"}/>
     <Pagecontent service={service}/>
     <div className="itconsulting_btn">
      <CommonBtn btntxt={"Back To Home"} link={"/"}/>
     </div>
    </div>
  
  )
}

export default Itconsulting;
