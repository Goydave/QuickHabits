'use client';

import { useEffect, useState } from 'react';
import { useUser } from '@/hooks/use-user';
import { useHabits } from '@/hooks/use-habits';
import Onboarding from '@/components/Onboarding';
import Dashboard from '@/components/Dashboard';
import SplashScreen from '@/components/SplashScreen';

export default function Home() {
  const { user, isLoading: isUserLoading } = useUser();
  const { habits, isLoading: areHabitsLoading } = useHabits();
  
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || isUserLoading || areHabitsLoading) {
    return <SplashScreen />;
  }

  const hasOnboarded = user && habits.length > 0;

  if (hasOnboarded) {
    return <Dashboard />;
  } else {
    return <Onboarding />;
  }
}
