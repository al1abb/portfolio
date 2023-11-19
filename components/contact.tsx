"use client";

// NextUI
import { Input, Textarea } from "@nextui-org/react";

// Toast
import toast from "react-hot-toast";

// Components
import { SectionHeading, SubmitButton } from "@/components";

// Actions
import { sendEmail } from "@/actions/sendEmail";

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

            <form
                action={async (formData) => {
                    const { data, error } = await sendEmail(formData);

                    if (error) {
                        toast.error(`Failed to send the message \n${error}`);
                        return;
                    }
                    toast.success("Successfully sent the message");
                }}
                className="flex flex-col gap-3"
            >
                <Input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    variant="faded"
                    radius="sm"
                    color="primary"
                    maxLength={500}
                    required
                />
                <Textarea
                    type="text"
                    name="message"
                    placeholder="Your message"
                    variant="faded"
                    radius="sm"
                    color="primary"
                    minRows={7}
                    maxLength={500}
                    required
                />

                <SubmitButton />
            </form>
        </section>
    );
}
