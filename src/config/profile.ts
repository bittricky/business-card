import { ProfileConfig } from "../types/global";

export const profile: ProfileConfig = {
    basics: {
        name: "Mitul Patel",
        title: "Programmer | Technologist",
        email: "me@mitulpa.tel",
        website: "https://mitulpa.tel",
    },
    social: {
        github: "https://github.com/bittricky",
        mastodon: "https://mastodon.social/@bittricky",
        email: "me@mitulpa.tel",
    },
    skills: {
        primary: ["TypeScript", "JavaScript", "Python", "C#", "SQL"],
        technologies: [
            {
                name: "Node.js",
                description: "A JavaScript Runtime",
            },
            {
                name: "React",
                description: "A Modern JavaScript Library for UI Development",
            },
            {
                name: "Electron",
                description: "Building Cross-Platform Desktop Applications",
            },
            {
                name: "Docker",
                description: "Containerization for Software Deployment",
            },
            {
                name: "Git",
                description: "Version Control System",
            },
            {
                name: "GraphQL",
                description: "A Query Language for APIs",
            },
            {
                name: "MongoDB",
                description: "A NoSQL Database",
            },
            {
                name: "Supabase",
                description: "Cloud-based Tools (Authentication, Database, etc.)",
            },
            {
                name: "Google Cloud Platform",
                description: "Cloud Computing Services",
            },
        ],
    },
    education: [
        {
            degree: "B.Sc. in Management Information Systems",
            institution: "Rochester Institute of Technology",
            period: {
                start: 2009,
                end: 2013,
            },
        },
    ],
    footer: {
        thankYouMessage: "Thank you for stopping by!",
        callToAction: "Feel free to reach out via my social links or email!",
    },
} as const;
