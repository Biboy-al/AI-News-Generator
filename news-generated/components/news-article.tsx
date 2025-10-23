"use client"

import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { StuffHeader } from "./stuff/stuff-header"
import { HeraldHeader } from "./herald/herald-header"
import { GuardianHeader } from "./guardian/guardian-header"
import { Button } from "./ui/button"
import { Link } from 'lucide-react';
import { StuffFooter } from "./stuff/stuff-footer"
import { HeraldFooter } from "./herald/herald-footer"
import { StuffLayout } from "./stuff/stuff-layout"
import { GeneratedArticle } from "./news-generator"
import { HeraldLayout } from "./herald/herald-layout"
import { GuardianLayout } from "./guardian/guardian-layout"

export interface ArticleProps {
  article: GeneratedArticle
  template: "nz-herald" | "stuff" | "guardian"
}
export function NewsArticle({ article, template }: ArticleProps) {
  // const templateStyles = {
  //   "nz-herald": {
  //     container: "bg-white text-black",
  //     contentContainer: "bg-white text-black",
  //     header: <HeraldHeader/>,
  //     footer: <HeraldFooter/>,
  //     headline: "font-serif text-4xl font-bold leading-tight text-black",
  //     subheadline: "font-serif text-xl text-gray-700",
  //     meta: "text-sm text-gray-600",
  //     content: "font-serif text-lg leading-relaxed text-gray-900",
  //     logo: "text-2xl font-bold text-red-600",
  //   },
  //   stuff: {
  //     container: "bg-white text-black",
  //     contentContainer: "flex flex-col items-center w-full max-w-5xl",
  //     header: <StuffHeader/>,
  //     footer: <StuffFooter/>,
  //     headline: "font-serif text-4xl font-black leading-tight text-black",
  //     subheadline: "font-sans text-xl font-medium text-gray-700",
  //     meta: "text-sm font-medium text-gray-600",
  //     content: "font-sans text-base leading-relaxed text-gray-900 p-4 ml-16 border-l text-xl tracking-wide",
  //     logo: "text-2xl font-black text-green-600",
  //   },
  //   guardian: {
  //     container: "bg-white text-black",
  //     contentContainer: "bg-white text-black",
  //     header: <GuardianHeader/>,
  //     footer: <StuffFooter/>,
  //     headline: "font-serif text-5xl font-bold leading-tight text-black",
  //     subheadline: "font-serif text-xl italic text-gray-700",
  //     meta: "text-sm text-gray-600",
  //     content: "font-serif text-lg leading-loose text-gray-900",
  //     logo: "text-2xl font-bold text-blue-800",
  //   },
  //   modern: {
  //     container: "bg-gray-50 text-gray-900",
  //     contentContainer: "bg-white text-black",
  //     header: <StuffHeader/>,
  //     footer: <StuffFooter/>,
  //     headline: "font-sans text-5xl font-extrabold leading-tight text-gray-900",
  //     subheadline: "font-sans text-2xl font-light text-gray-600",
  //     meta: "text-sm font-medium text-gray-500",
  //     content: "font-sans text-base leading-relaxed text-gray-800",
  //     logo: "text-2xl font-bold text-gray-900",
  //   },
  // }

    const templateStyles = {
    "nz-herald": {
      layout:<HeraldLayout article={article} />
    },
    stuff: {
      layout:<StuffLayout article={article}/>
    },
    guardian: {
      layout:<GuardianLayout article={article}/>
    }
  }

  const styles = templateStyles[template]

  return (
    <>
      {styles.layout}
    </>





    // <div className={`min-h-full ${styles.container}`}>

    //   <div className="flex flex-col items-center">

    //   <div className="w-full">
    //       {styles.header}
    //   </div>


    // <div className={`${styles.contentContainer}`}>

    //   {/* Article Content - matches header width */}
    //   <article className="mx-auto w-full max-w-[1400px] px-6 py-8">
    //     {/* Headline */}
    //     <h1 className={`mb-4 text-balance ${styles.headline}`}>{article.headline}</h1>

    //     {/* Subheadline */}
    //     { template === "guardian" &&
    //       <h2 className={`mb-6 text-pretty ${styles.subheadline}`}>{article.subheadline}</h2>
    //     }
        
    //     {/* Meta Info */}
    //     <div className={`mb-6 flex justify-between gap-4 ${styles.meta}`}>
    //       <div>
    //         <p>{article.author}</p>
    //         <time>{article.date}</time>
    //       </div>
          
    //       <button className="flex items-center gap-4 border bg-white border-gray-300 text-black rounded-full px-4 py-1 text-sm hover:bg-gray-50 transition">
    //         <Link size={20}/>
    //         Copy Link
    //         </button>
    //     </div>

    //     <Separator className="mb-8" />


    //     {/* Article Body */}
    //     <div className={`space-y-6 ${styles.content}`}>

    //     <div>
    //       awdawd
    //     </div>

    //     <div className="mb-8 overflow-hidden rounded-lg">
    //       <Image
    //         src={article.imageUrl || "/placeholder.svg"}
    //         alt={article.headline}
    //         width={1200}
    //         height={675}
    //         className="h-auto w-full object-cover"
    //         priority
    //       />
    //     </div>

    //       {article.content.split("\n\n").map((paragraph, index) => (
    //         <p key={index} className="text-pretty">
    //           {paragraph}
    //         </p>
    //       ))}
    //     </div>
    //   </article>
    //   </div>
    //   <div className="w-full">
    //     {
    //       styles.footer
    //     }
    //   </div>
    //   </div>
    // </div>
  )
}