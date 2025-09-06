
'use client';

import { useState, useEffect, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { JournalEntry } from '@/lib/types';

const JOURNAL_STORAGE_KEY = 'quickhabits-journal';

export function useJournal() {
    const [entries, setEntriesState] = useState<JournalEntry[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        try {
            const storedEntries = localStorage.getItem(JOURNAL_STORAGE_KEY);
            if (storedEntries) {
                const parsedEntries: JournalEntry[] = JSON.parse(storedEntries);
                // Sort by date descending
                parsedEntries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
                setEntriesState(parsedEntries);
            }
        } catch (error) {
            console.error("Failed to load journal entries from local storage", error);
        }
        setIsLoading(false);
    }, []);

    const setEntries = useCallback((newEntries: JournalEntry[]) => {
        try {
            // Sort by date descending before saving
            newEntries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
            localStorage.setItem(JOURNAL_STORAGE_KEY, JSON.stringify(newEntries));
            setEntriesState(newEntries);
        } catch (error) {
            console.error("Failed to save journal entries to local storage", error);
        }
    }, []);

    const addEntry = useCallback((entryData: Omit<JournalEntry, 'id' | 'date'>) => {
        const newEntry: JournalEntry = {
            ...entryData,
            id: uuidv4(),
            date: new Date().toISOString(),
        };
        const newEntries = [newEntry, ...entries];
        setEntries(newEntries);
        return newEntry;
    }, [entries, setEntries]);


    return { entries, addEntry, isLoading };
}
