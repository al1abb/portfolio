import Image from "next/image";
import { yearsOfExperience } from "@/lib/data";
import { Button, Link } from "@nextui-org/react";

// Icons
import { LuDownload } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

type Props = {};

export default function Intro(props: Props) {
    return (
        <>
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
                <Button radius="full" disableRipple>
                    Contact me
                </Button>
                <Button radius="full" color="secondary" disableRipple>
                    Download CV
                    <LuDownload size={24} />
                </Button>
                <Link href="https://github.com/aliabb01" target="_blank">
                    {/* <Github color="black" /> */}
                    <FaGithub color="black" size={35} />
                </Link>
                <Link>
                    {/* <Linkedin color="black" /> */}
                    <BsLinkedin color="black" size={35} />
                </Link>
            </div>
        </>
    );
}
