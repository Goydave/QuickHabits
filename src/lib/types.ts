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

export type PredefinedHabit = {
  id: string;
  name: string;
  icon: Icon;
};

export type Habit = PredefinedHabit & {
  currentStreak: number;
  longestStreak: number;
  lastCheckinDate: string | null;
};
