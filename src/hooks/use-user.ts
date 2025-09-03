'use client';

import { useState, useEffect, useCallback } from 'react';
import type { User, UserSettings } from '@/lib/types';

const USER_STORAGE_KEY = 'quickhabits-user';

const defaultSettings: UserSettings = {
  enableMotivation: true,
  coachingStyle: 'encouraging',
  colorTheme: 'theme-amber',
};

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
            }
        };
        setUserState(userWithSettings);
      }
    } catch (error) {
      console.error("Failed to load user from local storage", error);
    }
    setIsLoading(false);
  }, []);

  const setUser = useCallback((newUser: User | null) => {
    try {
      if (newUser) {
        // Ensure settings always have defaults
        const userToSave = {
          ...newUser,
          settings: {
            ...defaultSettings,
            ...(newUser.settings || {})
          }
        };
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userToSave));
        setUserState(userToSave);
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

  return { user, setUser, isLoading, clearUser };
}
