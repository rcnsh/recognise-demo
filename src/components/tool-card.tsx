import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ToolCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  mobileTitle?: string; // Optional mobile title that differs from desktop
  description: string[];
}

export default function ToolCard({
  imageSrc,
  imageAlt,
  title,
  mobileTitle,
  description,
}: ToolCardProps) {
  return (
    <div className="flex max-w-4xl flex-col items-center gap-8 rounded-3xl border-2 border-gray-200 bg-gray-50 p-4 sm:p-8 md:flex-row md:items-center">
      <div className="flex h-full items-center">
        <Image src={imageSrc} alt={imageAlt} width={250} height={250} />
      </div>

      <div className="flex w-full flex-col rounded-3xl bg-white p-8">
        {mobileTitle ? (
          <>
            <h2 className="hidden text-3xl font-semibold text-[#0d5173] md:block">
              {title}
            </h2>
            <h2 className="block text-3xl font-semibold text-[#0d5173] md:hidden">
              {mobileTitle}
            </h2>
          </>
        ) : (
          <h2 className="text-3xl font-semibold text-[#0d5173]">{title}</h2>
        )}

        <div className="mt-4 flex items-start justify-between gap-4">
          <div className="flex-grow text-sm font-light text-gray-700 md:text-xl">
            {description.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
          <div className="flex-shrink-0">
            <button
              className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 transition-colors hover:bg-gray-300 md:h-20 md:w-20"
              aria-label="Learn more"
            >
              <ArrowUpRight className="size-9 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
