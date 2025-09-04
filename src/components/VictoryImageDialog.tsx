'use client';

import { useState, useEffect } from 'react';
import { saveAs } from 'file-saver';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Loader2, Download, Share2 } from 'lucide-react';
import { toast } from 'sonner';
import Image from 'next/image';
import { generateHabitVictoryImage, type GenerateHabitVictoryImageOutput } from '@/ai/flows/image-generator-flow';
import { WhatsAppIcon } from './ui/icons';

type VictoryImageDialogProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  habitName: string | null;
};

export default function VictoryImageDialog({ isOpen, onOpenChange, habitName }: VictoryImageDialogProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [imageData, setImageData] = useState<GenerateHabitVictoryImageOutput | null>(null);

  useEffect(() => {
    if (isOpen && habitName) {
      // Reset state when opening
      setIsLoading(true);
      setError(null);
      setImageData(null);
      
      generateHabitVictoryImage({ habitName, theme: 'milestone achievement' })
        .then(result => {
          setImageData(result);
        })
        .catch(err => {
          console.error("Failed to generate victory image:", err);
          setError("I had trouble painting your victory. Please try again later.");
          toast.error("I had trouble painting your victory. Please try again later.");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [isOpen, habitName]);
  
  const handleDownload = () => {
    if (!imageData) return;
    const fileName = `${habitName?.toLowerCase().replace(/ /g, '-')}-victory.png`;
    saveAs(imageData.imageDataUri, fileName);
    toast.success("Image saved!", { description: "Your victory art has been downloaded." });
  };
  
  const handleShareToWhatsApp = () => {
    toast.info("Sharing to WhatsApp", {
        description: "To share your image, first download it, then share it from your device's gallery in WhatsApp."
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl text-primary">A Victory for {habitName}!</DialogTitle>
          <DialogDescription>
            You've hit a new milestone. Here's a unique piece of art to celebrate your progress.
          </DialogDescription>
        </DialogHeader>

        <div className="my-4 flex items-center justify-center text-center aspect-square bg-muted rounded-lg overflow-hidden">
          {isLoading ? (
            <div className="flex flex-col items-center gap-4">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
              <p className="text-muted-foreground">Painting your victory...</p>
            </div>
          ) : error ? (
            <p className="text-destructive p-4">{error}</p>
          ) : (
            imageData && (
              <Image 
                src={imageData.imageDataUri}
                alt={`AI generated art for ${habitName} achievement`}
                width={512}
                height={512}
                className="object-cover w-full h-full"
              />
            )
          )}
        </div>

        <DialogFooter className="flex-col sm:flex-col sm:space-x-0 gap-2">
          <div className='flex w-full gap-2'>
          <Button onClick={handleDownload} disabled={isLoading || !!error} className='flex-1'>
            <Download className="mr-2" /> Download
          </Button>
          <Button onClick={handleShareToWhatsApp} disabled={isLoading || !!error} variant="outline">
            <WhatsAppIcon className="mr-2 h-5 w-5" /> Share
          </Button>
          </div>
          <Button onClick={() => onOpenChange(false)} variant="ghost" className='w-full'>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
