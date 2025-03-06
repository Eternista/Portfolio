import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LazyImage from "../Single/LazyImage";

interface PortraitProps {
  imgSrc: string;
  classes?: string;
}

gsap.registerPlugin(ScrollTrigger);

const Portrait = ({ imgSrc, classes }: PortraitProps) => {
  return (
    <div
      className={`portrait relative lg:max-w-[600px] max-w-[400px] w-full pl-[26px] lg:mb-0 mb-8 ${classes}`}
    >
      <span className="block z-0 absolute top-[30px] bottom-[30px] left-0 w-14 bg-primary rounded-3xl"></span>
      <LazyImage
        src={imgSrc}
        alt="Tak wyglądam"
        classes="relative z-1 ml-auto lg:max-w-xl w-full object-contain rounded-3xl"
      />
    </div>
  );
};

export default Portrait;
