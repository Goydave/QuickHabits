'use server';

/**
 * @fileOverview An AI habit coach that suggests habits based on user goals.
 *
 * - suggestHabits - A function that handles the habit suggestion process.
 * - HabitSuggestionInput - The input type for the suggestHabits function.
 * - HabitSuggestionOutput - The return type for the suggestHabits function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { PREDEFINED_HABITS } from '@/lib/constants';
import type { Habit } from '@/lib/types';


const HabitSchema = z.object({
  id: z.string(),
  name: z.string(),
});

const HabitSuggestionInputSchema = z.object({
  goal: z.string().describe('The user\'s high-level goal, e.g., "be healthier" or "be more productive".'),
  existingHabits: z.array(HabitSchema).describe("A list of habits the user is already tracking."),
});
export type HabitSuggestionInput = z.infer<typeof HabitSuggestionInputSchema>;

const HabitSuggestionOutputSchema = z.object({
  planName: z.string().describe("A catchy, encouraging name for the suggested habit plan. For example, 'Mind and Body Boost' or 'Productivity Power-up'."),
  introduction: z.string().describe("A brief, one-sentence introduction from the AI coach that presents the plan."),
  suggestedHabits: z.array(z.object({
    id: z.string().describe('The ID of the suggested habit, which must match one of the available habit IDs.'),
    reason: z.string().describe('A short, compelling reason why this specific habit helps achieve the user\'s goal.'),
  })).describe('An array of 2 to 4 suggested habits from the available list that are most relevant to the user\'s goal.'),
});
export type HabitSuggestionOutput = z.infer<typeof HabitSuggestionOutputSchema>;


export async function suggestHabits(input: HabitSuggestionInput): Promise<HabitSuggestionOutput> {
  return habitCoachFlow(input);
}

const availableHabits = PREDEFINED_HABITS.map(h => `- ${h.name} (id: ${h.id})`).join('\n');

const prompt = ai.definePrompt({
  name: 'habitCoachPrompt',
  input: { schema: HabitSuggestionInputSchema },
  output: { schema: HabitSuggestionOutputSchema },
  prompt: `You are an AI Habit Coach. Your role is to help users create a personalized habit plan based on their goals.

The user's goal is: "{{goal}}"

Here is a list of available habits they can track:
${availableHabits}

The user is already tracking these habits, so DO NOT suggest them:
{{#if existingHabits}}
{{#each existingHabits}}
- {{this.name}} (id: {{this.id}})
{{/each}}
{{else}}
None
{{/if}}

Your task is to:
1.  Analyze the user's goal.
2.  Select 2 to 4 habits from the available list that are most relevant to achieving that goal and are not in the user's existing list.
3.  Provide a short, compelling reason for each suggestion.
4.  Create a catchy, encouraging name for the overall plan.
5.  Write a brief, one-sentence introduction to present the plan.

Ensure your response is positive, encouraging, and helpful. You must only suggest habits from the provided list by using their exact ID.`,
});

const habitCoachFlow = ai.defineFlow(
  {
    name: 'habitCoachFlow',
    inputSchema: HabitSuggestionInputSchema,
    outputSchema: HabitSuggestionOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
