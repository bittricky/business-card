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

export const box = (content: string) => {
    const console_width = process.stdout.columns || 80;
    const line_width = console_width - 4; // Account for borders and padding
    const lines = content.split("\n");
    const border = "#".repeat(console_width);

    let output = border + "\n";

    for (const line of lines) {
        if (line.trim() === "") {
            output += `# ${" ".repeat(line_width)} #\n`;
            continue;
        }

        const splitLines = split_line(line, line_width);
        for (const splitLine of splitLines) {
            const visibleWidth = print_width(splitLine);
            const padding = line_width - visibleWidth;
            output += `# ${splitLine}${" ".repeat(Math.max(0, padding))} #\n`;
        }
    }

    output += border;
    return output;
};

export const split_line = (str: string, width: number = process.stdout.columns): string[] => {
    const lines = [];
    let count = 0;
    let last_escape = "";

    for (let i = 0; i < str.length; i++) {
        const matches = [...str.substring(i).matchAll(/\u001B\[[0-9;]*m/g)];

        if (lines[Math.floor(count / width)] === undefined) {
            lines[Math.floor(count / width)] = last_escape + "";
        }

        if (matches.length && matches[0].index === 0) {
            last_escape = str.substring(i, i + matches[0].index);
            lines[Math.floor(count / width)] += last_escape;
            i += last_escape.length - 1;
        } else {
            const char = str.substring(i, i + 1);
            lines[Math.floor(count / width)] += char;
            count += char.codePointAt(0)! > 255 ? 2 : 1;
        }

        if (count > 0 && count % width === 0) {
            lines[Math.floor((count - 1) / width)] += "\u001B[0m";
        }
    }

    if (lines[lines.length - 1] && print_width(lines[lines.length - 1]) > width) {
        lines.pop();
    }

    return lines;
};
