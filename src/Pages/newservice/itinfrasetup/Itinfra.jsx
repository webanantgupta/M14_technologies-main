
import CommonBtn from '../../../Common/CommonBtn';
import PageHeader from '../../../Common/PageHeader'
import Pagecontent from '../../../Common/Pagecontent'
import serviceData from "../../../Components/ServicesJson/service.json"

const Itinfra = () => {
  const service = serviceData[0];
  // console.log(service);
  
  return (
    <div>
      <PageHeader title="It Infra Setup" />
      <Pagecontent  service={service} />

      
        <div className='itinfra_btn'>
          <CommonBtn btntxt={"Back To Home"} link={"/"} bg_color="bg_color" />
        </div>
      </div>
  )
}

export default Itinfra
