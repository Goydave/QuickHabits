
'use client';

import { useHabits } from '@/hooks/use-habits';
import { useUser } from '@/hooks/use-user';
import Header from '@/components/Header';
import HabitCard from '@/components/HabitCard';
import { generateMotivationalPrompt } from '@/ai/flows/motivational-prompt';
import { toast } from 'sonner';
import { useState, useEffect } from 'react';
import Confetti from '@/components/ui/Confetti';
import { STREAK_MILESTONES } from '@/lib/constants';
import DailyFocus from '@/components/DailyFocus';
import AudioJournalPlayer from '@/components/AudioJournalPlayer';
import AudioMeditationPlayer from '@/components/AudioMeditationPlayer';
import VictoryImageDialog from '@/components/VictoryImageDialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Library, BookMarked, Check, ArrowRight, BrainCircuit } from 'lucide-react';
import Link from 'next/link';

type DashboardProps = {
  action?: string | null;
  onActionComplete?: () => void;
}

export default function Dashboard({ action, onActionComplete }: DashboardProps) {
  const { user, checkAndAwardAchievements } = useUser();
  const { habits, checkIn, addHabit, toggleHabitArchive } = useHabits();
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiKey, setConfettiKey] = useState(0);

  const [isAudioPlayerOpen, setIsAudioPlayerOpen] = useState(false);
  const [isMeditationPlayerOpen, setIsMeditationPlayerOpen] = useState(false);
  
  const [completedFeatures, setCompletedFeatures] = useState<string[]>([]);
  
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const storedDate = localStorage.getItem('featuresCompletedDate');
    if (storedDate === today) {
      const storedFeatures = localStorage.getItem('completedFeatures');
      if (storedFeatures) {
        setCompletedFeatures(JSON.parse(storedFeatures));
      }
    } else {
      // Reset on a new day
      localStorage.removeItem('completedFeatures');
      localStorage.removeItem('featuresCompletedDate');
    }
  }, []);

  const [victoryState, setVictoryState] = useState<{ isOpen: boolean; habitName: string | null }>({
    isOpen: false,
    habitName: null,
  });


  useEffect(() => {
    if (action === 'journal') {
      setIsAudioPlayerOpen(true);
    } else if (action === 'meditate') {
      setIsMeditationPlayerOpen(true);
    }
  }, [action]);

  const handleAudioJournalComplete = () => {
    const habit = habits.find(h => h.id === 'journal');
    if (habit) handleCheckIn('journal');
    setIsAudioPlayerOpen(false);
    onActionComplete?.();
  }

  const handleAudioMeditationComplete = () => {
    const habit = habits.find(h => h.id === 'meditate');
    if (habit) handleCheckIn('meditate');
    setIsMeditationPlayerOpen(false);
    onActionComplete?.();
  }

  const activeHabits = habits.filter(h => !h.isArchived);

  const handleCheckIn = async (habitId: string) => {
    const originalHabit = habits.find(h => h.id === habitId);
    if (!originalHabit) return;
    
    const originalLevel = originalHabit.level;
    const updatedHabit = checkIn(habitId);
    
    if (updatedHabit) {
      const leveledUp = updatedHabit.level > originalLevel;

      // Check for new achievements
      if (user) {
        // Pass the latest state of habits to the achievement checker
        const updatedHabits = habits.map(h => h.id === habitId ? updatedHabit : h);
        checkAndAwardAchievements(updatedHabits);
      }

      // Trigger the special Victory Image on level up or major streak milestones
      if (leveledUp || STREAK_MILESTONES.includes(updatedHabit.currentStreak)) {
        setVictoryState({ isOpen: true, habitName: updatedHabit.name });
        // Also show confetti for good measure
        setShowConfetti(true);
        setConfettiKey(prev => prev + 1);
        setTimeout(() => setShowConfetti(false), 5000); // let confetti run longer
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

  const literaryFeatures = [
    { 
      id: 'library-visit', 
      icon: Library, 
      title: 'Visit a Library', 
      description: 'Explore a world of books and knowledge.', 
      action: () => {}, // Placeholder, handled by Link
      isLink: true,
      href: '/library'
    },
    { 
      id: 'reading-journal', 
      icon: BookMarked, 
      title: 'Write in Reading Journal', 
      description: 'Reflect on your reading journey.',
      action: () => {}, // Placeholder, handled by Link
      isLink: true,
      href: '/journal',
    },
     { 
      id: 'goal-coach', 
      icon: BrainCircuit, 
      title: 'AI Goal Coach', 
      description: 'Chat with your AI coach to plan your ambitions.',
      action: () => {}, // Placeholder, handled by Link
      isLink: true,
      href: '/coach',
    },
  ];
  
  const totalLevel = habits.reduce((sum, habit) => sum + habit.level, 0);


  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground p-4 md:p-6">
      {showConfetti && <Confetti key={confettiKey} />}
      
      {/* Shortcut Handlers */}
      <AudioJournalPlayer
        isOpen={isAudioPlayerOpen}
        onOpenChange={(isOpen) => {
          setIsAudioPlayerOpen(isOpen);
          if (!isOpen) onActionComplete?.();
        }}
        onComplete={handleAudioJournalComplete}
      />
      <AudioMeditationPlayer
        isOpen={isMeditationPlayerOpen}
        onOpenChange={(isOpen) => {
          setIsMeditationPlayerOpen(isOpen);
          if (!isOpen) onActionComplete?.();
        }}
        onComplete={handleAudioMeditationComplete}
      />
      
      {/* Victory Image Dialog */}
      <VictoryImageDialog
        isOpen={victoryState.isOpen}
        onOpenChange={(isOpen) => setVictoryState({ isOpen, habitName: null })}
        habitName={victoryState.habitName}
      />

      <Header />
      <main className="flex-grow pt-4 md:pt-8 max-w-6xl mx-auto w-full">
        <h1 className="text-2xl md:text-4xl font-bold font-headline text-center mb-2">
          Hello, {user?.nickname}!
        </h1>
        <p className="text-center text-muted-foreground mb-8 text-sm md:text-base">
          {activeHabits.length > 0 ? `Your Total Level is ${totalLevel}. Keep up the great work!` : "You have no active habits. Go to settings to add some!"}
        </p>

        <div className="mb-6 md:mb-8">
          <DailyFocus habits={habits} />
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold font-headline text-center mb-6">Literary Corner</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {literaryFeatures.map(feature => {
              const isCompleted = completedFeatures.includes(feature.id);
              return (
                <Card key={feature.id} className="flex flex-col">
                  <CardHeader className="flex-row items-center gap-3 space-y-0 pb-4">
                     <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <CardTitle className="font-headline text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                  <div className="p-4 pt-0">
                     {feature.isLink ? (
                        <Button asChild className="w-full">
                           <Link href={feature.href!}>
                              Explore <ArrowRight className="ml-2"/>
                           </Link>
                        </Button>
                      ) : (
                        <Button onClick={() => {}} disabled={isCompleted} className="w-full">
                           {isCompleted ? <><Check className="mr-2"/> Done for Today</> : 'Mark as Done'}
                        </Button>
                      )}
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
        
        {activeHabits.length > 0 && (
          <h2 className="text-2xl font-bold font-headline text-center mb-6">Your Habits</h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
