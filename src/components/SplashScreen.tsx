import Logo from './ui/Logo';

export default function SplashScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <Logo />
      <div className="mt-8">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 text-muted-foreground">Loading your streaks...</p>
    </div>
  );
}
