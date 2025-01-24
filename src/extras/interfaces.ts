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
  description: string;
  role: string;
  image: string;
  imageAlt: string;
  firm: string;
  client?: string;
}

export interface SingleSlideProps {
  img: string;
  opinion: string;
  name: string;
  role: string;
}