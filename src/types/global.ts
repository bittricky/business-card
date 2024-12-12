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

export interface BoxOptions {
    width?: number;
    padding?: number;
    margin?: number;
    align?: "left" | "center" | "right";
}

export interface ProfileConfig {
    basics: {
        name: string;
        title: string;
        website: string;
    };
    social: {
        github: string;
        mastodon: string;
        email: string;
    };
    skills: {
        primary: string[];
        technologies: Array<{
            name: string;
            description: string;
        }>;
    };
    education: Array<{
        degree: string;
        institution: string;
        period: {
            start: number;
            end: number;
        };
    }>;
    footer: {
        thankYouMessage: string;
        callToAction: string;
    };
}

export interface TypingOptions {
    charDelay?: number;
    lineDelay?: number;
    skipAnimation?: boolean;
}
