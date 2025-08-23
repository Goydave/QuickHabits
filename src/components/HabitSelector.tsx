'use client';

import type { PredefinedHabit } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';

type HabitSelectorProps = {
  predefinedHabits: PredefinedHabit[];
  selectedHabits: PredefinedHabit[];
  onSelectionChange: (selected: PredefinedHabit[]) => void;
};

export default function HabitSelector({
  predefinedHabits,
  selectedHabits,
  onSelectionChange,
}: HabitSelectorProps) {
  const handleSelect = (habit: PredefinedHabit) => {
    const isSelected = selectedHabits.some((h) => h.id === habit.id);
    if (isSelected) {
      onSelectionChange(selectedHabits.filter((h) => h.id !== habit.id));
    } else {
      onSelectionChange([...selectedHabits, habit]);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {predefinedHabits.map((habit) => {
        const isSelected = selectedHabits.some((h) => h.id === habit.id);
        return (
          <Card
            key={habit.id}
            onClick={() => handleSelect(habit)}
            className={cn(
              'p-4 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all',
              isSelected ? 'border-primary ring-2 ring-primary' : 'hover:border-primary/50'
            )}
          >
            <habit.icon className="w-8 h-8 text-primary" />
            <p className="text-center font-medium text-sm">{habit.name}</p>
            <div className="pt-2">
                <Checkbox checked={isSelected} aria-label={`Select ${habit.name}`} />
            </div>
          </Card>
        );
      })}
    </div>
  );
}
