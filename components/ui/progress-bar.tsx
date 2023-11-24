"use client";

import React, { useEffect, useState } from "react";

export default function ProgressBar() {
    const [scrollProgress, setScrollProgress] = useState(0);

    const calculateScrollProgress = () => {
        const windowHeight = window.innerHeight;
        const documentHeight =
            document.documentElement.scrollHeight - windowHeight;
        const scrollPosition = window.scrollY;

        const progress = (scrollPosition / documentHeight) * 100;
        setScrollProgress(progress);
    };

    useEffect(() => {
        // Attach event listener on mount
        window.addEventListener("scroll", calculateScrollProgress);

        // Detach event listener on unmount
        return () => {
            window.removeEventListener("scroll", calculateScrollProgress);
        };
    }, []);

    return (
        <div
            className="bg-green-600 fixed top-0 left-0 h-[5px] z-[999] rounded-r-md"
            style={{
                width: `${scrollProgress}%`,
            }}
        />
    );
}
