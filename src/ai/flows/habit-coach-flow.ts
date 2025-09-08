
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
  goal: z.string().describe('The user\'s high-level goal, e.g., "be healthier" or "become a doctor".'),
  existingHabits: z.array(HabitSchema).describe("A list of habits the user is already tracking."),
});
export type HabitSuggestionInput = z.infer<typeof HabitSuggestionInputSchema>;


const SuggestedHabitSchema = z.object({
    name: z.string().describe("The name of the suggested habit. This should be concise and actionable. e.g., 'Review Anatomy Flashcards' or 'Practice Dribbling Drills'"),
    reason: z.string().describe("A short, compelling reason why this specific habit helps achieve the user's goal."),
    emoji: z.string().describe("A single emoji that visually represents the habit."),
});

const HabitSuggestionOutputSchema = z.object({
  planName: z.string().describe("A catchy, encouraging name for the suggested habit plan, directly inspired by the user's goal. For example, 'The Future Doctor's Regimen' or 'Footballer's Path to Glory'."),
  introduction: z.string().describe("A brief, one-sentence introduction from the AI coach that presents the plan with empathy and understanding of the user's goal."),
  suggestedHabits: z.array(SuggestedHabitSchema).describe('An array of 2 to 5 new, custom-generated habits that are highly relevant and specific to the user\'s goal.'),
});
export type HabitSuggestionOutput = z.infer<typeof HabitSuggestionOutputSchema>;


export async function suggestHabits(input: HabitSuggestionInput): Promise<HabitSuggestionOutput> {
  return habitCoachFlow(input);
}


const prompt = ai.definePrompt({
  name: 'habitCoachPrompt',
  input: { schema: HabitSuggestionInputSchema },
  output: { schema: HabitSuggestionOutputSchema },
  prompt: `You are an expert and empathetic Habit Architect. Your role is to help users create a personalized and inspiring habit plan based on their unique goals. You are not just a programmer, you are a life companion, dedicated to helping the user achieve their dreams.

The user's goal is: "{{goal}}"

The user is already tracking these habits, so DO NOT suggest them again:
{{#if existingHabits}}
{{#each existingHabits}}
- {{this.name}}
{{/each}}
{{else}}
None
{{/if}}

Your task is to be deeply creative and personalized:
1.  **Analyze and Understand the Goal**: Think deeply about the user's stated goal. What does it take to achieve it? What are the small, daily actions that lead to success in that specific field (e.g., what does a future doctor, footballer, or artist need to do every day)?
2.  **Generate *Custom* Habits**: Create 2 to 5 *brand new*, highly specific habits tailored to this goal. Do not use generic habits unless they are directly applicable. For each habit, provide:
    - A concise, actionable name (e.g., 'Review Medical Terminology for 15 mins' instead of 'Learn Something').
    - A single, relevant emoji.
    - A short, compelling reason explaining *why* this habit is crucial for their specific journey.
3.  **Create an Inspiring Plan**:
    - Give the habit plan a creative and motivating name that reflects the user's aspiration.
    - Write a warm, one-sentence introduction that shows you understand their goal and are there to help them on their path.

Example for goal "become a doctor":
{
  "planName": "The Future Doctor's Regimen",
  "introduction": "Embarking on the path to medicine is a noble journey; here are a few key habits to build your foundation.",
  "suggestedHabits": [
    { "name": "Review one anatomy topic", "emoji": "🦴", "reason": "Consistent review builds the foundational knowledge needed for medical school." },
    { "name": "Read a medical journal article", "emoji": "🔬", "reason": "Staying current with research is key to becoming a knowledgeable physician." },
    { "name": "Practice patient interaction scenarios", "emoji": "💬", "reason": "Developing a compassionate bedside manner is as important as medical knowledge." }
  ]
}

Example for goal "become a better footballer":
{
  "planName": "The Footballer's Path to Glory",
  "introduction": "To play like a pro, you need to train like one. Let's build the daily discipline that champions are made of.",
  "suggestedHabits": [
    { "name": "Practice dribbling drills for 20 mins", "emoji": "⚽", "reason": "Mastering ball control is fundamental to dominating on the field." },
    { "name": "Watch and analyze a professional match", "emoji": "📺", "reason": "Understanding game strategy and player positioning elevates your own play." },
    { "name": "Complete a core strength workout", "emoji": "💪", "reason": "A strong core provides the power and stability needed for peak performance." }
  ]
}

Now, create a personalized plan for the user's goal.
`,
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
