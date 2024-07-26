// components/Hero.tsx
'use client'
import React, { useEffect, useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import { motion, useAnimation } from "framer-motion";


const videoSources = [
    "/videos/hero-video.mov",
    "/videos/health-01.mp4",
    "/videos/health-02.mp4",
];

const Hero: React.FC = () => {

    const [videoSrc, setVideoSrc] = useState(videoSources[0]);
    const controls = useAnimation();

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * videoSources.length);
        setVideoSrc(videoSources[randomIndex]);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                controls.start({ x: 200, opacity: 0 });
            } else {
                controls.start({ x: 0, opacity: 1 });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [controls]);

    return (
        <section className="relative h-screen overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={videoSrc}
                autoPlay
                muted
                loop
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>

            <div className="container relative z-10 flex flex-col items-start justify-center h-full text-left text-white px-6">
                <motion.h1
                    className="text-4xl md:text-9xl font-bold mb-4"
                    initial={{ x: -100, opacity: 0 }}
                    animate={controls}
                    transition={{ duration: 1 }}
                >
                    Inspirando ideias. <br />
                    Inspirando a vida.
                </motion.h1>
                <motion.p
                    className="text-lg md:text-2xl mb-8"
                    initial={{ x: -100, opacity: 0 }}
                    animate={controls}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Por que cuidamos de vidas, não apenas da saúde.
                </motion.p>
                <motion.a
                    href="#"
                    className="bg-gradient-to-r from-button-gradient-start to-button-gradient-end text-gray-700 hover:text-white font-medium text-lg md:text-2xl lg:text-3xl py-4 md:py-5 lg:py-6 px-4 md:px-5 lg:px-6 rounded-full"
                    // className="bg-gradient-to-r from-button-gradient-start to-button-gradient-end text-gray-700 hover:text-white font-medium text-lg md:text-2xl lg:text-3xl py-4 md:py-5 lg:py-6 px-4 md:px-5 lg:px-6 rounded-full"
                    initial={{ x: -100, opacity: 0 }}
                    animate={controls}
                    transition={{ duration: 1, delay: 1 }}
                >
                    Nossa missão
                </motion.a>
            </div>
            <motion.div
                className={`absolute bottom-4 left-[50%] translate-x-[-50%] `}
                initial={{ y: 0 }}
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
            >
                <RiCloseLargeFill color="#ffffff" size={48} className="z-10 absolute bottom-4 left-[50%] translate-x-[-50%]" />
            </motion.div>
        </section>
    );
};

export default Hero;
