
'use client';

import { useState, useEffect, useCallback } from 'react';
import type { ReadingProgress, ReadingProgressData } from '@/lib/types';

const READING_PROGRESS_STORAGE_KEY = 'quickhabits-reading-progress';

export function useReadingProgress() {
    const [progress, setProgressState] = useState<ReadingProgressData>({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        try {
            const storedProgress = localStorage.getItem(READING_PROGRESS_STORAGE_KEY);
            if (storedProgress) {
                setProgressState(JSON.parse(storedProgress));
            }
        } catch (error) {
            console.error("Failed to load reading progress from local storage", error);
        }
        setIsLoading(false);
    }, []);

    const setProgress = useCallback((newProgress: ReadingProgressData) => {
        try {
            localStorage.setItem(READING_PROGRESS_STORAGE_KEY, JSON.stringify(newProgress));
            setProgressState(newProgress);
        } catch (error) {
            console.error("Failed to save reading progress to local storage", error);
        }
    }, []);

    const saveReadingProgress = useCallback((bookId: string, scrollPercentage: number) => {
        const newProgress = {
            ...progress,
            [bookId]: {
                scrollPercentage,
                lastReadDate: new Date().toISOString(),
            },
        };
        setProgress(newProgress);
    }, [progress, setProgress]);

    const getReadingProgress = useCallback((bookId: string): ReadingProgress | null => {
        return progress[bookId] || null;
    }, [progress]);

    const removeReadingProgress = useCallback((bookId: string) => {
        const newProgress = { ...progress };
        delete newProgress[bookId];
        setProgress(newProgress);
    }, [progress, setProgress]);


    const recentlyRead = Object.entries(progress)
        .map(([bookId, data]) => ({ bookId, ...data }))
        .sort((a, b) => new Date(b.lastReadDate).getTime() - new Date(a.lastReadDate).getTime())
        .slice(0, 6); // Get the 6 most recently read books


    return { progress, saveReadingProgress, getReadingProgress, removeReadingProgress, recentlyRead, isLoading };
}

    