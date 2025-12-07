import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data';
import { Github, ExternalLink, Folder } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-neutral-900/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                        <span className="text-primary text-xl">04.</span>
                        Featured Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-dark border border-neutral-800 rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300"
                            >
                                {/* Hover Effect Border */}
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-xl transition-colors duration-300 pointer-events-none z-10" />

                                <div className="p-8 h-full flex flex-col">
                                    <div className="flex justify-between items-start mb-6">
                                        <Folder size={40} className="text-primary" />
                                        <div className="flex gap-4 z-20">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-gray-400 hover:text-white transition-colors"
                                            >
                                                <Github size={20} />
                                            </a>
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-gray-400 hover:text-primary transition-colors"
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 mb-6 flex-grow text-sm leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-3 mt-auto">
                                        {project.stack.map(tech => (
                                            <span key={tech} className="text-xs font-mono text-gray-500">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
