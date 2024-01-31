"use client";
import React, {useTransition, useState} from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Node.js</li>
                <li>Express</li>
                <li>Sequelize</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>MySQL</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Fullstack Developer Harisenin.com</li>
                <li>Politeknik Negeri Banjarmasin</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>Fullstack Developer Harisenin.com</li>
                <li>Journey Towards Fronted Dev Mastery & Succesfull Career as Backend Engineer</li>
                <li>Pemograman JavaScript - Pemula sampai Akhir</li>
                <li>SAP Analytics Cloud Training</li>
                <li>Junior Web Development</li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [isPending, startTransition] = useTransition();
    const [tab, setTab] = useState("skills");

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white ">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image
                    src={
                        "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-6163a.appspot.com/o/online-school-equipment-home.jpg?alt=media&token=38818c8b-aa06-41c3-8717-923e605436ee"
                    }
                    height={1000}
                    width={1000}
                    sizes="100vw"
                    className="rounded-lg lg:w-auto lg:h-[470px]"
                />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                        I am a full stack web developer with a passion for creating interactive and
                        responsive web applications. I have experience working with JavaScript,
                        React, Redux, Node.js, Express, Sequelize, HTML, CSS, and Git. I am a quick
                        learner and I am always looking to expand my knowledge and skill set. I am a
                        team player and I am excited to work with others to create amazing
                        applications.
                    </p>
                    <div className="flex flex-row mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}>
                            Skills
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}>
                            Education
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}>
                            Certifications
                        </TabButton>
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
