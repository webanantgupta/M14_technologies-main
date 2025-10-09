import React from 'react'
import ServiceCard from './ServiceCard'
import CommonBtn from '../../Common/CommonBtn'

const HomeServices = () => {
    const serviceData1 = [
        {
            "title": "IT Infrastructure Setup",
            "description": "We design and deploy robust IT infrastructures tailored to your business needs. From network configuration and server setup to cloud integration and security protocols, our solutions ensure your organization operates efficiently and securely."
        },
        {
            "title": "Website & Software Development",
            "description": "Our expert developers craft responsive, scalable, and high-performance websites and software applications. Whether it’s a corporate website, e-commerce platform, or custom software solution, we deliver products that drive results and enhance user experience."
        }

    ]
    const serviceData2 = [
        {
            "title": "Mixed Reality",
            "description": "Step into the future with our Mixed Reality solutions. We create immersive AR/VR experiences for training, simulations, marketing, and product visualization, helping businesses engage customers in innovative and interactive ways."
        },
        {
            "title": "Digital Marketing",
            "description": "Boost your online presence with our comprehensive digital marketing services. From targeted ad campaigns and social media management to content strategy and SEO, we help your brand reach the right audience and achieve measurable growth."
        }
    ]
    return (
        <>
            <div className='normal-wrapper'>
                <section
                    className="space-pt bg-light z-index-2 ellipse-top normal-section"
                    data-scroll-speed="0"
                    data-scroll-position="top"
                >
                    <div className="space-pb ellipse-bottom">
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-xxl-5 col-xl-5 mb-5 mb-xl-0">
                                    <div className="sticky-top" style={{ top: 80 }}>
                                        <div className="section-title">
                                            <span className="sub-title">
                                                <img
                                                    className="img-fluid"
                                                    src="images/subtitle-icon.png"
                                                    alt=""
                                                />{" "}
                                                Our Services
                                            </span>
                                            <h2 className="title">
                                                Solutions That Scale With You
                                            </h2>
                                        </div>
                                        <div className="ps-xxl-5 ms-0 ms-md-5">
                                            <p>
                                                We offer a full suite of innovative and result-driven technology services designed to empower startups, small businesses, and enterprises alike. Our team blends creativity, strategy, and engineering excellence to deliver digital products that are not only visually appealing but also highly functional and scalable. Whether you’re launching a new brand, expanding your digital presence, or modernizing enterprise systems — we provide tailored solutions that align with your goals.
                                            </p>
                                            <CommonBtn btntxt="View All" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-7">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="services grid-wrapper">
                                                {serviceData1?.map((s) => (
                                                    <ServiceCard title={s.title} des={s.description} />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="services grid-wrapper service-top-space">
                                                {serviceData2?.map((s) => (
                                                    <ServiceCard title={s.title} des={s.description} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default HomeServices
