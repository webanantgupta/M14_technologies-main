import serviceData from "../../../Components/ServicesJson/service.json"
import PageHeader from '../../../Common/PageHeader';
import Pagecontent from '../../../Common/Pagecontent';

const Management = () => {

const service = serviceData[4];

  return (
    <div>
      <PageHeader title={"Management Services"}/>
       <Pagecontent service={service} />
    </div>
    
  )
}

export default Management;