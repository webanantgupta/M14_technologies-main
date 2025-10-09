
import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import AllRoutes from './AllRoutes/AllRoutes';
import { useLocation } from 'react-router-dom';
import Header from './Common/Header';
import SideMenu from './Common/SideMenu';


function App() {
  const containerRef = useRef(null);
  const location = useLocation();

  // useEffect(() => {
  //   if (containerRef.current) {
  //     const scroll = new LocomotiveScroll({
  //       el: containerRef.current,
  //       smooth: true,
  //       lerp: 0.04,
  //     });

  //     // Scroll to top on route change
  //     scroll.scrollTo(0, { duration: 0, disableLerp: true });
  //     // Update scroll on route change
  //     scroll.update();

  //     return () => {
  //       scroll.destroy();
  //     };
  //   }
  // }, [location.pathname]);
  
  return (
    <>
      {/* <AllRoutes /> */}
      <Header />
      <SideMenu />
      {/* <div data-scroll-container ref={containerRef}> */}
        <AllRoutes />
      {/* </div> */}

    </>
  );
}

export default App;
