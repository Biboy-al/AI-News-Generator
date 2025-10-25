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
import { Input } from "./ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
  

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

            <FormField
                control={form.control}
                name="genMul"
                render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                            <Checkbox
                                checked={field.value}
                                onCheckedChange={(checked) => {
                                    field.onChange(checked);
                                    if (!checked) {
                                        form.setValue("numArticle", 1);
                                    }
                                }}
                            />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                            <FormLabel>
                                Generate multiple articles in the same storyline
                            </FormLabel>
                            <FormDescription>
                                Check this to generate multiple related articles
                            </FormDescription>
                        </div>
                    </FormItem>
                )}
            />
            
            <FormField
                control={form.control}
                name="numArticle"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Number of Articles</FormLabel>
                        <FormControl>
                        <Input
                            {...field}
                            type="number"
                            value={field.value}
                            onChange={(e) => field.onChange(Number(e.target.value))}
                            disabled={!form.watch("genMul") || isGenerating}
                            />
                        </FormControl>
                        <FormDescription>
                            Number of articles to generate in the same storyline
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />

          <Button type="submit" disabled={isGenerating}>
            {isGenerating ? "Generating..." : "Generate Article"}
          </Button>
        </form>
    </Form>
    );
}

export default GenForm;