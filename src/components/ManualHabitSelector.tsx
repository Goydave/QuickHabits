

'use client';

import { useState } from 'react';
import { PREDEFINED_HABITS } from '@/lib/constants';
import HabitSelector from './HabitSelector';
import type { PredefinedHabit } from '@/lib/types';
import { Button } from './ui/button';
import { useHabits } from '@/hooks/use-habits';

type ManualHabitSelectorProps = {
    onPlanReady: (selectedHabitIds: string[]) => void;
};

export default function ManualHabitSelector({ onPlanReady }: ManualHabitSelectorProps) {
    const { habits } = useHabits();
    const selectedHabits = PREDEFINED_HABITS.filter(ph => habits.some(h => h.id === ph.id));
    
    const [currentSelection, setCurrentSelection] = useState<PredefinedHabit[]>(selectedHabits);


    const handleStartJourney = () => {
        onPlanReady(currentSelection.map(h => h.id));
    }

    return (
        <div className="space-y-4">
            <HabitSelector
                predefinedHabits={PREDEFINED_HABITS}
                selectedHabits={currentSelection}
                onSelectionChange={setCurrentSelection}
            />
            <Button onClick={handleStartJourney} className="w-full" disabled={currentSelection.length === 0}>
                Start My Journey with {currentSelection.length} {currentSelection.length === 1 ? 'Habit' : 'Habits'}
            </Button>
        </div>
    );
}
