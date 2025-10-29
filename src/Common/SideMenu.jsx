import { useState } from 'react'
import { Link } from 'react-router-dom'
import Modalpopup from './Modalpopup';
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
const SideMenu = ({ menuOpen, toggleMenu }) => {
  // const [menuOpen, setMenuOpen] = useState(false);
  const [rightPanelOpen, setRightPanelOpen] = useState(false);

  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [industriesDropdown, setIndustriesDropdown] = useState(false);

  // const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleRightPanel = () => setRightPanelOpen(!rightPanelOpen);
  const [openMenu, setOpenMenu] = useState(false);        // this is for when mobile menu is open/close
  const [openSubMenu, setopenSubMenu] = useState(false);    // this is for when submenu is open/close 

  // const toggleMenu = () => {
  //   setOpenMenu(!openMenu);
  // }

  const [modalOpen, setModalOpen] = useState(false);


  const handleModal = (e) => {
    e.preventDefault();
    setModalOpen(true);
  }

  const handleClose = () => {
    setModalOpen(false);
  }

  return (
    <>
      <Offcanvas
        direction="end"
        isOpen={menuOpen}
        toggle={toggleMenu}
        className="main-menu-offcanvas text-white"
      >
        <OffcanvasHeader toggle={toggleMenu}>
          <Link className="navbar-brand" to="/">
            <img
              className="img-fluid"
              src="/images/white_logo.png"
              alt="logo"
            />
          </Link>
        </OffcanvasHeader>

        <OffcanvasBody>
          <nav className="navbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={toggleMenu}>
                  About Us
                </Link>
              </li>

              {/* Services Dropdown */}
              <li className="nav-item">
                <Dropdown
                  isOpen={servicesDropdown}
                  toggle={() => setServicesDropdown(!servicesDropdown)}
                >
                  <DropdownToggle tag="span" style={{fontSize: "20px",fontWeight: "700"}} className="nav-link dropdown-toggle">
                    Services
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem tag={Link} onClick={toggleMenu} to="/services/it-infrastructure-setup">
                      IT Infra Setup
                    </DropdownItem>
                    <DropdownItem tag={Link} onClick={toggleMenu} to="/services/website-software-development">
                      Website & Software Development
                    </DropdownItem>
                    <DropdownItem tag={Link} onClick={toggleMenu} to="/services/mixed-reality">
                      Mixed Reality
                    </DropdownItem>
                    <DropdownItem tag={Link} onClick={toggleMenu} to="/services/digital-marketing">
                      Digital Marketing
                    </DropdownItem>
                    <DropdownItem tag={Link} onClick={toggleMenu} to="/services/management-service">
                      Management Services
                    </DropdownItem>
                    <DropdownItem tag={Link} onClick={toggleMenu} to="/services/platform-optimization">
                      Platform Optimization
                    </DropdownItem>
                    <DropdownItem tag={Link} onClick={toggleMenu} to="/services/it-consulting">
                      IT Consulting & Support
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </li>

              {/* Industries Dropdown */}
              <li className="nav-item">
                <Dropdown
                  isOpen={industriesDropdown}
                  toggle={() => setIndustriesDropdown(!industriesDropdown)}
                >
                  <DropdownToggle tag="span" style={{fontSize: "20px" , fontWeight: "600"}} className="nav-link dropdown-toggle">
                    Industries We Serve
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem tag={Link} onClick={toggleMenu} to="/serve/education">
                      Education
                    </DropdownItem>
                    <DropdownItem tag={Link} onClick={toggleMenu} to="/serve/health-care">
                      Healthcare
                    </DropdownItem>
                    <DropdownItem tag={Link} onClick={toggleMenu} to="/serve/retail">
                      Retail
                    </DropdownItem>
                    <DropdownItem tag={Link} onClick={toggleMenu} to="/serve/finance">
                      Finance
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/blog" onClick={toggleMenu}>
                  Blog
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact" onClick={toggleMenu}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* <div className="action-hamburger d-flex justify-content-start mt-3">
            <Button color="primary" onClick={handleModal}>
              Get A Quote
            </Button>
          </div> */}
          <div className="action-hamburger">
            <Link to="#" className='requestBTn py-2 px-4' onClick={handleModal}>Get A Quote</Link>
          </div>
          <div className="bottom-info mt-4">
            <div className="contact-info">
              <span className="number fs-5 d-block">+91 9999999999</span>
              <a className="mail d-block" href="#">
                <i className="fa-regular fa-envelope me-2" />
                Info@m14technologies.com
              </a>
              <span className="text d-block mt-2">
                Looking for collaboration for your next creative project?
              </span>
            </div>
          </div>
        </OffcanvasBody>
      </Offcanvas>

      {/* Side Panel Offcanvas */}
      <Offcanvas
        direction="end"
        isOpen={rightPanelOpen}
        toggle={toggleRightPanel}
        className="sidepanel-offcanvas"
      >
        <OffcanvasHeader toggle={toggleRightPanel}></OffcanvasHeader>
        <OffcanvasBody>
          <div className="body-inner">
            <div className="about-info mb-4">
              <h4 className="title mb-3">Scalable Business for Startups</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                voluptatum. Doloribus obcaecati perspiciatis eum! Commodi
                nesciunt tempora in repellat sit!
              </p>
            </div>

            <div className="social-info mb-4">
              <ul className="list-unstyled">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook-f me-2" />
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram me-2" />
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-x-twitter me-2" />
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-dribbble me-2" />
                    Dribbble
                  </a>
                </li>
              </ul>
            </div>

            <div className="contact-info">
              <span className="number d-block">+91 9999999999</span>
              <a className="mail d-block" href="#">
                <i className="fa-regular fa-envelope me-2" />
                Info@m14technologies.com
              </a>
              <span className="text d-block mt-2">
                Looking for collaboration for your next creative project?
              </span>
            </div>
          </div>
        </OffcanvasBody>
      </Offcanvas>
      {/* <div className="offcanvas main-menu-offcanvas offcanvas-end"
        tabIndex={-1}
        id="menuOffcanvas"
        aria-labelledby="menuOffcanvasLabel"
      >
        <div className="offcanvas-header">
          <Link id="menuOffcanvasLabel" className="navbar-brand" to="/">
            <img className="img-fluid" src="/images/white_logo.png" alt="logo" />
          </Link>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
        <div className="offcanvas-body lenis-scroll-disable">
          <div className="body-inner">
            <nav className="navbar">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link "
                    to="/"
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about" onClick={toggleMenu}>
                    About Us
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to='/services'
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/services/it-infrastructure-setup">
                        IT Infra Setup
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/services/website-software-development">
                        Website & Software Development
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/services/mixed-reality">
                        Mixed Reality
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/services/digital-marketing">
                        Digital Marketing
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown-item" to="/services/management-service">
                        Management Services
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/services/platform-optimization">
                        Platform Optimization
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/services/it-consulting">
                        IT Consulting & Support
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link dropdown-toggle"
                    to={''}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Industries We Serve
                  </Link>
                  <ul className='dropdown-menu'>
                    <li>
                      <Link className="dropdown-item" to="/serve/education">
                        Education
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/serve/health-care">
                        Healthcare
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/serve/retail">
                        Retail
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/serve/finance">
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
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="action-hamburger d-flex justify-content-start">
              <Link to="#" className='requestBTn  px-4 py-2' onClick={handleModal} >Get A Quote</Link>
            </div>
            <div className="bottom-info">
              <div className="contact-info">
                <span className="number fs-5">+91 9999999999</span>
                <a className="mail" href="#">
                  <i className="fa-regular fa-envelope" />
                  Info@m14technologies.com
                </a>
                <span className="text">
                  Looking for collaboration for your next creative project?
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="offcanvas offcanvas-end sidepanel-offcanvas"
        tabIndex={-1}
        id="offcanvasRight"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
        <div className="offcanvas-body lenis-scroll-disable">
          <div className="body-inner">
            <div className="about-info">
              <h4 className="title mb-3">Scalable Business for Startups</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptatum. Doloribus obcaecati perspiciatis eum! Commodi nesciunt tempora in repellat sit!
              </p>
            </div>
            <div className="socail-info">
              <ul className="socail-list-item">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook-f" />
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram" />
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-x-twitter" />
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-dribbble" />
                    Dribbble
                  </a>
                </li>
              </ul>
            </div>
            <div className="contact-info">
              <span className="number">+91 9999999999</span>
              <a className="mail" href="#">
                <i className="fa-regular fa-envelope" />
                Info@m14technologies.com
              </a>
              <span className="text">
                Looking for collaboration for your next creative project?
              </span>
            </div>
          </div>
        </div>
      </div> */}
      {<Modalpopup handleClose={handleClose} modalOpen={modalOpen} />}
    </>
  )
}

export default SideMenu
