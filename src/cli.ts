#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { displayCard } from "./card";

async function main() {
    try {
        await yargs(hideBin(process.argv))
            .command("$0", "Display the business card", {}, async () => {
                await displayCard();
                process.exit(0);
            })
            .option("no-color", {
                type: "boolean",
                description: "Disable colors in output",
                default: false,
            })
            .help()
            .parse();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
