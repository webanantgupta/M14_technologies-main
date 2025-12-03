import { Link, NavLink } from 'react-router-dom';
import { useState } from "react";
import Modalpopup from './Modalpopup';
import SideMenu from './SideMenu';
import GetQuote from './GetQuote';

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);        // this is for when mobile menu is open/close
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  }

  const handleModal = (e) => {
    e.preventDefault();
    setModalOpen(true);
  }

  const handleClose = () => {
    setModalOpen(false);
  }


  return (
    <>
      {/* <GetQuote/> */}
      <header className="header header-default header-sticky header-absolute">
        <div className="header-inner">
          <div className="site-logo" style={{ width: "20%" }}>
            <Link className="navbar-brand" to="/">
              <img className="img-fluid" src="/images/white_logo.png" alt="logo" style={{ height: '90px', flexGrow: 1 }} />
              {/* <h4 className='gradient-text'>M14 Technologies</h4> */}
            </Link>
          </div>

          <div className="site-menu d-none d-xl-block header_li" style={{ width: "60%" }} >
            <ul className="main-menu">
              <li className="nav-item ">
                <NavLink className="" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="" to="/about">
                  About Us
                </NavLink>
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
              <li className="nav-item ">
                <NavLink className=" " to="/services">
                  Services <i className="fa-solid fa-chevron-down" />
                </NavLink>
                <ul className="submenu ">
                  <li>
                    <Link className="nav-link" to="/services/app-development">
                      App Development
                    </Link>
                  </li>
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
                <NavLink className="" to="/serve/education">
                  Industries We Serve <i className="fa-solid fa-chevron-down" />
                </NavLink>
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
                <NavLink className="" to="/blog">
                  Blog
                </NavLink>
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
                <NavLink className="nav-link" to="/contact">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* <div className="site-action d-none d-xl-block" style={{ width: "20x" }}>
            {/* <div className="action-hamburger">
              <Link to="#" className='requestBTn' onClick={handleModal}>Get A Quote</Link>
            </div> */}

          {/* </div>  */}
          <div className="mobile-action d-block d-xl-none">
            <div className="mobile-hamburger">
              <span
                className="hamburger"
                onClick={toggleMenu}
              >
                <span className="hamburger-container">
                  <span className="hamburger-inner" />
                  <span className="hamburger-hidden" />
                </span>
              </span>
            </div>
          </div>
        </div>
      </header>
      <SideMenu menuOpen={openMenu} toggleMenu={toggleMenu} />
    </>
  )
}

export default Header
