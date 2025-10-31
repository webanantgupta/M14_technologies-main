import { SiTicktick } from "react-icons/si";


const Pagecontent = ({ service }) => {
    console.log(service);

    return (
        <div className='page_container'>
            {/* image here with title */}
            {service.banner_image && service.title && (
                    <div className='page_banner'>

                <div className="page_flex">
                    <div className="page_title">
                        <h2>{service.title}</h2>
                        <p>{service.overview}</p>
                    </div>

                    <div className="page_image ">
                        <img src={service.banner_image} alt={service.title} />
                    </div>
                </div>

            </div>
            )}

            {/* our service include */}

            {service.our_service_include && (
                <section className="ourservice_container mb-5">
                    <div>
                        <h2>{service.our_service_title}</h2>
                        <div>
                            <ul>
                                {
                                    service.our_service_include.map((obj, index) => {
                                        return <li key={index}>
                                            <p>{obj}</p>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>

                </section>
            )
            }

            {/* note */}

             <div className="page_content d-flex justify-content-center gap-5 align-items-center">
                <SiTicktick />
                <div>
                    <p>{service.content}</p>
                </div>
            </div>


            {/* keyfeatures section */}
            {/* {service.key_features && (
                <section className='keyfeatures_container'>
                    <div>
                        <h2>{service.key_features_title}</h2>
                        <ul>
                            {service.key_features.map((obj, index) => {
                                return <li key={index}>
                                    <p>{obj}</p>
                                </li>
                            })}
                        </ul>
                    </div>

                </section>
            )} */}


            {/* benefites section */}
            {/* {service.benefits && (
                <section className='benefits_container'>
                    <div>
                        <h2>{service.benefits_title}</h2>
                        <ul>
                            {service.benefits.map((obj, index) => {
                                return <li key={index}>
                                    <p>{obj}</p>
                                </li>
                            })}
                        </ul>
                    </div>

                </section>
            )} */}


            {/* technology section */}
{/* 
            {service.technologies_used && (
                <section className='technology_container'>
                    <div>
                        <h2>{service.technologies_used_title}</h2>
                        <ul>
                            {service.technologies_used.map((obj, index) => {
                                return <li key={index}>
                                    <p>{obj}</p>
                                </li>
                            })}
                        </ul>
                    </div>

                </section>
            )} */}



        </div>
    )
}

export default Pagecontent
