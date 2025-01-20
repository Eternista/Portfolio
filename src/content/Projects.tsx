import Section from "../components/modules/Section";
import SingleProject from "../components/Single/SingleProject";

import ProjectList from "../extras/projectsData";

const Projects = () => {

    return (
        <Section idName="projects" sectionTitle="FEATURED PROJECTS">
            <>
                <p className="max-w-[600px] mb-20 text-lg">Here are some of the selected projects that showcase my passion for front-end development.</p>
                {ProjectList.map((project, projectIndex) => (
                    <SingleProject
                        key={projectIndex}
                        heading={project.heading}
                        description={project.description}
                        role={project.role}
                        imageAlt={project.imageAlt}
                        firm={project.firm}
                        client={project.client}
                        image={project.image}
                    />
                ))}
            </>
        </Section>
    )
}

export default Projects;