"use client";

// NextUI
import { Input, Textarea } from "@nextui-org/react";

// Toast
import toast from "react-hot-toast";

// Components
import { SectionHeading, SubmitButton } from "@/components";

// Actions
import { sendEmail } from "@/actions/sendEmail";

export default function Contact() {
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
                    // Get the values from the form data
                    const senderEmail = formData.get("email") as string;
                    const message = formData.get("message") as string;

                    // Validate the form data on client side
                    if (!senderEmail || !message) {
                        toast.error("Email and message fields are required");
                        return;
                    }

                    // Send the email
                    const { data, error } = await sendEmail(formData);

                    // Handle the response
                    if (error) {
                        toast.error(`Failed to send the message \n${error}`);
                        return;
                    }
                    if (!error) {
                        toast.success("Successfully sent the message");
                    }
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
