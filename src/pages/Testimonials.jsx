import React, { useEffect, useState } from "react";
import person from "../assets/person-unsplash.jpg";
import singleQuote from "../assets/single-quote.svg";
import testimonyCover from "../assets/testimonial-cover-unsplash.jpg";

const Testimonials = () => {
  const appTestimonials = ["", "", "", ""];

  const [currentTestimony, setCurrentTestimony] = useState(0);

  const [userWantsToWatchVideo, setUserWantsToWatchVideo] = useState(false);

  useEffect(() => {
    const myInterval = setInterval(() => {
      setCurrentTestimony((prev) => {
        if (prev === appTestimonials.length - 1) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, [3000]);

    return () => clearInterval(myInterval);
  }, []);
  return (
    <div
      className="min-h-screen relative w-screen grid place-items-center py-6"
      id="testimonials"
    >
      <div className="h-max relative left-0 top-0 bg-accentColor/10 md:px-12 px-6">
        <div className="w-screen h-max flex md:flex-row flex-col gap-5 md:justify-center md:items-center m-auto">
          {/* Testimonials text content */}
          {appTestimonials.map((_, index) => (
            <>
              {index === currentTestimony && (
                <div
                  className="flex-1 gap-6 flex flex-col relative md:mx-4 lg:ml-24"
                  key={index}
                >
                  {/* Actual testimonies */}
                  <div className="flex flex-col gap-2 animate__animated animate__bounceIn">
                    <img
                      src={singleQuote}
                      alt="singleQuote"
                      className="absolute top-0 left-0 -translate-x-[80%] -translate-y-[55%] opacity-40 md:h-20 md:w-20 h-10 w-10"
                    />

                    {/* Testimony text */}
                    <p className="font-inter text-lg md:w-full w-[90%]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam interdum nisl et nunc facilisis, a commodo eros
                      mollis. Nunc vel pellentesque est. Curabitur at odio sit
                      amet libero vulputate efficitur ac nec justo. Nulla vitae
                      mauris quam. Nulla quam massa, faucibus id pretium ac,
                      mattis eu velit. Donec sed risus a lacus fringilla
                      finibus.
                    </p>

                    {/* Testimony provider */}
                    <div className="flex gap-4 items-center">
                      <img
                        src={person}
                        alt="person"
                        className="h-14 w-14 rounded-full object-cover"
                      />

                      <div className="">
                        <p className="font-semibold text-accentColor font-inter">
                          Harrison Wells
                        </p>
                        <p className="text-xs font-inter">Owner of Star Labs</p>
                      </div>
                    </div>
                  </div>

                  {/* Testimony counter circles */}
                  <div className="flex gap-2 md:mt-6 mt-4 md:justify-start justify-center">
                    {appTestimonials.map((_, index) => (
                      <div
                        key={index}
                        className={`rounded-full h-3 w-3 cursor-pointer ${
                          index === currentTestimony
                            ? "bg-accentColor animate__animated animate__bounceIn"
                            : "bg-gray-300"
                        }`}
                        onClick={() => {
                          setCurrentTestimony(index);
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              )}
            </>
          ))}

          {/* Testimony video playback */}
          <div className="flex-1 w-[90%]">
            {userWantsToWatchVideo ? (
              <iframe
                src="https://www.youtube.com/embed/InF16sp7J0M"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-[480px] w-[90%] object-cover animate__animated animate__zoomInDown border-4 border-accentColor bg-accentColor"
              ></iframe>
            ) : (
              <div
                className="w-full h-[480px] flex items-center justify-center cursor-pointer relative"
                onClick={() => {
                  setUserWantsToWatchVideo(true);
                }}
              >
                <img
                  src={testimonyCover}
                  alt="userWantsToWatchVideo"
                  className="h-full w-full object-cover"
                />

                <p className="w-[90%] m-auto absolute bg-accentColor text-white p-6 rounded-lg">
                  Click me, then click again to watch testimony video 😊👍
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
