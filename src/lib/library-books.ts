
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
    {
        id: '1952',
        title: 'The Yellow Wallpaper',
        author: 'Charlotte Perkins Gilman',
        coverUrl: 'https://picsum.photos/300/400?random=27',
        url: 'https://www.gutenberg.org/files/1952/1952-0.txt',
    },
    {
        id: '76',
        title: 'Adventures of Huckleberry Finn',
        author: 'Mark Twain',
        coverUrl: 'https://picsum.photos/300/400?random=28',
        url: 'https://www.gutenberg.org/files/76/76-0.txt',
    },
    {
        id: '2542',
        title: 'A Doll\'s House',
        author: 'Henrik Ibsen',
        coverUrl: 'https://picsum.photos/300/400?random=29',
        url: 'https://www.gutenberg.org/files/2542/2542-0.txt',
    },
    {
        id: '16',
        title: 'The Awakening, and Selected Short Stories',
        author: 'Kate Chopin',
        coverUrl: 'https://picsum.photos/300/400?random=30',
        url: 'https://www.gutenberg.org/files/16/16-0.txt',
    },
    {
        id: '219',
        title: 'Heart of Darkness',
        author: 'Joseph Conrad',
        coverUrl: 'https://picsum.photos/300/400?random=31',
        url: 'https://www.gutenberg.org/files/219/219-0.txt',
    },
    {
        id: '43',
        title: 'The Strange Case of Dr. Jekyll and Mr. Hyde',
        author: 'Robert Louis Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=32',
        url: 'https://www.gutenberg.org/files/43/43-0.txt',
    },
    {
        id: '1080',
        title: 'The Kama Sutra of Vatsyayana',
        author: 'Vatsyayana',
        coverUrl: 'https://picsum.photos/300/400?random=33',
        url: 'https://www.gutenberg.org/files/1080/1080-0.txt',
    },
    {
        id: '1259',
        title: 'Twenty Thousand Leagues under the Sea',
        author: 'Jules Verne',
        coverUrl: 'https://picsum.photos/300/400?random=34',
        url: 'https://www.gutenberg.org/files/1259/1259-0.txt',
    },
    {
        id: '46',
        title: 'A Christmas Carol',
        author: 'Charles Dickens',
        coverUrl: 'https://picsum.photos/300/400?random=35',
        url: 'https://www.gutenberg.org/files/46/46-0.txt',
    },
    {
        id: '1400',
        title: 'Great Expectations',
        author: 'Charles Dickens',
        coverUrl: 'https://picsum.photos/300/400?random=36',
        url: 'https://www.gutenberg.org/files/1400/1400-0.txt',
    },
    {
        id: '1232',
        title: 'The Prince',
        author: 'Niccolò Machiavelli',
        coverUrl: 'https://picsum.photos/300/400?random=37',
        url: 'https://www.gutenberg.org/files/1232/1232-0.txt',
    },
    {
        id: '30254',
        title: 'The Romance of Lust',
        author: 'Anonymous',
        coverUrl: 'https://picsum.photos/300/400?random=38',
        url: 'https://www.gutenberg.org/files/30254/30254-0.txt',
    },
    {
        id: '55',
        title: 'The Wonderful Wizard of Oz',
        author: 'L. Frank Baum',
        coverUrl: 'https://picsum.photos/300/400?random=39',
        url: 'https://www.gutenberg.org/files/55/55-0.txt',
    },
    {
        id: '215',
        title: 'The Call of the Wild',
        author: 'Jack London',
        coverUrl: 'https://picsum.photos/300/400?random=40',
        url: 'https://www.gutenberg.org/files/215/215-0.txt',
    },
    {
        id: '1184',
        title: 'The Count of Monte Cristo',
        author: 'Alexandre Dumas',
        coverUrl: 'https://picsum.photos/300/400?random=41',
        url: 'https://www.gutenberg.org/files/1184/1184-0.txt',
    },
    {
        id: '203',
        title: 'The Time Machine',
        author: 'H. G. Wells',
        coverUrl: 'https://picsum.photos/300/400?random=42',
        url: 'https://www.gutenberg.org/files/203/203-0.txt',
    },
    {
        id: '28054',
        title: 'The Island of Doctor Moreau',
        author: 'H. G. Wells',
        coverUrl: 'https://picsum.photos/300/400?random=43',
        url: 'https://www.gutenberg.org/files/28054/28054-0.txt',
    },
    {
        id: '67979',
        title: 'The Prophet',
        author: 'Kahlil Gibran',
        coverUrl: 'https://picsum.photos/300/400?random=44',
        url: 'https://www.gutenberg.org/files/67979/67979-0.txt',
    },
    {
        id: '135',
        title: 'Les Misérables',
        author: 'Victor Hugo',
        coverUrl: 'https://picsum.photos/300/400?random=45',
        url: 'https://www.gutenberg.org/files/135/135-0.txt',
    },
    {
        id: '1998',
        title: 'The Republic',
        author: 'Plato',
        coverUrl: 'https://picsum.photos/300/400?random=46',
        url: 'https://www.gutenberg.org/files/1998/1998-0.txt',
    },
    {
        id: '3207',
        title: 'Leviathan',
        author: 'Thomas Hobbes',
        coverUrl: 'https://picsum.photos/300/400?random=47',
        url: 'https://www.gutenberg.org/files/3207/3207-0.txt',
    },
    {
        id: '58585',
        title: 'The Communist Manifesto',
        author: 'Karl Marx and Friedrich Engels',
        coverUrl: 'https://picsum.photos/300/400?random=48',
        url: 'https://www.gutenberg.org/files/58585/58585-0.txt',
    },
    {
        id: '2814',
        title: 'Dubliners',
        author: 'James Joyce',
        coverUrl: 'https://picsum.photos/300/400?random=49',
        url: 'https://www.gutenberg.org/files/2814/2814-0.txt',
    },
    {
        id: '4280',
        title: 'A Portrait of the Artist as a Young Man',
        author: 'James Joyce',
        coverUrl: 'https://picsum.photos/300/400?random=50',
        url: 'https://www.gutenberg.org/files/4280/4280-0.txt',
    },
    {
        id: '103',
        title: 'Around the World in Eighty Days',
        author: 'Jules Verne',
        coverUrl: 'https://picsum.photos/300/400?random=51',
        url: 'https://www.gutenberg.org/files/103/103-0.txt',
    },
    {
        id: '829',
        title: 'Gulliver\'s Travels',
        author: 'Jonathan Swift',
        coverUrl: 'https://picsum.photos/300/400?random=52',
        url: 'https://www.gutenberg.org/files/829/829-0.txt',
    },
    {
        id: '209',
        title: 'The Turn of the Screw',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=53',
        url: 'https://www.gutenberg.org/files/209/209-0.txt',
    },
    {
        id: '145',
        title: 'Middlemarch',
        author: 'George Eliot',
        coverUrl: 'https://picsum.photos/300/400?random=54',
        url: 'https://www.gutenberg.org/files/145/145-0.txt',
    },
    {
        id: '1257',
        title: 'The Three Musketeers',
        author: 'Alexandre Dumas',
        coverUrl: 'https://picsum.photos/300/400?random=55',
        url: 'https://www.gutenberg.org/files/1257/1257-0.txt',
    },
    {
        id: '27827',
        title: 'The Brothers Karamazov',
        author: 'Fyodor Dostoevsky',
        coverUrl: 'https://picsum.photos/300/400?random=56',
        url: 'https://www.gutenberg.org/files/27827/27827-0.txt',
    },
    {
        id: '6130',
        title: 'The Iliad of Homer',
        author: 'Homer, translated by Alexander Pope',
        coverUrl: 'https://picsum.photos/300/400?random=57',
        url: 'https://www.gutenberg.org/files/6130/6130-0.txt'
    },
    {
        id: '1727',
        title: 'The Odyssey',
        author: 'Homer',
        coverUrl: 'https://picsum.photos/300/400?random=58',
        url: 'https://www.gutenberg.org/files/1727/1727-0.txt'
    },
    {
        id: '2852',
        title: 'The Hound of the Baskervilles',
        author: 'Arthur Conan Doyle',
        coverUrl: 'https://picsum.photos/300/400?random=59',
        url: 'https://www.gutenberg.org/files/2852/2852-0.txt'
    },
    {
        id: '205',
        title: 'Walden, and On The Duty Of Civil Disobedience',
        author: 'Henry David Thoreau',
        coverUrl: 'https://picsum.photos/300/400?random=60',
        url: 'https://www.gutenberg.org/files/205/205-0.txt'
    },
    {
        id: '16328',
        title: 'Beowulf',
        author: 'Anonymous',
        coverUrl: 'https://picsum.photos/300/400?random=61',
        url: 'https://www.gutenberg.org/files/16328/16328-0.txt'
    },
    {
        id: '1064',
        title: 'The Canterbury Tales, and Other Poems',
        author: 'Geoffrey Chaucer',
        coverUrl: 'https://picsum.photos/300/400?random=62',
        url: 'https://www.gutenberg.org/files/1064/1064-0.txt'
    },
    {
        id: '158',
        title: 'Emma',
        author: 'Jane Austen',
        coverUrl: 'https://picsum.photos/300/400?random=63',
        url: 'https://www.gutenberg.org/files/158/158-0.txt'
    },
    {
        id: '946',
        title: 'David Copperfield',
        author: 'Charles Dickens',
        coverUrl: 'https://picsum.photos/300/400?random=64',
        url: 'https://www.gutenberg.org/files/946/946-0.txt'
    },
    {
        id: '14264',
        title: 'The Jungle Book',
        author: 'Rudyard Kipling',
        coverUrl: 'https://picsum.photos/300/400?random=65',
        url: 'https://www.gutenberg.org/files/14264/14264-0.txt'
    },
    {
        id: '244',
        title: 'A Study in Scarlet',
        author: 'Arthur Conan Doyle',
        coverUrl: 'https://picsum.photos/300/400?random=66',
        url: 'https://www.gutenberg.org/files/244/244-0.txt'
    },
    {
        id: '16389',
        title: 'The Memoirs of Sherlock Holmes',
        author: 'Arthur Conan Doyle',
        coverUrl: 'https://picsum.photos/300/400?random=67',
        url: 'https://www.gutenberg.org/files/16389/16389-0.txt'
    },
    {
        id: '8800',
        title: 'The Return of Sherlock Holmes',
        author: 'Arthur Conan Doyle',
        coverUrl: 'https://picsum.photos/300/400?random=68',
        url: 'https://www.gutenberg.org/files/8800/8800-0.txt'
    },
    {
        id: '108',
        title: 'The Sign of the Four',
        author: 'Arthur Conan Doyle',
        coverUrl: 'https://picsum.photos/300/400?random=69',
        url: 'https://www.gutenberg.org/files/108/108-0.txt'
    },
    {
        id: '23',
        title: 'The Narrative of the Life of Frederick Douglass',
        author: 'Frederick Douglass',
        coverUrl: 'https://picsum.photos/300/400?random=70',
        url: 'https://www.gutenberg.org/files/23/23-0.txt'
    },
    {
        id: '514',
        title: 'Little Women',
        author: 'Louisa May Alcott',
        coverUrl: 'https://picsum.photos/300/400?random=71',
        url: 'https://www.gutenberg.org/files/514/514-0.txt'
    },
    {
        id: '2641',
        title: 'A Room with a View',
        author: 'E. M. Forster',
        coverUrl: 'https://picsum.photos/300/400?random=72',
        url: 'https://www.gutenberg.org/files/2641/2641-0.txt'
    },
    {
        id: '394',
        title: 'Cranford',
        author: 'Elizabeth Gaskell',
        coverUrl: 'https://picsum.photos/300/400?random=73',
        url: 'https://www.gutenberg.org/files/394/394-0.txt'
    },
    {
        id: '4085',
        title: 'The Age of Innocence',
        author: 'Edith Wharton',
        coverUrl: 'https://picsum.photos/300/400?random=74',
        url: 'https://www.gutenberg.org/files/4085/4085-0.txt'
    },
    {
        id: '37106',
        title: 'The Secret Garden',
        author: 'Frances Hodgson Burnett',
        coverUrl: 'https://picsum.photos/300/400?random=75',
        url: 'https://www.gutenberg.org/files/37106/37106-0.txt'
    },
    {
        id: '2591',
        title: 'The House of Mirth',
        author: 'Edith Wharton',
        coverUrl: 'https://picsum.photos/300/400?random=76',
        url: 'https://www.gutenberg.org/files/2591/2591-0.txt'
    },
    {
        id: '19337',
        title: 'The Wind in the Willows',
        author: 'Kenneth Grahame',
        coverUrl: 'https://picsum.photos/300/400?random=77',
        url: 'https://www.gutenberg.org/files/19337/19337-0.txt'
    },
    {
        id: '2554',
        title: 'Crime and Punishment',
        author: 'Fyodor Dostoevsky',
        coverUrl: 'https://picsum.photos/300/400?random=78',
        url: 'https://www.gutenberg.org/files/2554/2554-0.txt'
    },
    {
        id: '61533',
        title: 'The Idiot',
        author: 'Fyodor Dostoevsky',
        coverUrl: 'https://picsum.photos/300/400?random=79',
        url: 'https://www.gutenberg.org/files/61533/61533-0.txt'
    },
    {
        id: '600',
        title: 'Notes from the Underground',
        author: 'Fyodor Dostoevsky',
        coverUrl: 'https://picsum.photos/300/400?random=80',
        url: 'https://www.gutenberg.org/files/600/600-0.txt'
    },
    {
        id: '1250',
        title: 'Madame Bovary',
        author: 'Gustave Flaubert',
        coverUrl: 'https://picsum.photos/300/400?random=81',
        url: 'https://www.gutenberg.org/files/1250/1250-0.txt'
    },
    {
        id: '161',
        title: 'Sense and Sensibility',
        author: 'Jane Austen',
        coverUrl: 'https://picsum.photos/300/400?random=82',
        url: 'https://www.gutenberg.org/files/161/161-0.txt'
    },
    {
        id: '105',
        title: 'Persuasion',
        author: 'Jane Austen',
        coverUrl: 'https://picsum.photos/300/400?random=83',
        url: 'https://www.gutenberg.org/files/105/105-0.txt'
    },
    {
        id: '141',
        title: 'Mansfield Park',
        author: 'Jane Austen',
        coverUrl: 'https://picsum.photos/300/400?random=84',
        url: 'https://www.gutenberg.org/files/141/141-0.txt'
    },
    {
        id: '1212',
        title: 'Northanger Abbey',
        author: 'Jane Austen',
        coverUrl: 'https://picsum.photos/300/400?random=85',
        url: 'https://www.gutenberg.org/files/1212/1212-0.txt'
    },
    {
        id: '20228',
        title: 'The Red Badge of Courage',
        author: 'Stephen Crane',
        coverUrl: 'https://picsum.photos/300/400?random=86',
        url: 'https://www.gutenberg.org/files/20228/20228-0.txt'
    },
    {
        id: '42',
        title: 'The Merry Adventures of Robin Hood',
        author: 'Howard Pyle',
        coverUrl: 'https://picsum.photos/300/400?random=87',
        url: 'https://www.gutenberg.org/files/42/42-0.txt'
    },
    {
        id: '41',
        title: 'The Legend of Sleepy Hollow',
        author: 'Washington Irving',
        coverUrl: 'https://picsum.photos/300/400?random=88',
        url: 'https://www.gutenberg.org/files/41/41-0.txt'
    },
    {
        id: '20',
        title: 'Paradise Lost',
        author: 'John Milton',
        coverUrl: 'https://picsum.photos/300/400?random=89',
        url: 'https://www.gutenberg.org/files/20/20-0.txt'
    },
    {
        id: '33',
        title: 'The Scarlet Pimpernel',
        author: 'Baroness Orczy',
        coverUrl: 'https://picsum.photos/300/400?random=90',
        url: 'https://www.gutenberg.org/files/33/33-0.txt'
    },
    {
        id: '82',
        title: 'Ivanhoe',
        author: 'Walter Scott',
        coverUrl: 'https://picsum.photos/300/400?random=91',
        url: 'https://www.gutenberg.org/files/82/82-0.txt'
    },
    {
        id: '2705',
        title: 'The Last of the Mohicans',
        author: 'James Fenimore Cooper',
        coverUrl: 'https://picsum.photos/300/400?random=92',
        url: 'https://www.gutenberg.org/files/2705/2705-0.txt'
    },
    {
        id: '1837',
        title: 'The Last Man',
        author: 'Mary Shelley',
        coverUrl: 'https://picsum.photos/300/400?random=93',
        url: 'https://www.gutenberg.org/files/1837/1837-0.txt'
    },
    {
        id: '521',
        title: 'The Life and Adventures of Robinson Crusoe',
        author: 'Daniel Defoe',
        coverUrl: 'https://picsum.photos/300/400?random=94',
        url: 'https://www.gutenberg.org/files/521/521-0.txt'
    },
    {
        id: '3825',
        title: 'Pygmalion',
        author: 'George Bernard Shaw',
        coverUrl: 'https://picsum.photos/300/400?random=95',
        url: 'https://www.gutenberg.org/files/3825/3825-0.txt'
    },
    {
        id: '1155',
        title: 'The Importance of Being Earnest',
        author: 'Oscar Wilde',
        coverUrl: 'https://picsum.photos/300/400?random=96',
        url: 'https://www.gutenberg.org/files/1155/1155-0.txt'
    },
    {
        id: '245',
        title: 'The Man Who Was Thursday',
        author: 'G.K. Chesterton',
        coverUrl: 'https://picsum.photos/300/400?random=97',
        url: 'https://www.gutenberg.org/files/245/245-0.txt'
    },
    {
        id: '1322',
        title: 'Leaves of Grass',
        author: 'Walt Whitman',
        coverUrl: 'https://picsum.photos/300/400?random=98',
        url: 'https://www.gutenberg.org/files/1322/1322-0.txt'
    },
    {
        id: '19942',
        title: 'The Divine Comedy',
        author: 'Dante Alighieri',
        coverUrl: 'https://picsum.photos/300/400?random=99',
        url: 'https://www.gutenberg.org/files/19942/19942-0.txt'
    },
    {
        id: '1513',
        title: 'Romeo and Juliet',
        author: 'William Shakespeare',
        coverUrl: 'https://picsum.photos/300/400?random=100',
        url: 'https://www.gutenberg.org/files/1513/1513-0.txt'
    },
    {
        id: '1533',
        title: 'Hamlet',
        author: 'William Shakespeare',
        coverUrl: 'https://picsum.photos/300/400?random=101',
        url: 'https://www.gutenberg.org/files/1533/1533-0.txt'
    },
    {
        id: '1524',
        title: 'Macbeth',
        author: 'William Shakespeare',
        coverUrl: 'https://picsum.photos/300/400?random=102',
        url: 'https://www.gutenberg.org/files/1524/1524-0.txt'
    },
    {
        id: '2265',
        title: 'Othello',
        author: 'William Shakespeare',
        coverUrl: 'https://picsum.photos/300/400?random=103',
        url: 'https://www.gutenberg.org/files/2265/2265-0.txt'
    },
    {
        id: '2267',
        title: 'The Tempest',
        author: 'William Shakespeare',
        coverUrl: 'https://picsum.photos/300/400?random=104',
        url: 'https://www.gutenberg.org/files/2267/2267-0.txt'
    },
    {
        id: '1795',
        title: 'A Midsummer Night\'s Dream',
        author: 'William Shakespeare',
        coverUrl: 'https://picsum.photos/300/400?random=105',
        url: 'https://www.gutenberg.org/files/1795/1795-0.txt'
    },
    {
        id: '2264',
        title: 'The Taming of the Shrew',
        author: 'William Shakespeare',
        coverUrl: 'https://picsum.photos/300/400?random=106',
        url: 'https://www.gutenberg.org/files/2264/2264-0.txt'
    }
];
