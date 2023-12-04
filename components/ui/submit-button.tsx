"use client";

import { useFormStatus } from "react-dom";

// NextUI
import { Button } from "@nextui-org/react";

// Icons
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button
            type="submit"
            radius="sm"
            className="group text-md"
            isLoading={pending}
        >
            {pending ? "Sending..." : "Send"}{" "}
            <FaPaperPlane className="opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Button>
    );
}
