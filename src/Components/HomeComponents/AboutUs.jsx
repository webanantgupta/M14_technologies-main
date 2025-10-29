import CountUp from 'react-countup';
import CommonBtn from '../../Common/CommonBtn';
import BackToTop from '../../Common/BackToTop';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <>
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
                                <h2 className="title ">
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
                                    </p>
                                    {/* <div className="d-flex justify-content-center mt-5 ms-sm-5 ms-0">
                                        <CommonBtn btntxt="About Us" link="/about" onClick={<BackToTop/>}/>
                                    </div> */}
                                    {/* <div className="action-hamburger d-flex justify-content-center my-3">
                                        <Link to="/about" onClick={<BackToTop />} className='requestBTn  px-5 py-2 mt-2' >More</Link>
                                    </div> */}
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
        </>
    )
}

export default AboutUs
