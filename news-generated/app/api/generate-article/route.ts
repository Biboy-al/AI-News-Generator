import { generateText } from "ai"

export async function POST(req: Request) {
  try {
    const { prompt, template } = await req.json()

    // Generate article content
    const { text } = await generateText({
      model: "openai/gpt-4o-mini",
      prompt: `You are a professional news journalist. Write a compelling news article based on this topic: "${prompt}".

Format your response as follows:
HEADLINE: [A compelling, attention-grabbing headline]
SUBHEADLINE: [A brief subheadline that expands on the headline]
CONTENT: [The full article content with multiple paragraphs. Write 4-6 paragraphs of detailed, engaging news content. Separate paragraphs with double line breaks.]

Make it sound professional and journalistic. Include relevant details, quotes, and context.`,
    })

    // Parse the generated text
    const headlineMatch = text.match(/HEADLINE:\s*(.+?)(?=\n|$)/i)
    const subheadlineMatch = text.match(/SUBHEADLINE:\s*(.+?)(?=\n|$)/i)
    const contentMatch = text.match(/CONTENT:\s*([\s\S]+)/i)

    const headline = headlineMatch?.[1]?.trim() || "Breaking News"
    const subheadline = subheadlineMatch?.[1]?.trim() || "Latest developments in the story"
    const content = contentMatch?.[1]?.trim() || text

    // Generate image based on the headline
    const imagePrompt = `Professional news photography for article: ${headline}. Photorealistic, high quality, news-worthy image.`
    const imageUrl = `/placeholder.svg?height=675&width=1200&query=${encodeURIComponent(imagePrompt)}`

    // Generate author name and date
    const authors = [
      "Sarah Mitchell",
      "James Thompson",
      "Emma Richardson",
      "Michael Chen",
      "Olivia Parker",
      "David Williams",
    ]
    const author = authors[Math.floor(Math.random() * authors.length)]
    const date = new Date().toLocaleDateString("en-NZ", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })

    return Response.json({
      headline,
      subheadline,
      content,
      imageUrl,
      author,
      date,
    })
  } catch (error) {
    console.error("[v0] Error in generate-article API:", error)
    return Response.json({ error: "Failed to generate article" }, { status: 500 })
  }
}
