
'use client';

import { generateAudioJournalingPrompt } from '@/ai/flows/audio-journal-flow';
import AudioPlayerDialog from './AudioPlayerDialog';

type AudioJournalPlayerProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onComplete: () => void;
};

export default function AudioJournalPlayer({ isOpen, onOpenChange, onComplete }: AudioJournalPlayerProps) {
  return (
    <AudioPlayerDialog
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      onComplete={onComplete}
      dialogTitle="Your Daily Journal Prompt"
      dialogDescription="Listen to the prompt below, then take a moment to reflect."
      loadingText="Generating your unique prompt..."
      fetchAudio={generateAudioJournalingPrompt}
      errorMessage="I had trouble coming up with a prompt. Please try again."
    />
  );
}
