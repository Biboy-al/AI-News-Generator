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
        container: "bg-white text-black",
        contentContainer: "flex flex-col items-center w-full max-w-9xl",
        headline: "font-serif text-4xl font-black leading-tight text-black",
        subheadline: "font-sans text-xl font-medium text-gray-700",
        meta: "text-sm font-medium ",
        content: "font-sans text-base leading-relaxed text-gray-900 text-xl md:w-3xl lg:w-3xl tracking-wide flex",
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
    // Main contaeinr
    <div className={`min-h-full flex flex-col items-center ${style.container}`}>

        {/* Header */}
        <div className="w-full flex items-center">
            <StuffHeader/>
        </div>

        {/* Content container div */}
        <div className={`${style.contentContainer}`}>

            {/* Article Content - matches header width */}
            <article className="mx-auto w-full max-w-[1400px] px-6 py-8 flex">
                <div>
                    {/* Headline */}
                    <h1 className={`mb-4 text-balance ${style.headline}`}>{article.headline}</h1>
                        
                    {/* Meta Info div */}
                    <div className={`mb-6 flex justify-between gap-4 ${style.meta}`}>
                        <div>
                            <p className="text-purple-600 font-bold">{article.author}</p>
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

                        <div className="w-4xl pr-4">

                            <h1 className="text-sm font-bold">Just in</h1>

                            {
                                randomTitles.map((title, index) => (
                                    <OtherArticle title={title} />
                                ))
                            }

                            
                        </div>

                        <div className="border-l pl-4">
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
                                <>
                                    <p key={index} className="text-pretty">
                                        {paragraph}
                                    </p>
                                    <br />
                                </>
     
            
                            ))}
                        </div>

                        <div>
                            
                        </div>

                    </div>
                </div>  

                <div className="min-w-xl">
                    awdawdawdad
                </div>
            </article>

            {/* <div>
                <h1>MORE FROM STUFF</h1>
            </div> */}

            <MoreFromStuff/>
            {/* Footer DIv */}
            <div className="w-full">
                <StuffFooter/>
            </div>
        </div>
    </div>
  );
}

