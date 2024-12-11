import { theme } from "../config/theme";
import { profile } from "../config/profile";
import { center } from "../utils/layout";

export function generateFooter(): string[] {
    return [
        center(theme.special.accent(profile.footer.thankYouMessage)),
        center(theme.special.accent(profile.footer.callToAction)),
        "",
    ];
}
