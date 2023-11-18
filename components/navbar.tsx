import Link from "next/link";

import { links } from "@/lib/data";

export default function Navbar() {
    return (
        <nav className="z-[999] flex justify-center py-5">
            {links.map((link) => (
                <div key={link.name} className="mx-3">
                    <Link href={link.path}>{link.name}</Link>
                </div>
            ))}
        </nav>
    );
}
