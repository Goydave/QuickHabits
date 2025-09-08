
import type { Achievement, Habit, Avatar, Icon } from './types';
import { Award, BadgeCent, Brain, Flame, Gem, Heart, Medal, Mountain, Rocket, Shield, Sparkles, Star, Trophy, Zap, Sun, Moon } from 'lucide-react';

export const ALL_ACHIEVEMENTS: Achievement[] = [
    // Streak Achievements
    { id: 'streak-3', name: 'On a Roll', description: 'Maintain a 3-day streak on any habit.', icon: Flame },
    { id: 'streak-7', name: 'Week Warrior', description: 'Maintain a 7-day streak.', icon: Star },
    { id: 'streak-30', name: 'Month Master', description: 'Maintain a 30-day streak.', icon: Trophy },
    { id: 'streak-100', name: 'Century Club', description: 'Maintain a 100-day streak!', icon: Gem },

    // Level Achievements
    { id: 'level-5', name: 'Level 5 Reached', description: 'Reach Level 5 in any habit.', icon: Zap },
    { id: 'level-10', name: 'Level 10 Expert', description: 'Reach Level 10 in any habit.', icon: Rocket },
    
    // Total Progress Achievements
    { id: 'total-level-10', name: 'Novice Adventurer', description: 'Reach a total level of 10 across all habits.', icon: Shield },
    { id: 'total-level-50', name: 'Seasoned Explorer', description: 'Reach a total level of 50.', icon: Mountain },
    { id: 'total-checkins-50', name: 'Consistent Tracker', description: 'Complete 50 total check-ins.', icon: BadgeCent },

    // Habit-specific or miscellaneous
    { id: 'habit-mastery', name: 'Habit Mastery', description: 'Reach Level 10 in 3 different habits.', icon: Brain },
    { id: 'polymath', name: 'Polymath', description: 'Have 5 or more active habits.', icon: Sparkles },
    { id: 'first-checkin', name: 'The Journey Begins', description: 'Complete your very first check-in.', icon: Heart },
];


export const checkAchievement = (id: string, habits: Habit[]): boolean => {
    const activeHabits = habits.filter(h => !h.isArchived);
    if (activeHabits.length === 0) return false;

    const totalLevel = activeHabits.reduce((sum, h) => sum + h.level, 0);
    const totalCheckins = activeHabits.reduce((sum, h) => sum + (h.checkinHistory?.length || 0), 0);
    const highestLevel = Math.max(...activeHabits.map(h => h.level));
    const longestStreak = Math.max(...activeHabits.map(h => h.longestStreak));
    
    switch (id) {
        case 'streak-3':
            return longestStreak >= 3;
        case 'streak-7':
            return longestStreak >= 7;
        case 'streak-30':
            return longestStreak >= 30;
        case 'streak-100':
            return longestStreak >= 100;
        case 'level-5':
            return highestLevel >= 5;
        case 'level-10':
            return highestLevel >= 10;
        case 'total-level-10':
            return totalLevel >= 10;
        case 'total-level-50':
            return totalLevel >= 50;
        case 'total-checkins-50':
            return totalCheckins >= 50;
        case 'habit-mastery':
            return activeHabits.filter(h => h.level >= 10).length >= 3;
        case 'polymath':
            return activeHabits.length >= 5;
        case 'first-checkin':
            return totalCheckins > 0;
        default:
            return false;
    }
};

export const AVATARS: Avatar[] = [
    { name: 'Sprout', src: 'https://picsum.photos/128/128?random=1', minLevel: 0 },
    { name: 'Seeker', src: 'https://picsum.photos/128/128?random=2', minLevel: 10 },
    { name: 'Adept', src: 'https://picsum.photos/128/128?random=3', minLevel: 25 },
    { name: 'Champion', src: 'https://picsum.photos/128/128?random=4', minLevel: 50 },
    { name: 'Guardian', src: 'https://picsum.photos/128/128?random=5', minLevel: 100 },
];

type AvatarInfo = {
    avatar: Avatar;
    nextAvatar: Avatar | null;
    progressToNextAvatar: number;
}

export const getAvatarByLevel = (totalLevel: number): AvatarInfo => {
    let currentAvatar: Avatar = AVATARS[0];
    let nextAvatar: Avatar | null = null;
    let progress = 0;

    for (let i = 0; i < AVATARS.length; i++) {
        if (totalLevel >= AVATARS[i].minLevel) {
            currentAvatar = AVATARS[i];
        } else {
            nextAvatar = AVATARS[i];
            break;
        }
    }

    if (nextAvatar) {
        const levelRange = nextAvatar.minLevel - currentAvatar.minLevel;
        const progressInLevel = totalLevel - currentAvatar.minLevel;
        progress = (progressInLevel / levelRange) * 100;
    } else {
        progress = 100; // Max level reached
    }

    return {
        avatar: currentAvatar,
        nextAvatar: nextAvatar,
        progressToNextAvatar: progress
    };
};
