'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useUser } from '@/hooks/use-user';
import { useHabits } from '@/hooks/use-habits';
import Onboarding from '@/components/Onboarding';
import Dashboard from '@/components/Dashboard';
import SplashScreen from '@/components/SplashScreen';

function HomePageContent() {
  const { user, isLoading: isUserLoading } = useUser();
  const { habits, isLoading: areHabitsLoading } = useHabits();
  const searchParams = useSearchParams();
  const action = searchParams.get('action');

  const [initialAction, setInitialAction] = useState<string | null>(null);

  // Capture the action only once on initial load
  useEffect(() => {
    if (action && !initialAction) {
      setInitialAction(action);
    }
  }, [action, initialAction]);


  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || isUserLoading || areHabitsLoading) {
    return <SplashScreen />;
  }

  const hasOnboarded = user && habits.length > 0;

  if (hasOnboarded) {
    return <Dashboard action={initialAction} onActionComplete={() => setInitialAction(null)} />;
  } else {
    return <Onboarding />;
  }
}


export default function Home() {
  return (
    // Wrap with Suspense for useSearchParams to work in child components
    <Suspense fallback={<SplashScreen />}>
       <HomePageContent />
    </Suspense>
  )
}
