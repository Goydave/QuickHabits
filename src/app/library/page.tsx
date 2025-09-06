
'use client';

import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { LIBRARY_BOOKS } from '@/lib/library-books';

export default function LibraryPage() {

    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground p-4 md:p-6">
            <Header />
            <main className="flex-grow pt-8 max-w-6xl mx-auto w-full">
                <div className="flex items-center mb-6">
                    <Button asChild variant="ghost" size="icon" className="mr-2">
                        <Link href="/">
                            <ArrowLeft />
                        </Link>
                    </Button>
                    <h1 className="text-3xl md:text-4xl font-bold font-headline">
                        Virtual Library
                    </h1>
                </div>
                <p className="text-muted-foreground mb-8 text-center md:text-left">
                    Browse a collection of classic books from the public domain.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {LIBRARY_BOOKS.map((book) => (
                        <Card key={book.id} className="flex flex-col">
                            <CardHeader className="p-0">
                                <Image
                                    src={book.coverUrl}
                                    alt={`Cover art for ${book.title}`}
                                    width={300}
                                    height={400}
                                    className="rounded-t-lg aspect-[3/4] object-cover"
                                    data-ai-hint="book cover"
                                />
                            </CardHeader>
                            <CardContent className="flex-grow p-4">
                                <h2 className="font-bold text-lg">{book.title}</h2>
                                <p className="text-sm text-muted-foreground">{book.author}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </main>
        </div>
    );
}
