import Section from "../components/modules/Section";
import SingleProject from "../components/Single/SingleProject";

import ProjectList from "../extras/projectsData";

const Projects = () => {

    return (
        <Section idName="projects" sectionTitle="FEATURED PROJECTS">
            <>
                <p className="max-w-[600px] lg:mb-20 md:mb-16 mb-10 text-lg">Here are some of the selected projects that showcase my passion for front-end development.</p>
                {ProjectList.map((project, projectIndex) => (
                    <SingleProject
                        key={projectIndex}
                        heading={project.heading}
                        headingEN={project.headingEN}
                        description={project.description}
                        descriptionEN={project.descriptionEN}
                        role={project.role}
                        imageAlt={project.imageAlt}
                        imageAltEN={project.imageAlt}
                        image={project.image}
                        firm={project.firm}
                        firmEN={project.firm}
                        client={project.client}
                    />
                ))}
            </>
        </Section>
    )
}

export default Projects;