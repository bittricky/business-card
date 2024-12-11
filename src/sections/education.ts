import { theme } from "../config/theme.js";
import { profile } from "../config/profile.js";
import { formatEducation } from "../utils/formatting.js";

export function generateEducation(): string[] {
    return [
        theme.text.primary("My Educations"),
        ...profile.education.map((edu) =>
            formatEducation(
                edu.degree,
                edu.institution,
                `(${edu.period.start} - ${edu.period.end})`,
            ),
        ),
        "",
    ];
}
