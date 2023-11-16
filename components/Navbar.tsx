import { links } from "@/lib/data";
import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
    return (
        <nav className="z-[999] flex justify-center py-5">
            {links.map((link) => (
                <div key={link.name} className="mx-3">
                    <Link href={link.path}>{link.name}</Link>
                </div>
            ))}
        </nav>
    );
};

export default Navbar;
