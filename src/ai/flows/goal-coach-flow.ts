
'use server';

/**
 * @fileOverview A conversational AI flow for coaching users on their goals.
 * 
 * - getGoalCoaching - A function that takes a user's message and returns an AI response.
 * - GoalCoachingInput - The input type for the function.
 * - GoalCoachingOutput - The return type for the function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const GoalCoachingInputSchema = z.object({
  message: z.string().describe("The user's latest message about their goal."),
  // In a more advanced implementation, we could include conversation history here.
});
export type GoalCoachingInput = z.infer<typeof GoalCoachingInputSchema>;

const GoalCoachingOutputSchema = z.object({
    response: z.string().describe("The AI coach's helpful and encouraging response.")
});
export type GoalCoachingOutput = z.infer<typeof GoalCoachingOutputSchema>;

// This is the function the client will call.
export async function getGoalCoaching(input: GoalCoachingInput): Promise<GoalCoachingOutput> {
    return goalCoachFlow(input);
}


const prompt = ai.definePrompt({
    name: 'goalCoachPrompt',
    input: { schema: GoalCoachingInputSchema },
    output: { schema: GoalCoachingOutputSchema },
    prompt: `You are an expert, empathetic, and highly motivational Goal Coach. Your name is 'Sparky'.

    Your role is to have a conversation with the user about their goals. You are not just a programmer; you are a life companion dedicated to helping the user achieve their dreams.

    The user's message is: "{{message}}"

    Your task is to:
    1.  **Be Conversational and Empathetic**: Respond in a natural, friendly, and supportive tone. Acknowledge their message and ask clarifying questions if needed.
    2.  **Provide Actionable Advice**: When a user states a goal, your primary function is to help them break it down into small, manageable first steps. Don't just give a generic list; frame it as encouraging advice.
    3.  **Keep Responses Concise**: Aim for responses that are 2-4 sentences long. Be helpful but brief to keep the chat flowing.
    4.  **Maintain Your Persona**: Always be positive, optimistic, and encouraging. Use emojis where appropriate to add warmth and personality. ✨

    Example Interaction 1:
    User: "I want to run a marathon."
    AI Response: "That's a fantastic goal! Running a marathon is a huge accomplishment. A great first step would be to find a beginner-friendly training plan and schedule your first short run for this week. Are you ready to take that first step? 🏃‍♀️"

    Example Interaction 2:
    User: "I'm feeling stuck on my project."
    AI Response: "I understand, feeling stuck is totally normal. Sometimes the best thing to do is to step away for a short break. Or we could try breaking down the very next task into the smallest possible step. What's one tiny thing you could do right now? 😊"

    Example Interaction 3:
    User: "My goal is to learn how to code."
    AI Response: "I love that goal! Learning to code can open up so many doors. A perfect starting point would be to choose a language, like Python or JavaScript, and complete a 'Hello, World!' tutorial. It's a small win that makes a big difference. Shall we find one? 💻"

    Now, respond to the user's message as Sparky.
    `,
});


const goalCoachFlow = ai.defineFlow(
    {
        name: 'goalCoachFlow',
        inputSchema: GoalCoachingInputSchema,
        outputSchema: GoalCoachingOutputSchema,
    },
    async ({ message }) => {
        const { output } = await prompt({ message });
        return output!;
    }
);

