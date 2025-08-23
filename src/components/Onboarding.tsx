'use client';

import { useState } from 'react';
import { useUser } from '@/hooks/use-user';
import { useHabits } from '@/hooks/use-habits';
import { PREDEFINED_HABITS } from '@/lib/constants';
import type { Habit, PredefinedHabit } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Logo from './ui/Logo';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import HabitSelector from './HabitSelector';

export default function Onboarding() {
  const { setUser } = useUser();
  const { setHabits } = useHabits();
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [nickname, setNickname] = useState('');
  const [selectedHabits, setSelectedHabits] = useState<PredefinedHabit[]>([]);

  const handleNextStep = () => {
    if (nickname.trim()) {
      setUser({ nickname });
      setStep(2);
    }
  };

  const handleStartJourney = () => {
    if (selectedHabits.length === 0) {
      // Maybe show a toast? For now, we just prevent empty state.
      return;
    }
    const newHabits: Habit[] = selectedHabits.map(h => ({
      ...h,
      currentStreak: 0,
      longestStreak: 0,
      lastCheckinDate: null,
    }));
    setHabits(newHabits);
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
                <CardTitle className="font-headline text-2xl">Welcome to QuickHabits!</CardTitle>
                <CardDescription>What should we call you?</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e) => { e.preventDefault(); handleNextStep(); }}>
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
                <Button className="w-full" onClick={handleNextStep} disabled={!nickname.trim()}>
                  Next
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
                <CardTitle className="font-headline text-2xl">Choose Your Habits</CardTitle>
                <CardDescription>Select the habits you want to track. You can change these later.</CardDescription>
              </CardHeader>
              <CardContent>
                <HabitSelector
                  predefinedHabits={PREDEFINED_HABITS}
                  selectedHabits={selectedHabits}
                  onSelectionChange={setSelectedHabits}
                />
              </CardContent>
              <CardFooter className="flex-col gap-2">
                 <Button className="w-full" onClick={handleStartJourney} disabled={selectedHabits.length === 0}>
                   Start My Journey!
                 </Button>
                 <Button variant="ghost" className="w-full" onClick={() => setStep(1)}>
                    Back
                 </Button>
              </CardFooter>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </div>
  );
}
