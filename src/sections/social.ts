import { theme } from "../config/theme.js";
import { profile } from "../config/profile.js";
import { formatLink, formatSection } from "../utils/formatting.js";

export function generateSocial(): string[] {
    return [
        formatSection("You Can Find Me On:"),
        "",
        formatLink("GitHub", profile.social.github),
        formatLink("Mastodon", profile.social.mastodon),
        formatLink("Email", profile.social.email),
        "",
    ];
}
