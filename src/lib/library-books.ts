
export type LibraryBook = {
    id: string;
    title: string;
    author: string;
    coverUrl: string;
    url: string;
};

// All books are from Project Gutenberg (public domain)
export const LIBRARY_BOOKS: LibraryBook[] = [
    {
        id: '1',
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        coverUrl: 'https://picsum.photos/300/400?random=9',
        url: 'https://www.gutenberg.org/ebooks/64317',
    },
    {
        id: '2',
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        coverUrl: 'https://picsum.photos/300/400?random=10',
        url: 'https://www.gutenberg.org/ebooks/1342',
    },
    {
        id: '3',
        title: '1984',
        author: 'George Orwell',
        coverUrl: 'https://picsum.photos/300/400?random=11',
        url: 'https://www.gutenberg.org/ebooks/40963', // Note: Public domain status varies by country
    },
    {
        id: '4',
        title: 'Dracula',
        author: 'Bram Stoker',
        coverUrl: 'https://picsum.photos/300/400?random=12',
        url: 'https://www.gutenberg.org/ebooks/345',
    },
     {
        id: '5',
        title: 'Brave New World',
        author: 'Aldous Huxley',
        coverUrl: 'https://picsum.photos/300/400?random=13',
        url: 'https://www.gutenberg.org/ebooks/3168', // Note: Public domain status varies by country
    },
    {
        id: '6',
        title: 'The Adventures of Tom Sawyer',
        author: 'Mark Twain',
        coverUrl: 'https://picsum.photos/300/400?random=14',
        url: 'https://www.gutenberg.org/ebooks/74',
    },
    {
        id: '7',
        title: 'War and Peace',
        author: 'Leo Tolstoy',
        coverUrl: 'https://picsum.photos/300/400?random=15',
        url: 'https://www.gutenberg.org/ebooks/2600',
    },
    {
        id: '8',
        title: 'Don Quixote',
        author: 'Miguel de Cervantes',
        coverUrl: 'https://picsum.photos/300/400?random=16',
        url: 'https://www.gutenberg.org/ebooks/996',
    }
];
