import RocketScene from "./canvas/Rocket";

const ContactForm = () => {
  return (
    <section className="flex mb-16 items-center">
      <form className="w-[40%] bg-[deepskyblue] rounded-xl">
        <h2 className="text-white text-5xl p-5 font-bold">Contact form</h2>
        <div className="bg-[royalblue] rounded-b-xl p-5">
          <label className="mb-4 block">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 text-xl text-[#333] rounded-md"
            />
          </label>
          <label className="mb-4 block">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 text-xl text-[#333] rounded-md"
            />
          </label>
          <label className="mb-4 block">
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-2 text-xl text-[#333] rounded-md"
            />
          </label>
          <label className="mb-4 block">
            <textarea
              placeholder="Message:"
              className="w-full block resize-none h-52 overflow-auto px-4 py-2 text-xl text-[#333] rounded-md"
            />
          </label>
          <button className="bg-secondary hover:bg-orange-700 transition-colors px-4 py-2 text-xl rounded-md font-bold">
            Submit
          </button>
        </div>
      </form>
      <div className="w-[60%] h-96">
        <RocketScene />
      </div>
    </section>
  );
};

export default ContactForm;
