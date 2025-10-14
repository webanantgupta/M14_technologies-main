import serviceData from "../../../Components/ServicesJson/service.json"
import PageHeader from '../../../Common/PageHeader';
import Pagecontent from '../../../Common/Pagecontent';

const Itconsulting = () => {

const service = serviceData[7];

  return (
    <div>
      <PageHeader title={"IT consulting and Support"}/>
     <Pagecontent service={service}/>
    </div>
  
  )
}

export default Itconsulting;
