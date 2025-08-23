'use server';

/**
 * @fileOverview A motivational prompt AI agent.
 *
 * - generateMotivationalPrompt - A function that generates a motivational prompt.
 * - MotivationalPromptInput - The input type for the generateMotivationalPrompt function.
 * - MotivationalPromptOutput - The return type for the generateMotivationalPrompt function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MotivationalPromptInputSchema = z.object({
  habit: z.string().describe('The habit for which to generate a motivational prompt.'),
  streak: z.number().describe('The current streak for the habit.'),
});
export type MotivationalPromptInput = z.infer<typeof MotivationalPromptInputSchema>;

const MotivationalPromptOutputSchema = z.object({
  prompt: z.string().describe('The motivational prompt to display to the user.'),
});
export type MotivationalPromptOutput = z.infer<typeof MotivationalPromptOutputSchema>;

export async function generateMotivationalPrompt(input: MotivationalPromptInput): Promise<MotivationalPromptOutput> {
  return motivationalPromptFlow(input);
}

const prompt = ai.definePrompt({
  name: 'motivationalPromptPrompt',
  input: {schema: MotivationalPromptInputSchema},
  output: {schema: MotivationalPromptOutputSchema},
  prompt: `You are a motivational coach. Your goal is to encourage the user to continue their habit.

  The habit is: {{habit}}
  The current streak is: {{streak}}

  Generate a short, encouraging motivational message.  It should be no more than 2 sentences long.
  Make it personalized to the habit and streak.
  The message should be positive and uplifting.  For example, if the habit is "Drink Water" and the streak is 3, you might say "Great job drinking water for 3 days in a row! Keep it up and make it a long term habit!"
  If the streak is zero, encourage the user to start today.
  If the streak is 1, congratulate them on starting and encourage them to continue.
  If the streak is greater than 1, congratulate them on their progress and encourage them to continue.
  `,
});

const motivationalPromptFlow = ai.defineFlow(
  {
    name: 'motivationalPromptFlow',
    inputSchema: MotivationalPromptInputSchema,
    outputSchema: MotivationalPromptOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
