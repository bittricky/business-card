#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { displayCard } from "./card.js";
import open from "open";

//TODO: add env variables for urls - 03/19/2025
const run = async () => {
  try {
    await yargs(hideBin(process.argv))
      .command("$0", "Display the business card", {}, async () => {
        try {
          await displayCard();
          // Force process exit after completion
          setTimeout(() => process.exit(0), 100);
        } catch (error) {
          console.error("Command error:", error);
          process.exit(1);
        }
      })
      .strict()
      .command("resume", "Open resume in default browser", {}, async () => {
        try {
          await open("https://www.mitulpa.tel/mitul_patel_resume.pdf");
          process.exit(0);
        } catch (error) {
          console.error(
            "ERROR: Failed to open resume in default browser",
            error
          );
          process.exit(1);
        }
      })
      .command(
        "showcase",
        "Opens the showcase in default browser",
        {},
        async () => {
          try {
            await open("https://showcase.mitulpa.tel");
            process.exit(0);
          } catch (error) {
            console.error(
              "ERROR: Failed to open showcase in default browser",
              error
            );
            process.exit(1);
          }
        }
      )
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
