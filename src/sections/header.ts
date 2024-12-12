import { theme } from "../config/theme.js";
import { profile } from "../config/profile.js";
import { centerHeader } from "../utils/layout.js";

export function generateHeader(): string[] {
    return [
        "",
        centerHeader(
            `${theme.heading("Hey There, I'm ")}${theme.special.title(profile.basics.name)}!`,
            80
        ),
        centerHeader(
            `${theme.text.primary("Website:")} ${theme.links.primary(profile.basics.website)}`,
            80
        ),
        "",
    ];
}
