import type { LucideProps } from 'lucide-react';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

export type Icon = ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;

export type User = {
  nickname: string;
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
