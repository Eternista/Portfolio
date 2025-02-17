import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { ContactFormTypes, FormStage } from "../../extras/interfaces";
import { ContactSubmit } from "../../functions/FormSubmit";
import { useState } from "react";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

interface ContactFromProps {
  DevMode: boolean;
}

const ContactForm = ({ DevMode }: ContactFromProps) => {
  const { t } = useTranslation();
  const success = t("success");
  const failure = t("failure");
  const formName = t("formName");
  const formSubject = t("formSubject");
  const formMessage = t("formMessage");
  const formSubmit = t("formSubmit");

  const componentClasses = {
    input: "bg-secondary w-full px-4 py-3 text-xl text-white rounded-md",
    textarea:
      "bg-secondary w-full block resize-none h-40 overflow-auto px-4 py-3 text-xl text-white rounded-lg",
  };

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormTypes>();
  const [formStage, setFormStage] = useState<FormStage>("none");

  const onSubmit = async (data: ContactFormTypes) => {
    try {
      await ContactSubmit(data, setFormStage);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:min-w-[380px] w-full max-w-[720px]"
      >
        <div className="h-[611px] flex flex-col gap-6">
          {formStage === "none" && (
            <>
              <label className="block">
                <p className="mb-3">{formName}</p>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  className={componentClasses.input}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </label>
              <label className="block">
                <p className="mb-3">Email</p>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  className={componentClasses.input}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </label>
              <label className="block">
                <p className="mb-3">{formSubject}</p>
                <input
                  {...register("subject", { required: "Subject is required" })}
                  type="text"
                  className={componentClasses.input}
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm">
                    {errors.subject.message}
                  </p>
                )}
              </label>
              <label className="block">
                <p className="mb-3">{formMessage}</p>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  className={componentClasses.textarea}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </label>
              <button
                type="submit"
                className="w-36 text-center bg-primary px-6 py-5 rounded-[40px] transition-colors duration-300 hover:bg-secondary group"
              >
                <span className="text-lg text-black font-extrabold transition-colors duration-300 group-hover:text-white">
                  {formSubmit}
                </span>
              </button>
            </>
          )}
          {formStage === "success" && (
            <div className="mb-4 flex">
              <div className="rounded-full h-32 w-32 bg-white">
                <FaCircleCheck
                  fill="green"
                  className="w-full h-full border rounded-full border-white"
                />
              </div>
              <div className="px-4 py-2">
                <p dangerouslySetInnerHTML={{ __html: success }} />
              </div>
            </div>
          )}
          {formStage === "failure" && (
            <div className="mb-4 flex">
              <div className="rounded-full h-32 w-32 bg-white">
                <FaCircleXmark
                  fill="red"
                  className="w-full h-full border rounded-full border-white"
                />
              </div>
              <div className="px-4 py-2">
                <p dangerouslySetInnerHTML={{ __html: failure }} />
              </div>
            </div>
          )}
        </div>
      </form>
      {!DevMode && <DevTool control={control} />}
    </>
  );
};

export default ContactForm;
