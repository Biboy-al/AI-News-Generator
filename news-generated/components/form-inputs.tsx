import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { formSchema } from "./news-generator";
import z from "zod";
import { UseFormReturn } from "react-hook-form";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
  

interface formProps {
    
    form: UseFormReturn<z.infer<typeof formSchema>>
    onSubmit: (values: z.infer<typeof formSchema>) => Promise<void>
    isGenerating: boolean
}

const GenForm = ({form, onSubmit, isGenerating}: formProps) =>{


    return(

        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

            <FormField
                control={form.control}
                name="articlePrompt"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Article Prompt</FormLabel>
                        <FormControl>
                        <Textarea
                            {...field}
                            className="min-h-[200px] resize-none"
                            disabled={isGenerating}
                        />
                        </FormControl>
                        <FormDescription>
                            Enter your news topic or story idea...
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="imagePrompt"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Image Prompt</FormLabel>
                        <FormControl>
                        <Textarea
                            {...field}
                            className="min-h-[200px] resize-none"
                            disabled={isGenerating}
                        />
                        </FormControl>
                        <FormDescription>
                            Enter the context for the images..
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />

          <Button type="submit"  disabled={isGenerating} >Generate Article</Button>
        </form>
    </Form>
    );
}

export default GenForm;