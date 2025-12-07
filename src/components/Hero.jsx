import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[128px]" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[128px]" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-6">
                        Available for Hire
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Hi, I'm <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{personalInfo.name.split(' ')[0]}</span>
                    </h1>

                    <h2 className="text-2xl md:text-4xl text-gray-400 font-light mb-8">
                        {personalInfo.title}
                    </h2>

                    <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-10 leading-relaxed">
                        {personalInfo.about.substring(0, 153)}...
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <a
                            href="#projects"
                            className="group px-8 py-3 bg-primary text-dark font-bold rounded-full hover:bg-secondary transition-all flex items-center gap-2"
                        >
                            View Projects
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href="#contact"
                            className="px-8 py-3 border border-gray-700 text-gray-300 rounded-full hover:border-primary hover:text-primary transition-all font-medium"
                        >
                            Contact Me
                        </a>
                    </div>

                    <div className="mt-16 flex items-center justify-center gap-6">
                        <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                            <Github size={24} />
                        </a>
                        <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href={`mailto:${personalInfo.email}`} className="text-gray-500 hover:text-primary transition-colors">
                            <Mail size={24} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
