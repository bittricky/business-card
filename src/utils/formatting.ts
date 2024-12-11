import { theme } from "../config/theme.js";

export const formatSection = (title: string): string => {
    return theme.text.primary(title);
};

export const formatLink = (text: string, url: string): string => {
    return `${theme.links.highlight(text)} | ${theme.links.primary(url)}`;
};

export const formatTechnology = (name: string, description: string): string => {
    const padding = " ".repeat(Math.max(0, 15 - name.length));
    return `${theme.links.highlight(name)}${padding}- ${theme.text.secondary(description)}`;
};

export const formatEducation = (degree: string, school: string, period: string): string => {
    return `${theme.special.title(degree)}, ${theme.text.primary(school)} ${theme.dates(period)}`;
};

export const formatDivider = (width: number = 40): string => {
    return theme.divider.repeat(width);
};
