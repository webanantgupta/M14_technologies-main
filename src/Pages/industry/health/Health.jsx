import industryData from "../../../Components/Industries/industries.json"
import PageHeader from '../../../Common/PageHeader';
import Pagecontent from '../../../Common/Pagecontent';

const Health = () => {

  const industry = industryData[2];


  return (
    <div>
      <PageHeader title={"Healthcare"} />
        <Pagecontent service={industry}/>
    </div>

  )
}

export default Health;