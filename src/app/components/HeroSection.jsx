"use client";
import React from "react";
import Image from "next/image";

import {TypeAnimation} from "react-type-animation";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="mb-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span>Hello, I'm {""}</span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                "Diqi",
                                1000,
                                "Web Developer",
                                1000,
                                "Mobile Developer",
                                1000,
                                "UI/UX Designer",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        Hello there! I'm Diqi Full Stack Developer From Indonesia 👋
                    </p>
                    <div>
                        <button className="px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-white hover:bg-slate-200 text-black">
                            Hire me
                        </button>
                        <a href="https://firebasestorage.googleapis.com/v0/b/personal-portfolio-6163a.appspot.com/o/Muhammad%20Shiddiqi%20Musyaffa'-resume%20English%20%5Brevision%204%5D.pdf?alt=media&token=ebe4bb6a-6b55-4f16-8602-dad31aa9c999">
                            <button className="px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-transparent hover:bg-slate-800 text-white border border-white mt-3">Download CV</button>
                        </a>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-5">
                    <div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[500] lg:h-[500] relative">
                        <Image
                            src="https://firebasestorage.googleapis.com/v0/b/personal-portfolio-6163a.appspot.com/o/output-onlinepngtools.png?alt=media&token=fb36b01b-0300-4396-91c3-1189196a2109"
                            alt="hero Image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-[45%] left-1/2 h-[300px] w-auto lg:h-auto"
                            width={500}
                            height={500}
                            sizes="100vw"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
