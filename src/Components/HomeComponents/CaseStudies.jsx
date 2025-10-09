import React from 'react'

const CaseStudies = () => {
    return (
        <>
            <section className="space-ptb z-index-2">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-5">
                            <div className="section-title mb-4 mb-lg-0">
                                <span className="sub-title">
                                    <img
                                        className="img-fluid"
                                        src="images/subtitle-icon.png"
                                        alt=""
                                    />{" "}
                                    Case Studies
                                </span>
                                <h2 className="title"> Projects For Our Amazing Clients</h2>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-4">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam.
                            </p>
                        </div>
                        <div className="col-xl-2 col-lg-3 text-end">
                            <a className="btn btn-effect" href="#">
                                <span>About Us</span>
                                <svg
                                    width={20}
                                    height={22}
                                    viewBox="0 0 20 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0_59_255)">
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
                                        <clipPath id="clip0_59_255">
                                            <rect
                                                width="21.3333"
                                                height={20}
                                                fill="white"
                                                transform="translate(20) rotate(90)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="case-studies-wrapper case-studies-style-2">
                                <div className="case-studies-item">
                                    <div className="item-inner">
                                        <h3 className="case-studies-title">Gozzby</h3>
                                        <div className="case-studies-description">
                                            Some people will tell you there are four while others
                                            may tell you there are eight thing.
                                        </div>
                                        <div className="case-studies-action">
                                            <a className="btn-arrow" href="#">
                                                <svg
                                                    width={17}
                                                    height={16}
                                                    viewBox="0 0 17 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g clipPath="url(#clip0_923_139)">
                                                        <path
                                                            d="M8.70801 0.959961L9.29825 2.7665C10.2512 5.68321 12.8308 7.77453 15.8928 8.1128C12.8468 8.37564 10.2578 10.4348 9.3276 13.3343L8.70801 15.2657"
                                                            stroke="inherit"
                                                            strokeWidth={2}
                                                        />
                                                        <path
                                                            d="M15.7602 8.12158H0.1875"
                                                            stroke="inherit"
                                                            strokeWidth={2}
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_923_139">
                                                            <rect
                                                                width="15.904"
                                                                height="14.8437"
                                                                fill="inherit"
                                                                transform="translate(0.1875 0.578125)"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="case-studies-image">
                                        <img
                                            className="img-fluid gsap-img-animation"
                                            src="images/case-studies/01.png"
                                            alt=""
                                            style={{
                                                scale: "none",
                                                transform:
                                                    "translate(-50%, -50%) translate(746px, 498px)",
                                                opacity: 0,
                                                visibility: "hidden"
                                            }}
                                        />
                                    </div>
                                    <div className="marquee-wrapper">
                                        <div className="marquee-inner">
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon1.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">Web Design</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon2.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">UI/UX Design</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon3.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">Developer</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon4.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">ISO Developer</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon5.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">Digital Agency</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon1.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">Web Design</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon2.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">UI/UX Design</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon3.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">Developer</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon4.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">ISO Developer</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon5.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">Digital Agency</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="case-studies-item">
                                    <div className="item-inner">
                                        <h3 className="case-studies-title">Petfluent</h3>
                                        <div className="case-studies-description">
                                            Some people will tell you there are four while others
                                            may tell you there are eight thing.
                                        </div>
                                        <div className="case-studies-action">
                                            <a className="btn-arrow" href="#">
                                                <svg
                                                    width={17}
                                                    height={16}
                                                    viewBox="0 0 17 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g clipPath="url(#clip0_923_140)">
                                                        <path
                                                            d="M8.70801 0.959961L9.29825 2.7665C10.2512 5.68321 12.8308 7.77453 15.8928 8.1128C12.8468 8.37564 10.2578 10.4348 9.3276 13.3343L8.70801 15.2657"
                                                            stroke="inherit"
                                                            strokeWidth={2}
                                                        />
                                                        <path
                                                            d="M15.7602 8.12158H0.1875"
                                                            stroke="inherit"
                                                            strokeWidth={2}
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_923_140">
                                                            <rect
                                                                width="15.904"
                                                                height="14.8437"
                                                                fill="inherit"
                                                                transform="translate(0.1875 0.578125)"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="case-studies-image">
                                        <img
                                            className="img-fluid gsap-img-animation"
                                            src="images/case-studies/02.png"
                                            alt=""
                                            style={{
                                                scale: "none",
                                                transform:
                                                    "translate(-50%, -50%) translate(746px, 498px)",
                                                opacity: 0,
                                                visibility: "hidden"
                                            }}
                                        />
                                    </div>
                                    <div className="marquee-wrapper">
                                        <div className="marquee-inner">
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon1.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">Web Design</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon2.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">UI/UX Design</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon3.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">Developer</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon4.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">ISO Developer</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon5.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">Digital Agency</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon1.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">Web Design</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon2.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">UI/UX Design</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon3.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">Developer</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon4.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">ISO Developer</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon5.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">Digital Agency</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="case-studies-item">
                                    <div className="item-inner">
                                        <h3 className="case-studies-title">Mobifluent</h3>
                                        <div className="case-studies-description">
                                            Some people will tell you there are four while others
                                            may tell you there are eight thing.
                                        </div>
                                        <div className="case-studies-action">
                                            <a className="btn-arrow" href="#">
                                                <svg
                                                    width={17}
                                                    height={16}
                                                    viewBox="0 0 17 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g clipPath="url(#clip0_923_141)">
                                                        <path
                                                            d="M8.70801 0.959961L9.29825 2.7665C10.2512 5.68321 12.8308 7.77453 15.8928 8.1128C12.8468 8.37564 10.2578 10.4348 9.3276 13.3343L8.70801 15.2657"
                                                            stroke="inherit"
                                                            strokeWidth={2}
                                                        />
                                                        <path
                                                            d="M15.7602 8.12158H0.1875"
                                                            stroke="inherit"
                                                            strokeWidth={2}
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_923_141">
                                                            <rect
                                                                width="15.904"
                                                                height="14.8437"
                                                                fill="inherit"
                                                                transform="translate(0.1875 0.578125)"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="case-studies-image">
                                        <img
                                            className="img-fluid gsap-img-animation"
                                            src="images/case-studies/03.png"
                                            alt=""
                                            style={{
                                                scale: "none",
                                                transform:
                                                    "translate(-50%, -50%) translate(746px, 498px)",
                                                opacity: 0,
                                                visibility: "hidden"
                                            }}
                                        />
                                    </div>
                                    <div className="marquee-wrapper">
                                        <div className="marquee-inner">
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon1.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">Web Design</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon2.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">UI/UX Design</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon3.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">Developer</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon4.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">ISO Developer</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon5.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">Digital Agency</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon1.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">Web Design</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon2.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">UI/UX Design</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon3.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">Developer</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon4.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">ISO Developer</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon5.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">Digital Agency</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="case-studies-item">
                                    <div className="item-inner">
                                        <h3 className="case-studies-title">Financeoont</h3>
                                        <div className="case-studies-description">
                                            Some people will tell you there are four while others
                                            may tell you there are eight thing.
                                        </div>
                                        <div className="case-studies-action">
                                            <a className="btn-arrow" href="#">
                                                <svg
                                                    width={17}
                                                    height={16}
                                                    viewBox="0 0 17 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g clipPath="url(#clip0_923_142)">
                                                        <path
                                                            d="M8.70801 0.959961L9.29825 2.7665C10.2512 5.68321 12.8308 7.77453 15.8928 8.1128C12.8468 8.37564 10.2578 10.4348 9.3276 13.3343L8.70801 15.2657"
                                                            stroke="inherit"
                                                            strokeWidth={2}
                                                        />
                                                        <path
                                                            d="M15.7602 8.12158H0.1875"
                                                            stroke="inherit"
                                                            strokeWidth={2}
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_923_142">
                                                            <rect
                                                                width="15.904"
                                                                height="14.8437"
                                                                fill="inherit"
                                                                transform="translate(0.1875 0.578125)"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="case-studies-image">
                                        <img
                                            className="img-fluid gsap-img-animation"
                                            src="images/case-studies/01.png"
                                            alt=""
                                            style={{
                                                scale: "none",
                                                transform:
                                                    "translate(-50%, -50%) translate(746px, 498px)",
                                                opacity: 0,
                                                visibility: "hidden"
                                            }}
                                        />
                                    </div>
                                    <div className="marquee-wrapper">
                                        <div className="marquee-inner">
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon1.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">Web Design</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon2.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">UI/UX Design</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon3.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">Developer</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon4.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">ISO Developer</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon5.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">Digital Agency</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon1.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">Web Design</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon2.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">UI/UX Design</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon3.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">Developer</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon4.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">ISO Developer</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon5.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">Digital Agency</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="case-studies-item">
                                    <div className="item-inner">
                                        <h3 className="case-studies-title">Educatgenix</h3>
                                        <div className="case-studies-description">
                                            Some people will tell you there are four while others
                                            may tell you there are eight thing.
                                        </div>
                                        <div className="case-studies-action">
                                            <a className="btn-arrow" href="#">
                                                <svg
                                                    width={17}
                                                    height={16}
                                                    viewBox="0 0 17 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g clipPath="url(#clip0_923_143)">
                                                        <path
                                                            d="M8.70801 0.959961L9.29825 2.7665C10.2512 5.68321 12.8308 7.77453 15.8928 8.1128C12.8468 8.37564 10.2578 10.4348 9.3276 13.3343L8.70801 15.2657"
                                                            stroke="inherit"
                                                            strokeWidth={2}
                                                        />
                                                        <path
                                                            d="M15.7602 8.12158H0.1875"
                                                            stroke="inherit"
                                                            strokeWidth={2}
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_923_143">
                                                            <rect
                                                                width="15.904"
                                                                height="14.8437"
                                                                fill="inherit"
                                                                transform="translate(0.1875 0.578125)"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="case-studies-image">
                                        <img
                                            className="img-fluid gsap-img-animation"
                                            src="images/case-studies/02.png"
                                            alt=""
                                            style={{
                                                scale: "none",
                                                transform:
                                                    "translate(-50%, -50%) translate(746px, 498px)",
                                                opacity: 0,
                                                visibility: "hidden"
                                            }}
                                        />
                                    </div>
                                    <div className="marquee-wrapper">
                                        <div className="marquee-inner">
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon1.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">Web Design</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon2.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">UI/UX Design</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon3.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">Developer</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon4.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">ISO Developer</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon5.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">Digital Agency</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon1.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">Web Design</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon2.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">UI/UX Design</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon3.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">Developer</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon4.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">ISO Developer</span>
                                            </div>
                                            <div className="marquee-item">
                                                <span className="icon">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/client-logo/brand-icon5.png"
                                                        alt=""
                                                    />
                                                </span>
                                                <span className="title">Digital Agency</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CaseStudies
