import { useEffect, useRef} from "react"
import { motion, useInView, useAnimation} from "framer-motion";

interface TextAnimProps {
    children: JSX.Element;
    fromLeftToRight: boolean;
}

interface UpDownAnimProps {
  children: JSX.Element;
  UpDownAnim: boolean;
}

export const TextAnim = ({children, fromLeftToRight}: TextAnimProps) => {    
  const ref = useRef(null);
  const isInView = useInView(ref, {once: false});
  const mainControls = useAnimation();

  const anim = fromLeftToRight ? {
    hidden: { opacity: 0, x: -75 },
    visible: { opacity: 1, x: 0 },
  } : {
    hidden: { opacity: 0, x: 75 },
    visible: { opacity: 1, x: 0 },
  };

    useEffect(() => {
        if(isInView) {
          mainControls.start("visible");
        } else {
          mainControls.start("hidden");
        }
      }, [isInView]);

    return (
        <motion.div
            ref={ref}
            variants={anim}
            animate={mainControls}
            transition={{duration: 0.5, delay: 0.2}}
        >
            {children}
        </motion.div>
    )
};

export const DownAnim = ({children, UpDownAnim}: UpDownAnimProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: false});
  const mainControls = useAnimation();

  const anim = UpDownAnim ? {
    hidden: { opacity: 0, y: -75 },
    visible: { opacity: 1, y: 0 },
  } : {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

    useEffect(() => {
        if(isInView) {
          mainControls.start("visible");
        } else {
          mainControls.start("hidden");
        }
      }, [isInView]);

    return (
        <motion.div
            ref={ref}
            variants={anim}
            animate={mainControls}
            transition={{duration: 0.5, delay: 0.2}}
        >
            {children}
        </motion.div>
    )
}