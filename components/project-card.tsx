import Link from "next/link";
import Image from "next/image";

// NextUI
import { Chip } from "@nextui-org/react";

// Types
import { ProjectType } from "@/types";

export default function ProjectCard({
    name,
    description,
    mainImage,
    tags,
    links,
    startDate,
    endDate,
}: ProjectType) {
    return (
        <section className="max-w-md mx-auto bg-gray-200 bg-opacity-75 backdrop-blur-lg rounded-lg overflow-hidden p-5 dark:text-white dark:bg-white/10">
            <div className="relative w-full">
                <Image
                    src={mainImage}
                    alt={`${name} Image`}
                    width={1000}
                    height={300}
                    quality={95}
                    sizes="(min-width: 768px) 90vw, 75vw"
                    className="rounded-lg shadow-lg lg:h-60 sm:h-54"
                    placeholder="blur"
                />
            </div>
            <div className="flex flex-col p-6 gap-1">
                <h3 className="text-2xl font-semibold">{name}</h3>
                <p className="text-gray-700 dark:text-white/70 leading-relaxed">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2 my-3">
                    {tags.map((tag, index) => (
                        <Chip key={index} className="chip">
                            {tag}
                        </Chip>
                    ))}
                </div>
                <div className="flex flex-wrap flex-row items-center gap-4 my-3">
                    {links.website && (
                        <Link
                            href={links.website}
                            target="_blank"
                            className="text-link"
                        >
                            View live
                        </Link>
                    )}
                    {links.github && (
                        <Link
                            href={links.github}
                            target="_blank"
                            className="text-link"
                        >
                            <p>Source code</p>
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
}
