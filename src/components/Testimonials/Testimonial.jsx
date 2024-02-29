import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile.png";
import profilePic2 from "../../img/profile.png";
import profilePic3 from "../../img/profile.png";
import profilePic4 from "../../img/profile.png";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Putting together a website is a task, finding the right individual or company is even more complex. I did my search around looking for this particular company that has the ability to create, design and optimized my web site. Thanks God I meet Gus at MiamiWeb, not only they have great taste in design but they can guide you through the process and beyond.",
    },
    {
      img: profilePic2,
      review:
        "Excellent, working with web designer express was great.  Thanks to their knowledge and determination our website looks great and functions really good.  I am recommend anyone that is looking for a custom website to give them a call and speak to Gus, he will guide you to the right direction.",
    },
    {
      img: profilePic3,
      review:
        "Overall very pleased with Morales and Gustavo and his friendliness with us. He did everything we asked in a timely matter. I will definitely be recommending him to other companies. Thanks for such good work.",
    },
    {
      img: profilePic4,
      review:
        "Web Designer Express did a great job of not only creating our website how we wanted it to be, but also gave us great insight on what they believed will help boost sales. Their proven experience and excellence is the reason why our company would recommend Web Designer Express to anyone who is looking to create a customized website.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
