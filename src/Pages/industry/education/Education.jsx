import industryData from "../../../Components/Industries/industries.json"
import PageHeader from '../../../Common/PageHeader';
import Pagecontent from '../../../Common/Pagecontent';

const Education = () => {

const industry = industryData[0];
console.log(industry);

  return (
    <div>
      <PageHeader title={"Education"}/>
   <div>
    <Pagecontent service={industry}/>

   </div>
    </div>
  )
}

export default Education;