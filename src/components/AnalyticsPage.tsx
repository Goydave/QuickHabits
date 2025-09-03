'use client';

import { useState } from 'react';
import { useHabits } from '@/hooks/use-habits';
import type { Habit } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import StreakCalendar from './StreakCalendar';
import ActivityGraph from './ActivityGraph';
import { BarChart2, Calendar } from 'lucide-react';

export default function AnalyticsPage() {
    const { habits } = useHabits();
    const [selectedHabitId, setSelectedHabitId] = useState<string | null>(habits[0]?.id || null);

    const activeHabits = habits.filter(h => !h.isArchived);
    const selectedHabit = activeHabits.find(h => h.id === selectedHabitId);

    if (activeHabits.length === 0) {
        return (
            <div className="text-center py-16">
                <h2 className="text-2xl font-semibold">No Habits to Analyze</h2>
                <p className="text-muted-foreground mt-2">
                    Start tracking some habits, then come back here to see your progress!
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Select a Habit</CardTitle>
                    <CardDescription>Choose a habit to view its analytics.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Select value={selectedHabitId || undefined} onValueChange={setSelectedHabitId}>
                        <SelectTrigger className="w-full md:w-[300px]">
                            <SelectValue placeholder="Select a habit..." />
                        </SelectTrigger>
                        <SelectContent>
                            {activeHabits.map(habit => (
                                <SelectItem key={habit.id} value={habit.id}>
                                    {habit.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </CardContent>
            </Card>

            {selectedHabit ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card>
                        <CardHeader className="flex-row items-center gap-2 space-y-0">
                           <Calendar className="w-5 h-5 text-primary" />
                           <CardTitle>Check-in Heatmap</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <StreakCalendar habit={selectedHabit} />
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader className="flex-row items-center gap-2 space-y-0">
                           <BarChart2 className="w-5 h-5 text-primary" />
                           <CardTitle>Monthly Activity</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <ActivityGraph habit={selectedHabit} />
                        </CardContent>
                    </Card>
                </div>
            ) : (
                 <div className="text-center py-16 text-muted-foreground">
                    <p>Please select a habit to see its analytics.</p>
                </div>
            )}
        </div>
    );
}
