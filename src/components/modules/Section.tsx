import { ReactElement } from "react";

interface SectionProps {
    classNames?: string;
    sectionTitle?: string;
    children?: ReactElement;
}

const Section = ({classNames, sectionTitle, children}: SectionProps) => {

    return (
        <section className={`my-24 w-full ${classNames}`}>
            <div className="wrapper">
                {sectionTitle && (<h2 className="text-white mb-20 text-7xl">{sectionTitle}</h2>)}
                { children }
            </div>
        </section>
    )
}

export default Section;