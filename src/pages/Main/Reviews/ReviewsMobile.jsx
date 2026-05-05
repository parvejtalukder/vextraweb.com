import { Marquee } from "@/components/ui/marquee";
import React from "react";

const reviews = [
  { name: "Jack", username: "@jack", body: "Amazing work!", img: "https://avatar.vercel.sh/jack" },
  { name: "Jill", username: "@jill", body: "Highly recommend!", img: "https://avatar.vercel.sh/jill" },
  { name: "John", username: "@john", body: "Fantastic results!", img: "https://avatar.vercel.sh/john" },
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

const ReviewCardMob = ({ img, name, username, body }) => (
  <figure className="flex flex-col items-center justify-center w-auto p-4 mx-4 bg-neutral-900 rounded-xl hover:bg-[#004AAD] transition-all">
    <img src={img} alt={name} className="w-12 h-12 rounded-full mb-2" />
    <figcaption className="font-semibold text-white">{name}</figcaption>
    <p className="text-xs text-white/50 mb-2">{username}</p>
    <blockquote className="text-sm text-white/80 text-center">{body}</blockquote>
  </figure>
);


const ReviewsMobile = () => {
  return (
    <section className="py-5 bg-black text-white px-4">

      {/* 2x2 Grid */}
      <div className="grid grid-cols-2 gap-3">

        {reviews.map((review, index) => (
          <ReviewCardMob key={index} {...review} />
        ))}

      </div>

    </section>
  );
};

export default ReviewsMobile;