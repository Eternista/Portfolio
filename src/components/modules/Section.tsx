import { ReactElement } from "react";

interface SectionProps {
  classNames?: string;
  sectionTitle?: string;
  idName: string;
  children?: ReactElement;
}

const Section = ({idName, classNames, sectionTitle, children }: SectionProps) => {
  return (
    <section id={idName} className={`py-24 w-full ${classNames}`}>
      <div className="wrapper">
        {sectionTitle && (
          <h2 className="text-white mb-20 text-7xl">{sectionTitle}</h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
