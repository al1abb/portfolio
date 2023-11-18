// NextUI
import { Button, Input, Textarea } from "@nextui-org/react";

// Components
import { SectionHeading } from "@/components";

// Icons
import { FaPaperPlane } from "react-icons/fa";

export default function Contact({}) {
    return (
        <section id="contact">
            <SectionHeading>Contact me</SectionHeading>
            <p>
                Please contact me directly at{" "}
                <a href="mailto:ali3abbasov@gmail" className="underline">
                    ali3abbasov@gmail.com
                </a>{" "}
                or through this form
            </p>

            <form action="" className="flex flex-col gap-3">
                <Input
                    type="email"
                    variant="faded"
                    placeholder="Your email"
                    radius="sm"
                    color="primary"
                    maxLength={500}
                    required
                />
                <Textarea
                    type="text"
                    variant="faded"
                    placeholder="Your message"
                    radius="sm"
                    color="primary"
                    minRows={7}
                    maxLength={500}
                    required
                />

                <Button type="submit" radius="sm" className="group">
                    Submit{" "}
                    <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
            </form>
        </section>
    );
}
