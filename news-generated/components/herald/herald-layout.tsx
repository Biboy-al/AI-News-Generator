"use client"

import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { Bookmark, Gift, Share2, Volume2 } from 'lucide-react';
import { GeneratedArticle } from "../news-generator";
import { HeraldHeader } from "./herald-header";
import { HeraldFooter } from "./herald-footer";
import { Button } from "../ui/button";
import OtherArticle from "./other-art";
import { RecommendedForYou } from "./recommened-for-you";
import HeraldLogo from '@/components/svg/herald_logo.svg'
import Link from "next/link";

const style = {
    container: "bg-white text-black pt-24",
    contentContainer: " w-10/11 flex",
    header: <HeraldHeader/>,
    footer: <HeraldFooter/>,
    headline: "font-serif text-4xl font-bold leading-tight text-black",
    subheadline: "font-serif text-xl text-gray-700",
    meta: "text-sm text-gray-600",
    content: "font-serif text-lg leading-relaxed text-gray-900",
    logo: "text-2xl font-bold text-red-600",
}

  interface ArticleData {
    title: string;
    category: string;
  }
  
  const nzArticles: ArticleData[] = [
    { title: "New Zealand Launches AI Framework to Strengthen Digital Safety", category: "Technology" },
    { title: "Auckland Housing Market Sees Signs of Recovery After Two-Year Slump", category: "Property" },
    { title: "Government Unveils New Climate Policy Targeting Zero Emissions by 2040", category: "Environment" },
    { title: "Kiwi Startups Lead the Pacific in Green Tech Innovation", category: "Business" },
    { title: "Cybersecurity Incidents Rise Across NZ Businesses Amid Global Threat Surge", category: "Technology" },
    { title: "Wellington Transport Agency Announces Major Rail Upgrade Plan", category: "Transport" },
    { title: "All Blacks Prepare for Crucial Rugby Championship Showdown", category: "Sport" },
    { title: "Māori Language Week Celebrations Draw Record Participation Nationwide", category: "Culture" },
    { title: "Christchurch Residents Rally Against Proposed Port Expansion", category: "Local News" },
    { title: "Kiwi Scientists Make Breakthrough in Native Bird Conservation", category: "Environment" },
    { title: "Cost of Living Crisis: Supermarkets Face Scrutiny Over Price Gouging Claims", category: "Business" },
  ];
  
  const randomArticles = nzArticles
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);


export function HeraldLayout({article} : {article : GeneratedArticle}) {

  return (
    // Main contaeinr
    <div className={`min-h-full flex flex-col items-center ${style.container}`}>

        {/* Content container div */}
        <div className={`${style.contentContainer}`}>

            <div className="w-1/6">

            </div>

            {/* Article Content - matches header width */}
            <article className="flex mx-auto gap-16 w-3/5">

                <div className="flex flex-col">

                    <div className="flex pb-4">
                        <span className="text-gray-700 hover:text-gray-900 cursor-pointer text-sm">Home</span>
                        <p>/</p>
                        <span className="text-gray-700 hover:text-gray-900 cursor-pointer text-sm">Breaking News</span>

                    </div>

                    {/* Headline */}
                    <h1 className={`mb-4 text-balance ${style.headline}`}>{article.headline}</h1>
                        
                    {/* Meta Info div */}
                    <div className={`mb-6 flex justify-between gap-4 ${style.meta}`}>
                        <div className="flex gap-2 items-center">
                            <HeraldLogo className="h-12 w-12 p-4 fill-white bg-black rounded-full" />
                            <div>
                                <p>{article.author}</p>
                                <time>{article.date}</time>
                            </div>
                        </div>
                    </div>

                    <Separator className="mb-8" />
                        
                    <div className="mb-6 flex justify-end w-full">
                        
                        <Button variant="ghost" size="sm" className="flex items-center gap-2">
                            <Gift size={18} />
                            <span>Gift article</span>
                        </Button>
                        
                        <Button variant="ghost" size="sm" className="flex items-center gap-2">
                            <Bookmark size={18} />
                            <span>Save</span>
                        </Button>
                        
                        <Button variant="ghost" size="sm" className="flex items-center gap-2">
                            <Share2 size={18} />
                            <span>Share</span>
                        </Button>
                    </div>

                    {/* Article Body */}
                    <div className={`space-y-6 border-b ${style.content}`}>

                        {/* Image */}
                        <div className="mb-8 overflow-hidden rounded-lg">
                            <Image
                            src={article.imageUrl || "/placeholder.svg"}
                            alt={article.headline}
                            width={300}
                            height={375}
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
                </div>

                <div className="flex items-center  w-4/7 ">
            
                    <div className="flex flex-col">
                        <h1 className="font-bold text-2xl pb-6 ">Latest from The News</h1>

                        {randomArticles.map((article, index) => (
                            <OtherArticle 
                                key={index} 
                                title={article.title}
                                category={article.category}
                            />
                        ))}
                    </div>
                </div>
            </article>

        </div>
        <RecommendedForYou/>

        {/* Footer DIv */}
        <div className="w-full">
            <HeraldFooter/>
        </div>
    </div>
  );
}

