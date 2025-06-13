import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function ClientCard({
  name,
  image,
  bp1,
  bp2,
  bp3,
}: {
  name: string;
  image: string;
  bp1: string;
  bp2: string;
  bp3: string;
}) {
  return (
    <div className="max-w-md rounded-3xl bg-gray-50 p-8 shadow-sm">
      <div className="mb-6 flex items-center justify-center">
        <Image
          src={image}
          alt={name}
          width={400}
          height={400}
          className="max-h-[100px] w-auto object-contain"
        />
      </div>
      <div className="rounded-3xl bg-white p-4">
        <h2 className="mb-4 text-3xl font-semibold text-[#1e4664] capitalize">
          {name}
        </h2>

        <ul className="mb-6 space-y-2">
          <li className="flex items-start">
            <div className="mt-2 mr-3 h-[6px] min-w-[6px] rounded-full bg-black"></div>
            <span className="text-gray-800">{bp1}</span>
          </li>
          <li className="flex items-start">
            <div className="mt-2 mr-3 h-[6px] min-w-[6px] rounded-full bg-black"></div>
            <span className="text-gray-800">{bp2}</span>
          </li>
          <li className="flex items-start">
            <div className="mt-2 mr-3 h-[6px] min-w-[6px] rounded-full bg-black"></div>
            <span className="text-gray-800">{bp3}</span>
          </li>
        </ul>

        <div className="flex justify-end">
          <button className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 transition-colors hover:bg-gray-300">
            <ArrowUpRight className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
}
