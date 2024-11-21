import RocketScene from "./canvas/Rocket";

const ContactForm = () => {


    return (
        <section className="gap-4 flex">
            <form className="flex-1 bg-[deepskyblue] p-5 rounded-xl">
                <input type="text" placeholder="Siema ema" />
            </form>
            <div className="flex-1">
                <RocketScene />
            </div>

        </section>
    )
}

export default ContactForm;