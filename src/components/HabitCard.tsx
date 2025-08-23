'use client';

import type { Habit } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Check, Share2, Mail, MessageSquare, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { getXpForCurrentLevel, getXpForNextLevel } from '@/lib/game-mechanics';

type HabitCardProps = {
  habit: Habit;
  onCheckIn: (habitId: string) => void;
};

export default function HabitCard({ habit, onCheckIn }: HabitCardProps) {
  const { toast } = useToast();
  const today = new Date().toISOString().split('T')[0];
  const isCheckedIn = habit.lastCheckinDate === today;

  const currentLevelXp = getXpForCurrentLevel(habit.level);
  const nextLevelXp = getXpForNextLevel(habit.level);
  const xpForThisLevel = nextLevelXp - currentLevelXp;
  const xpProgressThisLevel = habit.xp - currentLevelXp;
  const progressPercentage = xpForThisLevel > 0 ? (xpProgressThisLevel / xpForThisLevel) * 100 : 100;
  
  const shareText = `I've hit a ${habit.currentStreak}-day streak and reached Level ${habit.level} for "${habit.name}"! Let's build habits together with #QuickHabits`;

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      toast({
        title: 'Copied to clipboard!',
        description: 'You can now share your progress with your friends.',
      });
    } catch (err) {
      toast({
        variant: 'destructive',
        title: 'Oops!',
        description: 'Could not copy to clipboard. Please try again.',
      });
    }
  };

  return (
    <Card className={cn(
      'flex flex-col transition-all duration-300 transform hover:scale-105 hover:shadow-xl',
      isCheckedIn ? 'bg-primary/20 border-primary' : 'bg-card'
    )}>
      <CardHeader className="flex-row items-center justify-between gap-4 space-y-0 pb-4">
        <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <habit.icon className="w-6 h-6" />
            </div>
            <CardTitle className="font-headline text-xl">{habit.name}</CardTitle>
        </div>
        <Badge variant="secondary">Lvl {habit.level}</Badge>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <div className="text-center">
          <p className="text-5xl font-bold text-primary">{habit.currentStreak}</p>
          <p className="text-sm text-muted-foreground uppercase tracking-wider">Day Streak</p>
        </div>
        <div>
          <div className="flex justify-between items-center text-xs text-muted-foreground mb-1">
            <span>Level Progress</span>
            <span>{habit.xp} / {nextLevelXp} XP</span>
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="lg" variant="outline">
              <Share2 className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={handleCopyToClipboard}>
              <Copy className="mr-2 h-4 w-4" />
              <span>Copy Share Text</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardFooter>
    </Card>
  );
}
