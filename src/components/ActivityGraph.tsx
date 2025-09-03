'use client';

import { useMemo } from 'react';
import { format, parseISO, subMonths, startOfMonth } from 'date-fns';
import type { Habit } from '@/lib/types';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { useTheme } from 'next-themes';

type ActivityGraphProps = {
    habit: Habit;
};

const chartConfig = {
    checkins: {
        label: 'Check-ins',
        color: 'hsl(var(--primary))',
    },
} satisfies ChartConfig;

export default function ActivityGraph({ habit }: ActivityGraphProps) {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    
    const tickColor = isDark ? '#FFFFFF' : '#000000';

    const data = useMemo(() => {
        const checkinsByMonth: { [key: string]: number } = {};
        const today = new Date();
        
        // Initialize last 12 months with 0 check-ins
        for (let i = 11; i >= 0; i--) {
            const d = subMonths(today, i);
            const monthKey = format(startOfMonth(d), 'yyyy-MM');
            checkinsByMonth[monthKey] = 0;
        }

        // Populate check-ins from history
        if (habit.checkinHistory) {
            habit.checkinHistory.forEach(checkin => {
                const date = parseISO(checkin.date);
                const monthKey = format(startOfMonth(date), 'yyyy-MM');
                if (monthKey in checkinsByMonth) {
                    checkinsByMonth[monthKey]++;
                }
            });
        }

        return Object.entries(checkinsByMonth).map(([month, count]) => ({
            month: format(parseISO(month + '-01T12:00:00'), 'MMM'),
            checkins: count,
        }));
    }, [habit.checkinHistory]);

    return (
        <div className="h-[250px] w-full">
            <ChartContainer config={chartConfig}>
                <BarChart accessibilityLayer data={data} margin={{ top: 20, right: 20, left: -10, bottom: 0 }}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tick={{ fill: tickColor, fontSize: 12 }}
                    />
                    <YAxis 
                        allowDecimals={false} 
                        tickLine={false}
                        axisLine={false}
                        tick={{ fill: tickColor, fontSize: 12 }} 
                        width={30}
                    />
                    <ChartTooltip 
                        cursor={false}
                        content={<ChartTooltipContent indicator="dot" />} 
                    />
                    <Bar dataKey="checkins" fill="var(--color-checkins)" radius={4} />
                </BarChart>
            </ChartContainer>
        </div>
    );
}
