
'use server';
import { config } from 'dotenv';
config();

import '@/ai/flows/motivational-prompt.ts';
import '@/ai/flows/habit-coach-flow.ts';
import '@/ai/flows/audio-journal-flow.ts';
import '@/ai/flows/audio-meditation-flow.ts';
import '@/ai/flows/daily-focus-flow.ts';
import '@/ai/flows/image-generator-flow.ts';
