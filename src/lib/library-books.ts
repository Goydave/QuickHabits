
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
        id: '84',
        title: 'Frankenstein',
        author: 'Mary Shelley',
        coverUrl: 'https://picsum.photos/300/400?random=11',
        url: 'https://www.gutenberg.org/files/84/84-0.txt',
    },
    {
        id: '2701',
        title: 'Moby Dick; or, The Whale',
        author: 'Herman Melville',
        coverUrl: 'https://picsum.photos/300/400?random=4',
        url: 'https://www.gutenberg.org/files/2701/2701-0.txt',
    },
    {
        id: '1661',
        title: 'The Adventures of Sherlock Holmes',
        author: 'Arthur Conan Doyle',
        coverUrl: 'https://picsum.photos/300/400?random=1',
        url: 'https://www.gutenberg.org/files/1661/1661-0.txt'
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
        id: '98',
        title: 'A Tale of Two Cities',
        author: 'Charles Dickens',
        coverUrl: 'https://picsum.photos/300/400?random=13',
        url: 'https://www.gutenberg.org/files/98/98-0.txt',
    },
    {
        id: '74',
        title: 'The Adventures of Tom Sawyer',
        author: 'Mark Twain',
        coverUrl: 'https://picsum.photos/300/400?random=14',
        url: 'https://www.gutenberg.org/files/74/74-0.txt',
    },
    {
        id: '174',
        title: 'The Picture of Dorian Gray',
        author: 'Oscar Wilde',
        coverUrl: 'https://picsum.photos/300/400?random=15',
        url: 'https://www.gutenberg.org/files/174/174-0.txt',
    },
    {
        id: '11',
        title: 'Alice\'s Adventures in Wonderland',
        author: 'Lewis Carroll',
        coverUrl: 'https://picsum.photos/300/400?random=6',
        url: 'https://www.gutenberg.org/files/11/11-0.txt'
    },
    {
        id: '5200',
        title: 'Metamorphosis',
        author: 'Franz Kafka',
        coverUrl: 'https://picsum.photos/300/400?random=17',
        url: 'https://www.gutenberg.org/files/5200/5200-0.txt',
    },
    {
        id: '4300',
        title: 'Ulysses',
        author: 'James Joyce',
        coverUrl: 'https://picsum.photos/300/400?random=18',
        url: 'https://www.gutenberg.org/files/4300/4300-0.txt',
    },
    {
        id: '2600',
        title: 'War and Peace',
        author: 'Leo Tolstoy',
        coverUrl: 'https://picsum.photos/300/400?random=19',
        url: 'https://www.gutenberg.org/files/2600/2600-0.txt',
    },
    {
        id: '996',
        title: 'Don Quixote',
        author: 'Miguel de Cervantes',
        coverUrl: 'https://picsum.photos/300/400?random=20',
        url: 'https://www.gutenberg.org/files/996/996-0.txt',
    },
    {
        id: '120',
        title: 'Treasure Island',
        author: 'Robert Louis Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=21',
        url: 'https://www.gutenberg.org/files/120/120-0.txt',
    },
    {
        id: '1260',
        title: 'Jane Eyre',
        author: 'Charlotte Brontë',
        coverUrl: 'https://picsum.photos/300/400?random=22',
        url: 'https://www.gutenberg.org/files/1260/1260-0.txt',
    },
    {
        id: '768',
        title: 'Wuthering Heights',
        author: 'Emily Brontë',
        coverUrl: 'https://picsum.photos/300/400?random=23',
        url: 'https://www.gutenberg.org/files/768/768-0.txt',
    },
    {
        id: '36',
        title: 'The War of the Worlds',
        author: 'H.G. Wells',
        coverUrl: 'https://picsum.photos/300/400?random=24',
        url: 'https://www.gutenberg.org/files/36/36-0.txt',
    },
    {
        id: '25344',
        title: 'The Scarlet Letter',
        author: 'Nathaniel Hawthorne',
        coverUrl: 'https://picsum.photos/300/400?random=25',
        url: 'https://www.gutenberg.org/files/25344/25344-0.txt',
    },
    {
        id: '1727',
        title: 'The Iliad',
        author: 'Homer',
        coverUrl: 'https://picsum.photos/300/400?random=26',
        url: 'https://www.gutenberg.org/files/1727/1727-0.txt',
    },
     {
        id: '64317',
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        coverUrl: 'https://picsum.photos/300/400?random=9',
        url: 'https://www.gutenberg.org/files/64317/64317-0.txt',
    },
];
