import CountUp from 'react-countup';
import CommonBtn from '../../Common/CommonBtn';

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
                                        We are a passionate team of developers, designers, and problem-solvers focused on building modern, scalable, and secure digital solutions. With a deep understanding of technology and business needs, we work closely with clients to transform ideas into intelligent products — whether it's a custom web app, a mobile platform, or a cloud-based system.
                                    </p>
                                    <div className="d-flex justify-content-center mt-5 ms-sm-5 ms-0">
                                        <CommonBtn btntxt="About Us" link="/about"/>
                                    </div>
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
