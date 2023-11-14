import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

// Providers
import { Providers } from "@/app/providers";

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
                className={`${sourceSansPro.className} bg-slate-100 text-gray-950 relative min-h-screen`}
            >
                <Providers>
                    <Navbar />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
