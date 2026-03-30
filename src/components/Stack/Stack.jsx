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
    <div className="flex items-center justify-center w-28 h-20 mx-4 rounded-xl bg-neutral-900 hover:bg-[#004AAD] transition">
      <img src={logo} alt={alt} className="h-10 object-contain" />
    </div>
  )
}

const Stack = () => {
  return (
    <section className="py-20 bg-black text-white">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold hover:text-[#004AAD]">Technologies We Use</h2>
        <p className="text-white/60 mt-2">
          We use modern, scalable technologies to build fast, reliable, and future-ready web applications.
        </p>
      </div>

      {/* Marquee */}
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:25s]">
          {firstRow.map((item) => (
            <LogoCard key={item.id} {...item} />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:25s] mt-6">
          {secondRow.map((item) => (
            <LogoCard key={item.id} {...item} />
          ))}
        </Marquee>

        {/* fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
      </div>
    </section>
  )
}

export default Stack
