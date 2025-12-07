import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';

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
                    <div className="flex flex-col md:flex-row gap-12 items-start">
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
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
