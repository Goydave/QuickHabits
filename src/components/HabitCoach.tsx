
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { suggestHabits, type HabitSuggestionOutput } from '@/ai/flows/habit-coach-flow';
import { Loader2, Send, Wand2, Star, CheckSquare, Square } from 'lucide-react';
import { toast } from 'sonner';
import { Card, CardContent } from './ui/card';
import { useHabits } from '@/hooks/use-habits';
import type { SuggestedHabit } from '@/lib/types';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { Separator } from './ui/separator';

type HabitCoachProps = {
    onPlanReady: (selectedHabits: {name: string}[]) => void;
};

export default function HabitCoach({ onPlanReady }: HabitCoachProps) {
    const [goal, setGoal] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [suggestion, setSuggestion] = useState<HabitSuggestionOutput | null>(null);
    const [selectedOptionalHabits, setSelectedOptionalHabits] = useState<SuggestedHabit[]>([]);
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
            setSelectedOptionalHabits([]); // Reset optional selections

        } catch (error) {
            console.error("Failed to get habit suggestions:", error);
            toast.error("I had trouble coming up with a plan. Please try a different goal!");
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleStartJourney = () => {
        if (!suggestion) return;
        const allSelectedHabits = [...suggestion.majorHabits, ...selectedOptionalHabits];
        onPlanReady(allSelectedHabits);
    }

    const handleToggleOptionalHabit = (habit: SuggestedHabit) => {
        setSelectedOptionalHabits(prev => 
            prev.some(h => h.name === habit.name) 
                ? prev.filter(h => h.name !== habit.name) 
                : [...prev, habit]
        );
    }
    
    const totalSelected = (suggestion?.majorHabits.length || 0) + selectedOptionalHabits.length;

    const HabitItem = ({ habit, isSelected, onToggle, isMajor }: { habit: SuggestedHabit, isSelected: boolean, onToggle?: (habit: SuggestedHabit) => void, isMajor?: boolean }) => (
       <Label 
         htmlFor={`habit-${habit.name.replace(/\s/g, '-')}`}
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
              {isMajor ? (
                 <CheckSquare className="w-5 h-5 mt-1 text-primary"/>
              ) : (
                <Checkbox 
                    id={`habit-${habit.name.replace(/\s/g, '-')}`}
                    checked={isSelected}
                    onCheckedChange={() => onToggle?.(habit)}
                    className="mt-1"
                />
              )}
           </div>
         </Card>
       </Label>
    );

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
                    className="space-y-6"
                >
                    <div className="text-center p-2 rounded-lg">
                        <h3 className="font-headline text-xl font-bold">{suggestion.planName}</h3>
                        <p className="text-muted-foreground">{suggestion.introduction}</p>
                    </div>

                    <div>
                        <div className="flex items-center gap-2 mb-3">
                           <Star className="w-5 h-5 text-amber-500" />
                           <h4 className="font-headline text-lg font-semibold">Major Habits</h4>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">These 7 habits are essential for your goal and have been pre-selected.</p>
                         <div className="space-y-3">
                             {suggestion.majorHabits.map((habit) => (
                                 <HabitItem key={habit.name} habit={habit} isSelected={true} isMajor={true} />
                             ))}
                         </div>
                    </div>

                    <Separator />

                    <div>
                        <h4 className="font-headline text-lg font-semibold mb-3">Optional Habits</h4>
                        <p className="text-sm text-muted-foreground mb-4">Select any of these complementary habits to further boost your progress.</p>
                         <div className="space-y-3">
                             {suggestion.optionalHabits.map((habit) => {
                                 const isSelected = selectedOptionalHabits.some(h => h.name === habit.name);
                                 return (
                                     <HabitItem key={habit.name} habit={habit} isSelected={isSelected} onToggle={handleToggleOptionalHabit} />
                                 );
                             })}
                         </div>
                    </div>
                    
                    <Button onClick={handleStartJourney} className="w-full" disabled={totalSelected === 0}>
                        Start My Journey with {totalSelected} {totalSelected === 1 ? 'Habit' : 'Habits'}
                    </Button>
                </motion.div>
            )}
        </div>
    );
}
