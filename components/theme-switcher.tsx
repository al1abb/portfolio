"use client";

import { useTheme } from "next-themes";

import { Switch } from "@nextui-org/react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    return (
        <>
            <Switch
                defaultSelected={theme === "dark"}
                onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
                size="lg"
                thumbIcon={({ isSelected, className }) =>
                    isSelected ? (
                        <FaMoon className={`className text-blue-700`} />
                    ) : (
                        <FaSun className={`className text-yellow-500`} />
                    )
                }
            ></Switch>
        </>
    );
}
