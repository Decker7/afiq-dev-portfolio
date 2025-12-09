import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';
import myPicture from '../assets/my-picture.jpg';

const About = () => {
    return (
        <section id="about" className="py-20 bg-dark relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        {/* Text Content */}
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <span className="text-primary text-xl">01.</span>
                                About Me
                            </h2>

                            <div className="prose prose-invert prose-lg text-gray-400">
                                <p className="leading-relaxed">
                                    {personalInfo.about}
                                </p>
                            </div>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <div className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg">
                                    <span className="block text-2xl font-bold text-white mb-1">50+</span>
                                    <span className="text-xs text-gray-500 uppercase tracking-wider">Websites Managed</span>
                                </div>
                                <div className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg">
                                    <span className="block text-2xl font-bold text-white mb-1">3+</span>
                                    <span className="text-xs text-gray-500 uppercase tracking-wider">Years Experience</span>
                                </div>
                            </div>
                        </div>

                        {/* Image Content */}
                        <div className="relative group w-full md:w-80 flex-shrink-0">
                            <div className="absolute inset-0 bg-primary rounded-lg rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-300"></div>
                            <div className="absolute inset-0 bg-secondary rounded-lg -rotate-6 opacity-20 group-hover:-rotate-12 transition-transform duration-300"></div>
                            <div className="relative rounded-lg overflow-hidden border-2 border-primary/30 shadow-2xl">
                                <img
                                    src={myPicture}
                                    alt="Profile"
                                    className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
