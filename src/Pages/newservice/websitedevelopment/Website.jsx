import serviceData from "../../../Components/ServicesJson/service.json"
import PageHeader from '../../../Common/PageHeader'
import CommonBtn from '../../../Common/CommonBtn'
import Pagecontent from '../../../Common/Pagecontent'

const Website = () => {

const service = serviceData[1];

  return (
    <div>
      <PageHeader title={"Website & Software Development"}/>
        <Pagecontent service={service} />
        <div className="website_btn">
          <CommonBtn btntxt={"Back To Home"} link={"/"}/>
        </div>
    </div>
   
  )
}

export default Website
Website