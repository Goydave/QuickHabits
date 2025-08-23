'use client';

import { useState } from 'react';
import { useUser } from '@/hooks/use-user';
import { useHabits } from '@/hooks/use-habits';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { toast } from 'sonner';
import { PREDEFINED_HABITS } from '@/lib/constants';
import HabitSelector from './HabitSelector';
import type { PredefinedHabit } from '@/lib/types';
import { Separator } from './ui/separator';

export default function SettingsPage() {
  const { user, setUser } = useUser();
  const { habits, addHabit, removeHabit, clearHabits } = useHabits();
  const [nickname, setNickname] = useState(user?.nickname || '');

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleSaveNickname = () => {
    if (nickname.trim() && user) {
      setUser({ ...user, nickname: nickname.trim() });
      toast.success('Nickname updated successfully!');
    }
  };

  const handleHabitSelectionChange = (selected: PredefinedHabit[]) => {
    const currentHabitIds = habits.map(h => h.id);
    const selectedHabitIds = selected.map(h => h.id);

    // Add new habits
    const habitsToAdd = selected.filter(h => !currentHabitIds.includes(h.id));
    habitsToAdd.forEach(habit => addHabit(habit.id));

    // Remove old habits
    const habitsToRemove = habits.filter(h => !selectedHabitIds.includes(h.id));
    habitsToRemove.forEach(habit => removeHabit(habit.id));
  };
  
  const handleResetAccount = () => {
    clearHabits();
    window.location.href = '/';
  }

  const selectedPredefinedHabits = PREDEFINED_HABITS.filter(ph => 
    habits.some(h => h.id === ph.id)
  );

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>Update your personal information.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nickname">Nickname</Label>
            <div className="flex gap-2">
              <Input
                id="nickname"
                value={nickname}
                onChange={handleNicknameChange}
              />
              <Button onClick={handleSaveNickname} disabled={nickname === user?.nickname || !nickname.trim()}>
                Save
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Manage Habits</CardTitle>
          <CardDescription>Add or remove habits from your daily tracking.</CardDescription>
        </CardHeader>
        <CardContent>
          <HabitSelector
            predefinedHabits={PREDEFINED_HABITS}
            selectedHabits={selectedPredefinedHabits}
            onSelectionChange={handleHabitSelectionChange}
          />
        </CardContent>
      </Card>
      
      <Card className="border-destructive">
         <CardHeader>
          <CardTitle className="text-destructive">Danger Zone</CardTitle>
          <CardDescription>These actions are permanent and cannot be undone.</CardDescription>
        </CardHeader>
        <CardContent>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">Reset Account</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete all your habit data and streaks.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleResetAccount}
                  className="bg-destructive hover:bg-destructive/90"
                >
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardContent>
      </Card>
    </div>
  );
}
