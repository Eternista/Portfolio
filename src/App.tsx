import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import { getTestDate } from "./extras/apiService";
import { BrowserRouter } from "react-router-dom";
import StarsCanvas from "./components/canvas/Stars";
import ContactForm from "./pages/ContactForm";
import Banner from "./pages/Banner";
import About from "./pages/AboutMe";
import TimelineSection from "./pages/TimeLineSection";

export const AppContent = () => {

  const DevMode = false;
  
  useEffect(() => {
    getTestDate();
  }, []);

  return (
    <div className="page overflow-hidden h-[100vh] dark">
      <StarsCanvas pageColor="#f272c8" />
      <Swiper
        direction={"vertical"}
        spaceBetween={0}
        slidesPerView={1}
        simulateTouch={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        mousewheel={true} // Włączenie obsługi scrolla
        modules={[Mousewheel]} // Dodanie modułu Mousewheel
        className="z-1 h-[100vh]"
      >
        <SwiperSlide>
          <Banner />
        </SwiperSlide>
        <SwiperSlide>
          <About />
        </SwiperSlide>
        <SwiperSlide>
          <TimelineSection />
        </SwiperSlide>
        <SwiperSlide>
          <ContactForm DevMode={DevMode} />
        </SwiperSlide>
      </Swiper>
      {!DevMode && (
        <>
          <Header />
          <Footer />
        </>
      )}
    </div>
  );
};

export const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};
