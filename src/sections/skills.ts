import { theme } from "../config/theme.js";
import { profile } from "../config/profile.js";
import { formatTechnology } from "../utils/formatting.js";

export function generateSkills(): string[] {
    const { primary, technologies } = profile.skills;

    return [
        theme.text.primary(`I mainly create programs in ${primary.join(", ")}.`),
        "",
        theme.text.primary("I have experience in developing applications using:"),
        ...technologies.map((tech) => formatTechnology(tech.name, tech.description)),
        "",
    ];
}
