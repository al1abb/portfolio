"use client";

import { useState } from "react";

// Next
import Link from "next/link";

// NextUI
import {
    Navbar as NextUINavbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
} from "@nextui-org/react";

// Components
import { ThemeSwitcher } from "@/components";

// Data
import { links } from "@/lib/data";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <NextUINavbar
            isBlurred
            shouldHideOnScroll
            className="z-[999] sm:rounded-xl sm:w-[70%] max-w-[90rem] mx-auto dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
            </NavbarContent>
            <NavbarContent className="hidden sm:flex" justify="start">
                {links.map((link) => (
                    <NavbarItem key={link.name}>
                        <Link href={link.path}>{link.name}</Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent justify="end">
                <ThemeSwitcher />
            </NavbarContent>

            <NavbarMenu>
                {links.map((link, index) => (
                    <NavbarMenuItem key={`${link.name}-${index}`}>
                        <Link
                            className=""
                            href={link.path}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </NextUINavbar>
    );
}
