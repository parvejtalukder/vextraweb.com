import React from 'react';
import Gch from '../../assets/gch.png'
import SpWiki from '../../assets/spwiki.png'
import WikiBiz from '../../assets/wb.png'
import SylhetJournal from '../../assets/sj.png'
import SattSotero from '../../assets/st.png'
import VisitAbroad from '../../assets/va.png'
import BanglaLens from '../../assets/bl.png'
import JanatarKantha from '../../assets/jk.png'
import CreatorsWiki from '../../assets/cw.png'
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import { Link } from 'react-router';

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
]

const Slider = () => {

  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      loop={true}
    //   centeredSlides={true}
      grabCursor={true}
      autoplay={{
        delay: 0,          
        disableOnInteraction: false,
      }}
      speed={2000}          
      modules={[Autoplay]}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
    >
      {dataSlider.map((brand) => (
        <SwiperSlide key={brand.id}>
          <Link to={brand.url}><img src={brand.logo} alt={`Logo ${brand.id}`} /></Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;