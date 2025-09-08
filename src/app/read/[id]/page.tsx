
'use client';
import { LIBRARY_BOOKS } from '@/lib/library-books';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import BookReader from '@/components/BookReader';
import { getBookContent } from './actions';


export default function ReadBookPage({ params }: { params: { id: string } }) {
    const [bookContent, setBookContent] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { id } = params;
    const book = LIBRARY_BOOKS.find((b) => b.id === id);

    useEffect(() => {
        if (!book) {
            notFound();
            return;
        }

        const fetchContent = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const content = await getBookContent(book.url);
                setBookContent(content);
            } catch (e: any) {
                setError(e.message || "Failed to load book.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchContent();
    }, [book]);


    if (!book) {
        // This will be caught by the useEffect, but as a fallback
        return notFound();
    }

    return (
        <div className="flex flex-col h-screen bg-background text-foreground">
            <header className="flex items-center justify-between p-4 border-b z-10 bg-background/80 backdrop-blur-sm sticky top-0">
                 <div className="flex items-center gap-4">
                     <Button asChild variant="ghost" size="icon">
                        <Link href="/library">
                            <ArrowLeft />
                            <span className="sr-only">Back to Library</span>
                        </Link>
                    </Button>
                    <div className="flex flex-col">
                        <h1 className="text-xl font-bold font-headline truncate">{book.title}</h1>
                        <p className="text-sm text-muted-foreground">{book.author}</p>
                    </div>
                </div>
            </header>
            <main className="flex-grow overflow-hidden">
                 {isLoading && (
                    <div className="flex justify-center items-center h-full">
                        <Loader2 className="w-12 h-12 animate-spin text-primary" />
                    </div>
                 )}
                 {error && (
                    <div className="flex justify-center items-center h-full text-destructive p-8 text-center">
                        <p>Error loading book content: {error}</p>
                    </div>
                 )}
                 {!isLoading && !error && bookContent && (
                    <BookReader bookId={book.id} content={bookContent} />
                 )}
            </main>
        </div>
    );
}
