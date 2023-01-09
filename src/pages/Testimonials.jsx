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
    }, [5000]);

    return () => clearInterval(myInterval);
  }, []);
  return (
    <div
      className="h-screen w-screen grid place-items-center"
      id="testimonials"
    >
      <div className="h-max bg-accentColor/10">
        <div className="w-screen h-max flex gap-5 justify-center items-center">
          {/* Testimonials text content */}
          {appTestimonials.map((_, index) => (
            <>
              {index === currentTestimony && (
                <div
                  className="flex-1 gap-6 flex flex-col relative mx-4 ml-24"
                  key={index}
                >
                  <div className="animate__animated animate__zoomIn">
                    <img
                      src={singleQuote}
                      alt="singleQuote"
                      className="absolute top-0 left-0 -translate-x-[80%] -translate-y-[55%] opacity-40"
                    />

                    {/* Testimony text */}
                    <p className="font-inter text-lg">
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
                  <div className="flex gap-2 mt-6">
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
          <div className="flex-1">
            {userWantsToWatchVideo ? (
              <iframe
                src="https://www.youtube.com/embed/InF16sp7J0M"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-[480px] w-full object-cover animate__animated animate__zoomInDown border-4 border-accentColor bg-accentColor"
              ></iframe>
            ) : (
              <div
                className="w-full h-[480px] flex items-center justify-center cursor-pointer"
                onClick={() => {
                  setUserWantsToWatchVideo(true);
                }}
              >
                <img
                  src={testimonyCover}
                  alt="userWantsToWatchVideo"
                  className="h-full w-full object-cover"
                />

                <p className="w-max absolute bg-accentColor text-white p-6 rounded-lg">
                  Click me, then click me again to watch testimony video
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
