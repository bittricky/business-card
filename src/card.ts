// Utils
import { formatDivider } from "./utils/formatting.js";
import { box } from "./utils/layout.js";
import { typing, typingLines } from "./utils/animation.js";

// Sections
import { generateHeader } from "./sections/header.js";
import { generateSocial } from "./sections/social.js";
import { generateSkills } from "./sections/skills.js";
import { generateEducation } from "./sections/education.js";
import { generateFooter } from "./sections/footer.js";

// Layout
import { center } from "./utils/layout.js";

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
    try {
        const cardContent = generateCardContent();
        await typingLines([cardContent], 1);

        process.stdout.write("");
    } catch (error) {
        console.error("Error displaying card:", error);
        throw error;
    }
}
