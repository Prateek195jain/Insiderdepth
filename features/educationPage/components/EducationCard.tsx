"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Badge from "./Badge";
import { useRouter } from "next/navigation";


type BadgeType = "free" | "premium";

type Props = {
  title: string;
  description: string;
  imageUrl: string;
  borderClassName?: string;
  bgClassName?: string;
  BadgeType: BadgeType;
  courseSlug: string;
};

export default function EducationCard({
  title,
  description,
  imageUrl,
  borderClassName,
  bgClassName,
  BadgeType,
  courseSlug,
}: Props) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/education/${courseSlug}`);
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        "relative overflow-hidden bg-gray-800/40 border-blue-500 border p-2 md:p-5 flex flex-col md:flex-row gap-8 rounded-xl shadow-md transition duration-300 hover:shadow-[0_12px_24px_rgba(255,255,255,0.1)] hover:scale-[1.01] cursor-pointer",
        borderClassName,
        bgClassName
      )}
    >
      <Badge type={BadgeType} />

      <div className="relative w-full md:w-1/3 h-40 md:h-auto min-h-[150px] overflow-hidden">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-lg md:text-xl font-semibold mb-2 text-white">
          {title}
        </h2>
        <hr className="w-full border-t mb-8 border-gray-400 my-4" />
        <p className="mt-2 text-sm md:text-base text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
}