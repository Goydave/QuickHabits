
'use server';

/**
 * @fileOverview An AI flow that breaks down a user's weekly goal into actionable steps.
 * 
 * - breakDownGoal - A function that takes a user's goal and returns a list of steps.
 * - WeeklyGoalInput - The input type for the function.
 * - WeeklyGoalOutput - The return type for the function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const WeeklyGoalInputSchema = z.object({
  goal: z.string().describe("The user's weekly goal. e.g., 'Learn to bake sourdough bread' or 'Organize my garage'"),
});
export type WeeklyGoalInput = z.infer<typeof WeeklyGoalInputSchema>;

const WeeklyGoalOutputSchema = z.array(z.string()).describe("A list of 3-5 simple, actionable steps to achieve the goal.");
export type WeeklyGoalOutput = z.infer<typeof WeeklyGoalOutputSchema>;

// This is the function the client will call.
export async function breakDownGoal(input: WeeklyGoalInput): Promise<WeeklyGoalOutput> {
    return weeklyGoalFlow(input);
}


const prompt = ai.definePrompt({
    name: 'weeklyGoalPrompt',
    input: { schema: WeeklyGoalInputSchema },
    output: { schema: z.object({ steps: WeeklyGoalOutputSchema }) },
    prompt: `You are an expert project manager and productivity coach. Your specialty is breaking down larger goals into small, manageable, and actionable steps.

    The user's goal for the week is: "{{goal}}"

    Your task is to break this goal down into a simple checklist of 3 to 5 steps. The steps should be:
    1.  **Action-oriented**: Start with a verb (e.g., "Research", "Buy", "Organize", "Draft").
    2.  **Concise**: Each step should be a short, clear phrase.
    3.  **Logical**: The steps should follow a logical sequence.

    Return the steps as a JSON array of strings.

    Example for goal "Learn to bake sourdough bread":
    {
      "steps": [
        "Research beginner sourdough recipes and starter care",
        "Gather necessary ingredients and equipment",
        "Feed the sourdough starter for 3 days",
        "Mix, fold, and shape the dough",
        "Bake the final loaf"
      ]
    }

    Example for goal "Organize my garage":
    {
        "steps": [
            "Declutter and sort items into 'keep', 'donate', and 'discard' piles",
            "Clean the empty garage space thoroughly",
            "Plan and purchase storage solutions like shelves or bins",
            "Organize and put away all 'keep' items"
        ]
    }
    `,
});


const weeklyGoalFlow = ai.defineFlow(
    {
        name: 'weeklyGoalFlow',
        inputSchema: WeeklyGoalInputSchema,
        outputSchema: WeeklyGoalOutputSchema,
    },
    async ({ goal }) => {
        const { output } = await prompt({ goal });
        return output!.steps;
    }
);
