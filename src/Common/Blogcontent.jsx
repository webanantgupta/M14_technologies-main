import { useNavigate } from "react-router-dom"
import BackToTop from "./BackToTop";


const Blogcontent = ({ blog }) => {
    // console.log(blog,'blog hee')
    const navigate = useNavigate();

    const handleClick = (obj) => {
        scrollTop();
        console.log(obj);
        navigate("/viewblog", { state: obj });

    }
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <div>
            {blog ? (
                <div className="site-content">

                    <section className="space-ptb ellipse-top ellipse-bottom ">
                        <div className="container ">
                            <div className="row">
                                {
                                    blog.map((obj, index) => {
                                        return (
                                            <>
                                                <div className="col-lg-4 col-md-6 mb-5" key={index} >
                                                    <div className="blog-items ">
                                                        <div className="blog-post-wrapper blog-style-1">

                                                            <div className="blog-post-info">
                                                                <div className="post-meta">
                                                                    <div className="post-meta-date text-light">{obj.date}</div>
                                                                </div>
                                                                <h5 className="post-title">
                                                                    <span onClick={() => { handleClick(obj); }} style={{ cursor: 'pointer' }} className="text-light">
                                                                        {obj.title}
                                                                    </span>
                                                                </h5>
                                                            </div>

                                                            <div className="blog-post-img">
                                                                <img className="img-fluid" src={obj.image} alt={obj.title} />
                                                            </div>
                                                            <div className="blog-action-info">
                                                                <h5 className="post-category">
                                                                    <span onClick={() => { handleClick(obj), <BackToTop /> }} style={{ cursor: 'pointer' }} className="text-light">{obj.category}</span>
                                                                </h5>
                                                                <div className="post-link">
                                                                    <span className="btn-arrow" style={{ cursor: 'pointer' }} onClick={() => { handleClick(obj); return (<BackToTop />) }}>
                                                                        <svg
                                                                            width={17}
                                                                            height={16}
                                                                            viewBox="0 0 17 16"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <g clipPath="url(#clip0_923_133)">
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
                                                                                <clipPath id="clip0_923_133">
                                                                                    <rect
                                                                                        width="15.904"
                                                                                        height="14.8437"
                                                                                        fill="inherit"
                                                                                        transform="translate(0.1875 0.578125)"
                                                                                    />
                                                                                </clipPath>
                                                                            </defs>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </section>
                </div>)
                : ("No Data")}
        </div>
    )
}

export default Blogcontent
