'use server';

/**
 * @fileOverview An AI flow that generates a symbolic "victory" image for a habit milestone.
 *
 * - generateHabitVictoryImage - A function that handles the image generation process.
 * - GenerateHabitVictoryImageInput - The input type for the function.
 * - GenerateHabitVictoryImageOutput - The return type for the function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const GenerateHabitVictoryImageInputSchema = z.object({
  habitName: z.string().describe("The name of the habit the user achieved a milestone in. e.g., 'Exercise', 'Read a Book'"),
  theme: z.string().default('victory').describe("The theme of the image to generate, such as 'victory', 'milestone', 'serenity', 'strength'."),
});
export type GenerateHabitVictoryImageInput = z.infer<typeof GenerateHabitVictoryImageInputSchema>;

const GenerateHabitVictoryImageOutputSchema = z.object({
  imageDataUri: z.string().describe("The generated image as a data URI."),
  prompt: z.string().describe("The prompt that was used to generate the image."),
});
export type GenerateHabitVictoryImageOutput = z.infer<typeof GenerateHabitVictoryImageOutputSchema>;


export async function generateHabitVictoryImage(input: GenerateHabitVictoryImageInput): Promise<GenerateHabitVictoryImageOutput> {
  return imageGeneratorFlow(input);
}


const imageGeneratorFlow = ai.defineFlow(
  {
    name: 'imageGeneratorFlow',
    inputSchema: GenerateHabitVictoryImageInputSchema,
    outputSchema: GenerateHabitVictoryImageOutputSchema,
  },
  async ({ habitName, theme }) => {
    
    const imagePrompt = `Create a stunning, symbolic, artistic, and visually pleasing digital art image representing the concept of "${theme}" for the habit of "${habitName}". 
    
    The style should be inspiring and epic, like a piece of concept art from a fantasy game. It should be beautiful and something a user would be proud to share. Avoid text and human faces.
    
    Focus on symbolism. For example:
    - For "Exercise", think of a majestic mountain, a powerful lion, or a soaring eagle.
    - For "Meditate", think of a serene, tranquil lake, a levitating monk, or a glowing lotus flower.
    - For "Read a Book", think of an ancient, wise tree with leaves made of books, or a vast library stretching into the clouds.

    The image should be vibrant, with a clear focal point and a sense of accomplishment.
    `;

    const { media } = await ai.generate({
      model: 'googleai/imagen-4.0-fast-generate-001',
      prompt: imagePrompt,
      config: {
        aspectRatio: '1:1', // Square image is good for sharing
      }
    });

    if (!media.url) {
      throw new Error('Image generation failed to produce an image.');
    }
    
    return {
      imageDataUri: media.url,
      prompt: imagePrompt, // Return the prompt for debugging or potential future use
    };
  }
);
