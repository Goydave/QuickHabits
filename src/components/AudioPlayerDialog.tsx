
'use client';

import { useState, useEffect, useRef } from 'react';
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
import { toast } from 'sonner';

type AudioPlayerDialogProps<T extends { prompt?: string; script?: string; audioDataUri: string }> = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onComplete: () => void;
  dialogTitle: string;
  dialogDescription: string;
  loadingText: string;
  errorMessage: string;
  fetchAudio: () => Promise<T>;
  showTranscript?: boolean;
};

export default function AudioPlayerDialog<T extends { prompt?: string; script?: string; audioDataUri: string }>({
  isOpen,
  onOpenChange,
  onComplete,
  dialogTitle,
  dialogDescription,
  loadingText,
  errorMessage,
  fetchAudio,
  showTranscript = true,
}: AudioPlayerDialogProps<T>) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [audioData, setAudioData] = useState<T | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      // Reset state when opening
      setIsLoading(true);
      setError(null);
      setAudioData(null);
      setIsPlaying(false);
      
      fetchAudio()
        .then(result => {
          setAudioData(result);
        })
        .catch(err => {
          console.error("Failed to generate audio:", err);
          setError(errorMessage);
          toast.error(errorMessage);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
        // Cleanup when closing
        if (audioRef.current) {
            audioRef.current.pause();
        }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, fetchAudio, errorMessage]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handlePause);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handlePause);
    };
  }, [audioRef.current]);


  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  const handleRewind = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
  };
  
  const handleDialogClose = (open: boolean) => {
    if (!open && audioRef.current) {
      audioRef.current.pause();
    }
    onOpenChange(open);
  }
  
  const transcript = audioData?.prompt || audioData?.script;

  return (
    <Dialog open={isOpen} onOpenChange={handleDialogClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-headline">{dialogTitle}</DialogTitle>
          <DialogDescription>
            {dialogDescription}
          </DialogDescription>
        </DialogHeader>

        <div className="my-8 flex items-center justify-center text-center">
          {isLoading ? (
            <div className="flex flex-col items-center gap-4">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
              <p className="text-muted-foreground">{loadingText}</p>
            </div>
          ) : error ? (
            <p className="text-destructive">{error}</p>
          ) : (
            <div className="space-y-6">
                 {showTranscript && transcript && (
                    <p className="text-lg font-medium">"{transcript}"</p>
                 )}
                 <div className="flex items-center justify-center gap-4">
                    <Button onClick={handleRewind} variant="ghost" size="icon">
                        <Rewind className="h-6 w-6"/>
                        <span className="sr-only">Rewind</span>
                    </Button>
                    <Button onClick={handlePlayPause} size="icon" className="w-16 h-16 rounded-full">
                        {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
                        <span className="sr-only">{isPlaying ? 'Pause' : 'Play'}</span>
                    </Button>
                     {/* Hidden audio element */}
                    {audioData && <audio src={audioData.audioDataUri} ref={audioRef}></audio>}
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
