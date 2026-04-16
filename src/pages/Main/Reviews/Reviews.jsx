import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import React from "react";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const thirdRow = firstRow;
const fourthRow = secondRow;

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-fit cursor-pointer overflow-hidden rounded-xl border p-4 sm:w-36",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Reviews() {
  return (
    <div className="relative w-full h-96 lg:h-96 [perspective:1000px] overflow-hidden">
  <div
    className="absolute flex flex-row gap-6 h-full w-max lg:flex-row flex-col"
    style={{
      transform: "rotateX(20deg) rotateY(-15deg) translateZ(0px)",
    }}
  >
    {/* First row */}
    <Marquee pauseOnHover vertical className="[--duration:20s] lg:block hidden">
      {firstRow.map((review) => (
        <ReviewCard key={review.username} {...review} />
      ))}
    </Marquee>

    {/* Second row */}
    <Marquee reverse pauseOnHover vertical className="[--duration:25s] lg:block hidden">
      {secondRow.map((review) => (
        <ReviewCard key={review.username} {...review} />
      ))}
    </Marquee>

    {/* Third row */}
    <Marquee pauseOnHover vertical className="[--duration:25s] lg:block hidden">
      {thirdRow.map((review) => (
        <ReviewCard key={review.username} {...review} />
      ))}
    </Marquee>

    {/* Fourth row */}
    <Marquee reverse pauseOnHover vertical className="[--duration:25s] lg:block hidden">
      {fourthRow.map((review) => (
        <ReviewCard key={review.username} {...review} />
      ))}
    </Marquee>

    {/* On mobile, show stacked vertical cards */}
    <div className="lg:hidden flex flex-col gap-4 p-4">
      {reviews.map((review) => (
        <ReviewCard key={review.username} {...review} />
      ))}
    </div>
  </div>
</div>
  );
}