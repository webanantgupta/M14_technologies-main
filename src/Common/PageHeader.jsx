
const PageHeader = ({ title, bannerImg }) => {
    return (
        <>
            <div
                className="inner-header bg-holder"
                style={{ backgroundImage: `url(${bannerImg ? bannerImg : '/images/banner/inner-header/page-header-01.jpg'})` }}>
                <div className="container">
                    <div className="row  justify-content-center">
                        <div className="col-md-12 text-center">
                            <h1 className="title">{title}</h1>
                            <p>Our Expertise. Know more about what we do</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageHeader
