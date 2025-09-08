
'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Search, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { LIBRARY_BOOKS } from '@/lib/library-books';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLibrary } from '@/hooks/use-library';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

export default function LibraryPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const { favoriteBookIds, addFavorite, removeFavorite, isLoading } = useLibrary();

    const handleFavoriteToggle = (bookId: string, bookTitle: string) => {
        if (favoriteBookIds.includes(bookId)) {
            removeFavorite(bookId);
            toast.info(`"${bookTitle}" removed from favorites.`);
        } else {
            addFavorite(bookId);
            toast.success(`"${bookTitle}" added to favorites!`);
        }
    };

    const filteredBooks = LIBRARY_BOOKS.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const favoriteBooks = filteredBooks.filter(book => favoriteBookIds.includes(book.id));

    const BookCard = ({ book }: { book: typeof LIBRARY_BOOKS[0] }) => {
        const isFavorite = favoriteBookIds.includes(book.id);
        return (
            <div className="relative group">
                <Link href={`/read/${book.id}`} key={book.id} className="block transform hover:scale-105 transition-transform duration-300">
                    <Card className="flex flex-col h-full">
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
                </Link>
                <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-2 right-2 rounded-full bg-background/70 hover:bg-background h-8 w-8 text-primary"
                    onClick={() => handleFavoriteToggle(book.id, book.title)}
                >
                    <Heart className={cn("w-5 h-5", isFavorite ? 'fill-current' : 'fill-none')} />
                    <span className="sr-only">Favorite</span>
                </Button>
            </div>
        );
    };


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


                <Tabs defaultValue="all">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                        <TabsList>
                            <TabsTrigger value="all">All Books</TabsTrigger>
                            <TabsTrigger value="favorites">Favorites ({favoriteBookIds.length})</TabsTrigger>
                        </TabsList>
                        <div className="relative w-full md:max-w-xs">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input
                                type="text"
                                placeholder="Search by title or author..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10"
                            />
                        </div>
                    </div>

                    <TabsContent value="all">
                        {filteredBooks.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                                {filteredBooks.map((book) => <BookCard key={book.id} book={book} />)}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <h2 className="text-2xl font-semibold">No Books Found</h2>
                                <p className="text-muted-foreground mt-2">
                                    Try adjusting your search terms.
                                </p>
                            </div>
                        )}
                    </TabsContent>
                    <TabsContent value="favorites">
                         {favoriteBooks.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                                {favoriteBooks.map((book) => <BookCard key={book.id} book={book} />)}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <h2 className="text-2xl font-semibold">No Favorite Books Yet</h2>
                                <p className="text-muted-foreground mt-2">
                                    Click the heart icon on any book to add it to your favorites.
                                </p>
                            </div>
                        )}
                    </TabsContent>
                </Tabs>

            </main>
        </div>
    );
}
