import Image from "next/image";

// NextUI
import { Button, Link } from "@nextui-org/react";

// Data
import { yearsOfExperience } from "@/lib/data";

// Icons
import { LuDownload } from "react-icons/lu";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Intro() {
    return (
        <section className="flex flex-col items-center gap-5">
            <div className="relative shadow-lg rounded-full w-fit h-fit border-8 border-solid border-green-400">
                <Image
                    className="rounded-full relative z-10"
                    src={"/assets/profile.jpg"}
                    width={150}
                    height={150}
                    quality={95}
                    alt={"Ali Abbasov"}
                ></Image>

                <div className="z-0 absolute w-[15rem] h-[15rem] top-0 right-0 bg-green-500 rounded-full blur-[12rem] xs:blur-[30rem] sm:blur-[20rem] md:blur-[10rem] lg:blur-[10rem] xl:blur-[13rem]"></div>
            </div>

            <div className="flex flex-col gap-4 z-10">
                <h1 className="text-4xl max-w-[50rem] leading-snug">
                    Hi, I&apos;m <span className="font-bold">Ali Abbasov</span>,
                    a full-stack web developer with over {yearsOfExperience}{" "}
                    years of experience creating dynamic, responsive solutions
                    for seamless user experiences.
                </h1>
            </div>

            <div className="flex flex-wrap gap-10">
                <Button
                    className="text-md hover:scale-110"
                    radius="full"
                    color="primary"
                    disableRipple
                >
                    Contact me
                </Button>
                <Button
                    className="text-md hover:scale-110"
                    radius="full"
                    color="secondary"
                    disableRipple
                >
                    Download CV
                    <LuDownload size={24} />
                </Button>
                <Link href="https://github.com/aliabb01" target="_blank">
                    <FaGithubSquare size={40} />
                </Link>
                <Link>
                    <FaSquareXTwitter size={40} />
                </Link>
                <Link>
                    <FaLinkedin size={40} />
                </Link>
            </div>
        </section>
    );
}
