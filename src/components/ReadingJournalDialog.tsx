'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { BookUp } from 'lucide-react';

type ReadingJournalDialogProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onSave: (entry: string) => void;
};

export default function ReadingJournalDialog({ isOpen, onOpenChange, onSave }: ReadingJournalDialogProps) {
  const [entry, setEntry] = useState('');

  const handleSave = () => {
    onSave(entry);
    setEntry(''); // Clear textarea after saving
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-headline flex items-center gap-2">
            <BookUp className="w-6 h-6 text-primary" />
            Reading Journal
          </DialogTitle>
          <DialogDescription>
            What are your thoughts on your latest read? Jot them down here.
          </DialogDescription>
        </DialogHeader>

        <div className="my-4 space-y-2">
          <Label htmlFor="journal-entry">Your thoughts</Label>
          <Textarea
            id="journal-entry"
            placeholder="e.g., 'The protagonist's decision in chapter 5 was surprising...'"
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            rows={6}
          />
        </div>

        <DialogFooter>
          <Button onClick={() => onOpenChange(false)} variant="outline">Cancel</Button>
          <Button onClick={handleSave} disabled={!entry.trim()}>
            Save Entry
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
