import { theme } from "../config/theme.js";
import { profile } from "../config/profile.js";
import { formatTechnology, formatSection, formatSkillsIntro } from "../utils/formatting.js";

function colorizeLanguage(lang: string): string {
    const colorMap: { [key: string]: any } = {
        TypeScript: theme.languages.typescript,
        JavaScript: theme.languages.javascript,
        Python: theme.languages.python,
        "C#": theme.languages.csharp,
        SQL: theme.languages.sql,
    };
    return colorMap[lang]?.(lang) || theme.text.primary(lang);
}

export function generateSkills(): string[] {
    const { primary, technologies } = profile.skills;

    const colorizedLanguages: string = primary.map((lang) => colorizeLanguage(lang)).join(", ");

    return [
        formatSkillsIntro(colorizedLanguages),
        "\n",
        formatSection("I have experience developing applications using:"),
        ...technologies.map((tech) => formatTechnology(tech.name, tech.description)),
        "",
    ];
}
