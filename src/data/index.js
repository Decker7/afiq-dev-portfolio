import { Github, ExternalLink, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const personalInfo = {
    name: "MUHAMMAD AFIQ BIN APANDI",
    title: "Front-End/Web Developer",
    email: "afiqm6526@gmail.com",
    phone: "011-656-27432",
    linkedin: "https://www.linkedin.com/in/muhammad-afiq-bin-apandi-551230217",
    github: "https://github.com/Decker7",
    location: "Kuala Nerus, Terengganu, Malaysia",
    about: "Results-driven Front-End/Web Developer with extensive experience managing over 50 client websites and delivering scalable, user-friendly web solutions. Proficient in HTML, CSS, JavaScript, Laravel, and WordPress, with a strong track record of troubleshooting, plugin integration, and web hosting management. Adept at collaborating with teams, solving complex problems, and continuously enhancing technical skills. Committed to leveraging expertise to drive impactful digital experiences and contribute to organizational success.",
};

export const skills = {
    languages: ["HTML", "CSS", "JavaScript", "PHP", "Vue", "Astro", "Markdown", "SQL"],
    frameworks: [
        { name: "Laravel", level: "Proficient" },
        { name: "Astro", level: "Proficient" },
        { name: "React", level: "Beginner" },
        { name: "Node", level: "Beginner" },
    ],
    cms: [
        { name: "Wordpress", level: "Expert" },
        { name: "Shopify", level: "Proficient" },
        { name: "Wix", level: "Intermediate" },
    ],
    tools: ["Visual Studio Code", "Microsoft Teams", "Trello", "phpMyAdmin"],
    expertise: [
        "Website development",
        "Website error troubleshooting",
        "Web hosting management",
        "Executing client requests",
        "Domain registration and management"
    ]
};

export const experience = [
    {
        company: "Nexlaw AI Sdn Bhd",
        role: "Front-End/Web Developer (Internship)",
        duration: "Mac 2025 - August 2025",
        responsibilities: [
            "Managed 50+ client websites across WordPress, Shopify, and Wix platforms, customizing diverse themes and plugins.",
            "Performed regular updates, troubleshooting, and optimization to ensure seamless website performance.",
            "Managed client website hosting and DNS using cPanel, Serverfreak, and Cloudflare.",
            "Contributed to converting the company website from WordPress to a code-based site using the Astro framework.",
            "Managed the company website (nexlaw.ai), including creating/updating blog posts, adding new pages, and overseeing design/content changes."
        ]
    },
    {
        company: "Eco Tourism Website for Terengganu (Final Project)",
        role: "Developer",
        duration: "June 2024 - January 2025",
        responsibilities: [
            "Developed a tourism website featuring various attractions in Terengganu.",
            "Enabled users to book activities such as kayaking, jungle trekking, and more.",
            "Integrated a Multi-Criteria Decision Making (MCDM) system to score and recommend activities based on user-selected filters."
        ]
    }
];

export const projects = [
    {
        title: "Car Shop",
        description: "A conceptual e-commerce or car listing platform designed to showcase inventory and detailed vehicle information. Features a clean, responsive interface for easy browsing.",
        stack: ["React", "JavaScript", "HTML", "CSS", "Vercel"],
        live: "https://car-shop-mocha.vercel.app/",
        github: "https://github.com/Decker7/car-shop"
    },
    {
        title: "Slow Sips Cafe",
        description: "A modern, responsive website for a cafe. The site focuses on presenting the menu, location, and ambiance with high-quality design.",
        stack: ["React", "JavaScript", "HTML", "CSS", "Vercel"],
        live: "https://slow-sips-cafe.vercel.app/",
        github: "https://github.com/Decker7/slow-sips-cafe"
    },
    {
        title: "Barber Shop",
        description: "A professional, aesthetically-designed website for a local barber shop. It includes service descriptions, business hours, and contact information.",
        stack: ["React", "JavaScript", "HTML", "CSS", "Vercel"],
        live: "https://afiq-barber-website.vercel.app/",
        github: "https://github.com/Decker7/afiq-barber-website"
    }
];

export const education = [
    {
        institution: "Universiti Malaysia Pahang Al-Sultan Abdullah",
        degree: "Bachelor of Computer Science (Software Engineering) with Honours",
        duration: "October 2021 - August 2025",
        cgpa: "3.53",
        note: "Specializes in software engineering. Receiving scholarship from Yayasan Terengganu."
    },
    {
        institution: "Universiti Teknologi Mara Kampus Dengkil",
        degree: "Foundation of Engineering",
        duration: "June 2020 - March 2021",
        cgpa: "3.78",
        note: "Focus on key subjects such as Mathematics, Chemistry, Computing, Physics, English, and Islamic Worldview."
    },
    {
        institution: "Sekolah Menengah Imtiaz Yayasan Terengganu Besut",
        degree: "Sijil Pelajaran Malaysia (SPM)",
        duration: "Januari 2015 - December 2019",
        results: "6A 2A- 3B+ 1B",
        note: "Focus on Science and Islamic Co-curriculum."
    }
];

export const gear = {
    hardware: ["Macbook Pro M4 Pro 2024", "MX Master 4 Mouse", "Edifier Headphone"],
    software: ["VS Code", "Vercel"]
};
