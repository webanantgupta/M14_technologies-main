import { useFormik } from 'formik'
import toast from "react-hot-toast"
import Formvalidation from './Formvalidation'
import { Link } from 'react-router-dom'


const ContactUs = () => {







  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: ""
  }

  const { values, handleBlur, handleChange, errors, handleSubmit, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: Formvalidation,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      toast.success("Details submitted successfully")
      resetForm();
    }
  })
  // console.log(ans);



  return (
    <>
      <div className="site-content">
        <div className="container-fluid">
          <div className="item-efftect">
            <div className="efftect overflow-hidden" />
            <div className="efftect overflow-hidden" />
            <div className="efftect overflow-hidden" />
            <div className="efftect overflow-hidden" />
            <div className="efftect overflow-hidden" />
          </div>
        </div>
        {/*=================================
  Page Header */}
        <div
          className="inner-header bg-holder"
          style={{
            backgroundImage: "url(images/banner/inner-header/page-header-01.jpg)"
          }}
        >
          <div className="container">
            <div className="row  justify-content-center">
              <div className="col-md-12 text-center">
                <h1 className="title">Contact us</h1>
                <p>Let success motivate you.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-wrapper">
          {/*=================================
    Contact Us */}
          <section className="space-ptb z-index-2">
            <div className="container">
              <div className="row" style={{ marginTop: "100px" }}>
                <div className="col-xl-6 col-lg-5 mt-5">
                  <div className="section-title is-sticky">

                    <h2 className="title">
                      {" "}
                      Get in touch with us. We love talking about digital strategy{" "}
                    </h2>
                    <p>
                      So, make the decision to move forward. Commit your decision to
                      paper, just to bring it into focus. Then, go for it!
                    </p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-7">
                  <div className="location-items grid-wrapper">
                    <div className="location-wrapper location-style-1 bg-black">
                      <div className="location-inner">
                        <div className="location-info">
                          <div className="city-info py-5">
                            <h5 className="city-name">
                              <a href="#">India</a>
                            </h5>
                            <div className="city-location">
                              <div className="location-item">
                                <i className="icon">
                                  <img
                                    className="img-fluid"
                                    src="images/icon-location.png"
                                    alt=""
                                  />
                                </i>
                                <div className="list-label">
                                  C-25, Aliganj, Lucknow - 226024, Uttar Pradesh, India.
                                </div>
                              </div>
                              <div className="location-item">
                                <i className="icon">
                                  <img
                                    className="img-fluid"
                                    src="images/icon-phone-call.png"
                                    alt=""
                                  />
                                </i>
                                <div className="list-label">+91-522-431-6496</div>
                              </div>
                              <div className="location-item">
                                <i className="icon">
                                  <img
                                    className="img-fluid"
                                    src="images/icon-email.png"
                                    alt=""
                                  />
                                </i>
                                <div className="list-label">info@onebigbit.com</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*=================================
    Contact Us */}
          {/*=================================
    Contact Us */}
          <section className="space ellipse-top bg-white">
            <div className="space-pb ellipse-bottom">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-10" style={{ marginTop: "100px" }}>
                    <div className="section-title text-center">
                      <span className="sub-title d-flex justify-content-center">
                        <img
                          className="img-fluid"
                          src="images/subtitle-icon.png"
                          alt=""
                        />{" "}
                        contact us
                      </span>
                      <h2 className="title">
                        {" "}
                        Need assistance? please fill the form{" "}
                      </h2>
                    </div>
                    <div className="form-wrapper">
                      <form className="contact-form form-style-border" onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-md-4">
                            <input
                              type="text"
                              name="name"
                              value={values.name}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              className="form-control border border-dark"
                              placeholder="Name"
                              aria-label="Name"
                            />
                            {errors.name && touched.name && <small className='error'>{errors.name}</small>}

                          </div>

                          <div className="col-md-4">
                            <input
                              type="email"
                              name='email'
                              value={values.email}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              className="form-control border border-dark"
                              placeholder="Email"
                              aria-label="Email"
                            />
                            {errors.email && touched.email && <small className='error'>{errors.email}</small>}

                          </div>

                          <div className="col-md-4">
                            <input
                              type="number"
                              name='phone'
                              value={values.phone}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              className="form-control border border-dark"
                              id="phone"
                              placeholder="Phone"
                            />
                            {errors.phone && touched.phone && <small className='error'>{errors.phone}</small>}

                          </div>

                          <div className="col-lg-12">
                            <textarea
                              className="form-control border border-dark"
                              rows={6}
                              placeholder="Message"
                              defaultValue={""}
                              name='message'
                              value={values.message}
                              onBlur={handleBlur}
                              onChange={handleChange}
                            />
                            {errors.message && touched.message && <small className='error'>{errors.message}</small>}

                          </div>

                          {/* <div className="col-lg-12">
                            <button className="btn btn-effect mt-5" href="#">
                              <span>Send Message</span>
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
                            </button>
                          </div> */}
                        </div>
                      </form>
                      {/* button */}
                      <div className="action-hamburger d-flex justify-content-center my-3">
                        <Link to="#" className='requestBTn  px-5 py-2' onClick={() => { handleSubmit() }} >Submit</Link>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="section-title text-center">
                  <span className="sub-title d-flex justify-content-start">
                    <img
                      className="img-fluid"
                      src="images/subtitle-icon.png"
                      alt=""
                    />{" "}
                    Our Direction
                  </span>

                </div>


                <div className="row ">
                  <div className="col-md-12">
                    <div className="map_here">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.2422859960975!2d80.93417747882752!3d26.888144400991862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999574966b00d11%3A0x877ecada07e90d24!2sOneBigBit%20Technologies%20Pvt.%20Ltd!5e1!3m2!1sen!2sin!4v1760443147153!5m2!1sen!2sin" width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/*=================================
    Contact Us */}
        </div>
      </div>

    </>
  )
}

export default ContactUs
