import { BoxOptions } from "../types/global";

export const defaultBoxOptions: BoxOptions = {
    width: process.stdout.columns || 80,
    padding: 2,
    margin: 1,
    align: "left",
};

export const center = (str: string, width = process.stdout.columns || 80): string => {
    const contentWidth = print_width(str);
    const availableSpace = Math.max(width, contentWidth);
    const pad_left = Math.max(0, Math.floor((availableSpace - contentWidth) / 2));
    const pad_right = Math.max(0, availableSpace - contentWidth - pad_left);
    return " ".repeat(pad_left) + str + " ".repeat(pad_right);
};

export const print_width = (str: string): number => {
    str = remove_ansi(str);
    let double = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.codePointAt(i)! > 255) {
            double++;
        }
    }
    return str.length + double;
};

export const remove_ansi = (str: string): string => {
    return str.replace(/\u001b\[\d+m/g, "");
};

export const box = (content: string, options: BoxOptions = defaultBoxOptions) => {
    const { width = process.stdout.columns || 80, padding = 2, margin = 1 } = options;
    const line_width = width - padding * 2 - 2; // Subtract padding and border characters
    const lines = content.split("\n");

    // Use Unicode box-drawing characters for a more professional look
    const topBorder = `┌${"─".repeat(width - 2)}┐`;
    const bottomBorder = `└${"─".repeat(width - 2)}┘`;

    let output: string[] = [topBorder];

    // Add top margin
    for (let i = 0; i < margin; i++) {
        output.push(`│${" ".repeat(width - 2)}│`);
    }

    for (const line of lines) {
        if (line.trim() === "") {
            output.push(`│${" ".repeat(width - 2)}│`);
            continue;
        }

        const splitLines = split_line(line, line_width);
        for (const splitLine of splitLines) {
            const visibleWidth = print_width(splitLine);
            const padding = line_width - visibleWidth;
            output.push(`│ ${splitLine}${" ".repeat(Math.max(0, padding))} │`);
        }
    }

    // Add bottom margin
    for (let i = 0; i < margin; i++) {
        output.push(`│${" ".repeat(width - 2)}│`);
    }

    output.push(bottomBorder);
    return output.join("\n");
};

export const split_line = (str: string, width: number = process.stdout.columns): string[] => {
    // Remove ANSI escape sequences for width calculation
    const cleanStr = remove_ansi(str);

    // If the string is shorter than the width, return it as-is
    if (print_width(cleanStr) <= width) {
        return [str];
    }

    const lines: string[] = [];
    let currentLine = "";
    let currentWidth = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const charWidth = char.codePointAt(0)! > 255 ? 2 : 1;

        // Check for ANSI escape sequences
        const ansiMatch = str.substring(i).match(/^\u001B\[[0-9;]*m/);
        if (ansiMatch) {
            currentLine += ansiMatch[0];
            i += ansiMatch[0].length - 1;
            continue;
        }

        // If adding this character would exceed width, start a new line
        if (currentWidth + charWidth > width) {
            lines.push(currentLine);
            currentLine = "";
            currentWidth = 0;
        }

        currentLine += char;
        currentWidth += charWidth;
    }

    // Add the last line if not empty
    if (currentLine) {
        lines.push(currentLine);
    }

    return lines;
};
