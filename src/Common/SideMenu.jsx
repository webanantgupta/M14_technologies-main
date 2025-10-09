import React from 'react'
import { Link } from 'react-router-dom'

const SideMenu = () => {
  return (
    <>
      <div
        className="offcanvas main-menu-offcanvas offcanvas-end"
        tabIndex={-1}
        id="menuOffcanvas"
        aria-labelledby="menuOffcanvasLabel"
      >
        <div className="offcanvas-header">
          <Link id="menuOffcanvasLabel" className="navbar-brand" to="/">
           <img class="img-fluid" src="/images/white_logo.png" alt="logo" />
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
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    About Us
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to={''}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/">
                        Website Development
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Mobile App Development
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        SaaS & Enterprise Software
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Graphic Designing
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Digital Marketing
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Hosting & Cloud
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
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
      </div>
    </>
  )
}

export default SideMenu
