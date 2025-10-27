import Pagecontent from "../../../Common/Pagecontent"
import PageHeader from "../../../Common/PageHeader"
import serviceData from "../../../Components/ServicesJson/service.json"


const Appdev = () => {
    const service = serviceData[8];
  return (
    <div>
      <PageHeader title="App Development"/>
      <Pagecontent service={service}/>
    </div>
  )
}

export default Appdev
