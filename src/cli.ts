#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

void yargs(hideBin(process.argv))
    .command("$0", "Display the business card", {}, async () => {
        //TODO: add display card - 12/11/2024
    })
    .option("no-color", {
        type: "boolean",
        description: "Disable colors in output",
        default: false,
    })
    .help()
    .parse();
