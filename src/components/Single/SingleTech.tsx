interface TechProps {
    techSrc: string;
    techName: string;
}

const SingleTech = ({techSrc, techName}: TechProps) => {
    return (
        <div className="tech-item w-full h-full flex justify-center items-center">
            <img src={techSrc} alt={techName} className="object-contain h-32 w-32"/>
        </div>
    )
}

export default SingleTech