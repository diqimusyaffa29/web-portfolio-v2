import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
    // {
    //     id: 1,
    //     title: "Next.js Portfolio Website",
    //     description: "This is my Portfolio Website using Nextjs",
    //     image: "/images/projects/1.png",
    //     tag: ["All", "Web"],
    //     gitUrl: "https://github.com/diqimusyaffa29/web-portfolio-v2",
    //     previewUrl:"/",
    // },
    {
        id: 2,
        title: "Website Profile of BPSC",
        description:
            "The aim of this project is to attract visitors to come to BPSC using internet media, therefore this profile website was created",
        image: "/images/projects/2.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/diqimusyaffa29/Project-Magang-POLIBAN",
        previewUrl:"/",
    },
    {
        id: 3,
        title: "Simple CRUD Application using Node.js",
        description: "This project is to make a simple crud that is easy for beginners to make.",
        image: "/images/projects/3.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/diqimusyaffa29/nodejs-assignment-diqi",
        previewUrl:"/",
    },
    {
        id: 4,
        title: "Simple Portfolio templat using HTML & CSS",
        description: "This is a simple portfolio website template project.",
        image: "/images/projects/4.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/diqimusyaffa29/assignment-1",
        previewUrl:"/",
    },
    {
        id: 5,
        title: "Clone of Xiaomi Phone Official Website",
        description:
            "this project is a clone of the official website of Xiaomi Phone Indonesia uisng tech stack ReactJS, Express, MySQL, etc .",
        image: "/images/projects/5.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/diqimusyaffa29/fs-xiaomi-phone",
        previewUrl:"https://xiaomi-phone.vercel.app/",
    },
    {
        id: 6,
        title: "E-Supervisi Hospital MPP Supervision Application",
        description:
            "The E-MPP Supervision Website is a digital platform specifically designed to facilitate Managers on Duty (MoD) in hospitals in managing and submitting reports related to nursing services. This website aims to improve the efficiency, accuracy, and documentation of daily reports in hospital operations.",
        image: "/images/projects/6.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/diqimusyaffa29/frontend-empp",
        previewUrl:"https://e-mpp.rsisabanjarbaru.com/",
    },
];

const ProjectSection = () => {
    return (
        <>
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {projectData.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                ))}
            </div>
        </>
    );
};

export default ProjectSection;
