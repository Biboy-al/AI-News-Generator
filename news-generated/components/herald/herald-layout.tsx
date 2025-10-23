"use client"

import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { Link } from 'lucide-react';
import { GeneratedArticle } from "../news-generator";
import { HeraldHeader } from "./herald-header";
import { HeraldFooter } from "./herald-footer";

const style = {
      container: "bg-white text-black",
      contentContainer: "bg-white text-black",
      header: <HeraldHeader/>,
      footer: <HeraldFooter/>,
      headline: "font-serif text-4xl font-bold leading-tight text-black",
      subheadline: "font-serif text-xl text-gray-700",
      meta: "text-sm text-gray-600",
      content: "font-serif text-lg leading-relaxed text-gray-900",
      logo: "text-2xl font-bold text-red-600",
  }


export function HeraldLayout({article} : {article : GeneratedArticle}) {

  return (
    // Main contaeinr
    <div className={`min-h-full flex flex-col items-center ${style.container}`}>

        {/* Header */}
        <div className="w-full">
            <HeraldHeader/>
        </div>

        {/* Content container div */}
        <div className={`${style.contentContainer}`}>

            {/* Article Content - matches header width */}
            <article className="mx-auto w-full max-w-[1400px] px-6 py-8">
                {/* Headline */}
                <h1 className={`mb-4 text-balance ${style.headline}`}>{article.headline}</h1>
                    
                {/* Meta Info div */}
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

                    {/* Image */}
                    <div className="mb-8 overflow-hidden rounded-lg">
                        <Image
                        src={article.imageUrl || "/placeholder.svg"}
                        alt={article.headline}
                        width={1200}
                        height={675}
                        className="h-auto w-full object-cover"
                        priority/>

                    </div>
                    
                    {/* Paragraph */}
                    {article.content.split("\n\n").map((paragraph, index) => (
                        <p key={index} className="text-pretty">
                        {paragraph}
                        </p>
                    ))}
                </div>
            </article>
            {/* Footer DIv */}
            <div className="w-full">
                <HeraldFooter/>
            </div>
        </div>
    </div>
  );
}

