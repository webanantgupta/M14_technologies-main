import { Link } from 'react-router-dom'
import BackToTop from './BackToTop'

const Footer = () => {
  return (
    <>
      <footer className="site-footer footer-dark pb-lg-5 mb-0">
        <div className="footer-main">
          <div className="container">
            <div className="row">
                <div className="col-xl-3 col-md-12 ms-auto">
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
                      <li><Link to="/" onClick={<BackToTop/>}>Home</Link></li>
                      <li><Link to="/about" onClick={<BackToTop/>}>About us</Link></li>
                      <li><Link to="/services/app-development" onClick={<BackToTop/>}>Service</Link></li>
                      <li><Link to="/serve/education" onClick={<BackToTop/>}>Industries</Link></li>
                      <li><Link to="/contact" onClick={<BackToTop/>}>Contact</Link></li>
                      <li><Link to="/" onClick={<BackToTop/>}>Privacy Policy</Link></li>

                    </ul>
                    <br /> <br />
                    <ul className="list-unstyled list-col-3 mb-0">
                      <li><Link to="/services/it-infrastructure-setup" onClick={<BackToTop/>}>It Infra Setup</Link></li>
                      <li><Link to="/services/mixed-reality" onClick={<BackToTop/>}>Mixed Reality</Link></li>
                      <li><Link to="/services/digital-marketing" onClick={<BackToTop/>}>Digital Marketing</Link></li>
                      <li><Link to="/services/platform-optimization" onClick={<BackToTop/>}>Platform Optimization</Link></li>
                      <li><Link to="/serve/retail" onClick={<BackToTop/>}>Retail</Link></li>
                      <li><Link to="/serve/finance" onClick={<BackToTop/>}>Finance</Link></li>

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
              <div className="col-lg-12 text-lg-center text-center mb-0">
                <p className='mb-0'>
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
