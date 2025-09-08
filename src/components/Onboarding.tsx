'use client';

import { useState } from 'react';
import { useUser } from '@/hooks/use-user';
import { useHabits } from '@/hooks/use-habits';
import type { Habit, SuggestedHabit } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Logo from './ui/Logo';
import { motion, AnimatePresence } from 'framer-motion';
import HabitCoach from './HabitCoach';
import ManualHabitSelector from './ManualHabitSelector';

export default function Onboarding() {
  const { setUser } = useUser();
  const { addHabit } = useHabits();
  const [step, setStep] = useState(1);
  const [nickname, setNickname] = useState('');

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (nickname.trim()) {
      setUser({ nickname, settings: { enableMotivation: true, coachingStyle: 'encouraging', colorTheme: 'theme-amber' } });
      if (typeof window !== 'undefined' && navigator.onLine) {
        setStep(2); // AI Coach step
      } else {
        setStep(3); // Offline manual selection step
      }
    }
  };

  const handleStartJourney = (selectedHabits: SuggestedHabit[]) => {
    if (selectedHabits.length === 0) {
      return;
    }
    
    selectedHabits.forEach(habit => addHabit({ name: habit.name }));

    // Force a full page reload to ensure the new state is recognized
    // and the user is redirected to the dashboard correctly.
    window.location.href = '/';
  };

  const handleManualStartJourney = (selectedHabitIds: string[]) => {
     if (selectedHabitIds.length === 0) {
      return;
    }
    selectedHabitIds.forEach(id => addHabit({ id: id, name: '' })); // name can be empty as it will be looked up by id
     window.location.href = '/';
  }

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
                <CardTitle className="font-headline">Welcome to QuickHabits!</CardTitle>
                <CardDescription>First, what should we call you?</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleNextStep}>
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
                <CardTitle className="font-headline">Meet Your AI Coach</CardTitle>
                <CardDescription>Tell your coach a goal, and they'll create a habit plan for you.</CardDescription>
              </CardHeader>
              <CardContent>
                <HabitCoach onPlanReady={handleStartJourney} />
              </CardContent>
               <CardFooter>
                  <Button variant="ghost" className="w-full" onClick={() => setStep(1)}>
                    Back
                 </Button>
              </CardFooter>
            </motion.div>
          )}

          {step === 3 && (
             <motion.div
              key="step3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
            >
              <CardHeader>
                <CardTitle className="font-headline">Choose Your Habits</CardTitle>
                <CardDescription>Select the habits you want to track. You can change these later in settings.</CardDescription>
              </CardHeader>
              <CardContent>
                <ManualHabitSelector onPlanReady={handleManualStartJourney} />
              </CardContent>
               <CardFooter>
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
