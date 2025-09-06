
'use client';

import { useState } from 'react';
import { useJournal } from '@/hooks/use-journal';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { format } from 'date-fns';
import { BookUp, PlusCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function JournalPage() {
  const { entries, addEntry } = useJournal();
  const [newEntry, setNewEntry] = useState('');

  const handleSaveEntry = () => {
    if (!newEntry.trim()) return;
    addEntry(newEntry);
    setNewEntry('');
    toast.success('Journal entry saved!');
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PlusCircle className="text-primary" />
            New Entry
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="What are your thoughts on your latest read?"
            value={newEntry}
            onChange={(e) => setNewEntry(e.target.value)}
            rows={6}
          />
        </CardContent>
        <CardFooter>
          <Button onClick={handleSaveEntry} disabled={!newEntry.trim()}>
            Save Entry
          </Button>
        </CardFooter>
      </Card>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold font-headline">Past Entries</h2>
        {entries.length > 0 ? (
          entries.map((entry) => (
            <Card key={entry.id}>
                <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-3">
                        <BookUp className="w-5 h-5 text-primary" />
                        Journal Entry
                    </CardTitle>
                </CardHeader>
              <CardContent>
                <p className="whitespace-pre-wrap">{entry.content}</p>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">
                  {format(new Date(entry.date), 'MMMM d, yyyy')}
                </p>
              </CardFooter>
            </Card>
          ))
        ) : (
          <p className="text-muted-foreground text-center py-8">
            You haven't written any journal entries yet.
          </p>
        )}
      </div>
    </div>
  );
}
