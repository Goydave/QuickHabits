

import type { LucideProps } from 'lucide-react';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

export type Icon = ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;

export type CoachingStyle = 'encouraging' | 'tough-love' | 'zen';

export type UserSettings = {
  enableMotivation: boolean;
  coachingStyle: CoachingStyle;
  colorTheme: string;
}

export type User = {
  nickname: string;
  settings: UserSettings;
};

export type HabitType = 'build' | 'quit';

export type SpecialAction = 'audio-journal' | 'audio-meditation';

// Represents a habit from the initial, predefined list
export type PredefinedHabit = {
  id: string;
  name: string;
  icon: Icon;
  specialAction?: SpecialAction;
  type?: HabitType;
};

// Represents a new habit suggested by the AI, which may not exist in the predefined list
export type SuggestedHabit = {
  name: string;
  reason: string;
  emoji: string;
  // Custom habits don't have a predefined ID or icon component
}

export type Checkin = {
    date: string; // YYYY-MM-DD
}

// Represents a habit that the user is actively tracking.
// It can be from the predefined list or a custom one.
export type Habit = {
  id: string;
  name: string;
  icon: Icon;
  specialAction?: SpecialAction;
  type?: HabitType;
  currentStreak: number;
  longestStreak: number;
  lastCheckinDate: string | null;
  checkinHistory: Checkin[];
  xp: number;
  level: number;
  isArchived: boolean;
};

export type DailyFocus = {
    headline: string;
    prompt: string;
    focusedHabitId: string;
}

export type JournalEntry = {
    id: string;
    title: string;
    content: string;
    date: string; // ISO String
    mood?: 'happy' | 'sad' | 'neutral' | 'excited' | 'calm';
    linkedBookId?: string;
};

export type Favorite = {
    bookId: string;
    addedAt: string; // ISO String
};

export type ReadingProgress = {
    scrollPercentage: number;
    lastReadDate: string; // ISO String
};

export type ReadingProgressData = {
    [bookId: string]: ReadingProgress;
};
