import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Autoplay } from "swiper/modules";
import { SingleSlideProps } from "../../extras/interfaces";

interface SlideProps {
    swiperDirection: "rtl" | "ltr",
    slides: SingleSlideProps[],
    classNames?: string;
}

const Slider = ({swiperDirection, slides, classNames}: SlideProps) => {
  return (
      <Swiper
        modules={[FreeMode, Autoplay]}
        spaceBetween={40}
        slidesPerView={3}
        loop={true}
        freeMode={true}
        speed={3000}
        autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
        allowTouchMove={false}
        className={`w-full items-tr ${classNames}`}
        style={{ direction: swiperDirection }}
      >
        {slides.map((slide, slideIndex) => (
            <SwiperSlide
            className="bg-gray-800 rounded-2xl py-10 px-8 shadow-md"
            style={{ direction: "ltr" }}
            key={slideIndex}
            >
            <div className="flex gap-5 items-start h-full">
              <img
                src={slide.img}
                alt="User Avatar"
                className="w-10 h-10 rounded-full border-yellow-300 border-2 mb-4"
              />
              <div className="flex flex-col justify-between h-full">
                <p className="text-lg">{slide.opinion}</p>
                <p className="text-lg mt-4">
                    <strong>
                        {slide.name}
                    </strong>
                    <br />
                    <small className="text-gray-400">
                      {slide.role}
                    </small>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
  );
};

export default Slider;
