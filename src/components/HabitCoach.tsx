
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { suggestHabits, type HabitSuggestionOutput } from '@/ai/flows/habit-coach-flow';
import { Loader2, Send, Wand2 } from 'lucide-react';
import { toast } from 'sonner';
import { Card, CardContent } from './ui/card';
import { useHabits } from '@/hooks/use-habits';
import type { SuggestedHabit } from '@/lib/types';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';

type HabitCoachProps = {
    onPlanReady: (selectedHabits: {name: string}[]) => void;
};

export default function HabitCoach({ onPlanReady }: HabitCoachProps) {
    const [goal, setGoal] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [suggestion, setSuggestion] = useState<HabitSuggestionOutput | null>(null);
    const [selectedHabits, setSelectedHabits] = useState<SuggestedHabit[]>([]);
    const { habits } = useHabits();

    const handleGeneratePlan = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!goal.trim()) return;

        setIsLoading(true);
        setSuggestion(null);

        try {
            const existingHabits = habits.map(h => ({ id: h.id, name: h.name }));
            const result = await suggestHabits({ goal, existingHabits });
            setSuggestion(result);
            setSelectedHabits(result.suggestedHabits);

        } catch (error) {
            console.error("Failed to get habit suggestions:", error);
            toast.error("I had trouble coming up with a plan. Please try a different goal!");
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleStartJourney = () => {
        onPlanReady(selectedHabits);
    }

    const handleToggleHabit = (habit: SuggestedHabit) => {
        setSelectedHabits(prev => 
            prev.some(h => h.name === habit.name) 
                ? prev.filter(h => h.name !== habit.name) 
                : [...prev, habit]
        );
    }

    return (
        <div className="space-y-4">
            <form onSubmit={handleGeneratePlan} className="flex items-center gap-2">
                <Input
                    placeholder="e.g., 'Become a great novelist'"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    disabled={isLoading || !!suggestion}
                    className="flex-grow"
                />
                <Button type="submit" size="icon" disabled={isLoading || !goal.trim() || !!suggestion}>
                    {isLoading ? <Loader2 className="animate-spin" /> : <Wand2 />}
                </Button>
            </form>

            {suggestion && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                >
                    <div className="text-center p-2 rounded-lg">
                        <h3 className="font-headline text-lg font-bold">{suggestion.planName}</h3>
                        <p className="text-muted-foreground text-sm">{suggestion.introduction}</p>
                    </div>

                    <div className="space-y-3">
                         {suggestion.suggestedHabits.map((habit, index) => {
                            const isSelected = selectedHabits.some(h => h.name === habit.name);
                            return (
                               <Label 
                                 htmlFor={`habit-${index}`}
                                 key={habit.name} 
                                 className="block cursor-pointer"
                               >
                                 <Card 
                                    className="p-3 bg-card has-[:checked]:ring-2 has-[:checked]:ring-primary has-[:checked]:border-primary"
                                  >
                                   <div className="flex items-start gap-3">
                                      <span className="p-2 rounded-lg bg-primary/10 text-primary mt-1 text-xl">
                                          {habit.emoji}
                                      </span>
                                      <div className='flex-1'>
                                          <p className="font-semibold">{habit.name}</p>
                                          <p className="text-sm text-muted-foreground">{habit.reason}</p>
                                      </div>
                                      <Checkbox 
                                          id={`habit-${index}`}
                                          checked={isSelected}
                                          onCheckedChange={() => handleToggleHabit(habit)}
                                          className="mt-1"
                                      />
                                   </div>
                                 </Card>
                               </Label>
                            )
                         })}
                    </div>
                    
                    <p className="text-xs text-center text-muted-foreground pt-2">You can uncheck any habits you don't want to start with.</p>

                    <Button onClick={handleStartJourney} className="w-full" disabled={selectedHabits.length === 0}>
                        Start My Journey with {selectedHabits.length} {selectedHabits.length === 1 ? 'Habit' : 'Habits'}
                    </Button>
                </motion.div>
            )}
        </div>
    );
}
