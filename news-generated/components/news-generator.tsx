"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Newspaper } from "lucide-react"
import { NewsArticle } from "./news-article"

type Template = "nz-herald" | "stuff" | "guardian" | "modern"

interface GeneratedArticle {
  headline: string
  subheadline: string
  content: string
  imageUrl: string
  author: string
  date: string
}

const templates = [
  { id: "nz-herald" as Template, name: "NZ Herald", description: "Classic newspaper style" },
  { id: "stuff" as Template, name: "Stuff", description: "Modern news layout" },
  { id: "guardian" as Template, name: "Guardian", description: "Editorial style" },
  { id: "modern" as Template, name: "Modern", description: "Clean minimal design" },
]

export function NewsGenerator() {
  const [prompt, setPrompt] = useState("")
  const [selectedTemplate, setSelectedTemplate] = useState<Template>("nz-herald")
  const [isGenerating, setIsGenerating] = useState(false)
  const [article, setArticle] = useState<GeneratedArticle | null>(null)

  const handleGenerate = async () => {
    if (!prompt.trim()) return

    setIsGenerating(true)
    try {
      const response = await fetch("/api/generate-article", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, template: selectedTemplate }),
      })

      if (!response.ok) throw new Error("Failed to generate article")

      const data = await response.json()
      setArticle(data)
    } catch (error) {
      console.error("[v0] Error generating article:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Newspaper className="h-8 w-8" />
            <h1 className="text-2xl font-bold text-balance">AI News Generator</h1>
          </div>
        </div>
      </header>

      <div className="flex flex-1 flex-col lg:flex-row">
        {/* Input Section */}
        <div className="w-full border-b border-border bg-card lg:w-2/5 lg:border-b-0 lg:border-r">
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

              {/* Prompt Input */}

              {/* This is where the inputs are given */}
              <div className="mb-4">
                <label className="mb-2 block text-sm font-medium text-muted-foreground">Article Topic</label>
                <Textarea
                  placeholder="Enter your news topic or story idea... (e.g., 'Breaking: New technology revolutionizes renewable energy')"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[200px] resize-none"
                  disabled={isGenerating}
                />
              </div>

                {/* Button to generate aritcle  */}
              <Button onClick={handleGenerate} disabled={!prompt.trim() || isGenerating} className="w-full" size="lg">
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating Article...
                  </>
                ) : (
                  "Generate Article"
                )}
              </Button>
            </div>

            {/* Example Prompts */}
            {!article && (
              <div className="mt-8 rounded-lg bg-muted/50 p-4">
                <h3 className="mb-2 text-sm font-semibold">Example Topics</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Climate change summit reaches historic agreement</li>
                  <li>• Local startup raises $50M in funding round</li>
                  <li>• New study reveals surprising health benefits</li>
                  <li>• City announces major infrastructure project</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Preview Section */}
        <div className="flex-1 overflow-auto bg-background">
          {article ? (
            <NewsArticle article={article} template={selectedTemplate} />
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
