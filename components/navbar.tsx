"use client";

import { useState } from "react";

import Link from "next/link";

// Data
import { links } from "@/lib/data";

// NextUI
import {
    Navbar as NextUINavbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Button,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
} from "@nextui-org/react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <NextUINavbar
            isBlurred
            shouldHideOnScroll
            className="z-[999] sm:rounded-xl sm:w-[70%] mx-auto"
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
            <NavbarContent></NavbarContent>

            <NavbarMenu>
                {links.map((link, index) => (
                    <NavbarMenuItem key={`${link.name}-${index}`}>
                        <Link className="" href={link.path}>
                            {link.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </NextUINavbar>
    );
}
