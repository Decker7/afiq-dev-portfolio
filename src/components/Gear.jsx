import React from 'react';
import { motion } from 'framer-motion';
import { gear } from '../data';
import { Cpu, Terminal } from 'lucide-react';

const Gear = () => {
    return (
        <section id="gear" className="py-20 bg-neutral-900/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                        <span className="text-primary text-xl">06.</span>
                        Gear & Setup
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-dark p-8 rounded-xl border border-neutral-800">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                <Cpu className="text-primary" />
                                Hardware
                            </h3>
                            <ul className="space-y-4">
                                {gear.hardware.map(item => (
                                    <li key={item} className="flex items-center gap-3 text-gray-400">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-dark p-8 rounded-xl border border-neutral-800">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                <Terminal className="text-primary" />
                                Software
                            </h3>
                            <ul className="space-y-4">
                                {gear.software.map(item => (
                                    <li key={item} className="flex items-center gap-3 text-gray-400">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Gear;
