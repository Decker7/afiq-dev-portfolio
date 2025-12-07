import React from 'react';
import { personalInfo } from '../data';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 bg-black text-center border-t border-neutral-900">
            <div className="container mx-auto px-6">

                <div className="mb-6 flex justify-center gap-8 text-sm font-medium text-gray-400">
                    <a href="#about" className="hover:text-primary transition-colors">About</a>
                    <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
                    <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
                    <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
                </div>

                <div className="flex justify-center gap-6 mb-8">
                    <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                        <Github size={20} />
                    </a>
                    <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-primary transition-colors">
                        <Mail size={20} />
                    </a>
                </div>

                <div className="mb-6 text-gray-500">
                    <p>{personalInfo.phone}</p>
                </div>

                <p className="text-gray-600 text-sm">
                    &copy; {currentYear} {personalInfo.name}. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
