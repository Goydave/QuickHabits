'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@/hooks/use-user';
import { useHabits } from '@/hooks/use-habits';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { toast } from 'sonner';
import { PREDEFINED_HABITS } from '@/lib/constants';
import HabitSelector from './HabitSelector';
import type { PredefinedHabit } from '@/lib/types';
import { useTheme } from 'next-themes';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Switch } from './ui/switch';
import { Check, Archive, ArchiveRestore } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { CoachingStyle } from '@/lib/types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const colorThemes = [
  { name: 'Amber', class: 'theme-amber' },
  { name: 'Green', class: 'theme-green' },
  { name: 'Blue', class: 'theme-blue' },
  { name: 'Violet', class: 'theme-violet' },
];

export default function SettingsPage() {
  const { user, setUser } = useUser();
  const { habits, addHabit, removeHabit, clearHabits, toggleHabitArchive } = useHabits();
  const { theme, setTheme } = useTheme();

  const [nickname, setNickname] = useState(user?.nickname || '');
  const [enableMotivation, setEnableMotivation] = useState(user?.settings.enableMotivation ?? true);
  const [coachingStyle, setCoachingStyle] = useState<CoachingStyle>(user?.settings.coachingStyle ?? 'encouraging');
  const [colorTheme, setColorTheme] = useState(user?.settings.colorTheme ?? 'theme-amber');
  
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSavePreferences = () => {
     if (user) {
        const newSettings = {
            ...user.settings,
            enableMotivation,
            coachingStyle,
            colorTheme,
        };
        setUser({ ...user, settings: newSettings });
        toast.success('Preferences saved!');
    }
  };

  useEffect(() => {
    // This effect runs on the client and ensures the theme class is on the body
    if (colorTheme) {
      document.body.className = ''; // Clear existing theme classes
      document.body.classList.add(colorTheme);
    }
  }, [colorTheme]);


  const handleHabitSelectionChange = (selected: PredefinedHabit[]) => {
    const currentHabitIds = habits.map(h => h.id);
    const selectedHabitIds = selected.map(h => h.id);

    // Add new habits
    const habitsToAdd = selected.filter(h => !currentHabitIds.includes(h.id));
    habitsToAdd.forEach(habit => addHabit(habit.id));

    // Re-activate archived habits if they are selected again
    const habitsToReactivate = habits.filter(h => h.isArchived && selectedHabitIds.includes(h.id));
    habitsToReactivate.forEach(habit => toggleHabitArchive(habit.id));

    toast.success('Habits updated!');
  };
  
  const handleResetAccount = () => {
    clearHabits();
    // No need for clearUser, as it's part of the redirect which unloads state
    window.location.href = '/';
  }

  // Habits selected in the "Add New" tab should include active and archived ones
  const selectedPredefinedHabits = PREDEFINED_HABITS.filter(ph => 
    habits.some(h => h.id === ph.id)
  );

  const activeHabits = habits.filter(h => !h.isArchived);
  const archivedHabits = habits.filter(h => h.isArchived);

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>Update your personal information.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nickname">Nickname</Label>
            <div className="flex gap-2">
              <Input
                id="nickname"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
              <Button onClick={() => user && setUser({ ...user, nickname })} disabled={nickname === user?.nickname || !nickname.trim()}>
                Save
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Appearance & Theme</CardTitle>
          <CardDescription>Customize the look and feel of your app.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
             <Label>Color Theme</Label>
             <div className="flex flex-wrap gap-3">
               {colorThemes.map((ct) => (
                 <button
                   key={ct.class}
                   onClick={() => setColorTheme(ct.class)}
                   className={cn(
                     'flex items-center gap-2 rounded-lg border p-3 text-sm transition-all',
                     colorTheme === ct.class ? 'ring-2 ring-primary' : 'hover:bg-accent/50'
                   )}
                 >
                   <div className={cn('h-5 w-5 rounded-full', ct.class, 'bg-primary')} />
                   <span>{ct.name}</span>
                   {colorTheme === ct.class && <Check className="h-4 w-4 text-primary" />}
                 </button>
               ))}
             </div>
          </div>
          <div className="space-y-2">
            <Label>Appearance</Label>
             {mounted && <RadioGroup
              defaultValue={theme}
              onValueChange={(value) => setTheme(value)}
              className="grid max-w-md grid-cols-2 gap-8 pt-2"
            >
              <Label className="[&:has([data-state=checked])>div]:border-primary">
                <RadioGroupItem value="light" className="sr-only" />
                <div className="items-center rounded-md border-2 border-muted p-1 hover:border-accent">
                  <div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
                    <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
                      <div className="h-2 w-[80px] rounded-lg bg-[#ecedef]" />
                      <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                    </div>
                    <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                      <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                      <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                    </div>
                  </div>
                </div>
                <span className="block w-full p-2 text-center font-normal">
                  Light
                </span>
              </Label>
              <Label className="[&:has([data-state=checked])>div]:border-primary">
                <RadioGroupItem value="dark" className="sr-only" />
                <div className="items-center rounded-md border-2 border-muted bg-popover p-1 hover:border-accent">
                   <div className="space-y-2 rounded-sm bg-slate-950 p-2">
                    <div className="space-y-2 rounded-md bg-slate-800 p-2 shadow-sm">
                      <div className="h-2 w-[80px] rounded-lg bg-slate-400" />
                      <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
                    </div>
                    <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                      <div className="h-4 w-4 rounded-full bg-slate-400" />
                      <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
                    </div>
                  </div>
                </div>
                 <span className="block w-full p-2 text-center font-normal">
                  Dark
                </span>
              </Label>
            </RadioGroup>}
          </div>
          <Button onClick={handleSavePreferences}>Save Preferences</Button>
        </CardContent>
      </Card>

       <Card>
        <CardHeader>
          <CardTitle>AI Coach & Notifications</CardTitle>
          <CardDescription>Personalize your AI coach and manage notifications.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
           <div className="flex items-center justify-between space-x-2 rounded-lg border p-4">
             <div className="flex flex-col">
              <Label htmlFor="enable-motivation">Enable Motivational Coach</Label>
              <p className="text-sm text-muted-foreground">
                Receive AI-generated messages after check-ins.
              </p>
             </div>
             <Switch
                id="enable-motivation"
                checked={enableMotivation}
                onCheckedChange={setEnableMotivation}
              />
          </div>
          <div className="space-y-2">
            <Label>Coaching Style</Label>
             <RadioGroup
                value={coachingStyle}
                onValueChange={(value: string) => setCoachingStyle(value as CoachingStyle)}
                className="flex flex-col space-y-1"
              >
              <Label className="flex items-center space-x-3 rounded-md p-2 hover:bg-accent cursor-pointer">
                <RadioGroupItem value="encouraging" />
                <div>
                  <p className="font-semibold">Encouraging</p>
                  <p className="text-sm text-muted-foreground">Friendly and positive reinforcement.</p>
                </div>
              </Label>
              <Label className="flex items-center space-x-3 rounded-md p-2 hover:bg-accent cursor-pointer">
                <RadioGroupItem value="tough-love" />
                 <div>
                  <p className="font-semibold">Tough Love</p>
                  <p className="text-sm text-muted-foreground">Direct, no-nonsense motivation.</p>
                </div>
              </Label>
              <Label className="flex items-center space-x-3 rounded-md p-2 hover:bg-accent cursor-pointer">
                <RadioGroupItem value="zen" />
                 <div>
                  <p className="font-semibold">Zen</p>
                  <p className="text-sm text-muted-foreground">Mindful, calm, and reflective.</p>
                </div>
              </Label>
            </RadioGroup>
          </div>
           <Button onClick={handleSavePreferences}>Save Preferences</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Manage Habits</CardTitle>
          <CardDescription>Add, remove, or archive your habits.</CardDescription>
        </CardHeader>
        <CardContent>
            <Tabs defaultValue="active">
                <TabsList className='mb-4'>
                    <TabsTrigger value="active">Active ({activeHabits.length})</TabsTrigger>
                    <TabsTrigger value="archived">Archived ({archivedHabits.length})</TabsTrigger>
                    <TabsTrigger value="add">Add New</TabsTrigger>
                </TabsList>
                <TabsContent value="active">
                    {activeHabits.length > 0 ? (
                        <div className="space-y-2">
                            {activeHabits.map(habit => (
                                <div key={habit.id} className="flex items-center justify-between rounded-lg border p-3">
                                    <div className="flex items-center gap-3">
                                        <habit.icon className="w-5 h-5 text-primary" />
                                        <span className="font-medium">{habit.name}</span>
                                    </div>
                                    <Button variant="ghost" size="icon" onClick={() => toggleHabitArchive(habit.id)}>
                                        <Archive className="w-5 h-5" />
                                    </Button>
                                </div>
                            ))}
                        </div>
                    ) : <p className="text-muted-foreground text-center py-4">No active habits.</p>}
                </TabsContent>
                <TabsContent value="archived">
                    {archivedHabits.length > 0 ? (
                        <div className="space-y-2">
                            {archivedHabits.map(habit => (
                                <div key={habit.id} className="flex items-center justify-between rounded-lg border p-3">
                                    <div className="flex items-center gap-3">
                                        <habit.icon className="w-5 h-5 text-muted-foreground" />
                                        <span className="font-medium text-muted-foreground">{habit.name}</span>
                                    </div>
                                    <Button variant="ghost" size="icon" onClick={() => toggleHabitArchive(habit.id)}>
                                        <ArchiveRestore className="w-5 h-5" />
                                    </Button>
                                </div>
                            ))}
                        </div>
                    ) : <p className="text-muted-foreground text-center py-4">No archived habits.</p>}
                </TabsContent>
                <TabsContent value="add">
                     <HabitSelector
                        predefinedHabits={PREDEFINED_HABITS}
                        selectedHabits={selectedPredefinedHabits}
                        onSelectionChange={handleHabitSelectionChange}
                    />
                </TabsContent>
            </Tabs>
        </CardContent>
      </Card>
      
      <Card className="border-destructive">
         <CardHeader>
          <CardTitle className="text-destructive">Danger Zone</CardTitle>
          <CardDescription>These actions are permanent and cannot be undone.</CardDescription>
        </CardHeader>
        <CardContent>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">Reset Account</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete all your habit data and streaks.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleResetAccount}
                  className="bg-destructive hover:bg-destructive/90"
                >
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardContent>
      </Card>
    </div>
  );
}
