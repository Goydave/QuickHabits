'use client';

import { useUser } from '@/hooks/use-user';
import { useHabits } from '@/hooks/use-habits';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ALL_ACHIEVEMENTS, getAvatarByLevel } from '@/lib/achievements';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Progress } from '@/components/ui/progress';

export default function ProfilePage() {
  const { user } = useUser();
  const { habits } = useHabits();

  const totalLevel = habits.reduce((sum, habit) => sum + habit.level, 0);
  const totalCheckins = habits.reduce((sum, habit) => sum + (habit.checkinHistory?.length || 0), 0);
  const longestStreak = Math.max(0, ...habits.map(h => h.longestStreak));

  const { avatar, nextAvatar, progressToNextAvatar } = getAvatarByLevel(totalLevel);

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader className="text-center items-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
            className="relative w-32 h-32"
          >
             <Image 
                src={avatar.src} 
                alt={avatar.name}
                width={128}
                height={128}
                className="rounded-full border-4 border-primary shadow-lg"
                data-ai-hint="avatar"
             />
             <div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg border-4 border-background">
                {totalLevel}
             </div>
          </motion.div>
          <CardTitle className="text-3xl font-headline pt-4">{user?.nickname}</CardTitle>
          <CardDescription>Level {totalLevel} - The {avatar.name}</CardDescription>
          {nextAvatar && (
            <div className="w-full max-w-xs pt-2">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                             <Progress value={progressToNextAvatar} />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{totalLevel} / {nextAvatar.minLevel} to unlock The {nextAvatar.name}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <p className="text-xs text-muted-foreground mt-1">
                    Next Avatar: The {nextAvatar.name}
                </p>
            </div>
           )}
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <div className="p-4 bg-muted rounded-lg">
                    <p className="text-3xl font-bold">{totalCheckins}</p>
                    <p className="text-sm text-muted-foreground">Total Check-ins</p>
                </div>
            </motion.div>
             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <div className="p-4 bg-muted rounded-lg">
                    <p className="text-3xl font-bold">{longestStreak}</p>
                    <p className="text-sm text-muted-foreground">Longest Streak</p>
                </div>
             </motion.div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Achievements</CardTitle>
          <CardDescription>Collect badges by hitting milestones and building habits.</CardDescription>
        </CardHeader>
        <CardContent>
          <TooltipProvider>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
              {ALL_ACHIEVEMENTS.map((achievement, index) => {
                const isUnlocked = user?.achievements?.includes(achievement.id) ?? false;
                return (
                  <Tooltip key={achievement.id} delayDuration={0}>
                    <TooltipTrigger>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + (index * 0.05) }}
                      >
                         <div className={cn(
                            "p-2 aspect-square rounded-lg flex items-center justify-center transition-all duration-300",
                            isUnlocked ? 'bg-amber-400/20 hover:bg-amber-400/30' : 'bg-muted opacity-40'
                         )}>
                            <achievement.icon className={cn("w-10 h-10", isUnlocked ? 'text-amber-500' : 'text-muted-foreground')} />
                         </div>
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p className="font-bold">{achievement.name}</p>
                      <p className="text-muted-foreground">{isUnlocked ? 'Unlocked!' : achievement.description}</p>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          </TooltipProvider>
        </CardContent>
      </Card>
    </div>
  );
}
