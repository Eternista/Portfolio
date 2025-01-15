import Section from "../components/modules/Section";
import ContactForm from "../components/modules/ContactForm";
import DualIcon from "../components/modules/Dual-icons";

import Logo from "../assets/logo.png";

const Contact = (DevMode: boolean) => {
  return (
    <Section idName="contact">
      <div className="flex justify-between">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-7xl">LET'S CONNECT</h2>
            <p className="mb-4">
              Say hello at{" "}
              <a
                className="border-b border-primary"
                href="mailto:rafal.ziolkowski1234@gmail.com"
              >
                your email address
              </a>
              <br />
              For more info, here's my{" "}
              <a href="" className="border-b border-primary">
                resume
              </a>
            </p>
            <div className="flex gap-4">
              <DualIcon />
            </div>
          </div>
          <img className="w-24" src={Logo} alt="My Logo" />
        </div>
        <ContactForm DevMode={DevMode} />
      </div>
    </Section>
  );
};

export default Contact;
