import * as React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Button } from "./ui/button"
import { GeneratedArticle } from "./news-generator"

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

export function ArticlePicker({articles, onClick}: {articles: GeneratedArticle[] | null, onClick?: (article: GeneratedArticle) => void}) {
    return (
      <div className="py-4">  
          <h1>Articles</h1>
          <ScrollArea 
            className={`h-72 w-full rounded-md border bg-gray-100 ${!articles ? 'opacity-50 pointer-events-none' : ''}`}
          >
            <div className="p-4">
              {!articles ? (
                <p className="text-gray-500 text-center py-8">No articles generated yet</p>
              ) : (
                articles.map((article, index) => (
                  <React.Fragment key={index}>
                    <Button 
                        variant="ghost" 
                        className="w-full justify-start text-left h-auto py-2 whitespace-normal break-words"
                        onClick={() => onClick?.(article)}
                    >
                        {`${index + 1}. ${article.headline}`}
                    </Button>
                    <Separator className="my-2" />
                  </React.Fragment>
                ))
              )}
            </div>
          </ScrollArea>
      </div>
    )
  }