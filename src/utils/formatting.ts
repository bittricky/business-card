import { theme } from "../config/theme";

export function formatSection(title: string): string {
    return theme.text.primary(title);
}

export function formatLink(text: string, url: string): string {
    return `${theme.links.highlight(text)} | ${theme.links.primary(url)}`;
}

export function formatTechnology(name: string, description: string): string {
    const padding = " ".repeat(Math.max(0, 15 - name.length));
    return `${theme.links.highlight(name)}${padding}- ${theme.text.secondary(description)}`;
}

export function formatEducation(degree: string, school: string, period: string): string {
    return `${theme.special.title(degree)}, ${theme.text.primary(school)} ${theme.dates(period)}`;
}

export function formatDivider(width: number = 40): string {
    return theme.divider.repeat(width);
}
