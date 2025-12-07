import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-dark">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                        <span className="text-primary text-xl">03.</span>
                        Work Experience
                    </h2>

                    <div className="space-y-12">
                        {experience.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative pl-8 border-l border-gray-800"
                            >
                                <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-primary" />

                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1">{job.role}</h3>
                                        <div className="flex items-center gap-2 text-primary font-medium">
                                            <Briefcase size={16} />
                                            <span>{job.company}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-500 text-sm mt-2 md:mt-0 bg-neutral-900 px-3 py-1 rounded-full">
                                        <Calendar size={14} />
                                        {job.duration}
                                    </div>
                                </div>

                                <ul className="space-y-3 mt-6">
                                    {job.responsibilities.map((task, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-400 leading-relaxed">
                                            <span className="mt-2 w-1.5 h-1.5 min-w-[6px] rounded-full bg-gray-600" />
                                            {task}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
