'use server';

/**
 * @fileOverview A motivational prompt AI agent.
 *
 * - generateMotivationalPrompt - A function that generates a motivational prompt.
 * - MotivationalPromptInput - The input type for the generateMotivationalPrompt function.
 * - MotivationalPromptOutput - The return type for the generateMotivationalPrompt function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const MotivationalPromptInputSchema = z.object({
  habit: z.string().describe('The habit for which to generate a motivational prompt.'),
  streak: z.number().describe('The current streak for the habit.'),
  level: z.number().describe('The current level for the habit.'),
  coachingStyle: z.enum(['encouraging', 'tough-love', 'zen']).default('encouraging').describe('The desired coaching style for the message.'),
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

  Your coaching style should be: {{coachingStyle}}.

  - If the style is "encouraging", be positive, friendly, and uplifting. Use exclamation points and emojis.
  - If the style is "tough-love", be direct, firm, and challenge the user. No excuses.
  - If the style is "zen", be calm, mindful, and reflective. Focus on the journey and inner peace.

  The user's habit is: {{habit}}
  The current streak is: {{streak}} days.
  The current level is: {{level}}.

  Generate a short, encouraging motivational message (no more than 2 sentences) that is personalized to the habit, streak, level, and coaching style.

  - If the streak is 0, encourage the user to start today.
  - If the streak is 1, congratulate them on starting.
  - If the streak is greater than 1, acknowledge their consistent effort.
  - If the level is high (5+), acknowledge their dedication and expertise.
  - If the level is low (1-2), encourage them on their new journey.

  Example for "Drink Water", streak 3, level 2:
  - Encouraging: "Yes! 3 days of staying hydrated in a row! You're already Level 2. Keep it flowing! 💧"
  - Tough-love: "Three days. Level 2. That's a start. Don't get comfortable. True consistency is built when no one is watching. Get it done."
  - Zen: "Three days of honoring your body with water. Notice how this simple act brings clarity. You are cultivating a garden of well-being, one sip at a time."
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
