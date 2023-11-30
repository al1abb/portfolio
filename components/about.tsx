import Link from "next/link";

// Components
import { SectionHeading } from "@/components";

export default function About() {
    return (
        <section id="about" className="max-w-[45rem] text-center leading-8">
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                Started learning web development in January of 2020 and never
                stopped since. My journey has been filled with endless
                challenges and opportunities. I&apos;m passionate about creating
                user-friendly and efficient web applications.
            </p>
            <p>
                My tech stack includes{" "}
                <span className="font-bold">
                    Next.js, React, Vue.js, Laravel
                </span>{" "}
                and more. I&apos;m always looking for new and exciting projects
                to work on.
            </p>
            <p>
                I also have a blog where I share insights into the challenges
                tasks I overcome. You can find it{" "}
                <Link className="text-link" href={"/blog"}>
                    here
                </Link>
            </p>
        </section>
    );
}
