import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

// Providers
import { Providers } from "@/app/providers";

// Components
import { Footer, Navbar } from "@/components";

// Toast
import { Toaster } from "react-hot-toast";

const sourceSansPro = Source_Sans_3({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        template: "Ali Abbasov | %s",
        default: "Ali Abbasov | Portfolio",
    },
    description:
        "Ali Abbasov is a full stack web developer with over 4 years of experience.",
    robots: {
        index: true,
        follow: true,
    },
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
                    <div className="min-h-screen">{children}</div>
                    <Footer />

                    <Toaster position="top-right" />
                </Providers>
            </body>
        </html>
    );
}
