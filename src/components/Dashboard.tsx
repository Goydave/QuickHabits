'use client';

import { useHabits } from '@/hooks/use-habits';
import { useUser } from '@/hooks/use-user';
import Header from '@/components/Header';
import HabitCard from '@/components/HabitCard';
import { generateMotivationalPrompt } from '@/ai/flows/motivational-prompt';
import { toast } from 'sonner';
import { useState } from 'react';
import Confetti from './ui/Confetti';
import { STREAK_MILESTONES } from '@/lib/constants';
import DailyFocus from './DailyFocus';

export default function Dashboard() {
  const { user } = useUser();
  const { habits, checkIn } = useHabits();
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiKey, setConfettiKey] = useState(0);

  const activeHabits = habits.filter(h => !h.isArchived);

  const handleCheckIn = async (habitId: string) => {
    const originalHabit = habits.find(h => h.id === habitId);
    if (!originalHabit) return;
    
    const originalLevel = originalHabit.level;
    const updatedHabit = checkIn(habitId);
    
    if (updatedHabit) {
      const leveledUp = updatedHabit.level > originalLevel;

      if (STREAK_MILESTONES.includes(updatedHabit.currentStreak) || leveledUp) {
        setShowConfetti(true);
        setConfettiKey(prev => prev + 1);
        setTimeout(() => setShowConfetti(false), 4000);
      }
      
      if (leveledUp) {
        toast.success(`Leveled Up!`, {
            description: `You've reached Level ${updatedHabit.level} in "${updatedHabit.name}". Amazing!`,
        });
      }

      if (user?.settings.enableMotivation) {
        try {
          const res = await generateMotivationalPrompt({
            habit: updatedHabit.name,
            streak: updatedHabit.currentStreak,
            level: updatedHabit.level,
            coachingStyle: user.settings.coachingStyle,
            habitType: updatedHabit.type || 'build',
          });
          // Avoid showing two toasts at once if they leveled up
          if (!leveledUp) {
            toast.success('Way to go! ✨', {
                description: res.prompt,
            });
          }
        } catch (error) {
          console.error('AI prompt failed:', error);
          // Silently fail on AI error to not disrupt user experience
        }
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground p-4 md:p-6">
      {showConfetti && <Confetti key={confettiKey} />}
      <Header />
      <main className="flex-grow pt-8 max-w-6xl mx-auto w-full">
        <h1 className="text-3xl md:text-4xl font-bold font-headline text-center mb-2">
          Hello, {user?.nickname}!
        </h1>
        <p className="text-center text-muted-foreground mb-8">
          {activeHabits.length > 0 ? "Your daily progress is looking great. Keep it up!" : "You have no active habits. Go to settings to add some!"}
        </p>

        <div className="mb-8">
          <DailyFocus habits={habits} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeHabits.map((habit) => (
            <HabitCard
              key={habit.id}
              habit={habit}
              onCheckIn={() => handleCheckIn(habit.id)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
