
import { LIBRARY_BOOKS } from '@/lib/library-books';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

async function getBookContent(url: string) {
    try {
        const response = await fetch(url, { cache: 'force-cache' });
        if (!response.ok) {
            throw new Error('Failed to fetch book content');
        }
        const text = await response.text();
        return text;
    } catch (error) {
        console.error("Error fetching book:", error);
        return "Could not load book content. Please try again later.";
    }
}

export default async function ReadBookPage({ params }: { params: { id: string } }) {
    const book = LIBRARY_BOOKS.find((b) => b.id === params.id);

    if (!book) {
        notFound();
    }

    const bookContent = await getBookContent(book.url);

    return (
        <div className="flex flex-col h-screen bg-background text-foreground">
            <header className="flex items-center justify-between p-4 border-b">
                 <div className="flex items-center gap-4">
                     <Button asChild variant="ghost" size="icon">
                        <Link href="/library">
                            <ArrowLeft />
                            <span className="sr-only">Back to Library</span>
                        </Link>
                    </Button>
                    <div className="flex flex-col">
                        <h1 className="text-xl font-bold font-headline">{book.title}</h1>
                        <p className="text-sm text-muted-foreground">{book.author}</p>
                    </div>
                </div>
            </header>
            <main className="flex-grow overflow-hidden">
                <ScrollArea className="h-full px-4 md:px-8 lg:px-12 py-6">
                    <div className="prose prose-lg dark:prose-invert max-w-full">
                       <pre className="whitespace-pre-wrap font-body text-base">
                           {bookContent}
                       </pre>
                    </div>
                </ScrollArea>
            </main>
        </div>
    );
}
