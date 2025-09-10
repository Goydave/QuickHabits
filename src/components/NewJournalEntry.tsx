
'use client';

import { useState } from 'react';
import type { JournalEntry } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { LIBRARY_BOOKS } from '@/lib/library-books';
import { Smile, Frown, Meh, Laugh, Annoyed, BookOpen, Sparkles, Loader2 } from 'lucide-react';

type NewJournalEntryProps = {
  onSave: (entryData: Omit<JournalEntry, 'id' | 'date'>) => void;
  onCancel: () => void;
  aiPrompt?: string;
  onGeneratePrompt: () => void;
  isAiLoading: boolean;
};

const moods = [
  { value: 'happy', label: 'Happy', icon: <Smile className="w-5 h-5 text-green-500" /> },
  { value: 'sad', label: 'Sad', icon: <Frown className="w-5 h-5 text-blue-500" /> },
  { value: 'neutral', label: 'Neutral', icon: <Meh className="w-5 h-5 text-gray-500" /> },
  { value: 'excited', label: 'Excited', icon: <Laugh className="w-5 h-5 text-yellow-500" /> },
  { value: 'calm', label: 'Calm', icon: <Annoyed className="w-5 h-5 text-purple-500" /> },
] as const;

export default function NewJournalEntry({ onSave, onCancel, aiPrompt, onGeneratePrompt, isAiLoading }: NewJournalEntryProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [mood, setMood] = useState<'happy' | 'sad' | 'neutral' | 'excited' | 'calm' | undefined>();
  const [linkedBookId, setLinkedBookId] = useState<string | undefined>();

  const handleSave = () => {
    if (!title.trim() || !content.trim()) return;
    onSave({ title, content, mood, linkedBookId });
  };
  
  useState(() => {
    if (aiPrompt) {
        setContent(prev => prev ? `${prev}\n\n${aiPrompt}` : aiPrompt);
    }
  }, [aiPrompt]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">New Journal Entry</CardTitle>
        <CardDescription>Capture your thoughts, reflections, and progress.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="entry-title">Title</Label>
          <Input
            id="entry-title"
            placeholder="e.g., 'Reflections on Chapter 3'"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="entry-content">Content</Label>
            <Button variant="ghost" size="sm" onClick={onGeneratePrompt} disabled={isAiLoading}>
              {isAiLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Sparkles className="mr-2 h-4 w-4 text-primary" />
              )}
              Spark a Thought
            </Button>
          </div>
          <Textarea
            id="entry-content"
            placeholder="What's on your mind? How did your reading go today?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={8}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="entry-mood">Mood</Label>
            <Select onValueChange={(v) => setMood(v as any)} value={mood}>
              <SelectTrigger id="entry-mood">
                <SelectValue placeholder="Select a mood" />
              </SelectTrigger>
              <SelectContent>
                {moods.map((m) => (
                  <SelectItem key={m.value} value={m.value}>
                    <div className="flex items-center gap-2">
                      {m.icon}
                      <span>{m.label}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="entry-book">Link to a Book</Label>
            <Select onValueChange={setLinkedBookId} value={linkedBookId}>
              <SelectTrigger id="entry-book">
                <SelectValue placeholder="Select a book" />
              </SelectTrigger>
              <SelectContent>
                {LIBRARY_BOOKS.map((book) => (
                  <SelectItem key={book.id} value={book.id}>
                    <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        <span>{book.title}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="ghost" onClick={onCancel}>Cancel</Button>
        <Button onClick={handleSave} disabled={!title.trim() || !content.trim()}>
          Save Entry
        </Button>
      </CardFooter>
    </Card>
  );
}

    