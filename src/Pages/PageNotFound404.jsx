import React from 'react'
import CommonBtn from '../Common/CommonBtn'
import PageHeader from '../Common/PageHeader'

const PageNotFound404 = () => {
    return (
        <>
            <div className="site-content">
                <PageHeader title="404 Not Found" />
                <div className="content-wrapper">
                    <section className="space-ptb error-section ellipse-bottom">
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
                    </section>
                </div>
            </div>

        </>
    )
}

export default PageNotFound404
