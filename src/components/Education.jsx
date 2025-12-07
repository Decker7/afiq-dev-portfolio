import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data';
import { GraduationCap } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="py-20 bg-dark">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                        <span className="text-primary text-xl">05.</span>
                        Education
                    </h2>

                    <div className="space-y-8">
                        {education.map((edu, index) => (
                            <div key={index} className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-primary/10 rounded-lg text-primary mt-1">
                                            <GraduationCap size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                                            <p className="text-primary font-medium">{edu.degree}</p>
                                        </div>
                                    </div>
                                    <div className="mt-4 md:mt-0 text-right">
                                        <span className="block text-sm text-gray-400">{edu.duration}</span>
                                        <span className="inline-block mt-2 px-3 py-1 bg-neutral-800 rounded-full text-xs text-secondary font-bold">
                                            CGPA: {edu.cgpa}
                                        </span>
                                    </div>
                                </div>
                                {edu.results && (
                                    <p className="ml-[60px] text-sm text-gray-400 mb-2">
                                        <span className="font-semibold text-gray-300">Results:</span> {edu.results}
                                    </p>
                                )}
                                <p className="ml-[60px] text-sm text-gray-500 italic border-l-2 border-gray-700 pl-4">
                                    {edu.note}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
