'use client';

import { useState } from 'react';
import { useUser } from '@/hooks/use-user';
import { useHabits } from '@/hooks/use-habits';
import { PREDEFINED_HABITS } from '@/lib/constants';
import type { PredefinedHabit } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import Logo from './ui/Logo';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

const MAX_HABITS = 3;

export default function Onboarding() {
  const { setUser } = useUser();
  const { setHabits } = useHabits();
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [nickname, setNickname] = useState('');
  const [selectedHabits, setSelectedHabits] = useState<PredefinedHabit[]>([]);

  const toggleHabit = (habit: PredefinedHabit) => {
    setSelectedHabits((prev) => {
      const isSelected = prev.some((h) => h.id === habit.id);
      if (isSelected) {
        return prev.filter((h) => h.id !== habit.id);
      } else if (prev.length < MAX_HABITS) {
        return [...prev, habit];
      }
      return prev;
    });
  };

  const handleStart = () => {
    setUser({ nickname });
    setHabits(selectedHabits.map(h => ({ ...h, currentStreak: 0, longestStreak: 0, lastCheckinDate: null })));
    router.push('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <Logo />
      <Card className="w-full max-w-md mt-8 shadow-2xl">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
            >
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Welcome to StreakSpark!</CardTitle>
                <CardDescription>What should we call you?</CardDescription>
              </CardHeader>
              <CardContent>
                <Label htmlFor="nickname" className="sr-only">Nickname</Label>
                <Input
                  id="nickname"
                  placeholder="e.g. Alex"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  className="text-lg"
                />
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={() => setStep(2)} disabled={!nickname.trim()}>
                  Continue
                </Button>
              </CardFooter>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
            >
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Let's Set Your Goals</CardTitle>
                <CardDescription>Choose up to {MAX_HABITS} daily habits to track.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  {PREDEFINED_HABITS.map((habit) => {
                    const isSelected = selectedHabits.some((h) => h.id === habit.id);
                    return (
                      <Button
                        key={habit.id}
                        variant={isSelected ? 'default' : 'outline'}
                        onClick={() => toggleHabit(habit)}
                        className="flex flex-col h-24 justify-center gap-2"
                      >
                        <habit.icon className="w-8 h-8" />
                        <span>{habit.name}</span>
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                 <p className="text-sm text-muted-foreground">{selectedHabits.length} / {MAX_HABITS} selected</p>
                <Button className="w-full" onClick={handleStart} disabled={selectedHabits.length === 0}>
                  Start My Journey!
                </Button>
                <Button variant="link" onClick={() => setStep(1)}>Back</Button>
              </CardFooter>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </div>
  );
}
