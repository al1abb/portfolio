import type { Metadata } from "next";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import "./globals.css";

// Components
import Navbar from "@/components/Navbar";

const sourceSansPro = Source_Sans_3({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Ali Abbasov | Portfolio",
    description:
        "Ali Abbasov is a full stack web developer with over 4 years of experience.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${sourceSansPro.className} bg-slate-50 text-gray-950 relative min-h-screen`}
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}
