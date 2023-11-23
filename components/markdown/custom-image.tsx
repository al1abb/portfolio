import Image from "next/image";

type Props = {
    src: string;
    alt: string;
    priority?: boolean;
};

export default function CustomImage({ src, alt, priority = false }: Props) {
    return (
        <div className="w-full h-full">
            <Image
                className="rounded-lg mx-auto"
                src={src}
                alt={alt}
                priority={priority}
                width={650}
                height={650}
            />
        </div>
    );
}
