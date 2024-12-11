import chalk from "chalk";

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
