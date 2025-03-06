import LazyImage from "./LazyImage";

interface TechProps {
  techSrc: string;
  techName: string;
}

const SingleTech = ({ techSrc, techName }: TechProps) => {
  return (
    <div className="tech-item w-full h-full flex justify-center items-center">
      <LazyImage src={techSrc} alt={techName} classes="object-contain h-32 w-32" />
    </div>
  );
};

export default SingleTech;
