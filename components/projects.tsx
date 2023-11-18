import React from "react";

import Image from "next/image";

// NextUI
import { Card, CardBody, CardHeader, Chip } from "@nextui-org/react";

// Components
import { SectionHeading } from "@/components";

// Data
import { projects } from "@/lib/data";

// Types
import { ProjectType } from "@/types";

export default function Projects() {
    return (
        <section id="projects" className="">
            <SectionHeading>Projects</SectionHeading>

            <div className="flex flex-row flex-wrap gap-10">
                {projects.map((project) => (
                    <React.Fragment key={project.name}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}

function Project({ name, description, mainImage, tags }: ProjectType) {
    const projectCardBg = "bg-gradient-to-r from-gray-200 to-white";
    return (
        <section className="max-w-md mx-auto bg-gray-200 rounded-lg overflow-hidden shadow-md p-4">
            <div className="relative w-full">
                <Image
                    src={mainImage}
                    alt={`${name} Image`}
                    width={1000}
                    height={300}
                    quality={95}
                    className="rounded-lg shadow-lg lg:h-60 sm:h-54"
                />
            </div>
            <div className="p-6">
                <h3 className="text-2xl font-semibold">{name}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <Chip
                            key={index}
                            className="bg-black/[0.7] uppercase tracking-wider"
                            size="sm"
                        >
                            {tag}
                        </Chip>
                    ))}
                </div>
            </div>
        </section>
    );
}
