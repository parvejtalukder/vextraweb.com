import { Marquee } from "@/components/ui/marquee";
import React from "react";

const reviews = [
  { name: "Jack", username: "@jack", body: "Amazing work!", img: "https://avatar.vercel.sh/jack" },
  { name: "Jill", username: "@jill", body: "Highly recommend!", img: "https://avatar.vercel.sh/jill" },
  { name: "John", username: "@john", body: "Fantastic results!", img: "https://avatar.vercel.sh/john" },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => (
  <figure className="flex flex-col items-center justify-center w-64 p-4 mx-4 bg-neutral-900 rounded-xl hover:bg-[#004AAD] transition-all">
    <img src={img} alt={name} className="w-12 h-12 rounded-full mb-2" />
    <figcaption className="font-semibold text-white">{name}</figcaption>
    <p className="text-xs text-white/50 mb-2">{username}</p>
    <blockquote className="text-sm text-white/80 text-center">{body}</blockquote>
  </figure>
);

const ReviewsMobile = () => {
  return (
    <section className="py-5 -pt-10 bg-black text-white">
        
      <div className="relative flex flex-col w-full overflow-hidden">
        <Marquee pauseOnHover className="[--duration:25s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:25s] mt-4">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
      </div>
    </section>
  );
};

export default ReviewsMobile;