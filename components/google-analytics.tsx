"use client";

import Script from "next/script";

import * as gtag from "@/lib/gtag";

export default function GoogleAnalytics() {
    return (
        <>
            {/* Enable Google Analytics in production only */}
            {process.env.NODE_ENV === "production" && (
                <>
                    <Script
                        strategy="lazyOnLoad"
                        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
                    />
                    <Script
                        id="gtag-init"
                        strategy="lazyOnLoad"
                        dangerouslySetInnerHTML={{
                            __html: gtag.DATALAYER,
                        }}
                    />
                </>
            )}
        </>
    );
}
