import { FaCalendar, FaBuilding, FaLocationDot } from "react-icons/fa6";
import Separete from "./Separate";

interface expHistoryProps {
  role: string;
  term: string;
  organizationName: string;
  organizationLocation: string;
}

interface SingleExpProps {
  heading: string;
  expHistory: expHistoryProps[];
}

const SingleExp = ({ heading, expHistory }: SingleExpProps) => {
  return (
    <div className="mb-10">
      <h3 className="text-4xl mb-4">{heading}</h3>
      {expHistory.map((item, expIndex) => (
        <>
          <div key={expIndex} className="flex flex-col mb-4 gap-4">
            <div className="flex justify-between">
              <p>{item.role}</p>
              <time className="flex gap-2 items-center">
                <FaCalendar />{" "}
                <small className="text-unlock text-[#c7c7c7]">
                  {item.term}
                </small>
              </time>
            </div>
            <div className="flex justify-between">
              <p className="flex items-center gap-2">
                <FaBuilding />
                <small className="text-unlock text-[#c7c7c7]">
                  {item.organizationName}
                </small>
              </p>
              <p className="flex items-center gap-2">
                <FaLocationDot />
                <small className="text-unlock text-[#c7c7c7]">
                  {item.organizationLocation}
                </small>
              </p>
            </div>
          </div>
          <Separete classNames="w-full mb-4" />
        </>
      ))}
    </div>
  );
};

export default SingleExp;
