import { Link } from "react-router-dom"
import Servicesvg from "../svgs/Servicesvg"
import BackToTop from "../../Common/BackToTop"

const ServiceCard = ({ title, des, link }) => {
    return (
        <>
            <div className="service-wrapper service-style-1">
                <div className="service-inner">
                    <div className="service-icon">
                        <img className="img-fluid" src="images/svg/services/Information-Security.svg" alt="#" />
                    </div>
                    <div className="bg-icon">
                        <img className="img-fluid" src="images/svg/services/color-icon/Information-Security.svg" alt="#" />
                    </div>
                    <div className="service-content">
                        <h5 className="service-title">   {title}   </h5>
                        <p>{des}  </p>
                        <div className="service-links">
                            <Link className="btn-arrow" to={`${link}`} onClick={<BackToTop/>}>    <Servicesvg />  </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceCard
