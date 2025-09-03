'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { suggestHabits, type HabitSuggestionOutput } from '@/ai/flows/habit-coach-flow';
import { Loader2, Send } from 'lucide-react';
import { toast } from 'sonner';
import { PREDEFINED_HABITS } from '@/lib/constants';
import HabitSelector from './HabitSelector';
import type { PredefinedHabit } from '@/lib/types';
import { Card, CardContent } from './ui/card';
import { useHabits } from '@/hooks/use-habits';

type HabitCoachProps = {
    onPlanReady: (selectedHabitIds: string[]) => void;
};

export default function HabitCoach({ onPlanReady }: HabitCoachProps) {
    const [goal, setGoal] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [suggestion, setSuggestion] = useState<HabitSuggestionOutput | null>(null);
    const [selectedHabits, setSelectedHabits] = useState<PredefinedHabit[]>([]);
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
            
            // Pre-select the suggested habits
            const suggestedPredefinedHabits = PREDEFINED_HABITS.filter(h => 
                result.suggestedHabits.some(sh => sh.id === h.id)
            );
            setSelectedHabits(suggestedPredefinedHabits);

        } catch (error) {
            console.error("Failed to get habit suggestions:", error);
            toast.error("I had trouble coming up with a plan. Please try a different goal!");
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleStartJourney = () => {
        onPlanReady(selectedHabits.map(h => h.id));
    }

    const suggestedPredefinedHabits = suggestion ? PREDEFINED_HABITS
        .filter(h => suggestion.suggestedHabits.some(sh => sh.id === h.id))
        // maintain order from AI
        .sort((a, b) => {
            const aIndex = suggestion.suggestedHabits.findIndex(sh => sh.id === a.id);
            const bIndex = suggestion.suggestedHabits.findIndex(sh => sh.id === b.id);
            return aIndex - bIndex;
        }) : [];

    const getReasonForHabit = (habitId: string) => {
        return suggestion?.suggestedHabits.find(h => h.id === habitId)?.reason || '';
    };

    return (
        <div className="space-y-4">
            <form onSubmit={handleGeneratePlan} className="flex items-center gap-2">
                <Input
                    placeholder="e.g., 'Be more productive'"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    disabled={isLoading || !!suggestion}
                    className="flex-grow"
                />
                <Button type="submit" size="icon" disabled={isLoading || !goal.trim() || !!suggestion}>
                    {isLoading ? <Loader2 className="animate-spin" /> : <Send />}
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
                         {suggestedPredefinedHabits.map(habit => (
                           <Card key={habit.id} className="p-3 bg-card">
                             <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary mt-1">
                                    <habit.icon className="w-5 h-5" />
                                </div>
                                <div className='flex-1'>
                                    <p className="font-semibold">{habit.name}</p>
                                    <p className="text-sm text-muted-foreground">{getReasonForHabit(habit.id)}</p>
                                </div>
                             </div>
                           </Card>
                         ))}
                    </div>
                    
                    <p className="text-xs text-center text-muted-foreground pt-2">You can stick with this plan or customize it below.</p>

                    <Card>
                        <CardContent className="p-4">
                             <HabitSelector
                                predefinedHabits={PREDEFINED_HABITS}
                                selectedHabits={selectedHabits}
                                onSelectionChange={setSelectedHabits}
                            />
                        </CardContent>
                    </Card>

                    <Button onClick={handleStartJourney} className="w-full" disabled={selectedHabits.length === 0}>
                        Start My Journey with {selectedHabits.length} {selectedHabits.length === 1 ? 'Habit' : 'Habits'}
                    </Button>
                </motion.div>
            )}
        </div>
    );
}
