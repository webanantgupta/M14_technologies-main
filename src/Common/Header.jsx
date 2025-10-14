import { Link } from 'react-router-dom';

const Header = () => {






  return (
    <>
          
      <header className="header header-default header-sticky header-absolute">
        <div className="header-inner" >
          <div className="site-logo" style={{ width: "20%" }}>
            <Link className="navbar-brand" to="/">
              <img className="img-fluid" src="/images/white_logo.png" alt="logo" style={{ height: '90px', flexGrow: 1  }} />
              {/* <h4 className='gradient-text'>M14 Technologies</h4> */}
            </Link>
          </div>

          <div className="site-menu d-none d-xl-block" style={{ width: "60%"  }} >
            <ul className="main-menu p-0" >
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us 
                </Link>
                {/* <ul className='submenu'>
                  <li>
                    <Link className='nav-link' to="/about/company-overview">
                      Company Overview
                    </Link>
                  </li>
                  <li>
                    <Link className='nav-link' to="/about/mission-vision">
                      Mission & Vision
                    </Link>
                  </li>
                  <li>
                    <Link className='nav-link' to="/about/achivements">
                      Achievements
                    </Link>
                  </li>
                </ul> */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Services <i className="fa-solid fa-chevron-down" />
                </Link>
                <ul className="submenu">
                  <li>
                    <Link className="nav-link" to="/services/it-infrastructure-setup">
                      IT Infra Setup
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/services/website-software-development">
                      Website & Software Development

                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/services/mixed-reality">
                      Mixed Reality

                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/services/digital-marketing">
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/services/management-service">
                      Management Services
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/services/platform-optimization">
                      Platform Optimisation
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/services/it-consulting">
                      IT Consulting & Support
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Industries We Serve <i className="fa-solid fa-chevron-down" />
                </Link>
                <ul className="submenu">
                  <li>
                    <Link className="nav-link" to="/serve/education">
                      Education
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/serve/health-care">
                      Healthcare
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/serve/retail">
                      Retail

                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/serve/finance">
                      Finance
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blog

                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="#">
                  Blog <i className="fa-solid fa-chevron-down" />
                </Link>
                <ul className="submenu">
                  <li>
                    <Link className="nav-link" to="/blog">
                      Blog Standard
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/blog-detail">
                      Blog Single
                    </Link>
                  </li>
                </ul>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="site-action d-none d-xl-block" style={{ width: "20x"  }}>
            <div className="action-hamburger">
              <Link to="/contact" className='requestBTn'>Request A Quote</Link>
              {/* <a
                className="hamburger"
                href="#"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                <span className="hamburger-container">
                  <span className="hamburger-inner" />
                  <span className="hamburger-hidden" />
                </span>
              </a> */}
            </div>
          </div>
          <div className="mobile-action d-block d-xl-none">
            <div className="mobile-hamburger">
              <a
                className="hamburger"
                href="#"
                data-bs-toggle="offcanvas"
                data-bs-target="#menuOffcanvas"
                aria-controls="menuOffcanvas"
              >
                <span className="hamburger-container">
                  <span className="hamburger-inner" />
                  <span className="hamburger-hidden" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
