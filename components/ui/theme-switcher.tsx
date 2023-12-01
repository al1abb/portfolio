"use client";

import { useEffect, useState } from "react";

// Next themes
import { useTheme } from "next-themes";

// NextUI
import { Skeleton, Switch } from "@nextui-org/react";

// Icons
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    // ? Without this mounted state check the theme switcher won't work as it becomes undefined on first render
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <Skeleton className="rounded-full w-14 h-8 mr-2" />;

    return (
        <Switch
            size="lg"
            isSelected={theme === "dark" ? true : false}
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
