import React, { useState } from 'react';
import { useCountUp } from '@/hooks/useCountUp';
import Gch from '../../assets/gch.png';
import KWeb from '../../assets/khujoweb.png';
import SpWiki from '../../assets/spwiki.png';
import WikiBiz from '../../assets/wb.png';
import SylhetJournal from '../../assets/sj.png';
import SattSotero from '../../assets/st.png';
import VisitAbroad from '../../assets/va.png';
import BanglaLens from '../../assets/bl.png';
import JanatarKantha from '../../assets/jk.png';
import CreatorsWiki from '../../assets/cw.png';

const dataSlider = [
    { id: 1, url: "https://sylhetjournal.com/", logo: SylhetJournal, category: "Media" },
    { id: 2, url: "https://sattsotero.com/", logo: SattSotero, category: "Media" },
    { id: 3, url: "https://dainikjanatarkantha.com/", logo: JanatarKantha, category: "Media" },
    { id: 4, url: "https://globalcreatorshub.com/", logo: Gch, category: "Web" },
    { id: 5, url: "https://creatorswiki.org/", logo: CreatorsWiki, category: "Wiki" },
    { id: 6, url: "https://visitabroad.agency/", logo: VisitAbroad, category: "Travel" },
    { id: 7, url: "https://banglalens.net/", logo: BanglaLens, category: "Media" },
    { id: 8, url: "https://wikibiz.org/wiki/Main_Page", logo: WikiBiz, category: "Wiki" },
    { id: 9, url: "https://supremewiki.org/wiki/Main_Page", logo: SpWiki, category: "Wiki" },
    { id: 10, url: "https://khujoweb.com", logo: KWeb, category: "Web" },
];

const categories = ["All", "Media", "Wiki", "Web", "Travel"];

const stats = [
  { target: 10, suffix: "+", label: "Projects delivered" },
  { target: 100, suffix: "%", label: "Client satisfaction" },
  { target: 24, suffix: "/7", label: "Support & care" },
];

const Stat = ({ target, suffix, label }) => {
  const [ref, value] = useCountUp(target);
  return (
    <div ref={ref} className="flex-1 text-center sm:text-left">
      <p className="text-3xl font-bold text-white sm:text-4xl">
        {value}
        <span className="text-[#3391e7]">{suffix}</span>
      </p>
      <p className="mt-1 text-xs uppercase tracking-wider text-white/60">{label}</p>
    </div>
  );
};

const SliderBar = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? dataSlider : dataSlider.filter((b) => b.category === active);

  return (
    <div className="mx-auto max-w-6xl py-12 px-4">
      <div className="flex flex-col justify-center items-center text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#3391e7]">
          Our Work
        </p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Our Projects</h2>
        <p className="text-white/60 mt-2">
          Web applications and platforms we have designed, built and shipped for clients.
        </p>
      </div>

      {/* Category filters */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors duration-300 ${
              active === cat
                ? "btn-gradient text-white"
                : "border border-white/15 text-white/70 hover:border-[#3391e7]/50 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Stats */}
      <div className="mt-8 flex flex-col gap-6 border-y border-white/10 py-6 sm:flex-row sm:justify-around">
        {stats.map((stat) => (
          <Stat key={stat.label} {...stat} />
        ))}
      </div>

        <div className="mt-8 grid grid-cols-2 items-center justify-items-center gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {filtered.map((brand) => (
          <a
            key={brand.id}
            href={brand.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full items-center justify-center rounded-xl bg-white p-4 transition-shadow duration-300 hover:shadow-[0_16px_40px_-12px_rgba(51,145,231,0.45)]"
          >
            <img
              src={brand.logo}
              alt={`${brand.url.replace(/^https?:\/\//, "")}`}
              className="h-12 w-auto object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default SliderBar;