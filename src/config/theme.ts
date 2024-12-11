import chalk from "chalk";

export const theme = {
    border: chalk.hex("#0b1a36"), // Navy blue border
    text: {
        primary: chalk.hex("#ffff00"), // Bright yellow text
        secondary: chalk.hex("#6a0dad"), // Dark purple for secondary text
        muted: chalk.hex("#243b55"), // Muted navy blue
    },
    heading: chalk.hex("#6a0dad"), // Dark purple for headings
    links: {
        primary: chalk.hex("#ffff00"), // Bright yellow for primary links
        highlight: chalk.hex("#6a0dad"), // Dark purple for highlights
    },
    dates: chalk.hex("#0b1a36"), // Navy blue for dates
    divider: chalk.hex("#0b1a36")("━"), // Navy blue divider
    special: {
        title: chalk.hex("#ffff00"), // Bright yellow for titles
        accent: chalk.hex("#6a0dad"), // Dark purple for accents
    },
} as const;
