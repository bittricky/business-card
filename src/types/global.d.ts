export interface Period {
    start: number;
    end: number;
}

export interface Education {
    degree: string;
    institution: string;
    period: Period;
}

export interface Technology {
    name: string;
    description: string;
}

export interface ProfileConfig {
    basics: {
        name: string;
        title: string;
        email: string;
        website: string;
    };
    social: {
        github: string;
        mastodon: string;
        email: string;
    };
    skills: {
        primary: string[];
        technologies: Technology[];
    };
    education: Education[];
    footer: {
        thankYouMessage: string;
        callToAction: string;
    };
}
