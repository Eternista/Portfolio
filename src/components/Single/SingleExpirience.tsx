import React  from "react";
import { FaCalendar, FaBuilding, FaLocationDot } from "react-icons/fa6";
import Separete from "./Separate";
import { useTranslation } from "react-i18next";

interface expHistoryProps {
  role: string;
  term: string;
  termEN: string;
  organizationName: string;
  organizationNameEN: string;
  organizationLocation: string;
  id: number;
}

interface SingleExpProps {
  heading: string;
  expHistory: expHistoryProps[];
}

const SingleExp = ({ heading, expHistory }: SingleExpProps) => {

  const { i18n } = useTranslation();
  const language = i18n.language;

  return (
    <div className="mb-10">
      <h3 className="text-4xl mb-4">{heading}</h3>
      {expHistory.map((item, itemIndex) => (
        <React.Fragment key={item.id}>
          <div className="flex flex-col mb-4 gap-4">
            <div className="flex justify-between">
              <p>{item.role}</p>
              <time className="flex gap-2 items-center">
                <FaCalendar />{" "}
                <small className="text-unlock text-sm text-[#c7c7c7]">
                  {
                    language == "en" 
                    ? 
                    (item.term) 
                    :
                    (item.termEN)
                  }
                </small>
              </time>
            </div>
            <div className="flex justify-between">
              <p className="flex items-center gap-2">
                <FaBuilding />
                <small className="text-unlock text-sm text-[#c7c7c7]">
                  {
                    language == "en" 
                    ? 
                    (item.organizationName) 
                    :
                    (item.organizationNameEN)
                  }
                </small>
              </p>
              <p className="flex items-center gap-2">
                <FaLocationDot />
                <small className="text-unlock text-sm text-[#c7c7c7]">
                  {item.organizationLocation}
                </small>
              </p>
            </div>
          </div>
          {itemIndex + 1 !== expHistory.length && (
            <Separete classNames="w-full mb-4" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default SingleExp;
