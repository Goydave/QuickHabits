
'use client';

import { useState, useEffect, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { Favorite } from '@/lib/types';

const FAVORITES_STORAGE_KEY = 'quickhabits-favorites';

export function useLibrary() {
    const [favoriteBookIds, setFavoriteBookIds] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        try {
            const storedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY);
            if (storedFavorites) {
                setFavoriteBookIds(JSON.parse(storedFavorites));
            }
        } catch (error) {
            console.error("Failed to load favorites from local storage", error);
        }
        setIsLoading(false);
    }, []);

    const setFavorites = useCallback((newFavorites: string[]) => {
        try {
            localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(newFavorites));
            setFavoriteBookIds(newFavorites);
        } catch (error) {
            console.error("Failed to save favorites to local storage", error);
        }
    }, []);

    const addFavorite = useCallback((bookId: string) => {
        if (favoriteBookIds.includes(bookId)) return;
        const newFavorites = [...favoriteBookIds, bookId];
        setFavorites(newFavorites);
        return bookId;
    }, [favoriteBookIds, setFavorites]);
    
    const removeFavorite = useCallback((bookId: string) => {
        const newFavorites = favoriteBookIds.filter(id => id !== bookId);
        setFavorites(newFavorites);
    }, [favoriteBookIds, setFavorites]);


    return { favoriteBookIds, addFavorite, removeFavorite, isLoading };
}
