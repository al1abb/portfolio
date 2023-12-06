"use client";

import Script from "next/script";

import * as gtag from "@/lib/gtag";

export default function GoogleAnalytics() {
    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: gtag.DATALAYER,
                }}
            />
        </>
    );
}
