import SettingsPage from '@/components/SettingsPage';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Settings() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground p-4 md:p-6">
      <Header />
      <main className="flex-grow pt-8 max-w-4xl mx-auto w-full">
        <div className="flex items-center mb-6">
          <Button asChild variant="ghost" size="icon" className="mr-2">
            <Link href="/">
              <ArrowLeft />
            </Link>
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold font-headline">
            Settings
          </h1>
        </div>
        <SettingsPage />
      </main>
    </div>
  );
}
