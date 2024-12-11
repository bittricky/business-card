#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import { displayCard } from "./card";

void yargs(hideBin(process.argv))
    .command("$0", "Display the business card", {}, async () => {
        await displayCard();
    })
    .option("no-color", {
        type: "boolean",
        description: "Disable colors in output",
        default: false,
    })
    .help()
    .parse();
