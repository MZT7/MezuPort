/* eslint-disable react/prop-types */
// import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="relative mx-auto backdrop-filter backdrop-blur-md bg-opacity-10">
      <div className="p-6 lg:flex lg:items-center lg:justify-center lg:p-16">
        {/* Image on the left for large screens */}
        <div className="mb-6 lg:w-1/2 lg:mr-8 lg:mb-0">
          <div className="relative">
            <Slider
              {...settings}
              className="relative w-64 h-auto mx-auto lg:w-96"
            >
              {images.map((imageUrl, index) => (
                <div key={index}>
                  <img
                    src={imageUrl}
                    alt={`Slide ${index + 1}`}
                    className="object-fill h-auto max-w-sm rounded-md max-h-96 "
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Article on the right for large screens */}
        <div className="lg:w-1/2">
          <p className="pt-6 text-gray-700">
            Hi, I am Mezu Orizu A Software Engineer &#39;.
          </p>

          <p className="pt-6 text-gray-700">
            A Software Engineer with experience in developing robust and
            scalable web applications. Proficient in front-end and back-end
            technologies, with a strong understanding of software development
            principles. Passionate about creating efficient and user-friendly
            web solutions that meet client requirements. Excellent
            problem-solving and communication skills.
          </p>

          <p className="pt-6 text-gray-700">
            While currently located at Lagos Nigeria, I&apos;m not limited by
            geographical constraints and exploring availability.
          </p>

          <p className="pt-6 text-gray-700">
            I love both Solo and team work and also love to explore
            possibilities while coding and designing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
