
'use client';

import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import type { Audiobook } from '@/lib/audiobooks';

type AudiobookPlayerProps = {
  book: Audiobook;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
};

export default function AudiobookPlayer({ book, isOpen, onOpenChange }: AudiobookPlayerProps) {

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-headline">{book.title}</DialogTitle>
          <DialogDescription>
            By {book.author}
          </DialogDescription>
        </DialogHeader>
        
        <div className="my-4 space-y-4">
             <div className="rounded-lg overflow-hidden aspect-square relative mx-auto w-2/3">
                 <Image 
                    src={book.coverUrl}
                    alt={`Cover for ${book.title}`}
                    fill
                    className="object-cover"
                    data-ai-hint="book cover"
                />
             </div>
             
             <audio controls autoPlay className="w-full">
                <source src={book.audioUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>

      </DialogContent>
    </Dialog>
  );
}
