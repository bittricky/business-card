// Utils
import { formatDivider } from "./utils/formatting";
import { box } from "./utils/layout";
import { typing, typingLines } from "./utils/animation";

// Sections
import { generateHeader } from "./sections/header";
import { generateSocial } from "./sections/social";
import { generateSkills } from "./sections/skills";
import { generateEducation } from "./sections/education";
import { generateFooter } from "./sections/footer";

// Layout
import { center } from "./utils/layout";

function generateCardContent(): string {
    const divider = center(formatDivider());

    const sections = [
        ...generateHeader(),
        divider,
        "",
        ...generateSocial(),
        divider,
        "",
        ...generateSkills(),
        divider,
        "",
        ...generateEducation(),
        divider,
        "",
        ...generateFooter(),
    ];

    return box(sections.join("\n"));
}

export async function displayCard(): Promise<void> {
    const cardContent = generateCardContent();
    await typingLines([cardContent], 1);
}
