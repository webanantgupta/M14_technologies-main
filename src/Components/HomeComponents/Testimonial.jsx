// Testimonial.js
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonial = () => {
  const testimonialData = [
    {
      name: "Rahul",
      position: "Administrator",
      content:
        "Working with this team was a game-changer. They quickly understood our vision and delivered a mobile app that’s fast, sleek, and user-friendly. Highly recommend them for any serious tech project",
    },
    {
      name: "Sikha",
      position: "Consultant",
      content:
        "We needed a custom SaaS platform, and they nailed it — from design to deployment. The attention to detail and commitment to deadlines really stood out.",
    },
    {
      name: "Alice",
      position: "Officer",
      content:
        "Professional, proactive, and technically sound — the team revamped our website and made it 10x better in terms of speed and design. They’ve become our go-to tech partner.",
    },
    {
      name: "Ritika Rai",
      position: "Director",
      content:
        "They don’t just build software; they build trust. Communication was transparent, and support has been excellent even after launch.",
    },
  ];
  return (
    <>
      <section className=" testimonial-section overflow-hidden ellipse-top bg-light z-index-2">
        <div className="container">
          <div className="row justify-content-center">
            {/* <div className="col-md-10">

            </div> */}

            <div className="row ">

              <div className="col-md-6">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={50}
                  slidesPerView={1}
                  autoplay={{ delay: 3000 }}
                  pagination={{ clickable: true }}
                  loop={true}
                  breakpoints={{
                    768: { slidesPerView: 1 },
                    992: { slidesPerView: 1 }
                  }}
                >
                  {testimonialData.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="testimonial-wrapper testimonial-style-2">
                        <div className="testimonial-ratings">
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-regular fa-star" />
                        </div>
                        <div className="testimonial-quote">
                          <img
                            className="img-fluid"
                            src="images/quote-icon-01.png"
                            alt=""
                          />
                        </div>
                        <div className="testimonial-content">
                          <p>{item.content}</p>
                        </div>
                        <div className="testimonial-author">
                          <div className="author-info">
                            <h6 className="author-name">{item.name}</h6>
                            <span className="author-position">{item.position}</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="col-md-6">
                <div className="section-title text-center">
                  <div className='testimonial_heading'>
                    <div>
                      <span className="sub-title justify-content-sm-center justify-content-md-end justify-content-lg-end">
                        <img className="img-fluid" src="images/subtitle-icon.png" alt="logo"/>
                        Our Testimonial
                      </span>
                    </div>
                    <div>
                      <h2 className="title text-sm-center text-md-end text-lg-end" style={{ textAlign: "right" }}>
                        What Our Clients Say
                      </h2>
                    </div>

                  </div>


                  <p>Trusted by startups, SMEs, and enterprises — we build solutions that speak for themselves, and so do our clients.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
    </>
  )
}

export default Testimonial
