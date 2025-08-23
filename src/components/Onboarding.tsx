'use client';

import { useState } from 'react';
import { useUser } from '@/hooks/use-user';
import { useHabits } from '@/hooks/use-habits';
import { PREDEFINED_HABITS } from '@/lib/constants';
import type { Habit } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Logo from './ui/Logo';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Onboarding() {
  const { setUser } = useUser();
  const { setHabits } = useHabits();
  const router = useRouter();
  const [nickname, setNickname] = useState('');

  const handleStart = () => {
    if (!nickname.trim()) return;

    setUser({ nickname });
    
    // Assign the first 3 predefined habits by default
    const defaultHabits: Habit[] = PREDEFINED_HABITS.slice(0, 3).map(h => ({
      ...h,
      currentStreak: 0,
      longestStreak: 0,
      lastCheckinDate: null,
    }));
    
    setHabits(defaultHabits);
    router.push('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <Logo />
      <Card className="w-full max-w-md mt-8 shadow-2xl">
        <AnimatePresence mode="wait">
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
            >
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Welcome to QuickHabits!</CardTitle>
                <CardDescription>What should we call you?</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e) => { e.preventDefault(); handleStart(); }}>
                  <Label htmlFor="nickname" className="sr-only">Nickname</Label>
                  <Input
                    id="nickname"
                    placeholder="e.g. Alex"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    className="text-lg"
                  />
                </form>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={handleStart} disabled={!nickname.trim()}>
                  Start My Journey!
                </Button>
              </CardFooter>
            </motion.div>
        </AnimatePresence>
      </Card>
    </div>
  );
}
