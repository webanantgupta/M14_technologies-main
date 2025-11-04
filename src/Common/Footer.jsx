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
              <div className="footer_logo col-xl-3 col-md-12 mx-2">
                <div className="footer_logo_image widget widget-info">
                  {/* <h5 className="widget-title">Call Center</h5> */}
                  <Link className="footer-logo" to="/">
                    <img className="img-fluid" src="/images/white_logo.png" alt="logo" style={{ height: '130px' }} />
                    {/* <h4 className='gradient-text'>M14 Technologies</h4> */}
                  </Link>
                  {/* <h6 className="title">and get a free estimate</h6> */}
                </div>
                <div className="footer_logo_icon widget-socail">
                  <ul className="socail-icon">
                    <li>
                      <a className='footer_icon' href="#"><i className="fa-brands fa-facebook-f"></i></a>
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
                  <div className="desktop_li widget widget-menu">
                    <h6 className="widget-title">Quick Links</h6>
                    <ul className="footer_links list-unstyled list-col-3 mb-0">
                      <li><Link to="/services/management-service" onClick={scrollTop}>Management Service</Link></li>
                      <li><Link to="/services/it-consulting" onClick={scrollTop}>IT Consulting</Link></li>
                      <li><Link to="/services/app-development" onClick={scrollTop}>Service</Link></li>
                      <li><Link to="/serve/education" onClick={scrollTop}>Industries</Link></li>
                      {/* <li><Link to="/contact" onClick={<BackToTop/>}>Contact</Link></li> */}
                      <li><Link to="/serve/finance" onClick={scrollTop}>Finance</Link></li>
                      <li><Link to="/services/it-infrastructure-setup" onClick={scrollTop}>It Infra Setup</Link></li>
                      <li><Link to="/services/mixed-reality" onClick={scrollTop}>Mixed Reality</Link></li>
                      <li><Link to="/services/digital-marketing" onClick={scrollTop}>Digital Marketing</Link></li>
                      <li><Link to="/privacy-policy" onClick={scrollTop}>Privacy Policy</Link></li>
                      <li><Link to="/serve/retail" onClick={scrollTop}>Retail</Link></li>
                      <li><Link to="/services/platform-optimization" onClick={scrollTop}>Platform Optimization</Link></li>
                      <li><Link to="/terms-conditions" onClick={scrollTop}>Terms and conditions</Link></li>
                    </ul>
                  </div>

                  <div className="mobile_li widget widget-menu">
                    <h6 className="widget-title">Quick Links</h6>
                    <div className='d-flex justify-content-between'>
                      <ul className="footer_links list-unstyled list-col-3 mb-0">
                        <li><Link to="/services/management-service" onClick={scrollTop}>Management Service</Link></li>
                        <li><Link to="/services/it-consulting" onClick={scrollTop}>IT Consulting</Link></li>
                        <li><Link to="/services/app-development" onClick={scrollTop}>Service</Link></li>
                        <li><Link to="/serve/education" onClick={scrollTop}>Industries</Link></li>
                        <li><Link to="/serve/finance" onClick={scrollTop}>Finance</Link></li>
                        <li><Link to="/services/it-infrastructure-setup" onClick={scrollTop}>It Infra Setup</Link></li>
                      </ul>
                      <ul className="footer_links list-unstyled list-col-3 mb-0">
                        <li><Link to="/services/mixed-reality" onClick={scrollTop}>Mixed Reality</Link></li>
                        <li><Link to="/services/digital-marketing" onClick={scrollTop}>Digital Marketing</Link></li>
                        <li><Link to="/privacy-policy" onClick={scrollTop}>Privacy Policy</Link></li>
                        <li><Link to="/serve/retail" onClick={scrollTop}>Retail</Link></li>
                        <li><Link to="/services/platform-optimization" onClick={scrollTop}>Platform Optimization</Link></li>
                        <li><Link to="/terms-conditions" onClick={scrollTop}>Terms and conditions</Link></li>
                      </ul>
                    </div>
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
                        <Link to={"https://maps.app.goo.gl/fCCVkB66rpCCQDrj7"} style={{ color: "white", fontWeight: "bold", cursor: "pointer" }} target='_blank'>467/95, Mehtab Bagh Colony<br />Lucknow, Uttar Pradesh India - 226024 </Link>
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
                        <Link to={"tel:+7705009900"} style={{ color: "white", fontWeight: "bold" }}>+91-770-500-9900 </Link>
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
                        <Link to={"mailto:mirza@m.14.tech"} style={{ color: "white", fontWeight: "bold" }}>mirza@m.14.tech </Link>24x7 online support
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
                  Copyright © 2025 All Rights Reserved  - <Link to="/" onClick={scrollTop}>M14 Technologies Pvt. Ltd.</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className='extraSpace'>
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  )
}

export default Footer
