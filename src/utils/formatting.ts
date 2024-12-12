import { theme } from "../config/theme.js";

// Constants for layout
const CONTENT_WIDTH = 76; // 80 (box width) - 4 (border and padding)
const PLATFORM_WIDTH = 8;
const URL_WIDTH = CONTENT_WIDTH - PLATFORM_WIDTH - 3; // -3 for separator and spaces
const TECH_NAME_WIDTH = 15;
const TECH_DESC_WIDTH = CONTENT_WIDTH - TECH_NAME_WIDTH - 3; // -3 for separator and spaces

export const formatSection = (title: string): string => {
    return theme.text.primary(title.padEnd(CONTENT_WIDTH));
};

export const formatSkillsIntro = (colorizedLanguages: string): string => {
    const prefix = "I mainly write programs in: ";
    //TODO: dynamically calculate padding that will be repeated
    return theme.text.primary(prefix) + colorizedLanguages + " ".repeat(9);
};

export const formatLink = (platform: string, url: string): string => {
    const formattedPlatform = theme.text.secondary(platform.padEnd(PLATFORM_WIDTH));
    const separator = theme.text.muted("|");
    const formattedUrl = theme.links.primary(url.padEnd(URL_WIDTH));
    return `${formattedPlatform} ${separator} ${formattedUrl}`;
};

export const formatTechnology = (name: string, description: string): string => {
    const formattedName = theme.text.secondary(name.padEnd(TECH_NAME_WIDTH));
    const separator = theme.text.muted("-");
    const formattedDesc = theme.text.muted(description.padEnd(TECH_DESC_WIDTH));
    return `${formattedName} ${separator} ${formattedDesc}`;
};

export const formatEducation = (degree: string, school: string, period: string): string => {
    const formattedDegree = theme.text.secondary(degree.padEnd(CONTENT_WIDTH));
    const formattedSchool = theme.text.secondary(school.padEnd(CONTENT_WIDTH));
    const formattedPeriod = theme.dates(period.padEnd(CONTENT_WIDTH));
    return `${formattedDegree}\n${formattedSchool}\n${formattedPeriod}`;
};

export const formatDivider = (): string => {
    return "-".repeat(CONTENT_WIDTH);
};
