import yargs from "yargs";
import { hideBin } from "yargs/helpers";

describe("CLI", () => {
    let originalArgv: string[];
    let mockExit: jest.SpyInstance;
    let mockConsoleLog: jest.SpyInstance;

    beforeEach(() => {
        originalArgv = process.argv;
        mockExit = jest.spyOn(process, "exit").mockImplementation((code) => {
            throw new Error(`Mock exit with code: ${code}`);
        });
        mockConsoleLog = jest.spyOn(console, "log").mockImplementation(() => {});
    });

    afterEach(() => {
        process.argv = originalArgv;
        mockExit.mockRestore();
        mockConsoleLog.mockRestore();
    });

    it("should handle --help flag", async () => {
        process.argv = ["node", "cli.js", "--help"];
        const parser = yargs(hideBin(process.argv)).help().version();

        try {
            await parser.parse();
        } catch (err) {
            expect(mockExit).toHaveBeenCalledWith(0);
        }
    });

    it("should handle --version flag", async () => {
        process.argv = ["node", "cli.js", "--version"];
        const parser = yargs(hideBin(process.argv)).version();

        try {
            await parser.parse();
        } catch (err) {
            expect(mockExit).toHaveBeenCalledWith(0);
        }
    });

    it("should handle --no-color flag", async () => {
        process.argv = ["node", "cli.js", "--no-color"];
        const parser = yargs(hideBin(process.argv)).boolean("color").default("color", true);

        const argv = await parser.parse();
        expect(argv.color).toBe(false);
    });
});
