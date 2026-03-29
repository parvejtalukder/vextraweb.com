import React from 'react';
import Gch from '../../assets/gch.png';
import KWeb from '../../assets/khujoweb.png'
import SpWiki from '../../assets/spwiki.png';
import WikiBiz from '../../assets/wb.png';
import SylhetJournal from '../../assets/sj.png';
import SattSotero from '../../assets/st.png';
import VisitAbroad from '../../assets/va.png';
import BanglaLens from '../../assets/bl.png';
import JanatarKantha from '../../assets/jk.png';
import CreatorsWiki from '../../assets/cw.png';

const dataSlider = [
    {
        id: 1,
        url: "https://sylhetjournal.com/",
        logo: SylhetJournal,
    }
    ,
    {
        id: 2,
        url: "https://sattsotero.com/",
        logo: SattSotero
    } 
    ,
    {
        id: 3,
        url: "https://dainikjanatarkantha.com/",
        logo: JanatarKantha
    }
    ,
    {
        id: 4,
        url: "https://globalcreatorshub.com/",
        logo: Gch
    }
    ,
    {
        id: 5,
        url: "https://creatorswiki.org/",
        logo: CreatorsWiki
    }
    ,
    {
        id: 6,
        url: "https://visitabroad.agency/",
        logo: VisitAbroad
    }
    ,
    {
        id: 7,
        url: "https://banglalens.net/",
        logo: BanglaLens
    }
    ,
    {
        id: 8,
        url: "https://wikibiz.org/wiki/Main_Page",
        logo: WikiBiz
    }
    ,
    {
        id: 9,
        url: "https://supremewiki.org/wiki/Main_Page",
        logo: SpWiki
    }
    ,
    {
      id: 10,
      url: "https://khujoweb.com",
      logo: KWeb
    }
]

const SliderBar = () => {

  return (
<div className="bg-blue-500/80 p-6 w-full rounded-2xl lg:mt-6 mt-10">
      <h2 className='text-4xl sm:text-4xl font-bold lg:text-5xl pb-5 leading-tight'>Our Projects</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-items-center">
        {dataSlider.map((brand) => (
          <a
            key={brand.id}
            href={brand.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-4 bg-white hover:bg-blue-500 transition-all rounded-lg shadow-md hover:shadow-xl duration-300"
          >
            <img
              src={brand.logo}
              alt={`Logo ${brand.id}`}
              className="h-16 w-auto object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SliderBar;