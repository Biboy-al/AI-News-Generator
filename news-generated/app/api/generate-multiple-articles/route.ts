import { generateText } from "ai"
import { google } from '@ai-sdk/google';

export async function POST(req: Request) {
  const model = google('gemini-2.5-flash');
  const model_image = google('gemini-2.5-flash-image');

  try {
    const { articlePrompt, imagePrompt, numArticles } = await req.json()

    console.log('Generating', numArticles, 'articles for:', articlePrompt)

    const articles = []
    let previousContext = ""

    for (let i = 0; i < numArticles; i++) {
      // Build context from previous articles
      const contextPrompt = i === 0 
        ? `You are a professional news journalist. Write the FIRST article in a developing news story based on this topic: "${articlePrompt}".`
        : `You are a professional news journalist. This is article ${i + 1} in a developing news story. 
        
        Previous article context: ${previousContext}
        
        Write a follow-up article that builds on this story with NEW developments, updates, or angles. DO NOT repeat the same information.`

      const { text } = await generateText({
        model: model,
        prompt: `${contextPrompt}

        Format your response as follows:
        HEADLINE: [A compelling, attention-grabbing headline that reflects this is ${i === 0 ? 'breaking news' : `an update/follow-up (article ${i + 1})`}]
        SUBHEADLINE: [A brief subheadline that expands on the headline]
        CONTENT: [The full article content with multiple paragraphs. Write 6-24 chunks of detailed, engaging news content consisting of 1-2 sentences for each chunk. Separate chunks with double line breaks]

        Make it sound professional and journalistic. Include relevant details, quotes, and context.${i > 0 ? ' Focus on NEW information and developments.' : ''}`,
      })

      // Parse the generated text
      const headlineMatch = text.match(/HEADLINE:\s*(.+?)(?=\n|$)/i)
      const subheadlineMatch = text.match(/SUBHEADLINE:\s*(.+?)(?=\n|$)/i)
      const contentMatch = text.match(/CONTENT:\s*([\s\S]+)/i)

      const headline = headlineMatch?.[1]?.trim() || `Breaking News - Story ${i + 1}`
      const subheadline = subheadlineMatch?.[1]?.trim() || "Latest developments in the story"
      const content = contentMatch?.[1]?.trim() || text
      const imageLoc = `Professional news photography for article: ${headline}. The image should be ${imagePrompt} news-worthy.`

      let imageUrl = `/placeholder.svg?height=675&width=1200&query=${encodeURIComponent(imageLoc)}`

      // Generate image based on the headline and image prompt
      try {
        const result = await generateText({
          model: model_image,
          prompt: `${imagePrompt}. Context: ${headline}`,
        });

        if (result.files && result.files.length > 0) {
          for (const file of result.files) {
            if (file.mediaType.startsWith('image/')) {
              // Convert base64 to data URL
              if ('base64Data' in file) {
                imageUrl = `data:${file.mediaType};base64,${(file as any)['base64Data']}`
              }
              console.log(`Image URL created successfully for article ${i + 1}`)
              break;
            }
          }
        }
      } catch (imageError) {
        console.error(`Image generation failed for article ${i + 1}:`, imageError)
        // Continue with placeholder image
      }

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
      
      // Add time offset for each article (simulate updates over time)
      const now = new Date()
      now.setHours(now.getHours() - (numArticles - 1 - i) * 2) // Each article 2 hours apart
      
      const date = now.toLocaleDateString("en-NZ", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })

      const article = {
        headline,
        subheadline,
        content,
        imageUrl,
        author,
        date,
      }

      articles.push(article)

      // Update context for next article
      previousContext = `Headline: ${headline}\nKey points: ${content.substring(0, 200)}...`
    }
    
    return Response.json({ articles })
  } catch (error) {
    console.error("[v0] Error in generate-multiple-articles API:", error)
    return Response.json({ error: "Failed to generate articles" }, { status: 500 })
  }
}