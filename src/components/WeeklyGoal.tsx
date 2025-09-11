
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Loader2, Plus, Sparkles, Wand2 } from 'lucide-react';
import { WeeklyGoal, WeeklyGoalStep } from '@/lib/types';
import { getWeekNumber } from '@/lib/utils';
import { breakDownGoal } from '@/ai/flows/weekly-goal-flow';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';

const STORAGE_KEY = 'quickhabits-weekly-goal';

export default function WeeklyGoal() {
  const [goal, setGoal] = useState<WeeklyGoal | null>(null);
  const [newGoalText, setNewGoalText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const storedGoalData = localStorage.getItem(STORAGE_KEY);
    if (storedGoalData) {
      const parsedGoal: WeeklyGoal = JSON.parse(storedGoalData);
      const currentWeek = getWeekNumber(new Date());

      // If the stored goal is from a previous week, clear it.
      if (parsedGoal.weekNumber !== currentWeek) {
        localStorage.removeItem(STORAGE_KEY);
        setGoal(null);
      } else {
        setGoal(parsedGoal);
      }
    }
  }, []);

  const saveGoal = (newGoal: WeeklyGoal) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newGoal));
    setGoal(newGoal);
  };

  const handleSetGoal = async () => {
    if (!newGoalText.trim()) return;
    setIsLoading(true);
    try {
      const steps = await breakDownGoal({ goal: newGoalText });
      const newWeeklyGoal: WeeklyGoal = {
        text: newGoalText,
        steps: steps.map(stepText => ({ text: stepText, isCompleted: false })),
        weekNumber: getWeekNumber(new Date()),
      };
      saveGoal(newWeeklyGoal);
    } catch (error) {
      console.error('Failed to break down goal:', error);
      toast.error('I had trouble creating a plan. Please try again.');
    } finally {
      setIsLoading(false);
      setNewGoalText('');
    }
  };

  const toggleStep = (index: number) => {
    if (!goal) return;
    const newSteps = [...goal.steps];
    newSteps[index].isCompleted = !newSteps[index].isCompleted;
    saveGoal({ ...goal, steps: newSteps });
  };
  
  const progress = goal ? (goal.steps.filter(s => s.isCompleted).length / goal.steps.length) * 100 : 0;

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-lg">Your Focus for the Week</CardTitle>
        {!goal && (
            <CardDescription>Set a small, achievable goal for this week to make progress on your larger ambitions.</CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <AnimatePresence mode="wait">
          {goal ? (
            <motion.div
              key="goal-display"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="space-y-4">
                <p className="text-xl font-semibold text-center p-4 bg-muted rounded-lg">"{goal.text}"</p>
                <div className="space-y-3">
                  {goal.steps.map((step, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3"
                    >
                      <Checkbox
                        id={`step-${index}`}
                        checked={step.isCompleted}
                        onCheckedChange={() => toggleStep(index)}
                      />
                      <Label
                        htmlFor={`step-${index}`}
                        className={`flex-1 text-base ${step.isCompleted ? 'text-muted-foreground line-through' : ''}`}
                      >
                        {step.text}
                      </Label>
                    </motion.div>
                  ))}
                </div>
                 <Button variant="outline" className="w-full mt-4" onClick={() => setGoal(null)}>Set a New Goal</Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="goal-input"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2"
            >
              <Input
                placeholder="e.g., Learn to bake bread"
                value={newGoalText}
                onChange={(e) => setNewGoalText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSetGoal()}
                disabled={isLoading}
              />
              <Button onClick={handleSetGoal} disabled={isLoading || !newGoalText.trim()}>
                {isLoading ? <Loader2 className="animate-spin" /> : <Wand2 />}
                <span className="ml-2 hidden md:inline">Break it Down</span>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}
