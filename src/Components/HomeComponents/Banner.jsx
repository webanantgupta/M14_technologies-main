// import { Link } from "react-router-dom"
import Modalpopup from "../../Common/Modalpopup";
// import { useState } from "react";


const Banner = () => {
    // const [modalOpen, setModalOpen] = useState(false);
    
    // const handleModal = (e) => {
    // e.preventDefault();
    //   setModalOpen(true);
    // }
    
    // const handleClose = () =>{
    //   setModalOpen(false);
    // }
    return (
        <>
            <div className="main-banner main-banner-1">
                <div className="banner-inner">
                    <img
                        className="img-fluid banner-bg-one"
                        src="images/banner/banner-01/banner-bg-01.png"
                        alt="#"
                    />
                    <h1 className="banner-title " data-scroll
                        data-scroll-direction="horizontal"
                        data-scroll-speed="2"
                        >M14 <br /> Technologies</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <img
                                    className="img-fluid rotate rotate-img"
                                    src="images/banner/banner-01/banner-shape-01.png"
                                    alt="#"
                                />
                            </div>
                            <div className="col-md-6 ms-auto">
                                <div className="banner-content">
                                    <h1 className="animate__animated animate__lightSpeedInRight mb-0">Digital Solutions</h1>
                                          <h1 className="animate__animated animate__flipInX animate__delay-.5s mt-0  pt-0">
                                         Real-World Impact</h1>
                                    <p>We’re not just building software — we’re building trust, innovation, and long-term success</p>
                                    {/* <Link className="btn btn-effect" to={''} onClick={handleModal}>
                                        <span>Get A Quote</span>
                                        <svg
                                            width={20}
                                            height={22}
                                            viewBox="0 0 20 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_59_253)">
                                                <path
                                                    d="M19.4854 11.4293L17.0513 12.221C13.1214 13.4993 10.3036 16.9595 9.84784 21.0668C9.49371 16.981 6.71926 13.5081 2.81255 12.2604L0.210283 11.4293"
                                                    stroke="white"
                                                    strokeWidth={2}
                                                />
                                                <path
                                                    d="M9.83594 20.8889L9.83594 0"
                                                    stroke="white"
                                                    strokeWidth={2}
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_59_253">
                                                    <rect
                                                        width="21.3333"
                                                        height={20}
                                                        fill="white"
                                                        transform="translate(20) rotate(90)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Modalpopup handleClose={handleClose} modalOpen={modalOpen}/> */}
        </>
    )
}

export default Banner
