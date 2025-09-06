
'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Headphones } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AUDIOBOOKS, type Audiobook } from '@/lib/audiobooks';
import AudiobookPlayer from '@/components/AudiobookPlayer';

export default function AudiobooksPage() {
    const [selectedAudiobook, setSelectedAudiobook] = useState<Audiobook | null>(null);

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
                        Audiobooks
                    </h1>
                </div>
                <p className="text-muted-foreground mb-8 text-center md:text-left">
                    Explore a collection of public domain audiobooks. Sit back, relax, and enjoy a classic.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {AUDIOBOOKS.map((book) => (
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
                            <CardFooter className="p-4 pt-0">
                                <Button className="w-full" onClick={() => setSelectedAudiobook(book)}>
                                    <Headphones className="mr-2" />
                                    Listen Now
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {selectedAudiobook && (
                    <AudiobookPlayer
                        book={selectedAudiobook}
                        isOpen={!!selectedAudiobook}
                        onOpenChange={() => setSelectedAudiobook(null)}
                    />
                )}
            </main>
        </div>
    );
}
