import Section from "../components/modules/Section";
import Slider from "../components/modules/Slider";
import { upperTestimonial, downTestimonial } from "../extras/testimonialData";

const Testimonials = () => {
  return (
    <Section idName="testimonials" sectionTitle="TESTIMONIALS">
      <>
        <Slider
          classNames="mb-8"
          swiperDirection="ltr"
          slides={upperTestimonial}
        />
        <Slider swiperDirection="rtl" slides={downTestimonial} />
      </>
    </Section>
  );
};

export default Testimonials;
