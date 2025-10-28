import Pagecontent from "../../../Common/Pagecontent"
import PageHeader from "../../../Common/PageHeader"
import serviceData from "../../../Components/ServicesJson/service.json"


const Appdev = () => {
    const service = serviceData[7];
  return (
    <div>
      <PageHeader title="App Development"/>
      <Pagecontent service={service}/>
    </div>
  )
}

export default Appdev
