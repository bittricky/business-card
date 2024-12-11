#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { displayCard } from "./card.js";

const run = async () => {
    try {
        console.log("CLI script is running...");
        await yargs(hideBin(process.argv))
            .command("$0", "Display the business card", {}, async () => {
                try {
                    console.log("Displaying business card...");
                    await displayCard();
                    // Force process exit after completion
                    setTimeout(() => process.exit(0), 100);
                } catch (error) {
                    console.error("Command error:", error);
                    process.exit(1);
                }
            })
            .option("no-color", {
                type: "boolean",
                description: "Disable colors in output",
                default: false,
            })
            .help()
            .parse();
    } catch (error) {
        console.error("Yargs error:", error);
        process.exit(1);
    }
};

run().catch((error) => {
    console.error("Runtime error:", error);
    process.exit(1);
});
