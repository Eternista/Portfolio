import Section from "../components/modules/Section";
import ContactForm from "../components/modules/ContactForm";

const Contact = (DevMode: boolean) => {
  return (
    <Section>
      <div className="flex">
        <ContactForm DevMode={DevMode} />
      </div>
    </Section>
  );
};

export default Contact;
