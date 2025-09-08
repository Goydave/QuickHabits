
'use client';

import { useUser } from '@/hooks/use-user';
import { useHabits } from '@/hooks/use-habits';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ALL_ACHIEVEMENTS, getAvatarByLevel } from '@/lib/achievements';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function ProfilePage() {
  const { user } = useUser();
  const { habits } = useHabits();

  const totalLevel = habits.reduce((sum, habit) => sum + habit.level, 0);
  const totalCheckins = habits.reduce((sum, habit) => sum + (habit.checkinHistory?.length || 0), 0);
  const longestStreak = Math.max(0, ...habits.map(h => h.longestStreak));

  const Avatar = getAvatarByLevel(totalLevel);
  const nextAvatarLevel = [10, 25, 50, 100].find(l => l > totalLevel) || totalLevel;

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-4">
             <Image 
                src={Avatar.src} 
                alt={Avatar.name}
                width={128}
                height={128}
                className="rounded-full border-4 border-primary shadow-lg"
                data-ai-hint="avatar"
             />
             <div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg border-4 border-background">
                {totalLevel}
             </div>
          </div>
          <CardTitle className="text-3xl font-headline">{user?.nickname}</CardTitle>
          <CardDescription>Level {totalLevel} - The {Avatar.name}</CardDescription>
           <p className="text-sm text-muted-foreground pt-2">
            {nextAvatarLevel > totalLevel ? `Reach total level ${nextAvatarLevel} to unlock the next avatar!` : `You've unlocked the highest avatar!`}
           </p>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4 text-center">
            <div className="p-4 bg-muted rounded-lg">
                <p className="text-2xl font-bold">{totalCheckins}</p>
                <p className="text-sm text-muted-foreground">Total Check-ins</p>
            </div>
             <div className="p-4 bg-muted rounded-lg">
                <p className="text-2xl font-bold">{longestStreak}</p>
                <p className="text-sm text-muted-foreground">Longest Streak</p>
            </div>
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
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                      >
                         <div className={cn(
                            "p-2 aspect-square rounded-lg flex items-center justify-center transition-all",
                            isUnlocked ? 'bg-amber-400/20' : 'bg-muted opacity-40'
                         )}>
                            <achievement.icon className={cn("w-10 h-10", isUnlocked ? 'text-amber-500' : 'text-muted-foreground')} />
                         </div>
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent>
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
