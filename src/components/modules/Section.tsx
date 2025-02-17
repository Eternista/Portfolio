import { ReactElement } from "react";

interface SectionProps {
  classNames?: string;
  sectionTitle?: string;
  idName: string;
  children?: ReactElement;
}

const Section = ({idName, classNames, sectionTitle, children }: SectionProps) => {
  return (
    <section id={idName} className={`section lg:py-24 md:py-18 py-12 w-full ${classNames}`}>
      <div className="wrapper">
        {sectionTitle && (
          <h2 className="text-white lg:mb-20 md:mb-16 mb-8 text-7xl">{sectionTitle}</h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
