import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    darkMode: "class",
    plugins: [
        nextui({
            addCommonColors: true,
            themes: {
                light: {
                    colors: {
                        default: {
                            DEFAULT: "#000000",
                            foreground: "#ffffff",
                        },
                        primary: {
                            DEFAULT: "#000000",
                            foreground: "#ffffff", // Text color for primary background
                        },
                        secondary: {
                            DEFAULT: "#ffffff",
                            foreground: "#000000", // Text color for secondary background
                        },
                        danger: {
                            DEFAULT: "#ff4444", // Lighter red
                            foreground: "#ffffff", // Text color for danger background
                        },
                        success: {
                            DEFAULT: "#4caf50", // A lighter shade of green
                            foreground: "#000000", // Text color for success background
                        },
                        warning: {
                            DEFAULT: "#ff9800", // Orange for warning
                            foreground: "#000000", // Text color for warning background
                        },
                    },
                },
            },
        }),
    ],
};
export default config;
