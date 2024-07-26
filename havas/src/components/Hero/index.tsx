// components/Hero.tsx
'use client'
import React, { useEffect, useState } from "react";
import { PiMouseSimple } from "react-icons/pi";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";


const videoSources = [
    "/videos/hero-video.mov",
    "/videos/health-01.mp4",
    "/videos/health-02.mp4",
];

const Hero: React.FC = () => {
    const [videoSrc, setVideoSrc] = useState(videoSources[0]);

    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 300], [0, -100]);
    const x = useTransform(scrollY, [0, 300], [0, 100]);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * videoSources.length);
        setVideoSrc(videoSources[randomIndex]);
    }, []);


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
                    className="text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4"
                    style={{ y }} // Animação do eixo Y
                    transition={{ duration: 0.5, ease: "ease-out" }}
                >
                    Inspirando ideias. <br />
                    Inspirando a vida.
                </motion.h1>
                <motion.p
                    className="text-sm md:text-base lg:text-xl xl:text-2xl mb-8"
                    style={{ x }} // Animação do eixo X
                    transition={{ duration: 0.5, ease: "ease-out" }}
                >
                    Por que cuidamos de vidas, não apenas da saúde.
                </motion.p>
                <motion.a
                    href="#"
                    className="bg-gradient-to-r from-button-gradient-start to-button-gradient-end text-gray-700 hover:text-white font-medium text-sm md:text-lg lg:text-xl py-4 md:py-5 lg:py-6 px-4 md:px-5 lg:px-6 rounded-full"
                    style={{
                        y: useTransform(scrollY, [0, 300], [0, 50]), // Ajuste os valores conforme necessário
                        transition: 'all 0.5s ease-out',
                    }}
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
                <PiMouseSimple color="#ffffff" size={48} className="z-10 absolute bottom-4 left-[50%] translate-x-[-50%]" />
            </motion.div>
        </section>
    );
};

export default Hero;
