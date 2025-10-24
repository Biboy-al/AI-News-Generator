"use client"

import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { Link } from 'lucide-react';
import { GeneratedArticle } from "../news-generator";
import { StuffHeader } from "./stuff-header";
import { StuffFooter } from "./stuff-footer";
import OtherArticle from "./other-art";
import { MoreFromStuff } from "./more-from-stuff";

const style = {
        container: "text-black",
        contentContainer: "w-full max-w-[1400px] mx-auto px-6",
        headline: "font-serif text-4xl font-black leading-tight text-black",
        subheadline: "font-sans text-xl font-medium text-gray-700",
        meta: "text-sm font-medium ",
        content: "font-sans text-base leading-relaxed text-gray-900 text-xl tracking-wide flex",
        logo: "text-2xl font-black text-green-600",
}

const nzArticleTitles: string[] = [
    "New Zealand Launches AI Framework to Strengthen Digital Safety",
    "Auckland Housing Market Sees Signs of Recovery After Two-Year Slump",
    "Government Unveils New Climate Policy Targeting Zero Emissions by 2040",
    "Kiwi Startups Lead the Pacific in Green Tech Innovation",
    "Cybersecurity Incidents Rise Across NZ Businesses Amid Global Threat Surge"
  ];

const randomTitles = nzArticleTitles
  .sort(() => Math.random() - 0.5)
  .slice(0, 3);
  

export function StuffLayout({article} : {article : GeneratedArticle}) {

  return (
    <div className={`flex flex-col items-center ${style.container}`}>

        {/* Header - Centered with max-width */}
        <div className="w-full max-w-[1400px] mx-auto px-6">
            <StuffHeader/>
        </div>

        <hr className="w-full border-t border-gray-300" />

        {/* Content container - Same width as header */}
        <div className={`${style.contentContainer}`}>

            {/* Article Content */}
            <article className="flex py-8">
                <div className="flex-1">
                    {/* Headline */}
                    <h1 className={`mb-4 text-balance ${style.headline}`}>{article.headline}</h1>
                        
                    {/* Meta Info div */}
                    <div className={`mb-6 flex justify-between gap-4 ${style.meta}`}>
                        <div>
                            <p className="text-purple-600 font-bold">{article.author}</p>
                            <time>{article.date}</time>
                        </div>
    
                        <button className="flex items-center gap-2 border bg-white border-gray-300 text-black rounded-full px-4 py-1 text-sm hover:bg-gray-50 transition">
                            <Link size={16}/>
                            Copy Link
                        </button>
                    </div>

                    <Separator className="mb-8" />

                    {/* Article Body */}
                    <div className={`space-y-6 ${style.content}`}>

                        <div className="w-32 pr-4 flex-shrink-0">
                            <h1 className="text-sm font-bold mb-4">Just in</h1>

                            {
                                randomTitles.map((title, index) => (
                                    <OtherArticle key={index} title={title} />
                                ))
                            }
                        </div>

                        <div className="flex-1">
                            
                            <div className="pl-4 border-l">
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
                                <div className="space-y-4">
                                    {article.content.split("\n\n").map((paragraph, index) => (
                                        <p key={index} className="text-pretty">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>

                            </div>

                            {/* More From Stuff - Full width background, centered content */}
                            <div className="w-full bg-gray-50">
                                <MoreFromStuff/>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className=" w-1/3">
                    
                </div>
            </article>
        </div>

        {/* Footer - Centered with max-width */}

        <hr className="w-full border-t-4 border-purple-600" />

        <div className="w-full max-w-[1400px] mx-auto px-6">
            <StuffFooter/>
        </div>
    </div>
  );
}