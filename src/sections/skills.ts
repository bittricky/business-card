import { theme } from "../config/theme.js";
import { profile } from "../config/profile.js";
import { formatTechnology, formatSection } from "../utils/formatting.js";

export function generateSkills(): string[] {
    const { primary, technologies } = profile.skills;

    return [
        formatSection(`I mainly write programs in ${primary.join(", ")}.`),
        "\n",
        formatSection("I have experience developing applications using:"),
        ...technologies.map((tech) => formatTechnology(tech.name, tech.description)),
        "",
    ];
}
