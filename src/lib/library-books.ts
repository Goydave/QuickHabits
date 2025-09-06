
export type LibraryBook = {
    id: string;
    title: string;
    author: string;
    coverUrl: string;
    url: string;
};

// All books are from Project Gutenberg (public domain)
// URLs point to the plain text files for in-app reading.
export const LIBRARY_BOOKS: LibraryBook[] = [
    {
        id: '64317',
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        coverUrl: 'https://picsum.photos/300/400?random=9',
        url: 'https://www.gutenberg.org/files/64317/64317-0.txt',
    },
    {
        id: '1342',
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        coverUrl: 'https://picsum.photos/300/400?random=10',
        url: 'https://www.gutenberg.org/files/1342/1342-0.txt',
    },
    {
        id: '345',
        title: 'Dracula',
        author: 'Bram Stoker',
        coverUrl: 'https://picsum.photos/300/400?random=12',
        url: 'https://www.gutenberg.org/files/345/345-0.txt',
    },
    {
        id: '74',
        title: 'The Adventures of Tom Sawyer',
        author: 'Mark Twain',
        coverUrl: 'https://picsum.photos/300/400?random=14',
        url: 'https://www.gutenberg.org/files/74/74-0.txt',
    },
    {
        id: '2600',
        title: 'War and Peace',
        author: 'Leo Tolstoy',
        coverUrl: 'https://picsum.photos/300/400?random=15',
        url: 'https://www.gutenberg.org/files/2600/2600-0.txt',
    },
    {
        id: '996',
        title: 'Don Quixote',
        author: 'Miguel de Cervantes',
        coverUrl: 'https://picsum.photos/300/400?random=16',
        url: 'https://www.gutenberg.org/files/996/996-0.txt',
    },
    {
        id: '11',
        title: 'Alice\'s Adventures in Wonderland',
        author: 'Lewis Carroll',
        coverUrl: 'https://picsum.photos/300/400?random=6',
        url: 'https://www.gutenberg.org/files/11/11-0.txt'
    },
    {
        id: '1661',
        title: 'The Adventures of Sherlock Holmes',
        author: 'Arthur Conan Doyle',
        coverUrl: 'https://picsum.photos/300/400?random=1',
        url: 'https://www.gutenberg.org/files/1661/1661-0.txt'
    },
];
