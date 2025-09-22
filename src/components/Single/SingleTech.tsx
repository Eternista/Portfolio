import LazyImage from "./LazyImage";

interface TechProps {
  techSrc: string;
  techName: string;
}

const SingleTech = ({ techSrc, techName }: TechProps) => {
  return (
    <div className="tech-item w-full h-full md:min-h-[255px] min-h-[152px] flex justify-center items-center">
      <LazyImage src={techSrc} alt={techName} classes="object-contain h-32 w-32" />
    </div>
  );
};

export default SingleTech;
