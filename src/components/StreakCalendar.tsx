'use client';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import type { Habit } from '@/lib/types';
import { useTheme } from 'next-themes';

type StreakCalendarProps = {
    habit: Habit;
};

export default function StreakCalendar({ habit }: StreakCalendarProps) {
    const { theme } = useTheme();

    const checkinDates = habit.checkinHistory?.map(c => new Date(c.date + 'T12:00:00')) || [];

    const modifiers = {
        checkedIn: checkinDates,
    };

    const modifiersStyles = {
        checkedIn: {
            color: 'hsl(var(--primary-foreground))',
            backgroundColor: 'hsl(var(--primary))',
        },
    };
    
    // Custom styles to integrate with shadcn theme
    const calendarStyles: React.CSSProperties = {
        '--rdp-cell-size': '40px',
        '--rdp-background-color': 'transparent',
        '--rdp-accent-color': 'hsl(var(--primary))',
        '--rdp-accent-color-dark': 'hsl(var(--primary))',
        '--rdp-foreground-color': 'hsl(var(--foreground))',
        '--rdp-border-color': 'hsl(var(--border))',
        '--rdp-outline': '2px solid hsl(var(--ring))',
        '--rdp-outline-selected': '2px solid hsl(var(--ring))',
        '--rdp-caption-color': 'hsl(var(--foreground))',
        '--rdp-nav-button-color': 'hsl(var(--foreground))',
        ...(theme === 'dark' && {
            '--rdp-background-color': 'transparent',
            '--rdp-accent-color': 'hsl(var(--primary))',
            '--rdp-foreground-color': 'hsl(var(--foreground))',
            '--rdp-border-color': 'hsl(var(--border))',
            '--rdp-outline': '2px solid hsl(var(--ring))',
        }),
    };


    return (
        <div className="flex justify-center">
            <DayPicker
                mode="multiple"
                min={0}
                max={1000} // Allow multiple selections
                selected={checkinDates}
                modifiers={modifiers}
                modifiersStyles={modifiersStyles}
                style={calendarStyles}
                showOutsideDays
                fixedWeeks
                disabled // Don't allow user interaction
            />
        </div>
    );
}
