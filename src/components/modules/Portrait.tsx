import {useEffect, useRef} from "react"
import { motion, useInView, useAnimation} from "framer-motion";


interface PortraitProps {
  imgSrc: string;
  classes?: string;
  fromLeftToRight: boolean;
}

const Portrait = ({ imgSrc, classes, fromLeftToRight }: PortraitProps) => {

  const ref = useRef(null);
  const isInView = useInView(ref, {once: false});
  const mainControls = useAnimation();


  useEffect(() => {
    if(isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView]);

  const imageAnim = fromLeftToRight ? {
    hidden: { opacity: 0, x: -75 },
    visible: { opacity: 1, x: 0 },
  } : {
    hidden: { opacity: 0, x: 75 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div
      ref={ref}
      className={`portrait relative lg:max-w-[600px] max-w-[400px] w-full pl-[26px] lg:mb-0 mb-8 ${classes}`}
    >
      <motion.span
        variants={imageAnim}
        animate={mainControls}
        transition={{duration: 0.5, delay: 0.25}}
        className="block z-0 absolute top-[30px] bottom-[30px] left-0 w-14 bg-primary rounded-3xl">
      </motion.span>
      <motion.img
        variants={imageAnim}
        animate={mainControls}
        transition={{duration: 0.5, delay: 0.2}}
        src={imgSrc}
        alt="Tak wyglądam"
        className="relative z-1 ml-auto lg:max-w-xl w-full object-contain rounded-3xl"
      />
    </div>
  );
};

export default Portrait;
