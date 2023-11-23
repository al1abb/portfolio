import { DetailedHTMLProps, HTMLAttributes, createElement } from "react";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const MDXComponents = {
    h1: ({ children }: Props) =>
        createElement("h1", { className: "text-4xl font-bold my-4" }, children),
    h2: ({ children }: Props) =>
        createElement("h2", { className: "text-3xl font-bold my-3" }, children),
    h3: ({ children }: Props) =>
        createElement("h3", { className: "text-2xl font-bold my-2" }, children),
    h4: ({ children }: Props) =>
        createElement("h4", { className: "text-xl font-bold my-2" }, children),
    h5: ({ children }: Props) =>
        createElement("h5", { className: "text-lg font-bold my-1" }, children),
    h6: ({ children }: Props) =>
        createElement(
            "h6",
            { className: "text-base font-bold my-1" },
            children
        ),

    p: ({ children }: Props) =>
        createElement("p", { className: "my-4" }, children),
    code: ({ children }: Props) => (
        <pre>
            <code className="my-4">{children}</code>
        </pre>
    ),
};

export default MDXComponents;
