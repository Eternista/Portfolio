import Me from "../assets/me.jpg";

const About = () => {
  return (
    <section className="min-h-[100vh] flex items-center">
      <div className="flex gap-12">
        <div>
          <img src={Me} className="rounded-3xl mb-0" alt="Me Myself and I :D" />
        </div>
        <div className="py-5">
          <h2 className="text-6xl">Cześć jestem Rafał!</h2>
        </div>
      </div>
    </section>
  );
};

export default About;
