'use client';

import { useUser } from '@/hooks/use-user';
import Logo from './ui/Logo';

export default function Header() {
  const { user } = useUser();

  return (
    <header className="flex justify-between items-center w-full">
      <Logo />
      {user && (
        <div className="text-right">
          <p className="text-sm font-medium hidden sm:block">Welcome, {user.nickname}!</p>
          <p className="text-xs text-muted-foreground hidden sm:block">Let's make today count.</p>
        </div>
      )}
    </header>
  );
}
