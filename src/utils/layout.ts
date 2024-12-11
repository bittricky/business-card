import { BoxOptions } from "../types/global";

export const defaultBoxOptions: BoxOptions = {
    width: process.stdout.columns,
    padding: 2,
    margin: 1,
    align: "left",
};

export const center = (str: string, width = process.stdout.columns): string => {
    const pad_left = Math.floor((width - print_width(str)) / 2);
    const pad_right = width - print_width(str) - pad_left;
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

export const box = (content: string) => {
    const console_width = process.stdout.columns || 80;
    const line_width = console_width - 4;
    const lines = content.split("\n");

    let output = "#".repeat(console_width) + "\n";

    for (const line of lines) {
        const splitted = split_line(line, line_width);

        for (let i = 0; i < splitted.length; i++) {
            output +=
                "# " + splitted[i] + " ".repeat(line_width - print_width(splitted[i])) + " #\n";
        }
    }

    output += "#".repeat(console_width);

    return output;
};
