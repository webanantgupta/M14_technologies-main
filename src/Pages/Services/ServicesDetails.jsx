import { useParams } from 'react-router-dom'
import PageHeader from '../../Common/PageHeader'
import allservice from '../../Components/ServicesJson/service.json'
import CommonBtn from '../../Common/CommonBtn';

const ServicesDetails = () => {
    const params = useParams();
    const slugType = params.type;
    const servicesData = allservice?.find((d) => d.slug === slugType);

    return (
        <>
            {servicesData ?
                <div className="site-content">
                    <PageHeader title={servicesData.title} bannerImg={servicesData.banner_image} />
                    <div className="content-wrapper">
                        <section className="space-ptb-min ellipse-bottom">
                            <div className="container">
                                <div className="row justify-content-start">
                                    <div className="col-lg-12 mt-lg-0">
                                        <div className="service-content  ps-0 ps-md-5 ">
                                            <h5 className="service-title text-center">{servicesData.title}</h5>
                                            <div className="description text-center">
                                                <p>{servicesData.short_description}   </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-8 mt-lg-5">
                                        <div className="service-single">
                                            <div className="service-content  ps-0 ps-md-5 ">
                                                <div className="description">
                                                    <p>{servicesData.overview}   </p>
                                                </div>
                                                <div className="list-wrapper py-4">
                                                    <ul className="list">
                                                        {servicesData.key_features?.map((d, key) => (
                                                            <li key={key}><i className="fa-solid fa-square"></i>   {d} </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="py-5">
                                                    <h5>We do things differently</h5>
                                                    <p>
                                                        The other virtues practice in succession by Franklin were
                                                        silence, order, resolution, frugality, industry, sincerity,
                                                        Justice, moderation, cleanliness, tranquility, chastity and
                                                        humility.
                                                    </p>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <img
                                                            className="img-fluid"
                                                            src="/images/service/service-single-02.jpg"
                                                            alt="#"
                                                        />
                                                    </div>
                                                    <div className="col-md-7 mt-4 mt-md-0">
                                                        <div className="list-wrapper mb-5">
                                                            <ul className="list">
                                                                <li>
                                                                    <img
                                                                        className="img-fluid"
                                                                        src="/images/arrow-right.png"
                                                                        alt=""
                                                                    />
                                                                    Making the decision
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        className="img-fluid"
                                                                        src="/images/arrow-right.png"
                                                                        alt=""
                                                                    />
                                                                    Clarity developing the vision
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        className="img-fluid"
                                                                        src="/images/arrow-right.png"
                                                                        alt=""
                                                                    />
                                                                    Focus having a plan
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        className="img-fluid"
                                                                        src="/images/arrow-right.png"
                                                                        alt=""
                                                                    />
                                                                    From my perspective then
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        className="img-fluid"
                                                                        src="/images/arrow-right.png"
                                                                        alt=""
                                                                    />
                                                                    Just to bring it into focus
                                                                </li>
                                                                <li>
                                                                    <img
                                                                        className="img-fluid"
                                                                        src="/images/arrow-right.png"
                                                                        alt=""
                                                                    />
                                                                    Just to bring it into focus
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <img
                                                            className="img-fluid"
                                                            src="/images/service/service-single-03.png"
                                                            alt="#"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="section-title mt-5">
                                                    <span className="sub-title">
                                                        <img
                                                            className="img-fluid"
                                                            src="/images/subtitle-icon.png"
                                                            alt=""
                                                        />{" "}
                                                        FAQ
                                                    </span>
                                                    <h5 className="title mb-0">Frequently Asked Questions</h5>
                                                </div>
                                                <div className="accordion" id="pgsaccordion">
                                                    <div className="accordion-item">
                                                        <h5 className="accordion-header" id="headingOne">
                                                            <button
                                                                className="accordion-button"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#collapseOne"
                                                                aria-expanded="true"
                                                                aria-controls="collapseOne"
                                                            >
                                                                01. It turned out to be the Hope Diamond?
                                                            </button>
                                                        </h5>
                                                        <div
                                                            id="collapseOne"
                                                            className="accordion-collapse collapse show"
                                                            aria-labelledby="headingOne"
                                                            data-bs-parent="#pgsaccordion"
                                                        >
                                                            <div className="accordion-body">
                                                                Imagine reaching deep inside you for all the strength
                                                                and wisdom that you need to make this decision today. As
                                                                you do so, imagine that when you choose to make that
                                                                decision that deep inside your mind you are switching
                                                                off the alternative path.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h5 className="accordion-header" id="headingTwo">
                                                            <button
                                                                className="accordion-button collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#collapseTwo"
                                                                aria-expanded="false"
                                                                aria-controls="collapseTwo"
                                                            >
                                                                02. So why do we do it?
                                                            </button>
                                                        </h5>
                                                        <div
                                                            id="collapseTwo"
                                                            className="accordion-collapse collapse"
                                                            aria-labelledby="headingTwo"
                                                            data-bs-parent="#pgsaccordion"
                                                        >
                                                            <div className="accordion-body">
                                                                Step out on to the path to your left. Where there is no
                                                                change. Instead, you continue doing what you have in the
                                                                past. What will life be like about staying on this path.
                                                                Walk out into your future to the 10 year point.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h5 className="accordion-header" id="headingThree">
                                                            <button
                                                                className="accordion-button collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#collapseThree"
                                                                aria-expanded="false"
                                                                aria-controls="collapseThree"
                                                            >
                                                                03. I am worried about e-mail scams...
                                                            </button>
                                                        </h5>
                                                        <div
                                                            id="collapseThree"
                                                            className="accordion-collapse collapse"
                                                            aria-labelledby="headingThree"
                                                            data-bs-parent="#pgsaccordion"
                                                        >
                                                            <div className="accordion-body">
                                                                {" "}
                                                                Walk out 10 years into your future and feel how it feels
                                                                to carry on doing the same thing. I want you to think
                                                                about how you will feel in 10 years if you continue
                                                                doing the exact same things you have done to date. What
                                                                will your daily life be like?{" "}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h5 className="accordion-header" id="headingFour">
                                                            <button
                                                                className="accordion-button collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#collapseFour"
                                                                aria-expanded="false"
                                                                aria-controls="collapseThree"
                                                            >
                                                                04. Why IT Staff Management?
                                                            </button>
                                                        </h5>
                                                        <div
                                                            id="collapseFour"
                                                            className="accordion-collapse collapse"
                                                            aria-labelledby="headingFour"
                                                            data-bs-parent="#pgsaccordion"
                                                        >
                                                            <div className="accordion-body">
                                                                Really experience that. See what you see, hear what you
                                                                hear, feel the feelings. Notice everything that you need
                                                                to know about what it will be like if you carry on with
                                                                the same behaviour, putting off change. Drift back to
                                                                where the path splits.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 mt-lg-5 pt-lg-2">
                                        <img
                                            className="img-fluid"
                                            src="/images/service/service-single-02.jpg"
                                            alt="#"
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
                : <section className="space-ptb error-section ellipse-bottom">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="error-content text-center">
                                    <div className="error-main-title">
                                        <h1 className="error-title">
                                            <span className="error-text">404</span>
                                            <span className="bg-text-stroke">404</span>
                                        </h1>
                                        <img
                                            className="smile-icon"
                                            src="images/svg/smile-icon.svg"
                                            alt="#"
                                        />
                                    </div>
                                    <h3 className="sub-title">Oops! Page Not Found</h3>
                                    <p className="description mb-5">
                                        The page you are looking for might have been removed had its
                                        name changed or is temporarily unavailable.
                                    </p>
                                    <CommonBtn title="Go Back to Home" link="/" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>}
        </>
    )
}

export default ServicesDetails
