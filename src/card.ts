// Utils
import { box } from "./utils/layout.js";
import { typingLines } from "./utils/animation.js";

// Sections
import { generateHeader } from "./sections/header.js";
import { generateSocial } from "./sections/social.js";
import { generateSkills } from "./sections/skills.js";
import { generateEducation } from "./sections/education.js";
import { generateFooter } from "./sections/footer.js";

function generateDivider(): string {
    return "-".repeat(50); // The box function will extend this to full width
}

function generateCardContent(): string {
    const divider = generateDivider();

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

    return box(sections.join("\n"), { width: 80 });
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
