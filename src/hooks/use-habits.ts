'use client';

import { useState, useEffect, useCallback } from 'react';
import type { Habit } from '@/lib/types';
import { PREDEFINED_HABITS, STREAK_MILESTONES } from '@/lib/constants';
import { getLevelFromXp, XP_PER_CHECKIN, XP_PER_STREAK_MILESTONE } from '@/lib/game-mechanics';

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
            const predefined = PREDEFINED_HABITS.find(p => p.id === habit.id);
            return { 
              ...habit, 
              icon: predefined ? predefined.icon : () => null,
              type: predefined ? predefined.type : 'build',
              xp: habit.xp || 0,
              level: habit.level || 1,
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
        
        updatedHabit = {
          ...habit,
          currentStreak: newStreak,
          longestStreak: Math.max(habit.longestStreak, newStreak),
          lastCheckinDate: todayStr,
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

  const addHabit = useCallback((habitId: string) => {
    const predefinedHabit = PREDEFINED_HABITS.find(h => h.id === habitId);
    if (!predefinedHabit || habits.some(h => h.id === habitId)) return;

    const newHabit: Habit = {
      ...predefinedHabit,
      currentStreak: 0,
      longestStreak: 0,
      lastCheckinDate: null,
      xp: 0,
      level: 1,
    };
    setHabits([...habits, newHabit]);
  }, [habits, setHabits]);

  const removeHabit = useCallback((habitId: string) => {
    const newHabits = habits.filter(h => h.id !== habitId);
    setHabits(newHabits);
  }, [habits, setHabits]);


  return { habits, setHabits, checkIn, isLoading, clearHabits, addHabit, removeHabit };
}
