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
import type { HabitType } from '@/lib/types';
import { PREDEFINED_HABITS } from '@/lib/constants';

const MotivationalPromptInputSchema = z.object({
  habit: z.string().describe('The habit for which to generate a motivational prompt.'),
  streak: z.number().describe('The current streak for the habit.'),
  level: z.number().describe('The current level for the habit.'),
  coachingStyle: z.enum(['encouraging', 'tough-love', 'zen']).default('encouraging').describe('The desired coaching style for the message.'),
  habitType: z.custom<HabitType>().default('build').describe('The type of habit: "build" for positive habits, "quit" for habits to avoid.'),
});
export type MotivationalPromptInput = z.infer<typeof MotivationalPromptInputSchema>;

const MotivationalPromptOutputSchema = z.object({
  prompt: z.string().describe('The motivational prompt to display to the user.'),
});
export type MotivationalPromptOutput = z.infer<typeof MotivationalPromptOutputSchema>;

export async function generateMotivationalPrompt(input: MotivationalPromptInput): Promise<MotivationalPromptOutput> {
  return motivationalPromptFlow(input);
}

const suggestHabitTool = ai.defineTool(
    {
        name: 'suggestHabit',
        description: 'Suggests a new habit for the user to try based on their current habit.',
        inputSchema: z.object({
            currentHabit: z.string().describe('The user\'s current habit.'),
        }),
        outputSchema: z.object({
            suggestion: z.string().optional().describe('The suggested new habit.'),
        }),
    },
    async ({ currentHabit }, context) => {
        // Simple logic: suggest a related habit. This could be improved with more sophisticated logic.
        const allHabits = context?.allHabits as string[] || [];
        const relatedHabits: Record<string, string[]> = {
            'Exercise': ['Drink Water', 'Eat Healthy'],
            'Eat Healthy': ['Exercise', 'No Junk Food'],
            'Read a Book': ['Learn Something', 'Meditate'],
            'Meditate': ['Journal', 'Wake Up Early'],
        };
        const suggestions = relatedHabits[currentHabit];
        if (suggestions) {
            const availableSuggestion = suggestions.find(s => allHabits.includes(s));
            if (availableSuggestion) {
                return { suggestion: availableSuggestion };
            }
        }
        return {};
    }
);


const prompt = ai.definePrompt({
  name: 'motivationalPromptPrompt',
  input: {schema: MotivationalPromptInputSchema},
  output: {schema: MotivationalPromptOutputSchema},
  tools: [suggestHabitTool],
  prompt: `You are a motivational coach. Your goal is to encourage the user to continue their habit.

  Your coaching style should be: {{coachingStyle}}.

  - If the style is "encouraging", be positive, friendly, and uplifting. Use exclamation points and emojis.
  - If the style is "tough-love", be direct, firm, and challenge the user. No excuses.
  - If the style is "zen", be calm, mindful, and reflective. Focus on the journey and inner peace.

  The user's habit is: {{habit}}
  The habit type is: {{habitType}}
  The current streak is: {{streak}} days.
  The current level is: {{level}}.

  Generate a short, encouraging motivational message (no more than 2 sentences) that is personalized to the habit, streak, level, coaching style, and habit type.

  - If the habit type is 'build', focus on positive reinforcement for performing the action.
  - If the habit type is 'quit', focus on celebrating the user's willpower and resistance to temptation.

  - If the streak is 0, encourage the user to start today.
  - If the streak is 1, congratulate them on starting.
  - If the streak is greater than 1, acknowledge their consistent effort.
  - If the level is high (5+), acknowledge their dedication and expertise.
  - If the level is low (1-2), encourage them on their new journey.

  If the user is doing well (streak > 5 or level > 3), you can use the suggestHabit tool to recommend a new complementary habit. If you do, incorporate the suggestion naturally into your message. For example: "You're doing amazing with Exercise! Maybe it's a good time to add 'Drink Water' to your routine?"

  Example for 'build' habit "Drink Water", streak 3, level 2:
  - Encouraging: "Yes! 3 days of staying hydrated in a row! You're already Level 2. Keep it flowing! 💧"
  - Tough-love: "Three days. Level 2. That's a start. Don't get comfortable. True consistency is built when no one is watching. Get it done."
  - Zen: "Three days of honoring your body with water. Notice how this simple act brings clarity. You are cultivating a garden of well-being, one sip at a time."
  
  Example for 'quit' habit "No Junk Food", streak 2, level 1:
  - Encouraging: "Two days without junk food! That's amazing willpower. You're building a healthier you! 💪"
  - Tough-love: "Day 2. You proved you can do it yesterday, now do it again. Don't let a moment of weakness ruin your progress."
  - Zen: "For two days, you have chosen nourishment over fleeting temptation. Observe this strength. It has always been within you."
  `,
});

const motivationalPromptFlow = ai.defineFlow(
  {
    name: 'motivationalPromptFlow',
    inputSchema: MotivationalPromptInputSchema,
    outputSchema: MotivationalPromptOutputSchema,
  },
  async (input) => {
    // Pass the full list of available habits to the tool's context.
    const allHabitNames = PREDEFINED_HABITS.map(h => h.name);
    const { output } = await prompt(input, {
        tool_context: {
            allHabits: allHabitNames,
        }
    });
    return output!;
  }
);
