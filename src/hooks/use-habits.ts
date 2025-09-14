
'use client';

import { useState, useEffect, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { Habit } from '@/lib/types';
import { PREDEFINED_HABITS, STREAK_MILESTONES } from '@/lib/constants';
import { getLevelFromXp, XP_PER_CHECKIN, XP_PER_STREAK_MILESTONE } from '@/lib/game-mechanics';
import { Sparkles } from 'lucide-react';

const HABITS_STORAGE_KEY = 'quickhabits-habits';

export function useHabits() {
  const [habits, setHabitsState] = useState<Habit[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const storedHabits = localStorage.getItem(HABITS_STORAGE_KEY);
      if (storedHabits) {
        const parsedHabits: Habit[] = JSON.parse(storedHabits);
        // Re-hydrate icon components and ensure defaults
        const habitsWithIcons = parsedHabits.map(habit => {
            const predefined = PREDEFINED_HABITS.find(p => p.id === habit.id || p.name === habit.name);
            return { 
              ...habit, 
              icon: predefined ? predefined.icon : Sparkles, // Use a default icon for custom habits
              type: habit.type || 'build',
              xp: habit.xp || 0,
              level: habit.level || 1,
              isArchived: habit.isArchived || false,
              checkinHistory: habit.checkinHistory || [],
            };
        });
        setHabitsState(habitsWithIcons);
      }
    } catch (error) {
      console.error("Failed to load habits from local storage", error);
    }
    setIsLoading(false);
  }, []);

  const setHabits = useCallback((newHabits: Habit[]) => {
    try {
      // Don't store component functions in local storage
      const storableHabits = newHabits.map(({ icon, ...rest }) => rest);
      localStorage.setItem(HABITS_STORAGE_KEY, JSON.stringify(storableHabits));
      setHabitsState(newHabits);
    } catch (error) {
      console.error("Failed to save habits to local storage", error);
    }
  }, []);

  const clearHabits = useCallback(() => {
    try {
      localStorage.removeItem(HABITS_STORAGE_KEY);
      setHabitsState([]);
    } catch (error) {
      console.error("Failed to clear habits from local storage", error);
    }
  }, []);
  
  const checkIn = useCallback((habitId: string): Habit | undefined => {
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];
    
    let updatedHabit: Habit | undefined;

    const newHabits = habits.map((habit) => {
      if (habit.id === habitId) {
        if (habit.lastCheckinDate === todayStr) return habit; // Already checked in

        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];

        let newStreak = 1;
        if (habit.lastCheckinDate === yesterdayStr) {
          newStreak = habit.currentStreak + 1;
        }

        let newXp = (habit.xp || 0) + XP_PER_CHECKIN;
        if (STREAK_MILESTONES.includes(newStreak)) {
            newXp += XP_PER_STREAK_MILESTONE;
        }

        const newLevel = getLevelFromXp(newXp);

        // Ensure checkinHistory is not undefined
        const currentHistory = habit.checkinHistory || [];
        // Prevent duplicate dates in history
        const newHistory = currentHistory.some(c => c.date === todayStr) 
            ? currentHistory 
            : [...currentHistory, { date: todayStr }];
        
        updatedHabit = {
          ...habit,
          currentStreak: newStreak,
          longestStreak: Math.max(habit.longestStreak, newStreak),
          lastCheckinDate: todayStr,
          checkinHistory: newHistory,
          xp: newXp,
          level: newLevel,
        };
        return updatedHabit;
      }
      return habit;
    });

    setHabits(newHabits);
    return updatedHabit;
  }, [habits, setHabits]);

 const addHabit = useCallback((habitData: {id?: string, name: string, type?: 'build' | 'quit'}) => {
    // First, check for a predefined habit by ID or name
    const predefinedHabit = habitData.id 
        ? PREDEFINED_HABITS.find(h => h.id === habitData.id) 
        : PREDEFINED_HABITS.find(h => h.name.toLowerCase() === habitData.name.toLowerCase());

    const habitId = predefinedHabit ? predefinedHabit.id : (habitData.id || uuidv4());
    const habitName = predefinedHabit ? predefinedHabit.name : habitData.name;

    const existingHabit = habits.find(h => h.id === habitId || h.name.toLowerCase() === habitName.toLowerCase());

    if (existingHabit) {
        if (existingHabit.isArchived) {
            // If the habit exists but is archived, unarchive it
            toggleHabitArchive(existingHabit.id);
        }
        // If it exists and is active, do nothing.
        return;
    }
    
    // If it doesn't exist, create a new habit
    const newHabit: Habit = {
      id: habitId,
      name: habitName,
      icon: predefinedHabit ? predefinedHabit.icon : Sparkles,
      specialAction: predefinedHabit ? predefinedHabit.specialAction : undefined,
      type: habitData.type || (predefinedHabit ? predefinedHabit.type : 'build'),
      currentStreak: 0,
      longestStreak: 0,
      lastCheckinDate: null,
      checkinHistory: [],
      xp: 0,
      level: 1,
      isArchived: false,
    };
    setHabits([...habits, newHabit]);
  }, [habits, setHabits]);

  const removeHabit = useCallback((habitId: string) => {
    const newHabits = habits.filter(h => h.id !== habitId);
    setHabits(newHabits);
  }, [habits, setHabits]);
  
  const toggleHabitArchive = useCallback((habitId: string) => {
    const newHabits = habits.map(habit => {
        if (habit.id === habitId) {
            return { ...habit, isArchived: !habit.isArchived };
        }
        return habit;
    });
    setHabits(newHabits);
  }, [habits, setHabits]);


  return { habits, setHabits, checkIn, isLoading, clearHabits, addHabit, removeHabit, toggleHabitArchive };
}

    