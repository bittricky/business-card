import stripAnsi from "strip-ansi";
import { BoxOptions } from "../types/global";

export const defaultBoxOptions: BoxOptions = {
    padding: 2,
    margin: 1,
    align: "left",
};

const TOTAL_PADDING = 4; // 2 for border + 2 for padding on each side

export const centerHeader = (str: string, width = process.stdout.columns || 80): string => {
    const visibleStr = stripAnsi(str);
    const contentWidth = print_width(visibleStr);
    const availableWidth = width - TOTAL_PADDING; // Account for borders and padding
    const padLeft = Math.floor((availableWidth - contentWidth) / 2);
    return " ".repeat(Math.max(0, padLeft)) + str;
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
    return [...str].reduce((width, char) => width + (char.codePointAt(0)! > 255 ? 2 : 1), 0);
};

export const remove_ansi = (str: string): string => {
    return str.replace(/\u001b\[\d+m/g, "");
};

export const box = (content: string, options: BoxOptions = defaultBoxOptions) => {
    const { width = process.stdout.columns || 80, padding = 2, margin = 1 } = options;
    const lines = content.split("\n");

    // Use hash characters for borders as shown in the image
    const border = "#".repeat(width);
    const divider = "#" + "-".repeat(width - 2) + "#";

    let output: string[] = [border];

    // Add top margin
    for (let i = 0; i < margin; i++) {
        output.push("#" + " ".repeat(width - 2) + "#");
    }

    for (const line of lines) {
        if (line.trim() === "") {
            output.push("#" + " ".repeat(width - 2) + "#");
            continue;
        }

        // Check if line is a divider (contains only dashes or equal signs)
        if (/^[-=]+$/.test(remove_ansi(line))) {
            output.push(divider);
            continue;
        }

        const visibleWidth = print_width(line);
        const remainingSpace = width - 2 - visibleWidth;
        const leftPad = padding;
        const rightPad = Math.max(0, remainingSpace - padding);
        output.push("#" + " ".repeat(leftPad) + line + " ".repeat(rightPad) + "#");
    }

    // Add bottom margin
    for (let i = 0; i < margin; i++) {
        output.push("#" + " ".repeat(width - 2) + "#");
    }

    output.push(border);
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
