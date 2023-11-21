/**
 * Get the error message from an error
 * @param error - The error
 *
 * @returns {string} - The error message
 */
export const getErrorMessage = (error: unknown): string => {
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
};

/**
 * Calculate the difference in years between two dates
 * @param startDate Given start date
 * @param endDate Given end date
 *
 * @returns {number} - The difference in years
 */
export const calculateYearsDifference = (
    startDate: Date,
    endDate: Date
): number => {
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
    const timeDifference = endDate.getTime() - startDate.getTime();
    return Math.ceil(timeDifference / millisecondsInYear);
};
