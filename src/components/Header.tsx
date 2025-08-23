'use client';

import { useUser } from '@/hooks/use-user';
import Logo from './ui/Logo';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useHabits } from '@/hooks/use-habits';

export default function Header() {
  const { user, clearUser } = useUser();
  const { clearHabits } = useHabits();

  const handleLogout = () => {
    clearUser();
    clearHabits();
    // Force a full page reload to ensure the user is redirected to the onboarding screen
    window.location.href = '/';
  };

  return (
    <header className="flex justify-between items-center w-full">
      <Logo />
      {user && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 rounded-full focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              <Avatar className="w-9 h-9">
                <AvatarFallback>{user.nickname.charAt(0).toUpperCase()}</AvatarFallback>
              </Avatar>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{user.nickname}</p>
                <p className="text-xs leading-none text-muted-foreground">
                  Welcome!
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogout}>
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </header>
  );
}
