import { theme } from "../config/theme.js";
import { profile } from "../config/profile.js";
import { center } from "../utils/layout.js";

export function generateFooter(): string[] {
    return [
        center(theme.special.accent(profile.footer.thankYouMessage), 93),
        center(theme.special.accent(profile.footer.callToAction), 93),
        "",
    ];
}
