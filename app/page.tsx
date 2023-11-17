// NextUI
import { Spacer } from "@nextui-org/react";

// Components
import { Intro, Projects } from "@/components";

export default function Home() {
    return (
        <main className="flex flex-col gap-4 items-center justify-between py-5 px-5">
            <Intro />
            <Spacer y={20} />
            <Projects />
        </main>
    );
}
