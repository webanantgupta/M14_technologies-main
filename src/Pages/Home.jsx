import Cursor from '../Common/Cursor'
import Banner from '../Components/HomeComponents/Banner'
import AboutUs from '../Components/HomeComponents/AboutUs'
import ServicesInfo from '../Components/HomeComponents/ServicesInfo'
import HomeServices from '../Components/HomeComponents/HomeServices'
// import CaseStudies from '../Components/HomeComponents/CaseStudies'
import Testimonial from '../Components/HomeComponents/Testimonial'

const Home = () => {
  return (
    <>
      <div id="page" className="main">
        <Cursor />
        <div className="site-content">
          <div className="container-fluid">
            <div className="item-efftect">
              <div className="efftect overflow-hidden" />
              <div className="efftect overflow-hidden" />
              <div className="efftect overflow-hidden" />
              <div className="efftect overflow-hidden" />
              <div className="efftect overflow-hidden" />
            </div>
          </div>
          <Banner />

          {/* <section
            style={{
              height: '100vpx',
              background: '#111',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
          >
            <h1
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="4"
              style={{ whiteSpace: 'nowrap' }}
            >
              🌀 Horizontal Scroll Text 🌀
            </h1>
          </section> */}

          <div className="content-wrapper">
            <AboutUs />
            <HomeServices />
            {/* <ServicesInfo /> */}
            {/* <CaseStudies/> */}
            <Testimonial />





            {/*=================================
    FAQ */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
