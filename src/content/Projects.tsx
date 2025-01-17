import Section from "../components/modules/Section";
import SingleProject from "../components/Single/SingleProject";
import Honda from "../assets/Projects/honda.jpg"
import ChatPG from "../assets/Projects/ChatPG.jpg"

const Projects = () => {

    return (
        <Section idName="projects" sectionTitle="FEATURED PROJECTS">
            <>
                <p className="max-w-[600px] mb-20 text-lg">Here are some of the selected projects that showcase my passion for front-end development.</p>
                <SingleProject 
                    heading="Chat PG AI from students and employes"
                    description="Project realized with a JAVA developer and AI - Spiecialist"
                    role="Frontend Developer"
                    imageAlt="Image of Chat PG Developer Website"
                    firm="Politechnika Gdańska"
                    client="pg.edu"
                    image={ChatPG}

                />
            </>
        </Section>
    )
}

export default Projects;