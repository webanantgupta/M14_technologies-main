import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Footer from '../Common/Footer'
import Aboutus from '../Pages/Aboutus'
import ContactUs from '../Pages/ContactUs'
import Allservices from '../Pages/Allservices'
import Itinfra from '../Pages/newservice/itinfrasetup/Itinfra'
import Mixed from "../Pages/newservice/mixed/Mixed"
import Website from '../Pages/newservice/websitedevelopment/Website'
import Digital from '../Pages/newservice/digital/Digital'
import Management from "../Pages/newservice/management/Management"
import Platform from '../Pages/newservice/platform/Platform'
import Itconsulting from '../Pages/newservice/Itconsulting/Itconsulting'
import Education from '../Pages/industry/education/Education'
import Health from '../Pages/industry/health/Health'
import Retail from '../Pages/industry/retail/Retail'
import Finance from '../Pages/industry/finance/Finance'
import Blogcontent from '../Common/Blogcontent'
import Blog from '../Pages/blog/Blog'
import { Toaster } from 'react-hot-toast'


const AllRoutes = () => {
    return (
        <>
            <div>
                <>
                <Toaster  position='top-center'/>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<Aboutus />} />
                        <Route path='/services' element={<Allservices />} />
                        {/* <Route path='/services/:type' element={<ServicesDetails />} /> */}
                        <Route path='/services/it-infrastructure-setup' element={<Itinfra />} />
                        <Route path='/services/website-software-development' element={<Website />} />
                        <Route path='/services/mixed-reality' element={<Mixed />} />
                        <Route path='/services/digital-marketing' element={<Digital />} />
                        <Route path='/services/management-service' element={<Management />} />
                        <Route path='/services/platform-optimization' element={<Platform />} />
                        <Route path='/services/it-consulting' element={<Itconsulting />} />
                        <Route path='/serve/education' element={<Education />} />
                        <Route path='/serve/health-care' element={<Health />} />
                        <Route path='/serve/retail' element={<Retail />} />
                        <Route path='/serve/finance' element={<Finance />} />
                        <Route path='/blog' element={<Blog/>}/>
                        <Route path='/contact' element={<ContactUs />} />
                        <Route path="/mixed" element={<Mixed />} />
                    </Routes>
                </>


                <Footer />
            </div>
        </>
    )
}

export default AllRoutes
