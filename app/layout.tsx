import type { Metadata } from "next";
import { Outfit } from "next/font/google";

// Styles
import "./globals.css";

// Providers
import { Providers } from "@/app/providers";

// Components
import { Navbar, Footer, GoogleAnalytics } from "@/components";

// Toast
import { Toaster } from "react-hot-toast";

// Constants
import { WEBSITE_URL } from "@/lib/constants";

const outfit = Outfit({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        template: "%s | Ali Abbasov",
        default: "Portfolio | Ali Abbasov",
    },
    description:
        "Ali Abbasov is a full stack web developer with over 4 years of experience.",
    icons: {
        icon: "/favicon.ico",
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: WEBSITE_URL,
    },
    verification: {
        google: "niScX4JYveit46wC1LTfuJb0qx7DUiiDnGPwtce7VGo",
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
                className={`${outfit.className} bg-slate-100 text-gray-950 relative min-h-screen`}
            >
                <Providers>
                    <Navbar />
                    <div className="min-h-screen">{children}</div>
                    <Footer />

                    {/* Toast */}
                    <Toaster position="top-right" />

                    {/* Analytics */}
                    <GoogleAnalytics />
                </Providers>
            </body>
        </html>
    );
}
