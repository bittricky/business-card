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
    return "-".repeat(50);
}

function generateCardContent(): string {
    const sections = [
        "",
        ...generateHeader(),
        generateDivider(),
        "",
        ...generateSocial(),
        generateDivider(),
        "",
        ...generateSkills(),
        generateDivider(),
        "",
        ...generateEducation(),
        generateDivider(),
        "",
        ...generateFooter(),
    ];

    return box(sections.join("\n"), { width: 80 });
}

export async function displayCard(): Promise<void> {
    try {
        const cardContent = generateCardContent();
        await typingLines([cardContent], {
            charDelay: 2, // Fast typing for individual characters
            lineDelay: 50, // Slight pause between lines
            skipAnimation: false,
        });
    } catch (error) {
        console.error("Error displaying card:", error);
        throw error;
    }
}
