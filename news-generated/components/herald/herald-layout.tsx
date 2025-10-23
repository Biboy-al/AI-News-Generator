"use client"

import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { Link } from 'lucide-react';
import { GeneratedArticle } from "../news-generator";
import { HeraldHeader } from "./herald-header";
import { HeraldFooter } from "./herald-footer";

const style = {
        container: "bg-white text-black",
        contentContainer: "flex flex-col items-center w-full max-w-5xl",
        headline: "font-serif text-4xl font-black leading-tight text-black",
        subheadline: "font-sans text-xl font-medium text-gray-700",
        meta: "text-sm font-medium text-gray-600",
        content: "font-sans text-base leading-relaxed text-gray-900 p-4 ml-16 border-l text-xl tracking-wide",
        logo: "text-2xl font-black text-green-600",
}


export function HeraldLayout({article} : {article : GeneratedArticle}) {

  return (
    <div className={`min-h-full ${style.container}`}>

      <div className="flex flex-col items-center">

      <div className="w-full">
          <HeraldHeader/>
      </div>


    <div className={`${style.contentContainer}`}>

      {/* Article Content - matches header width */}
      <article className="mx-auto w-full max-w-[1400px] px-6 py-8">
        {/* Headline */}
        <h1 className={`mb-4 text-balance ${style.headline}`}>{article.headline}</h1>

        {/* Subheadline */}
        {/* { template === "guardian" &&
          <h2 className={`mb-6 text-pretty ${style.subheadline}`}>{article.subheadline}</h2>
        } */}
        
        {/* Meta Info */}
        <div className={`mb-6 flex justify-between gap-4 ${style.meta}`}>
          <div>
            <p>{article.author}</p>
            <time>{article.date}</time>
          </div>
          
          <button className="flex items-center gap-4 border bg-white border-gray-300 text-black rounded-full px-4 py-1 text-sm hover:bg-gray-50 transition">
            <Link size={20}/>
            Copy Link
            </button>
        </div>

        <Separator className="mb-8" />


        {/* Article Body */}
        <div className={`space-y-6 ${style.content}`}>

        <div>
          awdawd
        </div>

        <div className="mb-8 overflow-hidden rounded-lg">
          <Image
            src={article.imageUrl || "/placeholder.svg"}
            alt={article.headline}
            width={1200}
            height={675}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

          {article.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="text-pretty">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
      </div>
      <div className="w-full">
          <HeraldFooter/>
      </div>
      </div>
    </div>
  )
}

