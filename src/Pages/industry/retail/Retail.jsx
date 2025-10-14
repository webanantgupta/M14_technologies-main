import industryData from "../../../Components/Industries/industries.json"
import PageHeader from '../../../Common/PageHeader';
import Pagecontent from '../../../Common/Pagecontent';

const Retail = () => {

const industry = industryData[3];

  return (
    <div className='retail_continer'>
      <PageHeader title={"Retail"} />
      <Pagecontent service={industry}/>
    </div>

  )
}

export default Retail;