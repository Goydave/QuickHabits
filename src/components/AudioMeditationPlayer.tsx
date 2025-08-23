'use client';

import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Loader2, Play, Pause, Rewind } from 'lucide-react';
import { generateMeditationAudio } from '@/ai/flows/audio-meditation-flow';
import { toast } from 'sonner';

type AudioMeditationPlayerProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onComplete: () => void;
};

export default function AudioMeditationPlayer({ isOpen, onOpenChange, onComplete }: AudioMeditationPlayerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [audioDataUri, setAudioDataUri] = useState<string | null>(null);
  const [scriptText, setScriptText] = useState<string>('');
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setError(null);
      setAudioDataUri(null);
      setScriptText('');
      
      generateMeditationAudio()
        .then(result => {
          setScriptText(result.script);
          setAudioDataUri(result.audioDataUri);
          const audio = new Audio(result.audioDataUri);
          setAudioElement(audio);
        })
        .catch(err => {
          console.error("Failed to generate meditation audio:", err);
          setError("I had trouble generating a meditation session. Please try again.");
          toast.error("Failed to generate meditation audio.");
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
        if (audioElement) {
            audioElement.pause();
            setAudioElement(null);
        }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    if (!audioElement) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    
    audioElement.addEventListener('play', handlePlay);
    audioElement.addEventListener('pause', handlePause);
    audioElement.addEventListener('ended', handlePause);

    return () => {
      audioElement.removeEventListener('play', handlePlay);
      audioElement.removeEventListener('pause', handlePause);
      audioElement.removeEventListener('ended', handlePause);
    };
  }, [audioElement]);


  const handlePlayPause = () => {
    if (!audioElement) return;
    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
  };

  const handleRewind = () => {
    if (!audioElement) return;
    audioElement.currentTime = 0;
  };
  
  const handleDialogClose = () => {
    if (audioElement) {
      audioElement.pause();
    }
    onOpenChange(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleDialogClose}>
      <DialogContent className="max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="font-headline">Guided Meditation</DialogTitle>
          <DialogDescription>
            Clear your mind and follow the guide.
          </DialogDescription>
        </DialogHeader>

        <div className="my-8 flex-grow flex items-center justify-center text-center">
          {isLoading ? (
            <div className="flex flex-col items-center gap-4">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
              <p className="text-muted-foreground">Crafting your meditation...</p>
            </div>
          ) : error ? (
            <p className="text-destructive">{error}</p>
          ) : (
            <div className="space-y-6">
                 <div className="flex items-center justify-center gap-4">
                    <Button onClick={handleRewind} variant="ghost" size="icon">
                        <Rewind className="h-6 w-6"/>
                        <span className="sr-only">Rewind</span>
                    </Button>
                    <Button onClick={handlePlayPause} size="icon" className="w-16 h-16 rounded-full">
                        {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
                        <span className="sr-only">{isPlaying ? 'Pause' : 'Play'}</span>
                    </Button>
                    {audioDataUri && <audio src={audioDataUri} ref={setAudioElement}></audio>}
                 </div>
            </div>
          )}
        </div>
        <DialogFooter>
          <Button onClick={onComplete} disabled={isLoading || !!error}>Mark as Complete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
