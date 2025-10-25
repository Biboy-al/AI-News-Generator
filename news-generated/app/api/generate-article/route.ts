import { generateText } from "ai"
import { google } from '@ai-sdk/google';



export async function POST(req: Request) {

  const model = google('gemini-2.5-flash');
  const model_image = google('gemini-2.5-flash-image');

  try {
    const { articlePrompt, imagePrompt } = await req.json()

    // Generate article content

    console.log(req.json())

    const { text } = await generateText({
      model: model,
      prompt: `You are a professional news journalist. Write a compelling news article based on this topic: "${articlePrompt}".

      Format your response as follows:
      HEADLINE: [A compelling, attention-grabbing headline]
      SUBHEADLINE: [A brief subheadline that expands on the headline]
      CONTENT: [The full article content with multiple paragraphs. Write smaller 6-24 chucks of detailed, engaging news content consisting of 1-2 sentences for each chuck. Separate chuck with double line breaks]

      Make it sound professional and journalistic. Include relevant details, quotes, and context.`,
    })


    // Parse the generated text
    const headlineMatch = text.match(/HEADLINE:\s*(.+?)(?=\n|$)/i)
    const subheadlineMatch = text.match(/SUBHEADLINE:\s*(.+?)(?=\n|$)/i)
    const contentMatch = text.match(/CONTENT:\s*([\s\S]+)/i)

    const headline = headlineMatch?.[1]?.trim() || "Breaking News"
    const subheadline = subheadlineMatch?.[1]?.trim() || "Latest developments in the story"
    const content = contentMatch?.[1]?.trim() || text
    const imageLoc = `Professional news photography for article: ${headline}. The image should be ${imagePrompt} news-worthy.`

    let imageUrl = `/placeholder.svg?height=675&width=1200&query=${encodeURIComponent(imageLoc)}`

// Generate image based on the headline
// try {
//   const result = await generateText({
//     model: model_image,
//     prompt: imagePrompt,
//   });

//   if (result.files && result.files.length > 0) {
//     for (const file of result.files) {
//       if (file.mediaType.startsWith('image/')) {
//         // Convert base64 to data URL
//         if ('base64Data' in file) {
//           imageUrl = `data:${file.mediaType};base64,${(file as any)['base64Data']}`
//         }
//         console.log('Image URL created successfully')
//         break;
//       }
//     }
//   }
// } catch (imageError) {
//   console.error('Image generation failed:', imageError)
//   // Continue with placeholder image
// }
    
    // Extract the image from the result
    
    
    // console.log('Result:', result)
    // console.log('Files:', result.files)
    
    
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
