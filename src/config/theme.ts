import chalk from "chalk";

// Language-specific colors
const languages = {
    typescript: chalk.hex("#2b7489"),
    javascript: chalk.hex("#f1e05a"),
    python: chalk.hex("#3572A5"),
    csharp: chalk.hex("#178600"),
    sql: chalk.hex("#e38c00"),
} as const;

export const theme = {
    border: chalk.hex("#3B3A5A"), // Dark purple border
    text: {
        primary: chalk.hex("#FFD700"), // Bright yellow for primary text
        secondary: chalk.hex("#A9A3FF"), // Soft purple for secondary text
        muted: chalk.hex("#6B6896"), // Muted purple-gray
    },
    heading: chalk.hex("#C8A2C8"), // Light lavender for headings
    links: {
        primary: chalk.hex("#FFD700"), // Bright yellow for primary links
        highlight: chalk.hex("#D8BFFF"), // Light purple for highlights
    },
    dates: chalk.hex("#FFD700"), // Bright yellow for dates
    divider: chalk.hex("#3B3A5A")("-"), // Dark purple divider
    special: {
        title: chalk.hex("#C8A2C8"), // Light lavender for special titles
        accent: chalk.hex("#FFD700"), // Bright yellow for accents
    },
    languages,
} as const;
