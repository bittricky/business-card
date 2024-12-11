import { theme } from "../config/theme";
import { profile } from "../config/profile";
import { formatEducation } from "../utils/formatting";

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
