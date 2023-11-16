import Image from "next/image";
import { yearsOfExperience } from "@/lib/data";

export default function Home() {
    return (
        <main className="flex flex-col gap-4 items-center justify-between py-5 px-5">
            <div className="shadow-lg rounded-full border-8 border-solid border-green-500">
                <Image
                    className="rounded-full"
                    src={"/profile.jpg"}
                    width={150}
                    height={150}
                    alt={""}
                ></Image>
            </div>

            <div className="flex flex-col gap-4">
                <p className="text-4xl max-w-[50rem] leading-snug">
                    Hi, I&apos;m <b>Ali Abbasov</b>, a full-stack web developer
                    with over {yearsOfExperience} years of experience creating
                    dynamic, responsive solutions for seamless user experiences.
                </p>
            </div>

            <div className="flex flex-wrap gap-10">
                <button>Contact me here</button>
                <button>Download CV</button>
                <button>GitHub</button>
                <button>LinkedIn</button>
            </div>
        </main>
    );
}
