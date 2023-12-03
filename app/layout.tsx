import type { Metadata } from "next";
import { Outfit } from "next/font/google";

// Styles
import "./globals.css";

// Favicon
import Favicon from "@/public/assets/favicon/favicon.ico";

// Providers
import { Providers } from "@/app/providers";

// React Hot Toast
import { Toaster } from "react-hot-toast";

// Components
import { Navbar, Footer, GoogleAnalytics } from "@/components";

// Lib
import { ROOTKEYWORDS, JSONLD } from "@/lib/seo";
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
    keywords: ROOTKEYWORDS,
    icons: {
        icon: Favicon.src,
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
            <head>
                <script
                    type="application/ld+json"
                    id="json-ld"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }}
                />
            </head>
            <body
                className={`${outfit.className} bg-slate-100 text-gray-950 relative min-h-screen dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
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
