'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Target } from 'lucide-react';
import { generateDailyFocus, DailyFocusOutput } from '@/ai/flows/daily-focus-flow';
import type { Habit } from '@/lib/types';

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

    if (lastFetched === today && storedFocus) {
      setFocus(JSON.parse(storedFocus));
      setIsLoading(false);
    } else {
      const activeHabits = habits.filter(h => !h.isArchived);
      if (activeHabits.length > 0) {
        generateDailyFocus({ habits: activeHabits })
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
      } else {
        setIsLoading(false);
      }
    }
  }, [habits]);
  
  if (isLoading) {
    return (
        <Card className="bg-primary/10 border-primary/40">
            <CardContent className="p-4 flex items-center gap-4">
                <Loader2 className="w-6 h-6 text-primary animate-spin" />
                <div className="space-y-1">
                    <div className="h-4 w-32 bg-primary/20 rounded-md animate-pulse" />
                    <div className="h-4 w-48 bg-primary/20 rounded-md animate-pulse" />
                </div>
            </CardContent>
        </Card>
    );
  }

  if (!focus) {
    return null; // Don't render anything if there's no focus
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
