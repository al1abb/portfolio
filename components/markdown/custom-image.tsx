import dynamic from "next/dynamic";

type Props = {
    src: string;
    alt: string;
    priority?: boolean;
    unoptimized?: boolean;
};

const DynamicImage = dynamic(() => import("next/image"), {
    ssr: false,
    loading: () => <p>Loading...</p>,
});

export default function CustomImage({
    src,
    alt,
    priority = false,
    unoptimized = false,
}: Props) {
    return (
        <div className="w-full h-full">
            <DynamicImage
                className="rounded-lg mx-auto"
                src={src}
                alt={alt}
                priority={priority}
                width={800}
                height={800}
                unoptimized={unoptimized}
            />
        </div>
    );
}
