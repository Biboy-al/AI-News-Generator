"use client"

import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { StuffHeader } from "./stuff/stuff-header"
import { HeraldHeader } from "./herald/herald-header"
import { GuardianHeader } from "./guardian/guadian-header"

interface ArticleProps {
  article: {
    headline: string
    subheadline: string
    content: string
    imageUrl: string
    author: string
    date: string
  }
  template: "nz-herald" | "stuff" | "guardian" | "modern"
}

export function NewsArticle({ article, template }: ArticleProps) {
  const templateStyles = {
    "nz-herald": {
      container: "bg-white text-black",
      header: <HeraldHeader/>,
      headline: "font-serif text-4xl font-bold leading-tight text-black",
      subheadline: "font-serif text-xl text-gray-700",
      meta: "text-sm text-gray-600",
      content: "font-serif text-lg leading-relaxed text-gray-900",
      logo: "text-2xl font-bold text-red-600",
    },
    stuff: {
      container: "bg-white text-black",
      header: <StuffHeader/>,
      headline: "font-sans text-4xl font-black leading-tight text-black",
      subheadline: "font-sans text-xl font-medium text-gray-700",
      meta: "text-sm font-medium text-gray-600",
      content: "font-sans text-base leading-relaxed text-gray-900",
      logo: "text-2xl font-black text-green-600",
    },
    guardian: {
      container: "bg-white text-black",
      header: <GuardianHeader/>,
      headline: "font-serif text-5xl font-bold leading-tight text-black",
      subheadline: "font-serif text-xl italic text-gray-700",
      meta: "text-sm text-gray-600",
      content: "font-serif text-lg leading-loose text-gray-900",
      logo: "text-2xl font-bold text-blue-800",
    },
    modern: {
      container: "bg-gray-50 text-gray-900",
      header: <StuffHeader/>,
      headline: "font-sans text-5xl font-extrabold leading-tight text-gray-900",
      subheadline: "font-sans text-2xl font-light text-gray-600",
      meta: "text-sm font-medium text-gray-500",
      content: "font-sans text-base leading-relaxed text-gray-800",
      logo: "text-2xl font-bold text-gray-900",
    },
  }

  const styles = templateStyles[template]

  return (
    <div className={`min-h-full ${styles.container}`}>

      {/* Masthead */}
      <div className={`px-6 py-4 ${styles.header}`}>
        <div className="mx-auto max-w-4xl">

          {styles.header}
          {/* <div className={styles.logo}>
            {template === "nz-herald" && "The New Zealand Herald"}
            {template === "stuff" && "Stuff"}
            {template === "guardian" && "The Guardian"}
            {template === "modern" && "Modern News"}
          </div> */}
        </div>
      </div>

      {/* Article Content */}
      <article className="mx-auto max-w-4xl px-6 py-8">
        {/* Headline */}
        <h1 className={`mb-4 text-balance ${styles.headline}`}>{article.headline}</h1>

        {/* Subheadline */}
        <h2 className={`mb-6 text-pretty ${styles.subheadline}`}>{article.subheadline}</h2>

        {/* Meta Info */}
        <div className={`mb-6 flex items-center gap-4 ${styles.meta}`}>
          <span>By {article.author}</span>
          <span>•</span>
          <time>{article.date}</time>
        </div>

        <Separator className="mb-8" />

        {/* Featured Image */}
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

        {/* Article Body */}
        <div className={`space-y-6 ${styles.content}`}>
          {article.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="text-pretty">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  )
}
