import serviceData from "../../../Components/ServicesJson/service.json";
import PageHeader from '../../../Common/PageHeader';
import Pagecontent from '../../../Common/Pagecontent';

const Digital = () => {
const service = serviceData[3];



  return (
    <div>
      <PageHeader title={"Digital Marketing"}/>
        <Pagecontent  service={service}/>
      
    </div>
   
  )
}

export default Digital;