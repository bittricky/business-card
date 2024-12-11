export const sleep = (time: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, time));
};

export const typing = async (text: string, delay: number = 1): Promise<void> => {
    const once = delay > 1 ? 1 : Math.floor(1 / delay);

    for (let i = 0; i < text.length; i++) {
        process.stdout.write(text.substring(i, i + once));
        await sleep(once * delay);
    }
};

export const typingLines = async (lines: string[], delay: number = 1): Promise<void> => {
    for (const line of lines) {
        await typing(line + "\n", delay);
    }
};
