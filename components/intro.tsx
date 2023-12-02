import Image from "next/image";

// NextUI
import { Button, Link } from "@nextui-org/react";

// Data
import { yearsOfExperience } from "@/lib/data";

// Constants
import { GITHUB_LINK, LINKEDIN_LINK, TWITTER_LINK } from "@/lib/constants";

// Icons
import { LuDownload } from "react-icons/lu";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

// Images
import ProfileImage from "@/public/assets/profile.jpg";

export default function Intro() {
    return (
        <section className="flex flex-col items-center gap-5">
            <div className="relative shadow-lg rounded-full w-fit h-fit border-8 border-solid border-green-500">
                <Image
                    className="rounded-full relative z-10"
                    src={ProfileImage}
                    alt={"Ali Abbasov"}
                    width={150}
                    height={150}
                    quality={95}
                    placeholder="blur"
                />

                <div className="z-0 absolute md:w-[18rem] md:h-[18rem] w-[13rem] h-[13rem] top-0 right-0 bg-green-500 rounded-full blur-[12rem] xs:blur-[30rem] xl:blur-[12rem] dark:blur-[14rem]"></div>
            </div>

            <div className="flex flex-col gap-4 z-10">
                <h1 className="text-4xl max-w-[50rem] leading-snug">
                    Hi, I&apos;m <span className="font-bold">Ali Abbasov</span>,
                    a full-stack web developer with over {yearsOfExperience}{" "}
                    years of experience creating web applications.
                </h1>
            </div>

            <div className="flex flex-wrap gap-10">
                <Button
                    as={Link}
                    href="#contact"
                    className="text-md hover:scale-110"
                    radius="full"
                    color="primary"
                    disableRipple
                >
                    Contact me
                </Button>
                <Button
                    as={Link}
                    href="/assets/files/Ali_Abbasov_CV.pdf"
                    download
                    className="text-md hover:scale-110"
                    radius="full"
                    color="secondary"
                    disableRipple
                >
                    Download CV
                    <LuDownload size={24} />
                </Button>
                <Link href={GITHUB_LINK} target="_blank">
                    <FaGithubSquare size={40} />
                </Link>
                <Link href={TWITTER_LINK} target="_blank">
                    <FaSquareXTwitter size={40} />
                </Link>
                <Link href={LINKEDIN_LINK} target="_blank">
                    <FaLinkedin size={40} />
                </Link>
            </div>
        </section>
    );
}
