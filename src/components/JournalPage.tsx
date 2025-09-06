
'use client';

import { useState } from 'react';
import { useJournal } from '@/hooks/use-journal';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { format, parseISO } from 'date-fns';
import { BookUp, PlusCircle, Sparkles, Smile, Frown, Meh, Laugh, Annoyed, BookOpen } from 'lucide-react';
import { toast } from 'sonner';
import { AnimatePresence, motion } from 'framer-motion';
import NewJournalEntry from './NewJournalEntry';
import { generateAudioJournalingPrompt } from '@/ai/flows/audio-journal-flow';
import { LIBRARY_BOOKS } from '@/lib/library-books';
import type { JournalEntry } from '@/lib/types';
import { Skeleton } from './ui/skeleton';

const moodIcons = {
  happy: <Smile className="w-5 h-5 text-green-500" />,
  sad: <Frown className="w-5 h-5 text-blue-500" />,
  neutral: <Meh className="w-5 h-5 text-gray-500" />,
  excited: <Laugh className="w-5 h-5 text-yellow-500" />,
  calm: <Annoyed className="w-5 h-5 text-purple-500" />,
};

export default function JournalPage() {
  const { entries, addEntry, isLoading } = useJournal();
  const [isAdding, setIsAdding] = useState(false);
  const [aiPrompt, setAiPrompt] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);

  const handleSaveEntry = (entryData: Omit<JournalEntry, 'id' | 'date'>) => {
    addEntry(entryData);
    toast.success('Journal entry saved!');
    setIsAdding(false);
    setAiPrompt('');
  };

  const handleGeneratePrompt = async () => {
    setIsAiLoading(true);
    try {
      const result = await generateAudioJournalingPrompt();
      setAiPrompt(result.prompt);
    } catch (error) {
      toast.error('Failed to generate a prompt. Please try again.');
    } finally {
      setIsAiLoading(false);
    }
  };

  if (isLoading) {
    return (
        <div className="space-y-6">
            <div className="flex justify-end">
                <Skeleton className="h-10 w-32" />
            </div>
            <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                    <Card key={i}>
                        <CardHeader>
                            <Skeleton className="h-6 w-3/4" />
                            <Skeleton className="h-4 w-1/4" />
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-5/6" />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
  }

  return (
    <div className="space-y-8">
      <AnimatePresence>
        {isAdding ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <NewJournalEntry
              onSave={handleSaveEntry}
              onCancel={() => {
                setIsAdding(false);
                setAiPrompt('');
              }}
              aiPrompt={aiPrompt}
              onGeneratePrompt={handleGeneratePrompt}
              isAiLoading={isAiLoading}
            />
          </motion.div>
        ) : (
          <div className="flex justify-end">
            <Button onClick={() => setIsAdding(true)}>
              <PlusCircle className="mr-2" />
              New Entry
            </Button>
          </div>
        )}
      </AnimatePresence>

      <div className="space-y-4">
        {entries.length > 0 ? (
          <AnimatePresence>
            {entries.map((entry) => {
              const linkedBook = LIBRARY_BOOKS.find(b => b.id === entry.linkedBookId);
              return (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  layout
                >
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="font-headline text-xl">{entry.title}</CardTitle>
                          <p className="text-sm text-muted-foreground pt-1">
                            {format(parseISO(entry.date), 'MMMM d, yyyy')}
                          </p>
                        </div>
                        {entry.mood && <div className="p-2 rounded-full bg-muted">{moodIcons[entry.mood]}</div>}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="whitespace-pre-wrap font-body">{entry.content}</p>
                    </CardContent>
                    <CardFooter className="flex-col items-start gap-2">
                        {linkedBook && (
                            <div className="flex items-center gap-2 text-sm text-muted-foreground p-2 rounded-md bg-muted">
                                <BookOpen className="w-4 h-4 text-primary" />
                                <span>Reflecting on: <span className="font-semibold text-foreground">{linkedBook.title}</span></span>
                            </div>
                        )}
                    </CardFooter>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        ) : (
          <div className="text-center py-16 border-2 border-dashed rounded-lg">
            <BookUp className="mx-auto h-12 w-12 text-muted-foreground" />
            <h3 className="mt-4 text-xl font-semibold">Your Journal is Empty</h3>
            <p className="mt-2 text-muted-foreground">
              Click "New Entry" to start recording your thoughts.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
