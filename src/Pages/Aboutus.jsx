import CountUp from 'react-countup';
import PageHeader from '../Common/PageHeader'

const Aboutus = () => {
  return (
    <>
      <div className="site-content">
        <PageHeader title="About Us" />
        <div className="content-wrapper">
          <section className="space-pt">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-lg-7 mb-5 mb-lg-0">
                  <div className="section-title pb-0 pb-lg-4">
                    <span className="sub-title">
                      <img
                        className="img-fluid"
                        src="images/subtitle-icon.png"
                        alt=""
                      />
                      About Us
                    </span>
                    <h2 className="title " data-scroll >
                      More than a tech company — we’re your digital growth partner
                    </h2>
                  </div>
                  <div className="row">
                    <div className="col-sm-4">
                      <img
                        className="img-fluid"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5UIu26F2U07iqeciY0oQuHI001bZ_pLNA9v5lxLH4-yrmEgqv9eycYhpqyV4mNruYFnE&usqp=CAU"
                        alt="#"
                      />
                    </div>
                    <div className="col-sm-8">
                      <p className="ps-lg-3 mt-4 mt-sm-0">
                        M14 is a leading IT solutions provider committed to delivering
                        innovative, reliable, and comprehensive technology services to
                        businesses of all sizes. Founded on the principles of excellence,
                        integrity, and customer satisfaction, we strive to empower
                        organizations with the tools and expertise needed to thrive in
                        today’s fast-paced digital world.


                        <br />
                        With a team of seasoned professionals and a portfolio of
                        cutting-edge solutions, we specialize in providing end-to-end
                        IT services, from infrastructure design and implementation to
                        cybersecurity, cloud services, and IT consulting.

                      </p>

                    </div>
                  </div>

                </div>
                <div className="col-lg-5">
                  <img
                    className="img-fluid ps-lg-5"
                    src="https://www.shutterstock.com/image-photo/hands-typing-on-laptop-programming-600nw-2480023489.jpg"
                    alt="#"
                  /> <br /><br />
                  <div className="counter counter-style-1">
                    <div className="counter-number">
                      <span
                        className="timer mb-0"
                      >
                        <CountUp end={400} start={0} duration={2.75} />
                      </span>
                      <span className="suffix">+</span>
                    </div>
                    <div className="counter-info">
                      <span className="counter-title">Completed Project</span>
                    </div>
                  </div>
                  <div className="counter counter-style-1">
                    <div className="counter-number">
                      <span
                        className="timer mb-0"
                      >
                        <CountUp end={100} start={0} duration={2.75} />
                      </span>
                      <span className="suffix">%</span>
                    </div>
                    <div className="counter-info">
                      <span className="counter-title">
                        Customer Satisfaction
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="space-pt bg-white ellipse-top">
            <div className="space-pb ellipse-bottom">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="sticky-top" style={{ top: 80 }}>
                      <div className="section-title mb-0">
                        <span className="sub-title">
                          <img
                            className="img-fluid"
                            src="images/subtitle-icon.png"
                            alt=""
                          />
                          Mission & Vision
                        </span>
                        <h2 className="title">Mission & Vision</h2>
                      </div>
                      <p className="mb-5 mb-lg-0 ms-lg-5">
                        Our mission is to empower businesses through innovative IT solutions that enhance operational efficiency, drive growth, and provide a competitive edge.

                        <br />
                        <br />
                        We are dedicated to delivering personalized services that meet the unique needs of each client, ensuring they achieve their business objectives
                        Our Vision is to be the preferred IT partner for businesses globally,
                        recognized for our commitment
                        to innovation, customer-centric
                        solutions, and our unwavering
                        dedication to excellence.
                      </p>
                    </div>
                  </div>
                  {/* <div className="col-lg-7">
                    <div className="history-wrapper">
                      <div className="history-info">
                        <div className="history-year-lg text-black fs-2">Achievements</div>
                        <div className="history-content">
                          <ul>
                            <li>  Successfully delivered 50+ innovative software solutions across diverse industries.</li>

                            <li>Partnered with national and international clients to develop high-impact applications.</li>

                            <li>  Recognized for our commitment to quality, reliability, and innovation.
                            </li>
                            <li>                            Built a strong reputation for on-time delivery and customer satisfaction.
                            </li>
                            <li>Growing steadily with a talented and passionate team dedicated to excellence.</li>
                          </ul>

                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>


    </>
  )
}

export default Aboutus
