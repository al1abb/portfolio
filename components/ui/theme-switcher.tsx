"use client";

import { useTheme } from "next-themes";

// NextUI
import { Switch } from "@nextui-org/react";

// Icons
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    return (
        <Switch
            size="lg"
            isSelected={theme == "dark" ? true : false}
            onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            thumbIcon={({ isSelected, className }) =>
                isSelected ? (
                    <FaMoon className={`className text-blue-700`} />
                ) : (
                    <FaSun className={`className text-yellow-500`} />
                )
            }
        />
    );
}
