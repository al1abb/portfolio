// Components
import { ProjectCard } from "@/components";

// Data
import { projects } from "@/lib/data";

export default function Projects() {
    return (
        <>
            <p className="text-3xl font-semibold">Projects</p>

            <div className="flex flex-col gap-10">
                {projects.map((project) => (
                    <ProjectCard key={project.name} project={project} />
                ))}
            </div>
        </>
    );
}
