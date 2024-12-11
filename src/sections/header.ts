import { theme } from "../config/theme.js";
import { profile } from "../config/profile.js";
import { center } from "../utils/layout.js";

export function generateHeader(): string[] {
    return [
        "",
        center(`${theme.heading("Hey There, I'm")} ${theme.special.title(profile.basics.name)}!`),
        center(`${theme.text.primary("Website:")} ${theme.links.primary(profile.basics.website)}`),
        "",
    ];
}