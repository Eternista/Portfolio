export interface singleMenuPosition {
  text: string;
  link: string;
  icon?: string;
}

export type ContactFormTypes = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type FormStage = "success" | "failure" | "none";

export interface SingleProjectProps {
  heading: string;
  headingEN: string;
  description: string;
  descriptionEN: string;
  role: string;
  image: string;
  imageAlt: string;
  imageAltEN: string;
  firm: string;
  firmEN: string;
  client?: string;
}

export interface SingleSlideProps {
  img: string;
  opinion: string;
  opinionEN: string;
  name: string;
  role: string;
  roleEN: string;
}
