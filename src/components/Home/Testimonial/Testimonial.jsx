import React from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const Testimonial = () => {
  return (
    <div className="mt-10">
      <SectionTitle
        heading={"Testimonial"}
        subHeading={"What Our Client Says..?"}
      ></SectionTitle>
      <div>
        <h2
          data-aos="fade-up"
          className=" text-center bg-gradient-to-r animate-text from-gray-900 via-gray-600 to-violet-400 bg-clip-text text-transparent mt-8 font-extrabold text-4xl"
        ></h2>

        <div data-aos="fade-up" className="bg-gray-100 py-8 mt-5 ">
          <div className="max-w-6xl mx-auto ">
            <h2
              data-aos="fade-up"
              className="text-center bg-gradient-to-r animate-text from-gray-900 via-gray-600 to-violet-400 bg-clip-text text-transparent  font-extrabold text-3xl  mb-6"
            >
              Here is Our Client ....
            </h2>
            <div className="grid  grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div
                data-aos="fade-up"
                className="bg-gradient-to-r animate-text from-gray-400 via-gray-400 to-violet-600 bg-clip-text text-transparent rounded-lg shadow-2xl p-6"
              >
                <p className="text-gray-600 mb-4">
                  "Here is a list of some fantastic photography business start-up. This will inspire you as well as give you an idea of how to go about a photography. Highly recommended!..."
                </p>

                <div className="flex items-center justify-center">
                  <img
                    className="w-12 h-12 rounded-full mr-4 mt-5"
                    src="https://randomuser.me/api/portraits/women/32.jpg"
                    alt="Testimonial author"
                  />
                  <div>
                    <h3 className="text-lg font-bold mt-5">Emma Wilson</h3>
                    <span className="text-gray-600">Toronto, Canada</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r animate-text from-gray-400 via-gray-400 to-violet-600 bg-clip-text text-transparent rounded-lg shadow-2xl p-6">
                <p className="text-gray-600 mb-4 ">
                  "I am extremely satisfied with the quality of the photography I
                  purchased from this School. The variety of options is
                  impressive, and the customer service was excellent..."
                </p>

                <div className="flex items-center justify-center mt-5">
                  <img
                    className="w-12 h-12 rounded-full mr-4"
                    src="https://randomuser.me/api/portraits/men/52.jpg"
                    alt="Testimonial author"
                  />
                  <div>
                    <h3 className="text-lg font-bold">Alex Brown</h3>
                    <span className="text-gray-600">New York, USA</span>
                  </div>
                </div>
              </div>

              <div
                data-aos="fade-up"
                className="bg-gradient-to-r animate-text from-gray-400 via-gray-400 to-violet-600 bg-clip-text text-transparent rounded-lg shadow-2xl p-6"
              >
                <p className="text-gray-600 mb-4">
                  "Good value and quick turnaround for professional photos required to sell on Amazon. Also used on our website. I'm going back for the next shoot!. Will definitely be a
                  repeat customer..."
                </p>

                <div className="flex items-center justify-center mt-5">
                  <img
                    className="w-10 h-10 rounded-full mr-4"
                    src="https://randomuser.me/api/portraits/women/22.jpg"
                    alt="User profile picture"
                  />
                  <div>
                    <h3 className="font-bold text-gray-700">Jessica Brown</h3>
                    <span className="text-gray-600">
                      Chattogram, Bangladesh
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
