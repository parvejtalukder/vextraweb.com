import React from "react"
import { Marquee } from "../ui/marquee"

// your logos
import sqlLogo from "../../assets/sql.png"
import jwtLogo from "../../assets/jwt.png"
import mongoDbLogo from "../../assets/mDb.ico"
import reactLogo from "../../assets/react.svg"
import nextLogo from "../../assets/nextJs.svg"
import expressLogo from "../../assets/Express.png"
import reactRouter from "../../assets/router.svg"
import nodeLogo from "../../assets/node.gif"
import vercelLogo from "../../assets/vercel.png"
import firebaseLogo from "../../assets/firebase.png"
import wordPressLogo from "../../assets/wordpress.png"
import tailWindCss from "../../assets/tailwindCss.png"
import woocommerceLogo from "../../assets/Woo.png"
import mediawikiLogo from "../../assets/mwiki.png"

const stackList = [
  { id: 1, logo: reactLogo, alt: "ReactJs" },
  { id: 2, logo: reactRouter, alt: "ReactRouter" },
  { id: 3, logo: nextLogo, alt: "NextJs" },
  { id: 4, logo: tailWindCss, alt: "TailwindCSS" },
  { id: 5, logo: expressLogo, alt: "ExpressJs" },
  { id: 6, logo: nodeLogo, alt: "NodeJs" },
  { id: 7, logo: firebaseLogo, alt: "Firebase" },
  { id: 8, logo: jwtLogo, alt: "JWT Token" },
  { id: 9, logo: mongoDbLogo, alt: "MongoDB" },
  { id: 10, logo: sqlLogo, alt: "SQL DBs" },
  { id: 11, logo: vercelLogo, alt: "Vercel" },
  { id: 12, logo: wordPressLogo, alt: "WordPress" },
  { id: 13, logo: woocommerceLogo, alt: "WooCommerce" },
  { id: 14, logo: mediawikiLogo, alt: "MediaWiki" },
]

// split into 2 rows
const firstRow = stackList.slice(0, stackList.length / 2)
const secondRow = stackList.slice(stackList.length / 2)

const LogoCard = ({ logo, alt }) => {
  return (
    <div className="group flex items-center justify-center w-28 h-16 mx-3 rounded-lg border border-white/10 transition-colors duration-300 hover:border-[#3391e7]/60">
      <img src={logo} alt={alt} className="h-9 object-contain transition-opacity duration-300 group-hover:opacity-80" />
    </div>
  )
}

const Stack = () => {
  return (
    <section className="relative py-12 text-white">
      {/* Title */}
      <div className="text-center mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#3391e7]">
          Our Stack
        </p>
        <h2 className="text-2xl font-semibold mt-2">Technologies We Use</h2>
        <p className="text-white/60 mt-2">
          We build with modern, scalable technologies for fast, reliable and future-ready web apps.
        </p>
      </div>

      {/* Marquee */}
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mx-auto max-w-5xl">
        <Marquee pauseOnHover className="[--duration:25s]">
          {firstRow.map((item) => (
            <LogoCard key={item.id} {...item} />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:25s] mt-5">
          {secondRow.map((item) => (
            <LogoCard key={item.id} {...item} />
          ))}
        </Marquee>
      </div>
    </section>
  )
}

export default Stack
