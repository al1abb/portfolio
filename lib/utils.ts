// Reading time
import { readingTime } from "reading-time-estimator";

// Types
import { Post } from "@/types";

/**
 * Get the error message from an error
 * @param error - The error
 *
 * @returns {string} - The error message
 */
export function getErrorMessage(error: unknown): string {
    let message: string;

    if (error instanceof Error) {
        message = error.message;
    } else if (error && typeof error === "object" && "message" in error) {
        message = String(error.message);
    } else if (typeof error === "string") {
        message = error;
    } else {
        message = "Something went wrong";
    }

    return message;
}

/**
 * Turn a date string into a formatted date
 * @param dateString - The date string
 *
 * @returns {string} - The formatted date
 */
export function getFormattedDate(dateString: string): string {
    return new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
        new Date(dateString)
    );
}

/**
 * Calculate the difference in years between two dates
 * @param startDate - Given start date
 * @param endDate - Given end date
 *
 * @returns {number} - The difference in years
 */
export function calculateYearsDifference(
    startDate: Date,
    endDate: Date
): number {
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
    const timeDifference = endDate.getTime() - startDate.getTime();
    return Math.ceil(timeDifference / millisecondsInYear);
}

/**
 * Calculate the reading time of a blog post
 * @param content - Blog post content
 */
export async function calculateReadingTime(content: Post["content"]) {
    const ReactDOMServer = (await import("react-dom/server")).default;

    // ? Next line does not get rid of html markup
    const readTime = readingTime(ReactDOMServer.renderToStaticMarkup(content));

    return readTime;
}
