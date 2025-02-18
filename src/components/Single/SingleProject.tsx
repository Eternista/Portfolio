import Separete from "./Separate";
import { SingleProjectProps } from "../../extras/interfaces";
import { useTranslation } from "react-i18next";

const SingleProject = ({
  heading,
  description,
  role,
  image,
  imageAlt,
  firm,
  client,
  headingEN,
  descriptionEN,
  imageAltEN,
  firmEN,
}: SingleProjectProps) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const ClientTrans = t("client");
  const firmTrans = t("firm");
  const roleTrans = t("role");
  const projectTrans = t("projectInfo");

  return (
    <div className="single-project flex lg:flex-nowrap flex-wrap items-center justify-between gap-12 lg:mb-32 md:mb-16 mb-10">
      <div className="bg-gray-800 rounded-3xl max-w-[600px] w-full md:px-14 md:py-32 px-8 py-16 flex items-center justify-center">
        <img
          className="rounded-3xl"
          src={image}
          alt={lang == "en" ? imageAltEN : imageAlt}
        />
      </div>
      <div className="context w-full">
        <h3 className="text-3xl">{lang == "en" ? headingEN : heading}</h3>
        <p className="text-lg mb-8">
          {lang == "en" ? descriptionEN : description}
        </p>
        <h4 className="text-md">{projectTrans}</h4>
        {client && (
          <>
            <Separete classNames="w-full my-4" />
            <p className="flex justify-between w-full">
              <strong>
                <small>{ClientTrans}</small>
              </strong>
              <strong>
                <small>{client}</small>
              </strong>
            </p>
          </>
        )}
        <Separete classNames="w-full my-4" />
        <p className="flex justify-between w-full">
          <strong>
            <small>{firmTrans}</small>
          </strong>
          <strong>
            <small>{lang == "en" ? firmEN : firm}</small>
          </strong>
        </p>
        <Separete classNames="w-full my-4" />
        <p className="flex justify-between w-full">
          <strong>
            <small>{roleTrans}</small>
          </strong>
          <strong>
            <small>{role}</small>
          </strong>
        </p>
      </div>
    </div>
  );
};

export default SingleProject;
