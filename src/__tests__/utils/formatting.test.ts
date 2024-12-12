import {
    formatSection,
    formatSkillsIntro,
    formatLink,
    formatDivider,
} from "../../utils/formatting.js";
import { CONTENT_WIDTH } from "../../utils/formatting.js";

describe("Formatting Utils", () => {
    describe("formatSection", () => {
        it("should format a section with proper padding", () => {
            const result = formatSection("Test Section");
            expect(result).toContain("Test Section");
            expect(result.length).toBeGreaterThan("Test Section".length); // Should include padding
        });
    });

    describe("formatSkillsIntro", () => {
        it("should combine prefix and languages with proper spacing", () => {
            const colorizedLanguages = "TypeScript JavaScript";
            const result = formatSkillsIntro(colorizedLanguages);
            expect(result).toContain("I mainly write programs in:");
            expect(result).toContain(colorizedLanguages);
        });
    });

    describe("formatLink", () => {
        it("should format social links correctly", () => {
            const platform = "GitHub";
            const url = "https://github.com/bittricky";
            const result = formatLink(platform, url);
            expect(result).toContain(platform);
            expect(result).toContain(url);
        });
    });

    describe("formatDivider", () => {
        it("should create a divider of correct length", () => {
            const result = formatDivider();
            expect(result.length).toBe(CONTENT_WIDTH);
            expect(result).toBe("-".repeat(CONTENT_WIDTH));
        });
    });
});
