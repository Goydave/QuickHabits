import { GlassWater, Dumbbell, BookOpen, BrainCircuit, Sunrise, Salad, Ban, Lightbulb, PenSquare, ListTodo, BeerOff, Sparkles, Wand, Footprints, Headphones, BookMarked, Library } from 'lucide-react';
import type { PredefinedHabit } from './types';

export const PREDEFINED_HABITS: PredefinedHabit[] = [
  { id: 'drink-water', name: 'Drink Water', icon: GlassWater, type: 'build' },
  { id: 'exercise', name: 'Exercise', icon: Dumbbell, type: 'build' },
  { id: 'read-book', name: 'Read a Book', icon: BookOpen, type: 'build' },
  { id: 'meditate', name: 'Meditate', icon: BrainCircuit, specialAction: 'audio-meditation', type: 'build' },
  { id: 'wake-up-early', name: 'Wake Up Early', icon: Sunrise, type: 'build' },
  { id: 'eat-healthy', name: 'Eat Healthy', icon: Salad, type: 'build' },
  { id: 'no-junk-food', name: 'No Junk Food', icon: Ban, type: 'quit' },
  { id: 'learn-something', name: 'Learn Something', icon: Lightbulb, type: 'build' },
  { id: 'journal', name: 'Journal', icon: PenSquare, specialAction: 'audio-journal', type: 'build' },
  { id: 'plan-day', name: 'Plan Your Day', icon: ListTodo, type: 'build' },
  { id: 'no-alcohol', name: 'No Alcohol', icon: BeerOff, type: 'quit' },
  { id: 'tidy-up', name: 'Tidy Up', icon: Sparkles, type: 'build' },
  { id: 'practice-skill', name: 'Practice a Skill', icon: Wand, type: 'build' },
  { id: 'go-for-walk', name: 'Go for a Walk', icon: Footprints, type: 'build' },
];

export const STREAK_MILESTONES = [3, 7, 14, 30, 60, 100, 365];
