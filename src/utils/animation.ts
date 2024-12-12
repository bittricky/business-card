import { TypingOptions } from "../types/global";

const defaultOptions: TypingOptions = {
    charDelay: 5, // Milliseconds between each character
    lineDelay: 100, // Milliseconds between each line
    skipAnimation: false,
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const typing = async (
    text: string,
    options: TypingOptions = defaultOptions,
): Promise<void> => {
    try {
        if (options.skipAnimation) {
            process.stdout.write(text);
            return;
        }

        const chars = text.split("");
        for (const char of chars) {
            process.stdout.write(char);
            if (char === "\n") {
                await sleep(options.lineDelay || defaultOptions.lineDelay!);
            } else {
                await sleep(options.charDelay || defaultOptions.charDelay!);
            }
        }
    } catch (error) {
        console.error("Error in typing:", error);
        throw error;
    }
};

export const typingLines = async (
    lines: string[],
    options: TypingOptions = defaultOptions,
): Promise<void> => {
    try {
        if (options.skipAnimation) {
            lines.forEach((line) => process.stdout.write(line + "\n"));
            return;
        }

        for (const line of lines) {
            await typing(line + "\n", {
                ...options,
                lineDelay: 0, // Don't add extra delay between lines when typing individual chars
            });
            // Add delay between lines
            await sleep(options.lineDelay || defaultOptions.lineDelay!);
        }
    } catch (error) {
        console.error("Error in typingLines:", error);
        throw error;
    }
};
