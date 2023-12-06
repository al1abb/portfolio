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
                        strategy="lazyOnload"
                        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
                    />
                    <Script
                        id="gtag-init"
                        strategy="lazyOnload"
                        dangerouslySetInnerHTML={{
                            __html: gtag.DATALAYER,
                        }}
                    />
                </>
            )}
        </>
    );
}
