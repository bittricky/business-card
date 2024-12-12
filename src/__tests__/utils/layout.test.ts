import { center, box } from "../../utils/layout.js";

describe("Layout Utils", () => {
    describe("center", () => {
        it("should center text within given width", () => {
            const text = "Hello";
            const width = 20;
            const result = center(text, width);

            // The result should be longer than the input text (due to padding)
            expect(result.length).toBe(width);

            // The text should be somewhere in the middle
            const leftPadding = result.indexOf("Hello");
            const rightPadding = result.length - (leftPadding + "Hello".length);

            // Left and right padding should be equal or differ by at most 1
            expect(Math.abs(leftPadding - rightPadding)).toBeLessThanOrEqual(1);
        });

        it("should handle text longer than width", () => {
            const text = "This is a very long text";
            const width = 10;
            const result = center(text, width);
            expect(result.length).toBeGreaterThanOrEqual(text.length);
        });
    });

    describe("box", () => {
        it("should create a box around content", () => {
            const content = "Test";
            const result = box(content);
            const lines = result.split("\n");

            // Should have top border, content, and bottom border
            expect(lines.length).toBeGreaterThanOrEqual(3);

            // All lines should be the same length
            const lineLength = lines[0].length;
            lines.forEach((line) => {
                expect(line.length).toBe(lineLength);
            });

            // Should contain the content
            expect(result).toContain("Test");
        });

        it("should handle multi-line content", () => {
            const content = "Line 1\nLine 2";
            const result = box(content);
            const lines = result.split("\n");

            // Should have more lines for multi-line content
            expect(lines.length).toBeGreaterThanOrEqual(4);
            expect(result).toContain("Line 1");
            expect(result).toContain("Line 2");
        });
    });
});
