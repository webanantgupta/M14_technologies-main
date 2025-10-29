import { Link } from 'react-router-dom'

const Footer = () => {

 const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }



  return (
    <>
      <footer className="site-footer footer-dark pb-lg-4  mb-0">
        <div className="footer-main">
          <div className="container">
            <div className="row">
                <div className="col-xl-3 col-md-12 mx-2">
                <div className="widget widget-info">
                  {/* <h5 className="widget-title">Call Center</h5> */}
                 <Link className="footer-logo" to="/">
                    <img className="img-fluid" src="/images/white_logo.png" alt="logo" style={{ height: '130px' }} />
                    {/* <h4 className='gradient-text'>M14 Technologies</h4> */}
                  </Link>
                  {/* <h6 className="title">and get a free estimate</h6> */}
                </div>
                <div className="widget-socail">
                  <ul className="socail-icon">
                    <li>
                      <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            
              <div className="col-xl-5 col-md-7">
                <div className="widget">
                  {/* <h5 className="widget-title">Newsletter</h5> */}
                  {/* <div className="widget widget-newsletter mb-4 pb-2">
                    <form className="newsletter-form">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Email"
                      />
                      <button type="submit" className="subscribe-btn">
                        <i className="fa-solid fa-paper-plane" />
                      </button>
                    </form>
                  </div> */}
                  <div className="widget widget-menu">
                    <h6 className="widget-title">Quick Links</h6>
                    <ul className="list-unstyled list-col-3 mb-0">
                      <li><Link to="/services/management-service" onClick={scrollTop}>Management Service</Link></li>
                      <li><Link to="/services/it-consulting" onClick={scrollTop}>IT Consulting</Link></li>
                      <li><Link to="/services/app-development" onClick={scrollTop}>Service</Link></li>
                      <li><Link to="/serve/education" onClick={scrollTop}>Industries</Link></li>
                      {/* <li><Link to="/contact" onClick={<BackToTop/>}>Contact</Link></li> */}
                      <li><Link to="/serve/finance" onClick={scrollTop}>Finance</Link></li>
                      <li><Link to="/services/it-infrastructure-setup" onClick={scrollTop}>It Infra Setup</Link></li>
                      <li><Link to="/services/mixed-reality" onClick={scrollTop}>Mixed Reality</Link></li>
                      <li><Link to="/services/digital-marketing" onClick={scrollTop}>Digital Marketing</Link></li>
                      <li><Link to="/" onClick={scrollTop}>Privacy Policy</Link></li>
                      <li><Link to="/serve/retail" onClick={scrollTop}>Retail</Link></li>
                      <li><Link to="/services/platform-optimization" onClick={scrollTop}>Platform Optimization</Link></li>
                      <li><Link to="/" onClick={scrollTop}>Terms and conditions</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-5">
                <div className="widget widget-address-info">
                  <h5 className="widget-title">Where To Find Us</h5>
                  <ul className="address-info-list">
                    <li>
                      <i className="icon">
                        <img
                          className="img-fluid"
                          src="images/svg/address-info-contacts.svg"
                          alt=""
                        />
                      </i>
                      <span className="info">
                        <span>C-25, Aliganj, Lucknow <br /> Uttar Pradesh India - 226024 </span>  
                      </span>
                    </li>
                    <li>
                      <i className="icon">
                        <img
                          className="img-fluid"
                          src="images/svg/address-info-headphone.svg"
                          alt=""
                        />
                      </i>
                      <span className="info">
                        <span>99999999999 </span>
                      </span>
                    </li>
                    <li>
                      <i className="icon">
                        <img
                          className="img-fluid"
                          src="images/svg/address-info-email.svg"
                          alt=""
                        />
                      </i>
                      <span className="info">
                        <span>Info@m14technologies.com </span>24x7 online support
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright p-0">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                {/* <p>
                  <Link className="footer-logo" to="/">
                    <img className="img-fluid" src="/images/white_logo.png" alt="logo" style={{ height: '90px' }} />
                    <h4 className='gradient-text'>M14 Technologies</h4>
                  </Link>
                </p> */}
              </div>
              <div className="col-lg-12 text-lg-center text-center">
                <p className=''>
                  Copyright © 2025 All Rights Reserved  - <Link to="/">M14 Technologies Pvt. Ltd.</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
