'use client';

import type { Habit } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Check, Share2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { STREAK_MILESTONES } from '@/lib/constants';

type HabitCardProps = {
  habit: Habit;
  onCheckIn: (habitId: string) => void;
};

export default function HabitCard({ habit, onCheckIn }: HabitCardProps) {
  const today = new Date().toISOString().split('T')[0];
  const isCheckedIn = habit.lastCheckinDate === today;

  const nextMilestone = STREAK_MILESTONES.find(m => m > habit.currentStreak) || STREAK_MILESTONES[STREAK_MILESTONES.length - 1];
  const progressPercentage = habit.currentStreak > 0 ? (habit.currentStreak / nextMilestone) * 100 : 0;
  
  const handleShare = async () => {
    const shareText = `I've hit a ${habit.currentStreak}-day streak for "${habit.name}"! Let's build habits together with #StreakSpark`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My StreakSpark Progress!',
          text: shareText,
          url: window.location.href,
        });
      } catch (error) {
        console.error('Sharing failed:', error);
        // Fallback or just ignore if user cancels sharing
      }
    } else {
      navigator.clipboard.writeText(shareText);
      alert('Share link copied to clipboard!');
    }
  };

  return (
    <Card className={cn(
      'flex flex-col transition-all duration-300 transform hover:scale-105 hover:shadow-xl',
      isCheckedIn ? 'bg-primary/20 border-primary' : 'bg-card'
    )}>
      <CardHeader className="flex-row items-center gap-4 space-y-0 pb-4">
        <div className="p-3 rounded-lg bg-primary/10 text-primary">
          <habit.icon className="w-6 h-6" />
        </div>
        <CardTitle className="font-headline text-xl">{habit.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <div className="text-center">
          <p className="text-5xl font-bold text-primary">{habit.currentStreak}</p>
          <p className="text-sm text-muted-foreground uppercase tracking-wider">Day Streak</p>
        </div>
        <div>
          <div className="flex justify-between items-center text-xs text-muted-foreground mb-1">
            <span>Progress to next milestone</span>
            <span>{habit.currentStreak} / {nextMilestone} days</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button 
          size="lg" 
          className="flex-1" 
          onClick={() => onCheckIn(habit.id)}
          disabled={isCheckedIn}
          variant={isCheckedIn ? 'secondary' : 'default'}
        >
          <Check className={cn('mr-2 h-5 w-5 transition-transform duration-300', isCheckedIn && 'scale-125')}/>
          {isCheckedIn ? 'Completed Today!' : 'Check-in'}
        </Button>
        <Button size="lg" variant="outline" onClick={handleShare}>
          <Share2 className="h-5 w-5" />
        </Button>
      </CardFooter>
    </Card>
  );
}
