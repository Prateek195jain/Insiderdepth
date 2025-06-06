import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Ethereum (ETH)",
    spot: "-500k spot",
    img: "/ETH.png",
  },
  {
    name: "Dogecoin",
    spot: "+120% volume",
    img: "/DOGE.png",
  },
  {
    name: "Tron (TRX)",
    spot: "-1.2M spot",
    img: "/TRX.png",
  },
];

const ReviewCard = ({
  img,
  name,
  spot,
}: {
  img: string;
  name: string;
  spot: string;
}) => {
  const isPositive = spot.includes("+");

  return (
    <figure
      className={cn(
        "relative h-full w-auto cursor-pointer overflow-hidden rounded-md border px-6 py-4 transition-colors duration-300 mr-4",
        isPositive
          ? "bg-[#38AD9A14] border-[#4BCE9724]"
          : "bg-[#EF486A14] border-[#EF486A45]"
      )}
    >
      <div className="flex items-center gap-x-4 justify-between">
        <div className="flex items-center gap-x-2">
          <img className="rounded-full" alt="" src={img} />
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
        </div>
        <p
          className={cn(
            "text-sm font-medium",
            isPositive ? "text-[#4BCE97]" : "text-[#EF486A]"
          )}
        >
          {spot}
        </p>
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center overflow-hidden gap-10 px-4">
      <Marquee pauseOnHover className="[--duration:20s]">
        {reviews.map((review) => (
          <ReviewCard key={review.spot} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {reviews.map((review) => (
          <ReviewCard key={review.spot} {...review} />
        ))}
      </Marquee>
      <Marquee pauseOnHover className="[--duration:20s]">
        {reviews.map((review) => (
          <ReviewCard key={review.spot} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {reviews.map((review) => (
          <ReviewCard key={review.spot} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
    </div>
  );
}