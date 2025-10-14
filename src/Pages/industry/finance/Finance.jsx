import industryData from "../../../Components/Industries/industries.json"
import PageHeader from '../../../Common/PageHeader';
import CommonBtn from '../../../Common/CommonBtn';
import Pagecontent from '../../../Common/Pagecontent';

const Finance = () => {

const industry = industryData[1];


  return (
    <div>
      <PageHeader title={"Finance"}/>
 
     <Pagecontent  service={industry}/>

    
    </div>
   
  )
}

export default Finance;