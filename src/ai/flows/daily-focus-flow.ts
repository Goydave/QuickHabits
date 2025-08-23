'use server';

/**
 * @fileOverview An AI flow that generates a single "Daily Focus" prompt based on the user's habits.
 *
 * - generateDailyFocus - A function that handles the daily focus suggestion process.
 * - DailyFocusInput - The input type for the generateDailyFocus function.
 * - DailyFocusOutput - The return type for the generateDailyFocus function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import type { Habit } from '@/lib/types';
import { getXpForNextLevel } from '@/lib/game-mechanics';

// We need to define the Habit schema using Zod for the AI prompt.
// We can't import the TypeScript type directly into the prompt definition.
const HabitSchema = z.object({
  id: z.string(),
  name: z.string(),
  type: z.enum(['build', 'quit']).optional().default('build'),
  currentStreak: z.number(),
  longestStreak: z.number(),
  level: z.number(),
  xp: z.number(),
  isArchived: z.boolean().optional().default(false),
});

const DailyFocusInputSchema = z.object({
  habits: z.array(HabitSchema).describe("The user's list of active habits."),
});
export type DailyFocusInput = z.infer<typeof DailyFocusInputSchema>;


const DailyFocusOutputSchema = z.object({
  headline: z.string().describe("A short, catchy headline for the daily focus. e.g., 'Today's Quest' or 'Your Daily Focus'"),
  prompt: z.string().describe('The encouraging and strategic daily focus message for the user.'),
  focusedHabitId: z.string().describe('The ID of the habit that the prompt is focused on.'),
});
export type DailyFocusOutput = z.infer<typeof DailyFocusOutputSchema>;

export async function generateDailyFocus(input: DailyFocusInput): Promise<DailyFocusOutput> {
  return dailyFocusFlow(input);
}

const prompt = ai.definePrompt({
  name: 'dailyFocusPrompt',
  input: { schema: DailyFocusInputSchema },
  output: { schema: DailyFocusOutputSchema },
  prompt: `You are an expert AI Life Coach. Your role is to provide a single, strategic "Daily Focus" for the user based on their list of habits. This focus should be encouraging and help them prioritize their efforts for the day.

Analyze the user's habits: {{jsonStringify habits}}

Here are some strategies to pick a focus:
1.  **Level-Up Push:** If a user is very close to leveling up a habit (e.g., within 2 check-ins), make that the focus. Calculate this based on their current XP and the XP needed for the next level. Each check-in is worth 10 XP.
2.  **Comeback Encouragement:** If a user has a low streak (0 or 1 day) on a habit they previously had a high level or streak on, encourage them to get back on track.
3.  **Milestone Celebration:** If a user is about to hit a major streak milestone (like 7, 14, 30 days), highlight that to build excitement.
4.  **Complementary Habit:** Suggest focusing on a habit that complements one they are already successful with. For example, if they have a high streak in "Exercise," suggest focusing on "Eat Healthy."
5.  **General Encouragement:** If none of the above apply, pick a habit and give a general, inspiring message about its benefits.

Your task:
1.  Choose ONE habit to focus on based on the strategies above.
2.  Create a short, catchy headline.
3.  Write a single, encouraging sentence for the prompt.
4.  Return the ID of the habit you chose.

Example Output:
{
  "headline": "Today's Level-Up Quest!",
  "prompt": "You're just one check-in away from reaching Level 5 in 'Read a Book'. Let's do it!",
  "focusedHabitId": "read-book"
}
`,
});

const dailyFocusFlow = ai.defineFlow(
  {
    name: 'dailyFocusFlow',
    inputSchema: DailyFocusInputSchema,
    outputSchema: DailyFocusOutputSchema,
  },
  async ({ habits }) => {
    // Augment habits with xp needed for next level to help the AI
    const augmentedHabits = habits.map(h => ({
        ...h,
        xpForNextLevel: getXpForNextLevel(h.level),
    }));

    const { output } = await prompt({ habits: augmentedHabits });
    return output!;
  }
);
