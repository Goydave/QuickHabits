'use client';

import type { Habit } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Check, Share2, Mail, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import { STREAK_MILESTONES } from '@/lib/constants';
import { useToast } from '@/hooks/use-toast';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

type HabitCardProps = {
  habit: Habit;
  onCheckIn: (habitId: string) => void;
};

export default function HabitCard({ habit, onCheckIn }: HabitCardProps) {
  const { toast } = useToast();
  const today = new Date().toISOString().split('T')[0];
  const isCheckedIn = habit.lastCheckinDate === today;

  const nextMilestone = STREAK_MILESTONES.find(m => m > habit.currentStreak) || STREAK_MILESTONES[STREAK_MILESTONES.length - 1];
  const progressPercentage = habit.currentStreak > 0 ? (habit.currentStreak / nextMilestone) * 100 : 0;
  
  const shareText = `I've hit a ${habit.currentStreak}-day streak for "${habit.name}"! Let's build habits together with #StreakSpark`;

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My StreakSpark Progress!',
          text: shareText,
          url: window.location.href,
        });
      } catch (error) {
        // This will catch errors if the user cancels the share or if sharing fails.
        // We don't need to show an error message in this case.
        console.log('Share action was cancelled or failed.');
      }
    } else {
      handleCopyToClipboard();
    }
  };

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      toast({
        title: 'Copied to clipboard!',
        description: 'You can now share your streak with your friends.',
      });
    } catch (err) {
      toast({
        variant: 'destructive',
        title: 'Oops!',
        description: 'Could not copy to clipboard. Please try again.',
      });
    }
  };
  
  const handleShareToWhatsapp = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + window.location.href)}`;
    window.open(whatsappUrl, '_blank');
  };
  
  const handleShareToEmail = () => {
    const emailSubject = 'My StreakSpark Progress!';
    const emailBody = `${shareText}\n\nCheck out the app: ${window.location.href}`;
    const mailtoUrl = `mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoUrl;
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="lg" variant="outline">
              <Share2 className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={handleNativeShare}>
              <Share2 className="mr-2 h-4 w-4" />
              <span>Share now</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleShareToWhatsapp}>
              <MessageSquare className="mr-2 h-4 w-4" />
              <span>Share to WhatsApp</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleShareToEmail}>
              <Mail className="mr-2 h-4 w-4" />
              <span>Share via Email</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardFooter>
    </Card>
  );
}
