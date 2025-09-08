
'use server';

/**
 * @fileOverview A flow that generates a guided meditation audio.
 *
 * - generateMeditationAudio - Generates a meditation script and converts it to audio.
 * - MeditationAudioOutput - The return type for the function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import wav from 'wav';

const MeditationAudioOutputSchema = z.object({
  script: z.string().describe("The text of the meditation script."),
  audioDataUri: z.string().describe("The audio data URI for the spoken meditation in WAV format."),
});
export type MeditationAudioOutput = z.infer<typeof MeditationAudioOutputSchema>;

export async function generateMeditationAudio(): Promise<MeditationAudioOutput> {
  return audioMeditationFlow();
}

const meditationScriptGenerator = ai.definePrompt({
  name: 'meditationScriptGenerator',
  output: { schema: z.object({ script: z.string() }) },
  prompt: `You are a world-renowned meditation guide. Your voice is calm, soothing, and reassuring.

  Generate a short, unique guided meditation script, approximately 150-200 words long. 
  
  The meditation should focus on a theme of mindfulness, gratitude, or releasing stress. 
  
  Structure the script with clear, gentle instructions. Use pauses, indicated by ellipses (...), to create a calm rhythm.

  Example Theme: Body Scan Gratitude
  "Begin by finding a comfortable position... Close your eyes gently... Bring your awareness to your breath, feeling the rise and fall of your chest... Now, let's thank our body. Bring your attention to your feet... thank them for carrying you through the world... Move your awareness up to your legs... your core... your arms... and finally to your head... Feel a wave of gratitude wash over you for this incredible vessel... When you're ready, slowly open your eyes."
  `,
});


const audioMeditationFlow = ai.defineFlow(
  {
    name: 'audioMeditationFlow',
    outputSchema: MeditationAudioOutputSchema,
  },
  async () => {
    // 1. Generate the meditation script text.
    const { output } = await meditationScriptGenerator();
    const scriptText = output!.script;

    // 2. Convert the generated text to speech.
    const { media } = await ai.generate({
      model: 'googleai/gemini-2.5-flash-preview-tts',
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Algenib' }, // A calm, soothing voice
          },
        },
      },
      prompt: scriptText,
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
    
    // 4. Return both the script and the audio data URI.
    return {
      script: scriptText,
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
