import serviceData from "../../../Components/ServicesJson/service.json";
import PageHeader from '../../../Common/PageHeader';
import CommonBtn from '../../../Common/CommonBtn';
import Pagecontent from '../../../Common/Pagecontent';

const Digital = () => {
const service = serviceData[4];



  return (
    <div>
      <PageHeader title={"Digital Marketing"}/>
        <Pagecontent  service={service}/>
        <div className="digital_btn">
          <CommonBtn btntxt={"Back To Home"} link={"/"}/>
        </div>
    </div>
   
  )
}

export default Digital;