import Image from "next/image";

// NextUI
import { Card, Chip } from "@nextui-org/react";

// TODO: Move project type to a specific types file
type Props = {
    project: {
        name: string;
        description: string;
        mainImage: string;
        tech: string[];
    };
};

export default function ProjectCard({ project }: Props) {
    return (
        <Card
            className="flex flex-row flex-wrap rounded-lg bg-gradient-to-r from-gray-200 to-white shadow gap-y-5"
            key={project.name}
        >
            <div className="relative">
                <Image
                    src={project.mainImage}
                    width={500}
                    height={500}
                    objectFit="cover"
                    quality={100}
                    alt={`${project.name} image`}
                    className="rounded-lg shadow-lg"
                />
            </div>

            <div className="flex flex-col flex-1 justify-center items-center gap-y-4 px-10">
                <p className="text-2xl font-bold">{project.name}</p>
                <p>{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((technology) => (
                        <Chip variant="bordered" key={technology}>
                            {technology}
                        </Chip>
                    ))}
                </div>
            </div>
        </Card>
    );
}
