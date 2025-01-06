import emailjs from "@emailjs/browser";
import { ContactFormTypes, FormStage } from "../extras/interfaces";

export const ContactSubmit = (
  data: ContactFormTypes,
  setFormStage: (stage: FormStage) => void,
) => {
  emailjs
    .send(
      "service_c3xcucj", //SERVICE ID
      "template_fofv6bj", //TEMPLATE ID
      {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      },
      "v0dxfEiuaEc_mZncN", // PUBLIC KEY
    )
    .then(() => {
      setFormStage("success");
      console.log("Sukces");
    })
    .catch((error) => {
      console.error("Failed to send email:", error);
      setFormStage("failure");
    });
};
