
'use client';

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { useReadingProgress } from '@/hooks/use-reading-progress';
import { useEffect, useRef } from 'react';
import { useThrottle } from '@/hooks/use-throttle';

type BookReaderProps = {
  bookId: string;
  content: string;
};

export default function BookReader({ bookId, content }: BookReaderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { getReadingProgress, saveReadingProgress } = useReadingProgress();

  // Restore scroll position on mount
  useEffect(() => {
    const savedProgress = getReadingProgress(bookId);
    if (scrollRef.current && savedProgress) {
        const { scrollHeight, clientHeight } = scrollRef.current;
        const scrollableHeight = scrollHeight - clientHeight;
        scrollRef.current.scrollTop = scrollableHeight * (savedProgress.scrollPercentage / 100);
    }
  }, [bookId, getReadingProgress]);

  const handleScroll = useThrottle(() => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      if (scrollHeight <= clientHeight) return; // Not scrollable
      const scrollableHeight = scrollHeight - clientHeight;
      const scrollPercentage = (scrollTop / scrollableHeight) * 100;
      saveReadingProgress(bookId, scrollPercentage);
    }
  }, 500); // Save progress every 500ms while scrolling

  return (
    <ScrollArea className="h-full" viewportRef={scrollRef} onScroll={handleScroll}>
      <div className="prose prose-lg dark:prose-invert max-w-full px-4 md:px-8 lg:px-12 py-6">
        <pre className="whitespace-pre-wrap font-body text-base">{content}</pre>
      </div>
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
}

    