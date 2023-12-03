// Lib
import {
    GITHUB_LINK,
    LINKEDIN_LINK,
    TWITTER_LINK,
    WEBSITE_URL,
} from "@/lib/constants";

export const JSONLD = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ali Abbasov",
    jobTitle: "Full Stack Web Developer",
    url: WEBSITE_URL,
    sameAs: [GITHUB_LINK, TWITTER_LINK, LINKEDIN_LINK],
    image: "https://aliabb.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile.8a952696.jpg&w=256&q=95",
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${WEBSITE_URL}/#website`,
    },
    "@graph": [
        {
            "@type": "WebSite",
            "@id": `${WEBSITE_URL}/#website`,
            url: `${WEBSITE_URL}`,
        },
        {
            "@type": "WebPage",
            "@id": `${WEBSITE_URL}/blog/#website`,
            url: `${WEBSITE_URL}/blog`,
            isPartOf: {
                "@id": `${WEBSITE_URL}/#website`,
            },
        },
    ],
};

export const ROOTKEYWORDS = [
    "Ali Abbasov",
    "Full Stack Web Developer",
    "aliabb01",
];
