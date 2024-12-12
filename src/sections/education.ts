import { profile } from "../config/profile.js";
import { formatEducation, formatSection } from "../utils/formatting.js";

export function generateEducation(): string[] {
    return [
        formatSection("My Education:"),
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
