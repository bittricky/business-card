export const sleep = (time: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, time));
};

export const typing = async (text: string, delay: number = 1): Promise<void> => {
    const characters = delay >= 1 ? 1 : Math.max(1, Math.floor(1 / delay));

    for (let i = 0; i < text.length; i += characters) {
        const chunk = text.substring(i, i + characters);
        process.stdout.write(chunk);
        await sleep(delay);
    }
};

export const typingLines = async (lines: string[], delay: number = 1): Promise<void> => {
    for (const line of lines) {
        await typing(line + "\n", delay);
    }
};
