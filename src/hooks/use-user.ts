
'use client';

import { useState, useEffect, useCallback } from 'react';
import type { User, UserSettings, Habit } from '@/lib/types';
import { ALL_ACHIEVEMENTS, checkAchievement } from '@/lib/achievements';
import { toast } from 'sonner';

const USER_STORAGE_KEY = 'quickhabits-user';

const defaultSettings: UserSettings = {
  enableMotivation: true,
  coachingStyle: 'encouraging',
  colorTheme: 'theme-amber',
};

const colorThemes = ['theme-amber', 'theme-green', 'theme-blue', 'theme-violet'];

export function useUser() {
  const [user, setUserState] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem(USER_STORAGE_KEY);
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        // Ensure settings exist and have defaults
        const userWithSettings = {
            ...parsedUser,
            settings: {
                ...defaultSettings,
                ...(parsedUser.settings || {})
            },
            achievements: parsedUser.achievements || [],
        };
        setUserState(userWithSettings);
         // Apply theme on initial load
        if (userWithSettings.settings.colorTheme) {
            document.body.classList.add(userWithSettings.settings.colorTheme);
        }
      }
    } catch (error) {
      console.error("Failed to load user from local storage", error);
    }
    setIsLoading(false);
  }, []);

  const setUser = useCallback((newUser: User | null) => {
    try {
      // Clear all possible theme classes before setting a new one
      colorThemes.forEach(theme => document.body.classList.remove(theme));

      if (newUser) {
        // Ensure settings always have defaults
        const userToSave: User = {
          ...newUser,
          settings: {
            ...defaultSettings,
            ...(newUser.settings || {})
          },
          achievements: newUser.achievements || [],
        };
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userToSave));
        setUserState(userToSave);

        // Apply new theme
        if (userToSave.settings.colorTheme) {
          document.body.classList.add(userToSave.settings.colorTheme);
        }
      } else {
        localStorage.removeItem(USER_STORAGE_KEY);
        setUserState(null);
      }
    } catch (error) {
      console.error("Failed to save user to local storage", error);
    }
  }, []);

  const clearUser = useCallback(() => {
    try {
      localStorage.removeItem(USER_STORAGE_KEY);
      setUserState(null);
       // Clear all theme classes from body
      document.body.className = '';
    } catch (error) {
      console.error("Failed to clear user from local storage", error);
    }
  }, []);

  const checkAndAwardAchievements = useCallback((habits: Habit[]) => {
    if (!user) return;
    
    let newAchievements: string[] = [];

    ALL_ACHIEVEMENTS.forEach(achievement => {
        const alreadyUnlocked = user.achievements.includes(achievement.id);
        if (!alreadyUnlocked && checkAchievement(achievement.id, habits)) {
            newAchievements.push(achievement.id);
            toast.success("Achievement Unlocked! 🏆", {
                description: `You've earned the "${achievement.name}" badge.`,
                action: {
                    label: 'View Profile',
                    onClick: () => window.location.href = '/profile'
                }
            });
        }
    });

    if (newAchievements.length > 0) {
        setUser({
            ...user,
            achievements: [...user.achievements, ...newAchievements],
        });
    }

  }, [user, setUser]);

  return { user, setUser, isLoading, clearUser, checkAndAwardAchievements };
}
