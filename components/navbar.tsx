import Link from "next/link";

// Data
import { links } from "@/lib/data";
import {
    Navbar as NextUINavbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Button,
} from "@nextui-org/react";

export default function Navbar() {
    return (
        <NextUINavbar
            isBlurred
            shouldHideOnScroll
            className="z-[999] rounded-lg"
        >
            <NavbarContent className="hidden sm:flex">
                {links.map((link) => (
                    <NavbarItem key={link.name}>
                        <Link href={link.path}>{link.name}</Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
        </NextUINavbar>
    );
}
