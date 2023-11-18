// NextUI
import { Spacer } from "@nextui-org/react";

// Components
import { About, Intro, Projects } from "@/components";

export default function Home() {
    return (
        <main className="flex flex-col items-center py-5 px-5">
            <Intro />
            <Spacer y={20} />
            <About />
            <Spacer y={20} />
            <Projects />
        </main>
    );
}
