'use client';

import { useMemo } from 'react';
import { format, parseISO } from 'date-fns';
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
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === 'dark';

    const data = useMemo(() => {
        if (!habit.checkinHistory) {
            return [];
        }
        
        const checkinsByMonth: { [key: string]: number } = {};

        // Initialize last 12 months
        const today = new Date();
        for (let i = 11; i >= 0; i--) {
            const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
            const monthKey = format(d, 'yyyy-MM');
            checkinsByMonth[monthKey] = 0;
        }

        habit.checkinHistory.forEach(checkin => {
            const date = parseISO(checkin.date);
            const monthKey = format(date, 'yyyy-MM');
            if(monthKey in checkinsByMonth) {
                checkinsByMonth[monthKey]++;
            }
        });

        return Object.entries(checkinsByMonth).map(([month, count]) => ({
            month: format(parseISO(month + '-01'), 'MMM'),
            checkins: count,
        }));
    }, [habit.checkinHistory]);

    return (
        <div className="h-[250px] w-full">
            <ChartContainer config={chartConfig}>
                <BarChart accessibilityLayer data={data}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tick={{ fill: isDark ? 'white' : 'black' }}
                    />
                    <YAxis allowDecimals={false} tick={{ fill: isDark ? 'white' : 'black' }} />
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
