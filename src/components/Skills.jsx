import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';
import { Code, Database, Layout, PenTool, Server } from 'lucide-react';

const Skills = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="py-20 bg-neutral-900/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                        <span className="text-primary text-xl">02.</span>
                        Skills & Expertise
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Languages */}
                        <motion.div
                            variants={item}
                            className="p-6 bg-dark border border-neutral-800 rounded-xl hover:border-primary/50 transition-colors"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Code className="text-primary" />
                                <h3 className="text-xl font-bold">Languages</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skills.languages.map(lang => (
                                    <span key={lang} className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-gray-300">
                                        {lang}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Frameworks */}
                        <motion.div
                            variants={item}
                            className="p-6 bg-dark border border-neutral-800 rounded-xl hover:border-primary/50 transition-colors"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Layout className="text-primary" />
                                <h3 className="text-xl font-bold">Frameworks</h3>
                            </div>
                            <div className="space-y-3">
                                {skills.frameworks.map(fw => (
                                    <div key={fw.name} className="flex justify-between items-center text-sm">
                                        <span className="text-gray-300">{fw.name}</span>
                                        <span className={`px-2 py-0.5 rounded text-xs ${fw.level === 'Expert' ? 'bg-primary/20 text-primary' :
                                                fw.level === 'Proficient' ? 'bg-blue-500/20 text-blue-400' :
                                                    'bg-gray-700 text-gray-400'
                                            }`}>
                                            {fw.level}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* CMS */}
                        <motion.div
                            variants={item}
                            className="p-6 bg-dark border border-neutral-800 rounded-xl hover:border-primary/50 transition-colors"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Database className="text-primary" />
                                <h3 className="text-xl font-bold">CMS / Tools</h3>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-xs uppercase text-gray-500 font-bold mb-2">CMS</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.cms.map(cms => (
                                            <span key={cms.name} className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-gray-300">
                                                {cms.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xs uppercase text-gray-500 font-bold mb-2">Tools</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.tools.map(tool => (
                                            <span key={tool} className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-gray-300">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Expertise List */}
                    <div className="mt-12 p-8 bg-dark border border-neutral-800 rounded-xl">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <PenTool size={20} className="text-primary" />
                            Areas of Expertise
                        </h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {skills.expertise.map((exp, index) => (
                                <li key={index} className="flex items-center gap-2 text-gray-400">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    {exp}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
