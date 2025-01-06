import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { ContactFormTypes, FormStage } from "../extras/interfaces";
import { ContactSubmit } from "../functions/FormSubmit";
import { useState } from "react";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const ContactForm = (DevMode: boolean) => {
  const { t } = useTranslation();
  const success = t("success");
  const failure = t("failure");

  const {control, register, handleSubmit, formState: { errors } } = useForm<ContactFormTypes>();
  const [formStage, setFormStage] = useState<FormStage>("none")

  const onSubmit = async (data: ContactFormTypes) => {
    try {
      await ContactSubmit(data, setFormStage);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <section className="flex mb-16 items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="min-w-[380px] w-full max-w-[560px] bg-[deepskyblue] rounded-xl"
      >
        <h2 className="text-white text-5xl p-5 font-bold">Contact Form</h2>
        <div className="bg-[royalblue] h-[488px] rounded-b-xl p-5">

          {formStage === "none" && (
            <>
              <label className="mb-4 block">
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 text-xl text-[#333] rounded-md"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
              </label>
              <label className="mb-4 block">
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 text-xl text-[#333] rounded-md"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </label>
              <label className="mb-4 block">
                <input
                  {...register("subject", { required: "Subject is required" })}
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-2 text-xl text-[#333] rounded-md"
                />
                {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
              </label>
              <label className="mb-4 block">
                <textarea
                  {...register("message", { required: "Message is required" })}
                  placeholder="Message"
                  className="w-full block resize-none h-52 overflow-auto px-4 py-2 text-xl text-[#333] rounded-md"
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
              </label>
              <button
                type="submit"
                className="bg-secondary hover:bg-orange-700 transition-colors px-4 py-2 text-xl rounded-md font-bold"
              >
                Submit
              </button>
            </>
          )}
          {formStage === "success" && (
            <div className="mb-4 flex">
                <div className="rounded-full h-32 w-32 bg-white">
                  <FaCircleCheck fill="green" className="w-full h-full border rounded-full border-white" />
                </div>
                <div className="px-4 py-2">
                  <p dangerouslySetInnerHTML={{ __html: success }}/>
                </div>
            </div>
          )}
          {formStage === "failure" && (
            <div className="mb-4 flex">
                <div className="rounded-full h-32 w-32 bg-white">
                  <FaCircleXmark fill="red" className="w-full h-full border rounded-full border-white"/>
                </div>
                <div className="px-4 py-2">
                  <p dangerouslySetInnerHTML={{ __html: failure }}/>
                </div>
            </div>
          )}
        </div>
      </form>
      {DevMode && (
        <DevTool control={control}/>
      )}

    </section>
  );
};

export default ContactForm;
