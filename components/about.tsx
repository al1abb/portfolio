import React from "react";

// Components
import { SectionHeading } from "@/components";

export default function About() {
    return (
        <section id="about" className="max-w-[45rem] text-center leading-8">
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ducimus quas iste ipsa iure magni molestiae sint. Dicta optio
                iure odio.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                minus, repellendus expedita dolores quod eaque. Quisquam facilis
                natus ullam id accusamus deleniti porro aliquid aut maxime
                asperiores, ipsa quis fugit.
            </p>
        </section>
    );
}
