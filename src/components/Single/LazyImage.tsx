import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface LazyImageProps {
    src: string;
    alt: string;
    classes: string;
}

const LazyImage = ({src, alt, classes}: LazyImageProps) => {
    
    return (
        <LazyLoadImage height={'auto'} width={"auto"} effect="blur" src={src} alt={alt} className={`${classes}`}/>
    )
}

export default LazyImage;