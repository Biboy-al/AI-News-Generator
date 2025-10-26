"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Newspaper, ChevronLeft, ChevronRight} from "lucide-react"
import { NewsArticle } from "./news-article"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {z} from "zod"
import GenForm from "./form-inputs"
import { Checkbox } from "./ui/checkbox"
import { HeraldHeader } from "./herald/herald-header"
import { StuffHeader } from "./stuff/stuff-header"
import { GuardianHeader } from "./guardian/guardian-header"
import { ArticlePicker } from "./Article-picker"



type Template = "nz-herald" | "stuff" | "guardian" 

export interface GeneratedArticle {
  headline: string
  subheadline: string
  content: string
  imageUrl: string
  author: string
  date: string
}

export const formSchema = z.object({
  articlePrompt: z.string(),
  imagePrompt: z.string(),
  numArticle: z.number(),
  genMul: z.boolean()

})


const templates = [
  { id: "nz-herald" as Template, name: "NZ Herald", description: "Classic newspaper style" },
  { id: "stuff" as Template, name: "Stuff", description: "Modern news layout"},
  { id: "guardian" as Template, name: "Guardian", description: "Editorial style" },
  // { id: "modern" as Template, name: "Modern", description: "Clean minimal design" },
]

const templateHeader = {
  "nz-herald": <HeraldHeader/>,
  "stuff": (
    <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
      <StuffHeader/>
    </div>
  ),
  "guardian": <GuardianHeader/>
}

export function NewsGenerator() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template>("nz-herald")
  const [isGenerating, setIsGenerating] = useState(false)
  const [article, setArticle] = useState<GeneratedArticle | null>(null)
  const [articles, setArticles] = useState<GeneratedArticle[] | null>(null)
  const [isCollapsed, setIsCollapsed] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      articlePrompt: "",
      imagePrompt: "",
      numArticle: 1,
      genMul: false,
    },
  })

  const articlePickerOnClick = (article: GeneratedArticle) =>{

    setArticle(article)
  }

  // Callback function to generate one article
  const generateArticle = async (values: z.infer<typeof formSchema>) =>{



    try {
      // Creates a post request to the server
      const response = await fetch("/api/generate-article", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          articlePrompt: values.articlePrompt,
          imagePrompt: values.imagePrompt,
          template: selectedTemplate 
        }),
      })

      if (!response.ok) throw new Error("Failed to generate article")

      const data = await response.json()

      setArticles([data])
      setArticle(data)
    
    } catch (error) {
      console.error("Error generating article:", error)
    } finally {
      setIsGenerating(false)
    }
  }

    const generateMulArticle = async (values: z.infer<typeof formSchema>) => {
      setIsGenerating(true)
      
      try {
        const response = await fetch("/api/generate-multiple-articles", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            articlePrompt: values.articlePrompt,
            imagePrompt: values.imagePrompt,
            numArticles: values.numArticle
          }),
        })
    
        if (!response.ok) throw new Error("Failed to generate articles")
    
        const data = await response.json()
        setArticles(data.articles)
        setArticle(data.articles[0])
      } catch (error) {
        console.error("Error generating articles:", error)
      } finally {
        setIsGenerating(false)
      }
    }

  const onSubmit = async (values: z.infer<typeof formSchema>) => {

    console.log(values)

    setIsGenerating(true)

    if (!values.genMul){
      await generateArticle(values)
    }else{
      await generateMulArticle(values)
    }
    
  }

  

  return (
    <div className="flex min-h-screen flex-col">
    {/* Header - Now conditionally wraps based on template */}
    <header className="border-b border-border bg-card sticky top-0 z-50 w-full">
      {templateHeader[selectedTemplate]}
    </header>

    <div className="flex flex-1 flex-col lg:flex-row relative">
        {/* Input Section */}
        <div 
          className={`transition-all duration-300 ease-in-out border-b border-border bg-card lg:border-b-0 lg:border-r ${
            isCollapsed ? 'w-0 lg:w-0 overflow-hidden' : 'w-full lg:w-2/5'
          }`}
        >
          <div className="mx-auto flex h-full max-w-3xl flex-col p-6 lg:p-8">
            <div className="flex-1">
              <h2 className="mb-4 text-lg font-semibold">Generate Your Article</h2>

              {/* Template Selector */}
              <div className="mb-6">
                <label className="mb-3 block text-sm font-medium text-muted-foreground">Choose Template</label>
                <div className="grid grid-cols-2 gap-2">
                  {templates.map((template) => (
                    <Button
                      key={template.id}
                      variant={selectedTemplate === template.id ? "default" : "outline"}
                      className="h-auto flex-col items-start gap-1 p-3 text-left"
                      onClick={() => setSelectedTemplate(template.id)}
                    >
                      <span className="font-semibold">{template.name}</span>
                      <span className="text-xs text-muted-foreground">{template.description}</span>
                    </Button>
                  ))}
                </div>
              </div>
                
              {/* Form to generate articles */}
              <GenForm form={form} onSubmit={onSubmit} isGenerating={isGenerating} />
              
              <ArticlePicker articles={articles ? articles : []} onClick={articlePickerOnClick}/>


            </div>
          </div>
        </div>

        {/* Toggle Button */}
        <Button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute left-0 top-1/2 z-10 h-16 w-8 -translate-y-1/2 rounded-l-none rounded-r-md border-l-0 lg:left-auto"
          style={{ left: isCollapsed ? '0' : 'calc(40% - 1rem)' }}
          variant="outline"
          size="sm"
        >
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>

        {/* Preview Section */}
        <div className="flex-1 overflow-auto bg-background bg-white">
          {article ? (
            <div>
          
              <NewsArticle article={article} template={selectedTemplate} />

            </div>
            
          ) : (
            
            <div className="flex h-full items-center justify-center p-8">
              
              <div className="text-center">
                <Newspaper className="mx-auto mb-4 h-16 w-16 text-muted-foreground/50" />
                <h3 className="mb-2 text-lg font-semibold text-muted-foreground">No Article Generated Yet</h3>
                <p className="text-sm text-muted-foreground">
                  Enter a topic and select a template to generate your AI news article
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}