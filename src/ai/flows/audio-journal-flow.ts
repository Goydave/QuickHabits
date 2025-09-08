
'use server';

/**
 * @fileOverview A flow that generates a spoken journaling prompt.
 *
 * - generateAudioJournalingPrompt - Generates a journaling prompt and converts it to audio.
 * - AudioJournalingPromptOutput - The return type for the function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import wav from 'wav';

const AudioJournalingPromptOutputSchema = z.object({
  prompt: z.string().describe("The text of the journaling prompt."),
  audioDataUri: z.string().describe("The audio data URI for the spoken prompt in WAV format."),
});
export type AudioJournalingPromptOutput = z.infer<typeof AudioJournalingPromptOutputSchema>;

// This is the function that the client-side component will call.
export async function generateAudioJournalingPrompt(): Promise<AudioJournalingPromptOutput> {
  return audioJournalFlow();
}

const promptGenerator = ai.definePrompt({
  name: 'journalPromptGenerator',
  output: { schema: z.object({ prompt: z.string() }) },
  prompt: `You are a thoughtful and introspective journaling guide. 
  
  Generate a single, unique, and reflective journaling prompt. 
  
  The prompt should be open-ended and encourage self-reflection, mindfulness, gratitude, or creativity.
  It could be about their day, a book they are reading, a feeling, or a future aspiration.
  
  Avoid generic or cliché questions. 
  
  Make it something that would make a person pause and think deeply.
  Keep the prompt to a single, concise question.

  Example: "What is a belief you hold that you haven't questioned in a while?"
  Example: "Describe a moment today, no matter how small, that brought you a sense of peace."
  Example: "If you could write a letter to your younger self, what's one piece of advice you'd give about the journey ahead?"
  Example: "What character from a book you've read recently do you relate to the most, and why?"
  Example: "Describe a color that matches your current mood and explain your choice."
  `,
});


const audioJournalFlow = ai.defineFlow(
  {
    name: 'audioJournalFlow',
    outputSchema: AudioJournalingPromptOutputSchema,
  },
  async () => {
    // 1. Generate the journaling prompt text.
    const { output } = await promptGenerator();
    const promptText = output!.prompt;

    // 2. Convert the generated text to speech.
    const { media } = await ai.generate({
      model: 'googleai/gemini-2.5-flash-preview-tts',
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Algenib' },
          },
        },
      },
      prompt: promptText,
    });

    if (!media) {
      throw new Error('No audio media was returned from the TTS model.');
    }

    // 3. Convert the raw PCM audio data to WAV format.
    const audioBuffer = Buffer.from(
      media.url.substring(media.url.indexOf(',') + 1),
      'base64'
    );
    const wavData = await toWav(audioBuffer);
    const audioDataUri = `data:audio/wav;base64,${wavData}`;
    
    // 4. Return both the text and the audio data URI.
    return {
      prompt: promptText,
      audioDataUri: audioDataUri,
    };
  }
);


// Helper function to convert raw PCM audio buffer to a Base64 encoded WAV string.
async function toWav(
  pcmData: Buffer,
  channels = 1,
  rate = 24000, // Gemini TTS model outputs at 24kHz
  sampleWidth = 2
): Promise<string> {
  return new Promise((resolve, reject) => {
    const writer = new wav.Writer({
      channels,
      sampleRate: rate,
      bitDepth: sampleWidth * 8,
    });

    const bufs: any[] = [];
    writer.on('error', reject);
    writer.on('data', function (d) {
      bufs.push(d);
    });
    writer.on('end', function () {
      resolve(Buffer.concat(bufs).toString('base64'));
    });

    writer.write(pcmData);
    writer.end();
  });
}
