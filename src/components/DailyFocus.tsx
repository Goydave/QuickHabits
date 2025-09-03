'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Target } from 'lucide-react';
import { generateDailyFocus, DailyFocusOutput } from '@/ai/flows/daily-focus-flow';
import type { Habit } from '@/lib/types';
import { Skeleton } from './ui/skeleton';

type DailyFocusProps = {
  habits: Habit[];
};

export default function DailyFocus({ habits }: DailyFocusProps) {
  const [focus, setFocus] = useState<DailyFocusOutput | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const lastFetched = localStorage.getItem('dailyFocusLastFetched');
    const storedFocus = localStorage.getItem('dailyFocus');

    const activeHabits = habits.filter(h => !h.isArchived);
    
    if (activeHabits.length === 0) {
      setIsLoading(false);
      return;
    }

    if (lastFetched === today && storedFocus) {
      setFocus(JSON.parse(storedFocus));
      setIsLoading(false);
    } else {
        // Sanitize habits to remove non-serializable icon component before sending to server
        const serializableHabits = activeHabits.map(({ icon, ...rest }) => rest);

        generateDailyFocus({ habits: serializableHabits })
          .then(result => {
            setFocus(result);
            localStorage.setItem('dailyFocus', JSON.stringify(result));
            localStorage.setItem('dailyFocusLastFetched', today);
          })
          .catch(err => {
            console.error("Failed to generate daily focus:", err);
            // Don't show an error, just fail silently
          })
          .finally(() => {
            setIsLoading(false);
          });
    }
  }, [habits]);
  
  if (isLoading) {
    return (
        <Card>
            <CardContent className="p-4 flex items-center gap-4">
                <Skeleton className="w-8 h-8 rounded-lg" />
                <div className="space-y-2 flex-1">
                    <Skeleton className="h-4 w-1/3" />
                    <Skeleton className="h-4 w-4/5" />
                </div>
            </CardContent>
        </Card>
    );
  }

  if (!focus) {
    return null; // Don't render anything if there's no focus or an error occurred
  }
  
  const focusedHabit = habits.find(h => h.id === focus.focusedHabitId);

  return (
    <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/40 shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
        <CardHeader className="p-4 flex flex-row items-start gap-4 space-y-0">
             {focusedHabit ? <focusedHabit.icon className="w-8 h-8 text-primary mt-1" /> : <Target className="w-8 h-8 text-primary mt-1" />}
            <div>
                <CardTitle className="font-headline text-lg text-primary">{focus.headline}</CardTitle>
                <p className="text-foreground/90">{focus.prompt}</p>
            </div>
        </CardHeader>
    </Card>
  );
}
