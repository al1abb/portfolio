import React from "react";

import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
} from "@react-email/components";

import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
    senderEmail: string;
    message: string;
};

export default function ContactFormEmail({
    senderEmail,
    message,
}: ContactFormEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>New message from your portfolio site</Preview>
            <Tailwind>
                <Body className="bg-gray-100 ">
                    <Container>
                        <Section className="bg-white border-black-950 my-10 px-10 py-4 rounded-md">
                            <Heading className="leading-tight">
                                You received the following message from the
                                contact form
                            </Heading>

                            <Text>{message}</Text>

                            <Hr />

                            <Text>
                                The sender&apos;s email is: {senderEmail}{" "}
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
