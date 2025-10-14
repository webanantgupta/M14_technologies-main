
const Pagecontent = ({ service }) => {
    console.log(service);

    return (
        <div className='page_container'>
            {/* image here with title */}
            <div className='page_banner'>

                <div className="page_flex">
                    <div className="page_title">
                        <h2>{service.title}</h2>
                        <p>{service.overview}</p>
                    </div>

                    <div className="page_image">
                        <img src={service.banner_image} alt={service.title} />
                    </div>
                </div>

            </div>

            {/* keyfeatures section */}
            <section className='keyfeatures_container'>
                <div>
                    <h2>{service.title}</h2>
                    <ul>
                        {service.key_features.map((obj, index) => {
                            return <li key={index}>
                                {obj}
                            </li>
                        })}
                    </ul>
                </div>

            </section>

            {/* benefites section */}

            <section className='benefits_container'>
                <div>
                    <h2>{service.title}</h2>
                    <ul>
                        {service.benefits.map((obj, index) => {
                            return <li key={index}>
                                {obj}
                            </li>
                        })}
                    </ul>
                </div>

            </section>

            {/* technology section */}
            <section className='technology_container'>
                <div>
                    <h2>{service.title}</h2>
                    <ul>
                        {service.technologies_used.map((obj, index) => {
                            return <li key={index}>
                                {obj}
                            </li>
                        })}
                    </ul>
                </div>

            </section>


        </div>
    )
}

export default Pagecontent
