'use client';

import { useState, useEffect, useCallback } from 'react';
import type { User } from '@/lib/types';

const USER_STORAGE_KEY = 'quickhabits-user';

export function useUser() {
  const [user, setUserState] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem(USER_STORAGE_KEY);
      if (storedUser) {
        setUserState(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to load user from local storage", error);
    }
    setIsLoading(false);
  }, []);

  const setUser = useCallback((newUser: User | null) => {
    try {
      if (newUser) {
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(newUser));
      } else {
        localStorage.removeItem(USER_STORAGE_KEY);
      }
      setUserState(newUser);
    } catch (error) {
      console.error("Failed to save user to local storage", error);
    }
  }, []);

  return { user, setUser, isLoading };
}
