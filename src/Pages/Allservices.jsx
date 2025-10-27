
import PageHeader from '../Common/PageHeader'
import ServiceCard from '../Components/HomeComponents/ServiceCard'

const Allservices = () => {
    const allservices = [
        {
            "title": "IT Infrastructure Setup",
            "description": "We design and deploy reliable IT infrastructures tailored to your business needs. From network configuration and server setup to cloud integration and cybersecurity, we ensure your systems run efficiently and securely.",
            "link": "/services/it-infrastructure-setup"
        },
        {
            "title": "Website & Software Development",
            "description": "We build responsive, scalable, and performance-driven websites and software applications. Whether you need a corporate site, e-commerce store, or custom enterprise solution, we deliver technology that drives growth.",
            "link": "/services/website-software-development"
        },
        {
            "title": "Mixed Reality",
            "description": "Experience innovation with our AR/VR and Mixed Reality solutions. We create immersive digital experiences for training, marketing, education, and product visualization that captivate and engage users.",
            "link": "/services/mixed-reality"
        },
        {
            "title": "Digital Marketing",
            "description": "Enhance your online presence with our targeted digital marketing strategies. From paid ads and content marketing to SEO and social media campaigns, we help your brand achieve meaningful engagement and growth.",
            "link": "/services/digital-marketing"
        },
        {
            "title": "Management Services",
            "description": "Our management services cover social media management, brand monitoring, and content scheduling. We help you maintain consistency, build audience trust, and manage your digital presence effectively.",
            "link": "/services/management-services"
        },
        {
            "title": "Platform Optimization",
            "description": "We optimize your website and social media platforms for better performance, speed, visibility, and user engagement. Our experts analyze, strategize, and enhance your platforms to deliver measurable results.",
            "link": "/services/platform-optimization"
        },
        {
            "title": "IT Consulting & Support",
            "description": "Our IT consulting team helps businesses make smarter technology decisions. From system audits and cloud strategies to technical support and maintenance, we provide expert guidance every step of the way.",
            "link": "/services/it-consulting-support"
        }
    ]


    return (
        <>
            <div className="site-content">
                <PageHeader title="Our Services" />
                <div className="content-wrapper">
                    <section className="space-ptb ellipse-bottom">
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-lg-12">
                                    <div className="services grid-wrapper grid-xl-4 grid-lg-3 grid-md-2 grid-sm-1">
                                        {allservices?.map((s) => (
                                            <ServiceCard title={s.title} des={s.description} link={s.link} />
                                        ))}
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

export default Allservices
