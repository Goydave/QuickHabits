
'use client';

import { useState } from 'react';
import { PREDEFINED_HABITS } from '@/lib/constants';
import HabitSelector from './HabitSelector';
import type { PredefinedHabit } from '@/lib/types';
import { Button } from './ui/button';

type ManualHabitSelectorProps = {
    onPlanReady: (selectedHabitIds: string[]) => void;
};

export default function ManualHabitSelector({ onPlanReady }: ManualHabitSelectorProps) {
    const [selectedHabits, setSelectedHabits] = useState<PredefinedHabit[]>([]);

    const handleStartJourney = () => {
        onPlanReady(selectedHabits.map(h => h.id));
    }

    return (
        <div className="space-y-4">
            <HabitSelector
                predefinedHabits={PREDEFINED_HABITS}
                selectedHabits={selectedHabits}
                onSelectionChange={setSelectedHabits}
            />
            <Button onClick={handleStartJourney} className="w-full" disabled={selectedHabits.length === 0}>
                Start My Journey with {selectedHabits.length} {selectedHabits.length === 1 ? 'Habit' : 'Habits'}
            </Button>
        </div>
    );
}
