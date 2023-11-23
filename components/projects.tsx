import React from "react";

// Components
import { SectionHeading, ProjectCard } from "@/components";

// Data
import { projects } from "@/lib/data";

export default function Projects() {
    return (
        <section id="projects" className="">
            <SectionHeading>Projects</SectionHeading>

            <div className="flex flex-row flex-wrap gap-10">
                {projects.map((project) => (
                    <React.Fragment key={project.name}>
                        <ProjectCard {...project} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}
