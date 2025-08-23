import { GlassWater, Dumbbell, BookOpen, BrainCircuit, Sunrise, Salad, Ban, Lightbulb, PenSquare } from 'lucide-react';
import type { PredefinedHabit } from './types';

export const PREDEFINED_HABITS: PredefinedHabit[] = [
  { id: 'drink-water', name: 'Drink Water', icon: GlassWater },
  { id: 'exercise', name: 'Exercise', icon: Dumbbell },
  { id: 'read-book', name: 'Read a Book', icon: BookOpen },
  { id: 'meditate', name: 'Meditate', icon: BrainCircuit },
  { id: 'wake-up-early', name: 'Wake Up Early', icon: Sunrise },
  { id: 'eat-healthy', name: 'Eat Healthy', icon: Salad },
  { id: 'no-junk-food', name: 'No Junk Food', icon: Ban },
  { id: 'learn-something', name: 'Learn Something', icon: Lightbulb },
  { id: 'journal', name: 'Journal', icon: PenSquare, specialAction: 'audio-journal' },
];

export const STREAK_MILESTONES = [3, 7, 14, 30, 60, 100, 365];
