
export type LibraryBook = {
    id: string;
    title: string;
    author: string;
    coverUrl: string;
};

// All books are from Project Gutenberg (public domain)
export const LIBRARY_BOOKS: LibraryBook[] = [
    {
        id: '1',
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        coverUrl: 'https://picsum.photos/300/400?random=9',
    },
    {
        id: '2',
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        coverUrl: 'https://picsum.photos/300/400?random=10',
    },
    {
        id: '3',
        title: '1984',
        author: 'George Orwell',
        coverUrl: 'https://picsum.photos/300/400?random=11',
    },
    {
        id: '4',
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        coverUrl: 'https://picsum.photos/300/400?random=12',
    },
     {
        id: '5',
        title: 'Brave New World',
        author: 'Aldous Huxley',
        coverUrl: 'https://picsum.photos/300/400?random=13',
    },
    {
        id: '6',
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        coverUrl: 'https://picsum.photos/300/400?random=14',
    },
    {
        id: '7',
        title: 'War and Peace',
        author: 'Leo Tolstoy',
        coverUrl: 'https://picsum.photos/300/400?random=15',
    },
    {
        id: '8',
        title: 'Don Quixote',
        author: 'Miguel de Cervantes',
        coverUrl: 'https://picsum.photos/300/400?random=16',
    }
];
