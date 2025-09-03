'use client';

import { generateMeditationAudio } from '@/ai/flows/audio-meditation-flow';
import AudioPlayerDialog from './AudioPlayerDialog';

type AudioMeditationPlayerProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onComplete: () => void;
};

export default function AudioMeditationPlayer({ isOpen, onOpenChange, onComplete }: AudioMeditationPlayerProps) {
  return (
    <AudioPlayerDialog
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      onComplete={onComplete}
      dialogTitle="Guided Meditation"
      dialogDescription="Clear your mind and follow the guide."
      loadingText="Crafting your meditation..."
      fetchAudio={generateMeditationAudio}
      errorMessage="I had trouble generating a meditation session. Please try again."
      showTranscript={false}
    />
  );
}
