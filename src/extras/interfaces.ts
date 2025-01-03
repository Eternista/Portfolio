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
