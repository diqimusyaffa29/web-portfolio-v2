import React from "react";
import ProjectCard from "./ProjectCard";
import projectData from "../data/project-data";

const projectDataData = projectData

const ProjectSection = () => {
    return (
        <>
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {projectDataData.map((project) => {
                    return <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />;
                })}
            </div>
        </>
    );
};

export default ProjectSection;
