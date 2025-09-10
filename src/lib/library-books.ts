
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
        url: 'https://www.gutenberg.org/cache/epub/996/pg996.txt',
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
        url: 'https://wwwgutenberg.org/files/36/36-0.txt',
    },
    {
        id: '25344',
        title: 'The Scarlet Letter',
        author: 'Nathaniel Hawthorne',
        coverUrl: 'https://picsum.photos/300/400?random=25',
        url: 'https://www.gutenberg.org/cache/epub/25344/pg25344.txt',
    },
    {
        id: '1727',
        title: 'The Iliad',
        author: 'Homer',
        coverUrl: 'https://picsum.photos/300/400?random=26',
        url: 'https://www.gutenberg.org/cache/epub/1727/pg1727.txt',
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
        url: 'https://www.gutenberg.org/cache/epub/1080/pg1080.txt',
    },
    {
        id: '1259',
        title: 'Twenty Thousand Leagues under the Sea',
        author: 'Jules Verne',
        coverUrl: 'https://picsum.photos/300/400?random=34',
        url: 'https://www.gutenberg.org/cache/epub/1259/pg1259.txt',
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
        url: 'https://www.gutenberg.org/cache/epub/203/pg203.txt',
    },
    {
        id: '28054',
        title: 'The Island of Doctor Moreau',
        author: 'H. G. Wells',
        coverUrl: 'https://picsum.photos/300/400?random=43',
        url: 'https://www.gutenberg.org/cache/epub/28054/pg28054.txt',
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
        url: 'https://www.gutenberg.org/cache/epub/1998/pg1998.txt',
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
        url: 'https://www.gutenberg.org/cache/epub/58585/pg58585.txt',
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
        url: 'https://www.gutenberg.org/cache/epub/4280/pg4280.txt',
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
        url: 'https://www.gutenberg.org/cache/epub/1257/pg1257.txt',
    },
    {
        id: '27827',
        title: 'The Brothers Karamazov',
        author: 'Fyodor Dostoevsky',
        coverUrl: 'https://picsum.photos/300/400?random=56',
        url: 'https://www.gutenberg.org/cache/epub/27827/pg27827.txt',
    },
    {
        id: '6130',
        title: 'The Iliad of Homer',
        author: 'Homer, translated by Alexander Pope',
        coverUrl: 'https://picsum.photos/300/400?random=57',
        url: 'https://www.gutenberg.org/files/6130/6130-0.txt'
    },
    {
        id: '1728',
        title: 'The Odyssey',
        author: 'Homer',
        coverUrl: 'https://picsum.photos/300/400?random=58',
        url: 'https://www.gutenberg.org/cache/epub/1728/pg1728.txt'
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
        url: 'https://www.gutenberg.org/cache/epub/1064/pg1064.txt'
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
        url: 'https://www.gutenberg.org/cache/epub/14264/pg14264.txt'
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
        url: 'https://www.gutenberg.org/cache/epub/16389/pg16389.txt'
    },
    {
        id: '8800',
        title: 'The Return of Sherlock Holmes',
        author: 'Arthur Conan Doyle',
        coverUrl: 'https://picsum.photos/300/400?random=68',
        url: 'https://www.gutenberg.org/cache/epub/8800/pg8800.txt'
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
        url: 'https://www.gutenberg.org/cache/epub/4085/pg4085.txt'
    },
    {
        id: '37106',
        title: 'The Secret Garden',
        author: 'Frances Hodgson Burnett',
        coverUrl: 'https://picsum.photos/300/400?random=75',
        url: 'https://www.gutenberg.org/cache/epub/37106/pg37106.txt'
    },
    {
        id: '2591',
        title: 'The House of Mirth',
        author: 'Edith Wharton',
        coverUrl: 'https://picsum.photos/300/400?random=76',
        url: 'https://www.gutenberg.org/cache/epub/2591/pg2591.txt'
    },
    {
        id: '19337',
        title: 'The Wind in the Willows',
        author: 'Kenneth Grahame',
        coverUrl: 'https://picsum.photos/300/400?random=77',
        url: 'https://www.gutenberg.org/cache/epub/19337/pg19337.txt'
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
        url: 'https://www.gutenberg.org/cache/epub/61533/pg61533.txt'
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
        url: 'https://www.gutenberg.org/cache/epub/1250/pg1250.txt'
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
        url: 'https://www.gutenberg.org/cache/epub/20228/pg20228.txt'
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
        url: 'https://www.gutenberg.org/cache/epub/20/pg20.txt'
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
        url: 'https://www.gutenberg.org/cache/epub/2705/pg2705.txt'
    },
    {
        id: '1837',
        title: 'The Last Man',
        author: 'Mary Shelley',
        coverUrl: 'https://picsum.photos/300/400?random=93',
        url: 'https://www.gutenberg.org/cache/epub/1837/pg1837.txt'
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
        url: 'https://www.gutenberg.org/cache/epub/1155/pg1155.txt'
    },
    {
        id: '245',
        title: 'The Man Who Was Thursday',
        author: 'G.K. Chesterton',
        coverUrl: 'https://picsum.photos/300/400?random=97',
        url: 'https://www.gutenberg.org/cache/epub/245/pg245.txt'
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
        url: 'https://www.gutenberg.org/cache/epub/19942/pg19942.txt'
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
        url: 'https://www.gutenberg.org/cache/epub/1533/pg1533.txt'
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
        url: 'https://www.gutenberg.org/cache/epub/2265/pg2265.txt'
    },
    {
        id: '2267',
        title: 'The Tempest',
        author: 'William Shakespeare',
        coverUrl: 'https://picsum.photos/300/400?random=104',
        url: 'https://www.gutenberg.org/cache/epub/2267/pg2267.txt'
    },
    {
        id: '1795',
        title: 'A Midsummer Night\'s Dream',
        author: 'William Shakespeare',
        coverUrl: 'https://picsum.photos/300/400?random=105',
        url: 'https://www.gutenberg.org/cache/epub/1795/pg1795.txt'
    },
    {
        id: '2264',
        title: 'The Taming of the Shrew',
        author: 'William Shakespeare',
        coverUrl: 'https://picsum.photos/300/400?random=106',
        url: 'https://www.gutenberg.org/cache/epub/2264/pg2264.txt'
    },
    {
        id: '2266',
        title: 'The Merchant of Venice',
        author: 'William Shakespeare',
        coverUrl: 'https://picsum.photos/300/400?random=107',
        url: 'https://www.gutenberg.org/cache/epub/2266/pg2266.txt'
    },
    {
        id: '1787',
        title: 'King Lear',
        author: 'William Shakespeare',
        coverUrl: 'https://picsum.photos/300/400?random=108',
        url: 'https://www.gutenberg.org/cache/epub/1787/pg1787.txt'
    },
    {
        id: '23042',
        title: 'The Complete Works of William Shakespeare',
        author: 'William Shakespeare',
        coverUrl: 'https://picsum.photos/300/400?random=109',
        url: 'https://www.gutenberg.org/cache/epub/23042/pg23042.txt'
    },
    {
        id: '132',
        title: 'The Art of War',
        author: 'Sun Tzu',
        coverUrl: 'https://picsum.photos/300/400?random=110',
        url: 'https://www.gutenberg.org/files/132/132-0.txt'
    },
    {
        id: '5000',
        title: 'Thus Spake Zarathustra',
        author: 'Friedrich Nietzsche',
        coverUrl: 'https://picsum.photos/300/400?random=111',
        url: 'https://www.gutenberg.org/cache/epub/5000/pg5000.txt'
    },
    {
        id: '4363',
        title: 'Beyond Good and Evil',
        author: 'Friedrich Nietzsche',
        coverUrl: 'https://picsum.photos/300/400?random=112',
        url: 'https://www.gutenberg.org/files/4363/4363-0.txt'
    },
    {
        id: '2848',
        title: 'The Antichrist',
        author: 'Friedrich Nietzsche',
        coverUrl: 'https://picsum.photos/300/400?random=113',
        url: 'https://www.gutenberg.org/cache/epub/2848/pg2848.txt'
    },
    {
        id: '3800',
        title: 'The Critique of Pure Reason',
        author: 'Immanuel Kant',
        coverUrl: 'https://picsum.photos/300/400?random=114',
        url: 'https://www.gutenberg.org/cache/epub/3800/pg3800.txt'
    },
    {
        id: '574',
        title: 'The Souls of Black Folk',
        author: 'W. E. B. Du Bois',
        coverUrl: 'https://picsum.photos/300/400?random=115',
        url: 'https://www.gutenberg.org/files/574/574-0.txt'
    },
    {
        id: '32',
        title: 'Herland',
        author: 'Charlotte Perkins Gilman',
        coverUrl: 'https://picsum.photos/300/400?random=116',
        url: 'https://www.gutenberg.org/files/32/32-0.txt'
    },
    {
        id: '30',
        title: 'Little Women',
        author: 'Louisa May Alcott',
        coverUrl: 'https://picsum.photos/300/400?random=117',
        url: 'https://www.gutenberg.org/files/30/30-0.txt'
    },
    {
        id: '2708',
        title: 'The Pathfinder',
        author: 'James Fenimore Cooper',
        coverUrl: 'https://picsum.photos/300/400?random=118',
        url: 'https://www.gutenberg.org/cache/epub/2708/pg2708.txt'
    },
    {
        id: '940',
        title: 'The Deerslayer',
        author: 'James Fenimore Cooper',
        coverUrl: 'https://picsum.photos/300/400?random=119',
        url: 'https://www.gutenberg.org/files/940/940-0.txt'
    },
    {
        id: '18657',
        title: 'The Prairie',
        author: 'James Fenimore Cooper',
        coverUrl: 'https://picsum.photos/300/400?random=120',
        url: 'https://www.gutenberg.org/cache/epub/18657/pg18657.txt'
    },
    {
        id: '24022',
        title: 'The Pioneers',
        author: 'James Fenimore Cooper',
        coverUrl: 'https://picsum.photos/300/400?random=121',
        url: 'https://www.gutenberg.org/cache/epub/24022/pg24022.txt'
    },
    {
        id: '100',
        title: 'The Complete Works of William Shakespeare',
        author: 'William Shakespeare',
        coverUrl: 'https://picsum.photos/300/400?random=122',
        url: 'https://www.gutenberg.org/files/100/100-0.txt'
    },
    {
        id: '2595',
        title: 'The Innocents Abroad',
        author: 'Mark Twain',
        coverUrl: 'https://picsum.photos/300/400?random=123',
        url: 'https://www.gutenberg.org/cache/epub/2595/pg2595.txt'
    },
    {
        id: '18372',
        title: 'Roughing It',
        author: 'Mark Twain',
        coverUrl: 'https://picsum.photos/300/400?random=124',
        url: 'https://www.gutenberg.org/cache/epub/18372/pg18372.txt'
    },
    {
        id: '86',
        title: 'A Connecticut Yankee in King Arthur\'s Court',
        author: 'Mark Twain',
        coverUrl: 'https://picsum.photos/300/400?random=125',
        url: 'https://www.gutenberg.org/files/86/86-0.txt'
    },
    {
        id: '102',
        title: 'The Prince and the Pauper',
        author: 'Mark Twain',
        coverUrl: 'https://picsum.photos/300/400?random=126',
        url: 'https://www.gutenberg.org/files/102/102-0.txt'
    },
    {
        id: '2450',
        title: 'The Mysterious Stranger',
        author: 'Mark Twain',
        coverUrl: 'https://picsum.photos/300/400?random=127',
        url: 'https://www.gutenberg.org/cache/epub/2450/pg2450.txt'
    },
    {
        id: '3176',
        title: 'The American Claimant',
        author: 'Mark Twain',
        coverUrl: 'https://picsum.photos/300/400?random=128',
        url: 'https://www.gutenberg.org/files/3176/3176-0.txt'
    },
    {
        id: '3177',
        title: 'The £1,000,000 Bank-Note',
        author: 'Mark Twain',
        coverUrl: 'https://picsum.photos/300/400?random=129',
        url: 'https://www.gutenberg.org/cache/epub/3177/pg3177.txt'
    },
    {
        id: '3190',
        title: 'The Tragedy of Pudd\'nhead Wilson',
        author: 'Mark Twain',
        coverUrl: 'https://picsum.photos/300/400?random=130',
        url: 'https://www.gutenberg.org/cache/epub/3190/pg3190.txt'
    },
    {
        id: '2890',
        title: 'Following the Equator',
        author: 'Mark Twain',
        coverUrl: 'https://picsum.photos/300/400?random=131',
        url: 'https://www.gutenberg.org/cache/epub/2890/pg2890.txt'
    },
    {
        id: '142',
        title: 'Hard Times',
        author: 'Charles Dickens',
        coverUrl: 'https://picsum.photos/300/400?random=132',
        url: 'https://www.gutenberg.org/cache/epub/142/pg142.txt'
    },
    {
        id: '580',
        title: 'The Pickwick Papers',
        author: 'Charles Dickens',
        coverUrl: 'https://picsum.photos/300/400?random=133',
        url: 'https://www.gutenberg.org/files/580/580-0.txt'
    },
    {
        id: '730',
        title: 'Oliver Twist',
        author: 'Charles Dickens',
        coverUrl: 'https://picsum.photos/300/400?random=134',
        url: 'https://www.gutenberg.org/files/730/730-0.txt'
    },
    {
        id: '882',
        title: 'Nicholas Nickleby',
        author: 'Charles Dickens',
        coverUrl: 'https://picsum.photos/300/400?random=135',
        url: 'https://www.gutenberg.org/cache/epub/882/pg882.txt'
    },
    {
        id: '675',
        title: 'The Old Curiosity Shop',
        author: 'Charles Dickens',
        coverUrl: 'https://picsum.photos/300/400?random=136',
        url: 'https://www.gutenberg.org/cache/epub/675/pg675.txt'
    },
    {
        id: '700',
        title: 'Barnaby Rudge',
        author: 'Charles Dickens',
        coverUrl: 'https://picsum.photos/300/400?random=137',
        url: 'https://www.gutenberg.org/cache/epub/700/pg700.txt'
    },
    {
        id: '821',
        title: 'Martin Chuzzlewit',
        author: 'Charles Dickens',
        coverUrl: 'https://picsum.photos/300/400?random=138',
        url: 'https://www.gutenberg.org/files/821/821-0.txt'
    },
    {
        id: '967',
        title: 'Dombey and Son',
        author: 'Charles Dickens',
        coverUrl: 'https://picsum.photos/300/400?random=139',
        url: 'https://www.gutenberg.org/files/967/967-0.txt'
    },
    {
        id: '564',
        title: 'Bleak House',
        author: 'Charles Dickens',
        coverUrl: 'https://picsum.photos/300/400?random=140',
        url: 'https://www.gutenberg.org/cache/epub/564/pg564.txt'
    },
    {
        id: '968',
        title: 'Little Dorrit',
        author: 'Charles Dickens',
        coverUrl: 'https://picsum.photos/300/400?random=141',
        url: 'https://www.gutenberg.org/files/968/968-0.txt'
    },
    {
        id: '786',
        title: 'Our Mutual Friend',
        author: 'Charles Dickens',
        coverUrl: 'https://picsum.photos/300/400?random=142',
        url: 'https://www.gutenberg.org/files/786/786-0.txt'
    },
    {
        id: '963',
        title: 'The Mystery of Edwin Drood',
        author: 'Charles Dickens',
        coverUrl: 'https://picsum.photos/300/400?random=143',
        url: 'https://www.gutenberg.org/files/963/963-0.txt'
    },
    {
        id: '204',
        title: 'The Invisible Man',
        author: 'H. G. Wells',
        coverUrl: 'https://picsum.photos/300/400?random=144',
        url: 'https://www.gutenberg.org/cache/epub/204/pg204.txt'
    },
    {
        id: '35',
        title: 'The Time Machine',
        author: 'H. G. Wells',
        coverUrl: 'https://picsum.photos/300/400?random=145',
        url: 'https://www.gutenberg.org/files/35/35-0.txt'
    },
    {
        id: '159',
        title: 'The War of the Worlds',
        author: 'H. G. Wells',
        coverUrl: 'https://picsum.photos/300/400?random=146',
        url: 'https://www.gutenberg.org/cache/epub/159/pg159.txt'
    },
    {
        id: '5230',
        title: 'The First Men in the Moon',
        author: 'H. G. Wells',
        coverUrl: 'https://picsum.photos/300/400?random=147',
        url: 'https://www.gutenberg.org/cache/epub/5230/pg5230.txt'
    },
    {
        id: '1187',
        title: 'The Food of the Gods and How It Came to Earth',
        author: 'H. G. Wells',
        coverUrl: 'https://picsum.photos/300/400?random=148',
        url: 'https://www.gutenberg.org/cache/epub/1187/pg1187.txt'
    },
    {
        id: '59774',
        title: 'The Shape of Things to Come',
        author: 'H. G. Wells',
        coverUrl: 'https://picsum.photos/300/400?random=149',
        url: 'https://www.gutenberg.org/cache/epub/59774/pg59774.txt'
    },
    {
        id: '2236',
        title: 'The History of Mr. Polly',
        author: 'H. G. Wells',
        coverUrl: 'https://picsum.photos/300/400?random=150',
        url: 'https://www.gutenberg.org/cache/epub/2236/pg2236.txt'
    },
    {
        id: '1169',
        title: 'Kipps: The Story of a Simple Soul',
        author: 'H. G. Wells',
        coverUrl: 'https://picsum.photos/300/400?random=151',
        url: 'https://www.gutenberg.org/cache/epub/1169/pg1169.txt'
    },
    {
        id: '59775',
        title: 'The World Set Free',
        author: 'H. G. Wells',
        coverUrl: 'https://picsum.photos/300/400?random=152',
        url: 'https://www.gutenberg.org/cache/epub/59775/pg59775.txt'
    },
    {
        id: '644',
        title: 'The Sleeper Awakes',
        author: 'H. G. Wells',
        coverUrl: 'https://picsum.photos/300/400?random=153',
        url: 'https://www.gutenberg.org/cache/epub/644/pg644.txt'
    },
    {
        id: '2247',
        title: 'The New Machiavelli',
        author: 'H. G. Wells',
        coverUrl: 'https://picsum.photos/300/400?random=154',
        url: 'https://www.gutenberg.org/cache/epub/2247/pg2247.txt'
    },
    {
        id: '155',
        title: 'The Secret Agent: A Simple Tale',
        author: 'Joseph Conrad',
        coverUrl: 'https://picsum.photos/300/400?random=155',
        url: 'https://www.gutenberg.org/cache/epub/155/pg155.txt'
    },
    {
        id: '220',
        title: 'Lord Jim',
        author: 'Joseph Conrad',
        coverUrl: 'https://picsum.photos/300/400?random=156',
        url: 'https://www.gutenberg.org/files/220/220-0.txt'
    },
    {
        id: '95',
        title: 'Nostromo: A Tale of the Seaboard',
        author: 'Joseph Conrad',
        coverUrl: 'https://picsum.photos/300/400?random=157',
        url: 'https://www.gutenberg.org/cache/epub/95/pg95.txt'
    },
    {
        id: '2025',
        title: 'Under Western Eyes',
        author: 'Joseph Conrad',
        coverUrl: 'https://picsum.photos/300/400?random=158',
        url: 'https://www.gutenberg.org/cache/epub/2025/pg2025.txt'
    },
    {
        id: '499',
        title: 'The Rover',
        author: 'Joseph Conrad',
        coverUrl: 'https://picsum.photos/300/400?random=159',
        url: 'https://www.gutenberg.org/cache/epub/499/pg499.txt'
    },
    {
        id: '525',
        title: 'The Arrow of Gold',
        author: 'Joseph Conrad',
        coverUrl: 'https://picsum.photos/300/400?random=160',
        url: 'https://www.gutenberg.org/cache/epub/525/pg525.txt'
    },
    {
        id: '526',
        title: 'Victory: An Island Tale',
        author: 'Joseph Conrad',
        coverUrl: 'https://picsum.photos/300/400?random=161',
        url: 'https://www.gutenberg.org/files/526/526-0.txt'
    },
    {
        id: '524',
        title: 'Chance',
        author: 'Joseph Conrad',
        coverUrl: 'https://picsum.photos/300/400?random=162',
        url: 'https://www.gutenberg.org/cache/epub/524/pg524.txt'
    },
    {
        id: '475',
        title: 'The Shadow Line',
        author: 'Joseph Conrad',
        coverUrl: 'https://picsum.photos/300/400?random=163',
        url: 'https://www.gutenberg.org/cache/epub/475/pg475.txt'
    },
    {
        id: '2014',
        title: 'A Personal Record',
        author: 'Joseph Conrad',
        coverUrl: 'https://picsum.photos/300/400?random=164',
        url: 'https://www.gutenberg.org/cache/epub/2014/pg2014.txt'
    },
    {
        id: '185',
        title: 'The Voyage Out',
        author: 'Virginia Woolf',
        coverUrl: 'https://picsum.photos/300/400?random=165',
        url: 'https://www.gutenberg.org/cache/epub/185/pg185.txt'
    },
    {
        id: '67702',
        title: 'Mrs Dalloway',
        author: 'Virginia Woolf',
        coverUrl: 'https://picsum.photos/300/400?random=166',
        url: 'https://www.gutenberg.org/files/67702/67702-0.txt'
    },
    {
        id: '67918',
        title: 'To the Lighthouse',
        author: 'Virginia Woolf',
        coverUrl: 'https://picsum.photos/300/400?random=167',
        url: 'https://www.gutenberg.org/files/67918/67918-0.txt'
    },
    {
        id: '67926',
        title: 'Orlando: A Biography',
        author: 'Virginia Woolf',
        coverUrl: 'https://picsum.photos/300/400?random=168',
        url: 'https://www.gutenberg.org/files/67926/67926-0.txt'
    },
    {
        id: '67980',
        title: 'A Room of One\'s Own',
        author: 'Virginia Woolf',
        coverUrl: 'https://picsum.photos/300/400?random=169',
        url: 'https://www.gutenberg.org/files/67980/67980-0.txt'
    },
    {
        id: '67927',
        title: 'The Waves',
        author: 'Virginia Woolf',
        coverUrl: 'https://picsum.photos/300/400?random=170',
        url: 'https://www.gutenberg.org/files/67927/67927-0.txt'
    },
    {
        id: '1589',
        title: 'Night and Day',
        author: 'Virginia Woolf',
        coverUrl: 'https://picsum.photos/300/400?random=171',
        url: 'https://www.gutenberg.org/cache/epub/1589/pg1589.txt'
    },
    {
        id: '2863',
        title: 'Jacob\'s Room',
        author: 'Virginia Woolf',
        coverUrl: 'https://picsum.photos/300/400?random=172',
        url: 'https://www.gutenberg.org/cache/epub/2863/pg2863.txt'
    },
    {
        id: '4079',
        title: 'The Common Reader',
        author: 'Virginia Woolf',
        coverUrl: 'https://picsum.photos/300/400?random=173',
        url: 'https://www.gutenberg.org/cache/epub/4079/pg4079.txt'
    },
    {
        id: '3335',
        title: 'The Second Common Reader',
        author: 'Virginia Woolf',
        coverUrl: 'https://picsum.photos/300/400?random=174',
        url: 'https://www.gutenberg.org/cache/epub/3335/pg3335.txt'
    },
    {
        id: '2875',
        title: 'Monday or Tuesday',
        author: 'Virginia Woolf',
        coverUrl: 'https://picsum.photos/300/400?random=175',
        url: 'https://www.gutenberg.org/cache/epub/2875/pg2875.txt'
    },
    {
        id: '121',
        title: 'Kidnapped',
        author: 'Robert Louis Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=176',
        url: 'https://www.gutenberg.org/files/121/121-0.txt'
    },
    {
        id: '421',
        title: 'The Black Arrow',
        author: 'Robert Louis Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=177',
        url: 'https://www.gutenberg.org/files/421/421-0.txt'
    },
    {
        id: '75',
        title: 'The Master of Ballantrae',
        author: 'Robert Louis Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=178',
        url: 'https://www.gutenberg.org/files/75/75-0.txt'
    },
    {
        id: '3093',
        title: 'Catriona',
        author: 'Robert Louis Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=179',
        url: 'https://www.gutenberg.org/cache/epub/3093/pg3093.txt'
    },
    {
        id: '417',
        title: 'The Wrecker',
        author: 'Robert Louis Stevenson and Lloyd Osbourne',
        coverUrl: 'https://picsum.photos/300/400?random=180',
        url: 'https://www.gutenberg.org/cache/epub/417/pg417.txt'
    },
    {
        id: '535',
        title: 'The Ebb-Tide',
        author: 'Robert Louis Stevenson and Lloyd Osbourne',
        coverUrl: 'https://picsum.photos/300/400?random=181',
        url: 'https://www.gutenberg.org/files/535/535-0.txt'
    },
    {
        id: '536',
        title: 'Island Nights\' Entertainments',
        author: 'Robert Louis Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=182',
        url: 'https://www.gutenberg.org/files/536/536-0.txt'
    },
    {
        id: '1249',
        title: 'An Inland Voyage',
        author: 'Robert Louis Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=183',
        url: 'https://www.gutenberg.org/cache/epub/1249/pg1249.txt'
    },
    {
        id: '505',
        title: 'Travels with a Donkey in the Cévennes',
        author: 'Robert Louis Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=184',
        url: 'https://www.gutenberg.org/files/505/505-0.txt'
    },
    {
        id: '416',
        title: 'Virginibus Puerisque, and Other Papers',
        author: 'Robert Louis Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=185',
        url: 'https://www.gutenberg.org/cache/epub/416/pg416.txt'
    },
    {
        id: '447',
        title: 'The New Arabian Nights',
        author: 'Robert Louis Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=186',
        url: 'https://www.gutenberg.org/cache/epub/447/pg447.txt'
    },
    {
        id: '415',
        title: 'The Merry Men, and Other Tales and Fables',
        author: 'Robert Louis Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=187',
        url: 'https://www.gutenberg.org/cache/epub/415/pg415.txt'
    },
    {
        id: '307',
        title: 'The Dynamiter',
        author: 'Robert Louis Stevenson and Fanny Van de Grift Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=188',
        url: 'https://www.gutenberg.org/cache/epub/307/pg307.txt'
    },
    {
        id: '298',
        title: 'The Wrong Box',
        author: 'Robert Louis Stevenson and Lloyd Osbourne',
        coverUrl: 'https://picsum.photos/300/400?random=189',
        url: 'https://www.gutenberg.org/cache/epub/298/pg298.txt'
    },
    {
        id: '299',
        title: 'A Footnote to History: Eight Years of Trouble in Samoa',
        author: 'Robert Louis Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=190',
        url: 'https://www.gutenberg.org/cache/epub/299/pg299.txt'
    },
    {
        id: '348',
        title: 'The Silverado Squatters',
        author: 'Robert Louis Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=191',
        url: 'https://www.gutenberg.org/files/348/348-0.txt'
    },
    {
        id: '297',
        title: 'Across the Plains, with Other Memories and Essays',
        author: 'Robert Louis Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=192',
        url: 'https://www.gutenberg.org/cache/epub/297/pg297.txt'
    },
    {
        id: '208',
        title: 'Familiar Studies of Men and Books',
        author: 'Robert Louis Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=193',
        url: 'https://www.gutenberg.org/files/208/208-0.txt'
    },
    {
        id: '296',
        title: 'Memories and Portraits',
        author: 'Robert Louis Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=194',
        url: 'https://www.gutenberg.org/cache/epub/296/pg296.txt'
    },
    {
        id: '295',
        title: 'A Child\'s Garden of Verses',
        author: 'Robert Louis Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=195',
        url: 'https://www.gutenberg.org/cache/epub/295/pg295.txt'
    },
    {
        id: '382',
        title: 'Underwoods',
        author: 'Robert Louis Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=196',
        url: 'https://www.gutenberg.org/cache/epub/382/pg382.txt'
    },
    {
        id: '503',
        title: 'Ballads',
        author: 'Robert Louis Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=197',
        url: 'https://www.gutenberg.org/cache/epub/503/pg503.txt'
    },
    {
        id: '30990',
        title: 'Songs of Travel, and Other Verses',
        author: 'Robert Louis Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=198',
        url: 'https://www.gutenberg.org/cache/epub/30990/pg30990.txt'
    },
    {
        id: '228',
        title: 'The Man in the Iron Mask',
        author: 'Alexandre Dumas',
        coverUrl: 'https://picsum.photos/300/400?random=199',
        url: 'https://www.gutenberg.org/cache/epub/228/pg228.txt'
    },
    {
        id: '1258',
        title: 'Twenty Years After',
        author: 'Alexandre Dumas',
        coverUrl: 'https://picsum.photos/300/400?random=200',
        url: 'https://www.gutenberg.org/cache/epub/1258/pg1258.txt'
    },
    {
        id: '2680',
        title: 'The Vicomte de Bragelonne',
        author: 'Alexandre Dumas',
        coverUrl: 'https://picsum.photos/300/400?random=201',
        url: 'https://www.gutenberg.org/cache/epub/2680/pg2680.txt'
    },
    {
        id: '1013',
        title: 'The Black Tulip',
        author: 'Alexandre Dumas',
        coverUrl: 'https://picsum.photos/300/400?random=202',
        url: 'https://www.gutenberg.org/cache/epub/1013/pg1013.txt'
    },
    {
        id: '965',
        title: 'The Queen\'s Necklace',
        author: 'Alexandre Dumas',
        coverUrl: 'https://picsum.photos/300/400?random=203',
        url: 'https://www.gutenberg.org/cache/epub/965/pg965.txt'
    },
    {
        id: '1769',
        title: 'The Man Who Laughs',
        author: 'Victor Hugo',
        coverUrl: 'https://picsum.photos/300/400?random=204',
        url: 'https://www.gutenberg.org/cache/epub/1769/pg1769.txt'
    },
    {
        id: '2527',
        title: 'The Toilers of the Sea',
        author: 'Victor Hugo',
        coverUrl: 'https://picsum.photos/300/400?random=205',
        url: 'https://www.gutenberg.org/cache/epub/2527/pg2527.txt'
    },
    {
        id: '125',
        title: 'The Hunchback of Notre Dame',
        author: 'Victor Hugo',
        coverUrl: 'https://picsum.photos/300/400?random=206',
        url: 'https://www.gutenberg.org/cache/epub/125/pg125.txt'
    },
    {
        id: '20203',
        title: 'The Meditations',
        author: 'Marcus Aurelius',
        coverUrl: 'https://picsum.photos/300/400?random=207',
        url: 'https://www.gutenberg.org/cache/epub/20203/pg20203.txt'
    },
    {
        id: '10681',
        title: 'The Republic of Plato',
        author: 'Plato',
        coverUrl: 'https://picsum.photos/300/400?random=208',
        url: 'https://www.gutenberg.org/cache/epub/10681/pg10681.txt'
    },
    {
        id: '1974',
        title: 'The Nicomachean Ethics of Aristotle',
        author: 'Aristotle',
        coverUrl: 'https://picsum.photos/300/400?random=209',
        url: 'https://www.gutenberg.org/cache/epub/1974/pg1974.txt'
    },
    {
        id: '67837',
        title: 'Poetics',
        author: 'Aristotle',
        coverUrl: 'https://picsum.photos/300/400?random=210',
        url: 'https://www.gutenberg.org/files/67837/67837-0.txt'
    },
    {
        id: '2262',
        title: 'Antigone',
        author: 'Sophocles',
        coverUrl: 'https://picsum.photos/300/400?random=211',
        url: 'https://www.gutenberg.org/cache/epub/2262/pg2262.txt'
    },
    {
        id: '31',
        title: 'Oedipus Rex',
        author: 'Sophocles',
        coverUrl: 'https://picsum.photos/300/400?random=212',
        url: 'https://www.gutenberg.org/cache/epub/31/pg31.txt'
    },
    {
        id: '8161',
        title: 'The Frogs',
        author: 'Aristophanes',
        coverUrl: 'https://picsum.photos/300/400?random=213',
        url: 'https://www.gutenberg.org/cache/epub/8161/pg8161.txt'
    },
    {
        id: '7700',
        title: 'Lysistrata',
        author: 'Aristophanes',
        coverUrl: 'https://picsum.photos/300/400?random=214',
        url: 'https://www.gutenberg.org/files/7700/7700-0.txt'
    },
    {
        id: '1497',
        title: 'The History of the Peloponnesian War',
        author: 'Thucydides',
        coverUrl: 'https://picsum.photos/300/400?random=215',
        url: 'https://www.gutenberg.org/cache/epub/1497/pg1497.txt'
    },
    {
        id: '2238',
        title: 'The Histories',
        author: 'Herodotus',
        coverUrl: 'https://picsum.photos/300/400?random=216',
        url: 'https://www.gutenberg.org/cache/epub/2238/pg2238.txt'
    },
    {
        id: '1159',
        title: 'The Aeneid',
        author: 'Virgil',
        coverUrl: 'https://picsum.photos/300/400?random=217',
        url: 'https://www.gutenberg.org/cache/epub/1159/pg1159.txt'
    },
    {
        id: '875',
        title: 'The Metamorphoses',
        author: 'Ovid',
        coverUrl: 'https://picsum.photos/300/400?random=218',
        url: 'https://www.gutenberg.org/cache/epub/875/pg875.txt'
    },
    {
        id: '5231',
        title: 'On the Nature of Things',
        author: 'Lucretius',
        coverUrl: 'https://picsum.photos/300/400?random=219',
        url: 'https://www.gutenberg.org/cache/epub/5231/pg5231.txt'
    },
    {
        id: '10661',
        title: 'The Lives of the Twelve Caesars',
        author: 'Suetonius',
        coverUrl: 'https://picsum.photos/300/400?random=220',
        url: 'https://www.gutenberg.org/cache/epub/10661/pg10661.txt'
    },
    {
        id: '10675',
        title: 'The Annals',
        author: 'Tacitus',
        coverUrl: 'https://picsum.photos/300/400?random=221',
        url: 'https://www.gutenberg.org/cache/epub/10675/pg10675.txt'
    },
    {
        id: '6763',
        title: 'The Consolation of Philosophy',
        author: 'Boethius',
        coverUrl: 'https://picsum.photos/300/400?random=222',
        url: 'https://www.gutenberg.org/files/6763/6763-0.txt'
    },
    {
        id: '3621',
        title: 'The Decameron',
        author: 'Giovanni Boccaccio',
        coverUrl: 'https://picsum.photos/300/400?random=223',
        url: 'https://www.gutenberg.org/cache/epub/3621/pg3621.txt'
    },
    {
        id: '446',
        title: 'The Praise of Folly',
        author: 'Erasmus',
        coverUrl: 'https://picsum.photos/300/400?random=224',
        url: 'https://www.gutenberg.org/cache/epub/446/pg446.txt'
    },
    {
        id: '2023',
        title: 'Utopia',
        author: 'Thomas More',
        coverUrl: 'https://picsum.photos/300/400?random=225',
        url: 'https://www.gutenberg.org/cache/epub/2023/pg2023.txt'
    },
    {
        id: '4281',
        title: 'The Essays of Montaigne',
        author: 'Michel de Montaigne',
        coverUrl: 'https://picsum.photos/300/400?random=226',
        url: 'https://www.gutenberg.org/cache/epub/4281/pg4281.txt'
    },
    {
        id: '3832',
        title: 'The History of the Decline and Fall of the Roman Empire',
        author: 'Edward Gibbon',
        coverUrl: 'https://picsum.photos/300/400?random=227',
        url: 'https://www.gutenberg.org/cache/epub/3832/pg3832.txt'
    },
    {
        id: '777',
        title: 'The Wealth of Nations',
        author: 'Adam Smith',
        coverUrl: 'https://picsum.photos/300/400?random=228',
        url: 'https://www.gutenberg.org/cache/epub/777/pg777.txt'
    },
    {
        id: '5001',
        title: 'The Social Contract',
        author: 'Jean-Jacques Rousseau',
        coverUrl: 'https://picsum.photos/300/400?random=229',
        url: 'https://www.gutenberg.org/cache/epub/5001/pg5001.txt'
    },
    {
        id: '3200',
        title: 'Candide',
        author: 'Voltaire',
        coverUrl: 'https://picsum.photos/300/400?random=230',
        url: 'https://www.gutenberg.org/cache/epub/3200/pg3200.txt'
    },
    {
        id: '10887',
        title: 'Faust',
        author: 'Johann Wolfgang von Goethe',
        coverUrl: 'https://picsum.photos/300/400?random=231',
        url: 'https://www.gutenberg.org/cache/epub/10887/pg10887.txt'
    },
    {
        id: '408',
        title: 'The Sorrows of Young Werther',
        author: 'Johann Wolfgang von Goethe',
        coverUrl: 'https://picsum.photos/300/400?random=232',
        url: 'https://www.gutenberg.org/cache/epub/408/pg408.txt'
    },
    {
        id: '2989',
        title: 'The Robbers',
        author: 'Friedrich Schiller',
        coverUrl: 'https://picsum.photos/300/400?random=233',
        url: 'https://www.gutenberg.org/cache/epub/2989/pg2989.txt'
    },
    {
        id: '6762',
        title: 'Don Carlos',
        author: 'Friedrich Schiller',
        coverUrl: 'https://picsum.photos/300/400?random=234',
        url: 'https://www.gutenberg.org/files/6762/6762-0.txt'
    },
    {
        id: '6761',
        title: 'The Maid of Orleans',
        author: 'Friedrich Schiller',
        coverUrl: 'https://picsum.photos/300/400?random=235',
        url: 'https://www.gutenberg.org/files/6761/6761-0.txt'
    },
    {
        id: '5197',
        title: 'Eugene Onegin',
        author: 'Aleksandr Pushkin',
        coverUrl: 'https://picsum.photos/300/400?random=236',
        url: 'https://www.gutenberg.org/cache/epub/5197/pg5197.txt'
    },
    {
        id: '3603',
        title: 'Dead Souls',
        author: 'Nikolai Gogol',
        coverUrl: 'https://picsum.photos/300/400?random=237',
        url: 'https://www.gutenberg.org/cache/epub/3603/pg3603.txt'
    },
    {
        id: '2105',
        title: 'Fathers and Sons',
        author: 'Ivan Turgenev',
        coverUrl: 'https://picsum.photos/300/400?random=238',
        url: 'https://www.gutenberg.org/cache/epub/2105/pg2105.txt'
    },
    {
        id: '2805',
        title: 'The Cherry Orchard',
        author: 'Anton Chekhov',
        coverUrl: 'https://picsum.photos/300/400?random=239',
        url: 'https://www.gutenberg.org/cache/epub/2805/pg2805.txt'
    },
    {
        id: '702',
        title: 'The Seagull',
        author: 'Anton Chekhov',
        coverUrl: 'https://picsum.photos/300/400?random=240',
        url: 'https://www.gutenberg.org/cache/epub/702/pg702.txt'
    },
    {
        id: '701',
        title: 'Uncle Vanya',
        author: 'Anton Chekhov',
        coverUrl: 'https://picsum.photos/300/400?random=241',
        url: 'https://www.gutenberg.org/cache/epub/701/pg701.txt'
    },
    {
        id: '1753',
        title: 'The Three Sisters',
        author: 'Anton Chekhov',
        coverUrl: 'https://picsum.photos/300/400?random=242',
        url: 'https://www.gutenberg.org/cache/epub/1753/pg1753.txt'
    },
    {
        id: '2634',
        title: 'The Bet',
        author: 'Anton Chekhov',
        coverUrl: 'https://picsum.photos/300/400?random=243',
        url: 'https://www.gutenberg.org/cache/epub/2634/pg2634.txt'
    },
    {
        id: '217',
        title: 'The Red and the Black',
        author: 'Stendhal',
        coverUrl: 'https://picsum.photos/300/400?random=244',
        url: 'https://www.gutenberg.org/cache/epub/217/pg217.txt'
    },
    {
        id: '2007',
        title: 'Père Goriot',
        author: 'Honoré de Balzac',
        coverUrl: 'https://picsum.photos/300/400?random=245',
        url: 'https://www.gutenberg.org/cache/epub/2007/pg2007.txt'
    },
    {
        id: '1241',
        title: 'Cousin Bette',
        author: 'Honoré de Balzac',
        coverUrl: 'https://picsum.photos/300/400?random=246',
        url: 'https://www.gutenberg.org/cache/epub/1241/pg1241.txt'
    },
    {
        id: '528',
        title: 'The Flowers of Evil',
        author: 'Charles Baudelaire',
        coverUrl: 'https://picsum.photos/300/400?random=247',
        url: 'https://www.gutenberg.org/cache/epub/528/pg528.txt'
    },
    {
        id: '1992',
        title: 'Swann\'s Way',
        author: 'Marcel Proust',
        coverUrl: 'https://picsum.photos/300/400?random=248',
        url: 'https://www.gutenberg.org/cache/epub/1992/pg1992.txt'
    },
    {
        id: '6765',
        title: 'The Stranger',
        author: 'Albert Camus',
        coverUrl: 'https://picsum.photos/300/400?random=249',
        url: 'https://www.gutenberg.org/files/6765/6765-0.txt'
    },
    {
        id: '1240',
        title: 'The Plague',
        author: 'Albert Camus',
        coverUrl: 'https://picsum.photos/300/400?random=250',
        url: 'https://www.gutenberg.org/cache/epub/1240/pg1240.txt'
    },
    {
        id: '3203',
        title: 'The Myth of Sisyphus',
        author: 'Albert Camus',
        coverUrl: 'https://picsum.photos/300/400?random=251',
        url: 'https://www.gutenberg.org/cache/epub/3203/pg3203.txt'
    },
    {
        id: '3204',
        title: 'The Rebel',
        author: 'Albert Camus',
        coverUrl: 'https://picsum.photos/300/400?random=252',
        url: 'https://www.gutenberg.org/cache/epub/3204/pg3204.txt'
    },
    {
        id: '3193',
        title: 'Nausea',
        author: 'Jean-Paul Sartre',
        coverUrl: 'https://picsum.photos/300/400?random=253',
        url: 'https://www.gutenberg.org/cache/epub/3193/pg3193.txt'
    },
    {
        id: '590',
        title: 'The Trial',
        author: 'Franz Kafka',
        coverUrl: 'https://picsum.photos/300/400?random=254',
        url: 'https://www.gutenberg.org/cache/epub/590/pg590.txt'
    },
    {
        id: '7849',
        title: 'The Castle',
        author: 'Franz Kafka',
        coverUrl: 'https://picsum.photos/300/400?random=255',
        url: 'https://www.gutenberg.org/files/7849/7849-0.txt'
    },
    {
        id: '3202',
        title: 'Siddhartha',
        author: 'Hermann Hesse',
        coverUrl: 'https://picsum.photos/300/400?random=256',
        url: 'https://www.gutenberg.org/cache/epub/3202/pg3202.txt'
    },
    {
        id: '2500',
        title: 'Steppenwolf',
        author: 'Hermann Hesse',
        coverUrl: 'https://picsum.photos/300/400?random=257',
        url: 'https://www.gutenberg.org/cache/epub/2500/pg2500.txt'
    },
    {
        id: '2501',
        title: 'The Glass Bead Game',
        author: 'Hermann Hesse',
        coverUrl: 'https://picsum.photos/300/400?random=258',
        url: 'https://www.gutenberg.org/cache/epub/2501/pg2501.txt'
    },
    {
        id: '2115',
        title: 'Demian',
        author: 'Hermann Hesse',
        coverUrl: 'https://picsum.photos/300/400?random=259',
        url: 'https://www.gutenberg.org/cache/epub/2115/pg2115.txt'
    },
    {
        id: '2113',
        title: 'Narcissus and Goldmund',
        author: 'Hermann Hesse',
        coverUrl: 'https://picsum.photos/300/400?random=260',
        url: 'https://www.gutenberg.org/cache/epub/2113/pg2113.txt'
    },
    {
        id: '4364',
        title: 'The Magic Mountain',
        author: 'Thomas Mann',
        coverUrl: 'https://picsum.photos/300/400?random=261',
        url: 'https://www.gutenberg.org/cache/epub/4364/pg4364.txt'
    },
    {
        id: '6766',
        title: 'Death in Venice',
        author: 'Thomas Mann',
        coverUrl: 'https://picsum.photos/300/400?random=262',
        url: 'https://www.gutenberg.org/files/6766/6766-0.txt'
    },
    {
        id: '2345',
        title: 'Buddenbrooks',
        author: 'Thomas Mann',
        coverUrl: 'https://picsum.photos/300/400?random=263',
        url: 'https://www.gutenberg.org/cache/epub/2345/pg2345.txt'
    },
    {
        id: '4900',
        title: 'The Adventures of Pinocchio',
        author: 'Carlo Collodi',
        coverUrl: 'https://picsum.photos/300/400?random=264',
        url: 'https://www.gutenberg.org/cache/epub/4900/pg4900.txt'
    },
    {
        id: '19336',
        title: 'The Little Prince',
        author: 'Antoine de Saint-Exupéry',
        coverUrl: 'https://picsum.photos/300/400?random=265',
        url: 'https://www.gutenberg.org/cache/epub/19336/pg19336.txt'
    },
    {
        id: '2428',
        title: 'The Jungle',
        author: 'Upton Sinclair',
        coverUrl: 'https://picsum.photos/300/400?random=266',
        url: 'https://www.gutenberg.org/cache/epub/2428/pg2428.txt'
    },
    {
        id: '12',
        title: 'Through the Looking-Glass',
        author: 'Lewis Carroll',
        coverUrl: 'https://picsum.photos/300/400?random=267',
        url: 'https://www.gutenberg.org/files/12/12-0.txt'
    },
    {
        id: '28885',
        title: 'The Hunting of the Snark',
        author: 'Lewis Carroll',
        coverUrl: 'https://picsum.photos/300/400?random=268',
        url: 'https://www.gutenberg.org/cache/epub/28885/pg28885.txt'
    },
    {
        id: '42671',
        title: 'The Wonderful Wizard of Oz',
        author: 'L. Frank Baum',
        coverUrl: 'https://picsum.photos/300/400?random=269',
        url: 'https://www.gutenberg.org/cache/epub/42671/pg42671.txt'
    },
    {
        id: '43936',
        title: 'The Marvelous Land of Oz',
        author: 'L. Frank Baum',
        coverUrl: 'https://picsum.photos/300/400?random=270',
        url: 'https://www.gutenberg.org/cache/epub/43936/pg43936.txt'
    },
    {
        id: '420',
        title: 'Ozma of Oz',
        author: 'L. Frank Baum',
        coverUrl: 'https://picsum.photos/300/400?random=271',
        url: 'https://www.gutenberg.org/files/420/420-0.txt'
    },
    {
        id: '4352',
        title: 'Dorothy and the Wizard in Oz',
        author: 'L. Frank Baum',
        coverUrl: 'https://picsum.photos/300/400?random=272',
        url: 'https://www.gutenberg.org/cache/epub/4352/pg4352.txt'
    },
    {
        id: '22566',
        title: 'The Road to Oz',
        author: 'L. Frank Baum',
        coverUrl: 'https://picsum.photos/300/400?random=273',
        url: 'https://www.gutenberg.org/cache/epub/22566/pg22566.txt'
    },
    {
        id: '23528',
        title: 'The Emerald City of Oz',
        author: 'L. Frank Baum',
        coverUrl: 'https://picsum.photos/300/400?random=274',
        url: 'https://www.gutenberg.org/cache/epub/23528/pg23528.txt'
    },
    {
        id: '23691',
        title: 'The Patchwork Girl of Oz',
        author: 'L. Frank Baum',
        coverUrl: 'https://picsum.photos/300/400?random=275',
        url: 'https://www.gutenberg.org/cache/epub/23691/pg23691.txt'
    },
    {
        id: '484',
        title: 'Tik-Tok of Oz',
        author: 'L. Frank Baum',
        coverUrl: 'https://picsum.photos/300/400?random=276',
        url: 'https://www.gutenberg.org/files/484/484-0.txt'
    },
    {
        id: '24328',
        title: 'The Scarecrow of Oz',
        author: 'L. Frank Baum',
        coverUrl: 'https://picsum.photos/300/400?random=277',
        url: 'https://www.gutenberg.org/cache/epub/24328/pg24328.txt'
    },
    {
        id: '24634',
        title: 'Rinkitink in Oz',
        author: 'L. Frank Baum',
        coverUrl: 'https://picsum.photos/300/400?random=278',
        url: 'https://www.gutenberg.org/cache/epub/24634/pg24634.txt'
    },
    {
        id: '25645',
        title: 'The Lost Princess of Oz',
        author: 'L. Frank Baum',
        coverUrl: 'https://picsum.photos/300/400?random=279',
        url: 'https://www.gutenberg.org/cache/epub/25645/pg25645.txt'
    },
    {
        id: '26631',
        title: 'The Tin Woodman of Oz',
        author: 'L. Frank Baum',
        coverUrl: 'https://picsum.photos/300/400?random=280',
        url: 'https://www.gutenberg.org/cache/epub/26631/pg26631.txt'
    },
    {
        id: '26634',
        title: 'The Magic of Oz',
        author: 'L. Frank Baum',
        coverUrl: 'https://picsum.photos/300/400?random=281',
        url: 'https://www.gutenberg.org/cache/epub/26634/pg26634.txt'
    },
    {
        id: '26638',
        title: 'Glinda of Oz',
        author: 'L. Frank Baum',
        coverUrl: 'https://picsum.photos/300/400?random=282',
        url: 'https://www.gutenberg.org/cache/epub/26638/pg26638.txt'
    },
    {
        id: '232',
        title: 'The History of Tom Jones, a Foundling',
        author: 'Henry Fielding',
        coverUrl: 'https://picsum.photos/300/400?random=283',
        url: 'https://www.gutenberg.org/cache/epub/232/pg232.txt'
    },
    {
        id: '522',
        title: 'Clarissa Harlowe; or the History of a Young Lady',
        author: 'Samuel Richardson',
        coverUrl: 'https://picsum.photos/300/400?random=284',
        url: 'https://www.gutenberg.org/cache/epub/522/pg522.txt'
    },
    {
        id: '519',
        title: 'Pamela, or Virtue Rewarded',
        author: 'Samuel Richardson',
        coverUrl: 'https://picsum.photos/300/400?random=285',
        url: 'https://www.gutenberg.org/cache/epub/519/pg519.txt'
    },
    {
        id: '512',
        title: 'The Life and Opinions of Tristram Shandy, Gentleman',
        author: 'Laurence Sterne',
        coverUrl: 'https://picsum.photos/300/400?random=286',
        url: 'https://www.gutenberg.org/cache/epub/512/pg512.txt'
    },
    {
        id: '513',
        title: 'A Sentimental Journey Through France and Italy',
        author: 'Laurence Sterne',
        coverUrl: 'https://picsum.photos/300/400?random=287',
        url: 'https://www.gutenberg.org/cache/epub/513/pg513.txt'
    },
    {
        id: '2183',
        title: 'The Expedition of Humphry Clinker',
        author: 'Tobias Smollett',
        coverUrl: 'https://picsum.photos/300/400?random=288',
        url: 'https://www.gutenberg.org/cache/epub/2183/pg2183.txt'
    },
    {
        id: '2184',
        title: 'The Adventures of Roderick Random',
        author: 'Tobias Smollett',
        coverUrl: 'https://picsum.photos/300/400?random=289',
        url: 'https://www.gutenberg.org/cache/epub/2184/pg2184.txt'
    },
    {
        id: '2185',
        title: 'The Adventures of Peregrine Pickle',
        author: 'Tobias Smollett',
        coverUrl: 'https://picsum.photos/300/400?random=290',
        url: 'https://www.gutenberg.org/cache/epub/2185/pg2185.txt'
    },
    {
        id: '541',
        title: 'Vanity Fair',
        author: 'William Makepeace Thackeray',
        coverUrl: 'https://picsum.photos/300/400?random=291',
        url: 'https://www.gutenberg.org/cache/epub/541/pg541.txt'
    },
    {
        id: '542',
        title: 'The History of Pendennis',
        author: 'William Makepeace Thackeray',
        coverUrl: 'https://picsum.photos/300/400?random=292',
        url: 'https://www.gutenberg.org/cache/epub/542/pg542.txt'
    },
    {
        id: '543',
        title: 'The Newcomes',
        author: 'William Makepeace Thackeray',
        coverUrl: 'https://picsum.photos/300/400?random=293',
        url: 'https://www.gutenberg.org/cache/epub/543/pg543.txt'
    },
    {
        id: '544',
        title: 'The History of Henry Esmond, Esq.',
        author: 'William Makepeace Thackeray',
        coverUrl: 'https://picsum.photos/300/400?random=294',
        url: 'https://www.gutenberg.org/cache/epub/544/pg544.txt'
    },
    {
        id: '545',
        title: 'The Virginians',
        author: 'William Makepeace Thackeray',
        coverUrl: 'https://picsum.photos/300/400?random=295',
        url: 'https://www.gutenberg.org/cache/epub/545/pg545.txt'
    },
    {
        id: '547',
        title: 'The Adventures of Philip',
        author: 'William Makepeace Thackeray',
        coverUrl: 'https://picsum.photos/300/400?random=296',
        url: 'https://www.gutenberg.org/cache/epub/547/pg547.txt'
    },
    {
        id: '548',
        title: 'The Memoirs of Barry Lyndon, Esq.',
        author: 'William Makepeace Thackeray',
        coverUrl: 'https://picsum.photos/300/400?random=297',
        url: 'https://www.gutenberg.org/cache/epub/548/pg548.txt'
    },
    {
        id: '549',
        title: 'The Great Hoggarty Diamond',
        author: 'William Makepeace Thackeray',
        coverUrl: 'https://picsum.photos/300/400?random=298',
        url: 'https://www.gutenberg.org/cache/epub/549/pg549.txt'
    },
    {
        id: '550',
        title: 'The Book of Snobs',
        author: 'William Makepeace Thackeray',
        coverUrl: 'https://picsum.photos/300/400?random=299',
        url: 'https://www.gutenberg.org/cache/epub/550/pg550.txt'
    },
    {
        id: '551',
        title: 'The Rose and the Ring',
        author: 'William Makepeace Thackeray',
        coverUrl: 'https://picsum.photos/300/400?random=300',
        url: 'https://www.gutenberg.org/cache/epub/551/pg551.txt'
    },
    {
        id: '552',
        title: 'The Kickleburys on the Rhine',
        author: 'William Makepeace Thackeray',
        coverUrl: 'https://picsum.photos/300/400?random=301',
        url: 'https://www.gutenberg.org/cache/epub/552/pg552.txt'
    },
    {
        id: '553',
        title: 'Rebecca and Rowena',
        author: 'William Makepeace Thackeray',
        coverUrl: 'https://picsum.photos/300/400?random=302',
        url: 'https://www.gutenberg.org/cache/epub/553/pg553.txt'
    },
    {
        id: '554',
        title: 'The History of Samuel Titmarsh and the Great Hoggarty Diamond',
        author: 'William Makepeace Thackeray',
        coverUrl: 'https://picsum.photos/300/400?random=303',
        url: 'https://www.gutenberg.org/cache/epub/554/pg554.txt'
    },
    {
        id: '555',
        title: 'Burlesques',
        author: 'William Makepeace Thackeray',
        coverUrl: 'https://picsum.photos/300/400?random=304',
        url: 'https://www.gutenberg.org/cache/epub/555/pg555.txt'
    },
    {
        id: '556',
        title: 'A Legend of the Rhine',
        author: 'William Makepeace Thackeray',
        coverUrl: 'https://picsum.photos/300/400?random=305',
        url: 'https://www.gutenberg.org/cache/epub/556/pg556.txt'
    },
    {
        id: '557',
        title: 'The Paris Sketch Book of Mr. M. A. Titmarsh',
        author: 'William Makepeace Thackeray',
        coverUrl: 'https://picsum.photos/300/400?random=306',
        url: 'https://www.gutenberg.org/cache/epub/557/pg557.txt'
    },
    {
        id: '558',
        title: 'The Irish Sketch Book',
        author: 'William Makepeace Thackeray',
        coverUrl: 'https://picsum.photos/300/400?random=307',
        url: 'https://www.gutenberg.org/cache/epub/558/pg558.txt'
    },
    {
        id: '559',
        title: 'Notes of a Journey from Cornhill to Grand Cairo',
        author: 'William Makepeace Thackeray',
        coverUrl: 'https://picsum.photos/300/400?random=308',
        url: 'https://www.gutenberg.org/cache/epub/559/pg559.txt'
    },
    {
        id: '560',
        title: 'The Yellowplush Papers',
        author: 'William Makepeace Thackeray',
        coverUrl: 'https://picsum.photos/300/400?random=309',
        url: 'https://www.gutenberg.org/cache/epub/560/pg560.txt'
    },
    {
        id: '561',
        title: 'The Fitz-Boodle Papers',
        author: 'William Makepeace Thackeray',
        coverUrl: 'https://picsum.photos/300/400?random=310',
        url: 'https://www.gutenberg.org/cache/epub/561/pg561.txt'
    },
    {
        id: '562',
        title: 'Men\'s Wives',
        author: 'William Makepeace Thackeray',
        coverUrl: 'https://picsum.photos/300/400?random=311',
        url: 'https://www.gutenberg.org/cache/epub/562/pg562.txt'
    },
    {
        id: '563',
        title: 'The Bedford-Row Conspiracy',
        author: 'William Makepeace Thackeray',
        coverUrl: 'https://picsum.photos/300/400?random=312',
        url: 'https://www.gutenberg.org/cache/epub/563/pg563.txt'
    },
    {
        id: '565',
        title: 'A Little Dinner at Timmins\'s',
        author: 'William Makepeace Thackeray',
        coverUrl: 'https://picsum.photos/300/400?random=313',
        url: 'https://www.gutenberg.org/cache/epub/565/pg565.txt'
    },
    {
        id: '566',
        title: 'The Fatal Boots',
        author: 'William Makepeace Thackeray',
        coverUrl: 'https://picsum.photos/300/400?random=314',
        url: 'https://www.gutenberg.org/cache/epub/566/pg566.txt'
    },
    {
        id: '567',
        title: 'Cox\'s Diary',
        author: 'William Makepeace Thackeray',
        coverUrl: 'https://picsum.photos/300/400?random=315',
        url: 'https://www.gutenberg.org/cache/epub/567/pg567.txt'
    },
    {
        id: '568',
        title: 'The Diary of C. Jeames de la Pluche, Esq. with his letters',
        author: 'William Makepeace Thackeray',
        coverUrl: 'https://picsum.photos/300/400?random=316',
        url: 'https://www.gutenberg.org/cache/epub/568/pg568.txt'
    },
    {
        id: '569',
        title: 'A Legend of the Rhine, and Other Sketches',
        author: 'William Makepeace Thackeray',
        coverUrl: 'https://picsum.photos/300/400?random=317',
        url: 'https://www.gutenberg.org/cache/epub/569/pg569.txt'
    },
    {
        id: '570',
        title: 'Character Sketches',
        author: 'William Makepeace Thackeray',
        coverUrl: 'https://picsum.photos/300/400?random=318',
        url: 'https://www.gutenberg.org/cache/epub/570/pg570.txt'
    },
    {
        id: '571',
        title: 'The Tremendous Adventures of Major Gahagan',
        author: 'William Makepeace Thackeray',
        coverUrl: 'https://picsum.photos/300/400?random=319',
        url: 'https://www.gutenberg.org/cache/epub/571/pg571.txt'
    },
    {
        id: '572',
        title: 'The Wolves and the Lamb',
        author: 'William Makepeace Thackeray',
        coverUrl: 'https://picsum.photos/300/400?random=320',
        url: 'https://www.gutenberg.org/cache/epub/572/pg572.txt'
    },
    {
        id: '573',
        title: 'Lovel the Widower',
        author: 'William Makepeace Thackeray',
        coverUrl: 'https://picsum.photos/300/400?random=321',
        url: 'https://www.gutenberg.org/cache/epub/573/pg573.txt'
    },
    {
        id: '575',
        title: 'Denis Duval',
        author: 'William Makepeace Thackeray',
        coverUrl: 'https://picsum.photos/300/400?random=322',
        url: 'https://www.gutenberg.org/cache/epub/575/pg575.txt'
    },
    {
        id: '576',
        title: 'The Four Georges',
        author: 'William Makepeace Thackeray',
        coverUrl: 'https://picsum.photos/300/400?random=323',
        url: 'https://www.gutenberg.org/cache/epub/576/pg576.txt'
    },
    {
        id: '577',
        title: 'The English Humourists of the Eighteenth Century',
        author: 'William Makepeace Thackeray',
        coverUrl: 'https://picsum.photos/300/400?random=324',
        url: 'https://www.gutenberg.org/cache/epub/577/pg577.txt'
    },
    {
        id: '578',
        title: 'Roundabout Papers',
        author: 'William Makepeace Thackeray',
        coverUrl: 'https://picsum.photos/300/400?random=325',
        url: 'https://www.gutenberg.org/cache/epub/578/pg578.txt'
    },
    {
        id: '579',
        title: 'Critical Reviews',
        author: 'William Makepeace Thackeray',
        coverUrl: 'https://picsum.photos/300/400?random=326',
        url: 'https://www.gutenberg.org/cache/epub/579/pg579.txt'
    },
    {
        id: '581',
        title: 'The Second Funeral of Napoleon',
        author: 'William Makepeace Thackeray',
        coverUrl: 'https://picsum.photos/300/400?random=327',
        url: 'https://www.gutenberg.org/cache/epub/581/pg581.txt'
    },
    {
        id: '582',
        title: 'Sketches and Travels in London',
        author: 'William Makepeace Thackeray',
        coverUrl: 'https://picsum.photos/300/400?random=328',
        url: 'https://www.gutenberg.org/cache/epub/582/pg582.txt'
    },
    {
        id: '583',
        title: 'Catherine: A Story',
        author: 'William Makepeace Thackeray',
        coverUrl: 'https://picsum.photos/300/400?random=329',
        url: 'https://www.gutenberg.org/cache/epub/583/pg583.txt'
    },
    {
        id: '584',
        title: 'The Hoggarty Diamond',
        author: 'William Makepeace Thackeray',
        coverUrl: 'https://picsum.photos/300/400?random=330',
        url: 'https://www.gutenberg.org/cache/epub/584/pg584.txt'
    },
    {
        id: '585',
        title: 'The Amours of Mr. Deuceace',
        author: 'William Makepeace Thackeray',
        coverUrl: 'https://picsum.photos/300/400?random=331',
        url: 'https://www.gutenberg.org/cache/epub/585/pg585.txt'
    },
    {
        id: '586',
        title: 'The History of the Next French Revolution',
        author: 'William Makepeace Thackeray',
        coverUrl: 'https://picsum.photos/300/400?random=332',
        url: 'https://www.gutenberg.org/cache/epub/586/pg586.txt'
    },
    {
        id: '587',
        title: 'The Memoirs of Mr. C. J. Yellowplush',
        author: 'William Makepeace Thackeray',
        coverUrl: 'https://picsum.photos/300/400?random=333',
        url: 'https://www.gutenberg.org/cache/epub/587/pg587.txt'
    },
    {
        id: '588',
        title: 'The Diary of a Man of Fifty',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=334',
        url: 'https://www.gutenberg.org/cache/epub/588/pg588.txt'
    },
    {
        id: '589',
        title: 'The Europeans',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=335',
        url: 'https://www.gutenberg.org/cache/epub/589/pg589.txt'
    },
    {
        id: '206',
        title: 'The Portrait of a Lady',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=336',
        url: 'https://www.gutenberg.org/files/206/206-0.txt'
    },
    {
        id: '207',
        title: 'The Wings of the Dove',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=337',
        url: 'https://www.gutenberg.org/files/207/207-0.txt'
    },
    {
        id: '210',
        title: 'The Ambassadors',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=338',
        url: 'https://www.gutenberg.org/files/210/210-0.txt'
    },
    {
        id: '211',
        title: 'The Golden Bowl',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=339',
        url: 'https://www.gutenberg.org/files/211/211-0.txt'
    },
    {
        id: '212',
        title: 'The American',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=340',
        url: 'https://www.gutenberg.org/files/212/212-0.txt'
    },
    {
        id: '213',
        title: 'The Awkward Age',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=341',
        url: 'https://www.gutenberg.org/files/213/213-0.txt'
    },
    {
        id: '214',
        title: 'The Bostonians',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=342',
        url: 'https://www.gutenberg.org/files/214/214-0.txt'
    },
    {
        id: '216',
        title: 'Confidence',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=343',
        url: 'https://www.gutenberg.org/files/216/216-0.txt'
    },
    {
        id: '218',
        title: 'Daisy Miller: A Study',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=344',
        url: 'https://www.gutenberg.org/files/218/218-0.txt'
    },
    {
        id: '221',
        title: 'The Princess Casamassima',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=345',
        url: 'https://www.gutenberg.org/files/221/221-0.txt'
    },
    {
        id: '222',
        title: 'Roderick Hudson',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=346',
        url: 'https://www.gutenberg.org/files/222/222-0.txt'
    },
    {
        id: '223',
        title: 'The Sacred Fount',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=347',
        url: 'https://www.gutenberg.org/files/223/223-0.txt'
    },
    {
        id: '224',
        title: 'The Spoils of Poynton',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=348',
        url: 'https://www.gutenberg.org/files/224/224-0.txt'
    },
    {
        id: '225',
        title: 'The Tragic Muse',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=349',
        url: 'https://www.gutenberg.org/files/225/225-0.txt'
    },
    {
        id: '226',
        title: 'Washington Square',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=350',
        url: 'https://www.gutenberg.org/files/226/226-0.txt'
    },
    {
        id: '227',
        title: 'What Maisie Knew',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=351',
        url: 'https://www.gutenberg.org/files/227/227-0.txt'
    },
    {
        id: '229',
        title: 'The Altar of the Dead',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=352',
        url: 'https://www.gutenberg.org/cache/epub/229/pg229.txt'
    },
    {
        id: '230',
        title: 'The Aspern Papers',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=353',
        url: 'https://www.gutenberg.org/files/230/230-0.txt'
    },
    {
        id: '231',
        title: 'The Author of Beltraffio',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=354',
        url: 'https://www.gutenberg.org/cache/epub/231/pg231.txt'
    },
    {
        id: '233',
        title: 'The Beast in the Jungle',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=355',
        url: 'https://www.gutenberg.org/cache/epub/233/pg233.txt'
    },
    {
        id: '234',
        title: 'The Birthplace',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=356',
        url: 'https://www.gutenberg.org/cache/epub/234/pg234.txt'
    },
    {
        id: '235',
        title: 'The Coxon Fund',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=357',
        url: 'https://www.gutenberg.org/cache/epub/235/pg235.txt'
    },
    {
        id: '236',
        title: 'The Death of the Lion',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=358',
        url: 'https://www.gutenberg.org/cache/epub/236/pg236.txt'
    },
    {
        id: '237',
        title: 'The Figure in the Carpet',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=359',
        url: 'https://www.gutenberg.org/cache/epub/237/pg237.txt'
    },
    {
        id: '238',
        title: 'The Friends of the Friends',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=360',
        url: 'https://www.gutenberg.org/cache/epub/238/pg238.txt'
    },
    {
        id: '239',
        title: 'The Glasses',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=361',
        url: 'https://www.gutenberg.org/cache/epub/239/pg239.txt'
    },
    {
        id: '240',
        title: 'The Jolly Corner',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=362',
        url: 'https://www.gutenberg.org/cache/epub/240/pg240.txt'
    },
    {
        id: '241',
        title: 'The Lesson of the Master',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=363',
        url: 'https://www.gutenberg.org/cache/epub/241/pg241.txt'
    },
    {
        id: '242',
        title: 'The Liar',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=364',
        url: 'https://www.gutenberg.org/cache/epub/242/pg242.txt'
    },
    {
        id: '243',
        title: 'The Middle Years',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=365',
        url: 'https://www.gutenberg.org/cache/epub/243/pg243.txt'
    },
    {
        id: '246',
        title: 'The Next Time',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=366',
        url: 'https://www.gutenberg.org/cache/epub/246/pg246.txt'
    },
    {
        id: '247',
        title: 'The Papers',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=367',
        url: 'https://www.gutenberg.org/cache/epub/247/pg247.txt'
    },
    {
        id: '248',
        title: 'The Patagonia',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=368',
        url: 'https://www.gutenberg.org/cache/epub/248/pg248.txt'
    },
    {
        id: '249',
        title: 'The Pupil',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=369',
        url: 'https://www.gutenberg.org/cache/epub/249/pg249.txt'
    },
    {
        id: '250',
        title: 'The Real Thing',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=370',
        url: 'https://www.gutenberg.org/cache/epub/250/pg250.txt'
    },
    {
        id: '251',
        title: 'The Reverberator',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=371',
        url: 'https://www.gutenberg.org/files/251/251-0.txt'
    },
    {
        id: '252',
        title: 'The Siege of London',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=372',
        url: 'https://www.gutenberg.org/cache/epub/252/pg252.txt'
    },
    {
        id: '253',
        title: 'The Solution',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=373',
        url: 'https://www.gutenberg.org/cache/epub/253/pg253.txt'
    },
    {
        id: '254',
        title: 'The Story of a Year',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=374',
        url: 'https://www.gutenberg.org/cache/epub/254/pg254.txt'
    },
    {
        id: '255',
        title: 'The Third Person',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=375',
        url: 'https://www.gutenberg.org/cache/epub/255/pg255.txt'
    },
    {
        id: '256',
        title: 'The Two Faces',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=376',
        url: 'https://www.gutenberg.org/cache/epub/256/pg256.txt'
    },
    {
        id: '257',
        title: 'The Velvet Glove',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=377',
        url: 'https://www.gutenberg.org/cache/epub/257/pg257.txt'
    },
    {
        id: '258',
        title: 'The Way It Came',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=378',
        url: 'https://www.gutenberg.org/cache/epub/258/pg258.txt'
    },
    {
        id: '259',
        title: 'The Wheel of Time',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=379',
        url: 'https://www.gutenberg.org/cache/epub/259/pg259.txt'
    },
    {
        id: '260',
        title: 'A Bundle of Letters',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=380',
        url: 'https://www.gutenberg.org/cache/epub/260/pg260.txt'
    },
    {
        id: '261',
        title: 'A Day of Days',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=381',
        url: 'https://www.gutenberg.org/cache/epub/261/pg261.txt'
    },
    {
        id: '262',
        title: 'A Landscape Painter',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=382',
        url: 'https://www.gutenberg.org/cache/epub/262/pg262.txt'
    },
    {
        id: '263',
        title: 'A Light Man',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=383',
        url: 'https://www.gutenberg.org/cache/epub/263/pg263.txt'
    },
    {
        id: '264',
        title: 'A London Life',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=384',
        url: 'https://www.gutenberg.org/cache/epub/264/pg264.txt'
    },
    {
        id: '265',
        title: 'A Most Extraordinary Case',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=385',
        url: 'https://www.gutenberg.org/cache/epub/265/pg265.txt'
    },
    {
        id: '266',
        title: 'A Passionate Pilgrim',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=386',
        url: 'https://www.gutenberg.org/cache/epub/266/pg266.txt'
    },
    {
        id: '267',
        title: 'An International Episode',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=387',
        url: 'https://www.gutenberg.org/cache/epub/267/pg267.txt'
    },
    {
        id: '268',
        title: 'At Isella',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=388',
        url: 'https://www.gutenberg.org/cache/epub/268/pg268.txt'
    },
    {
        id: '269',
        title: 'Benvolio',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=389',
        url: 'https://www.gutenberg.org/cache/epub/269/pg269.txt'
    },
    {
        id: '270',
        title: 'Collaboration',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=390',
        url: 'https://www.gutenberg.org/cache/epub/270/pg270.txt'
    },
    {
        id: '271',
        title: 'Crawford\'s Consistency',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=391',
        url: 'https://www.gutenberg.org/cache/epub/271/pg271.txt'
    },
    {
        id: '272',
        title: 'Eugene Pickering',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=392',
        url: 'https://www.gutenberg.org/cache/epub/272/pg272.txt'
    },
    {
        id: '273',
        title: 'Europe',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=393',
        url: 'https://www.gutenberg.org/cache/epub/273/pg273.txt'
    },
    {
        id: '274',
        title: 'Fordham Castle',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=394',
        url: 'https://www.gutenberg.org/cache/epub/274/pg274.txt'
    },
    {
        id: '275',
        title: 'Four Meetings',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=395',
        url: 'https://www.gutenberg.org/cache/epub/275/pg275.txt'
    },
    {
        id: '276',
        title: 'Gabrielle de Bergerac',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=396',
        url: 'https://www.gutenberg.org/cache/epub/276/pg276.txt'
    },
    {
        id: '277',
        title: 'Georgina\'s Reasons',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=397',
        url: 'https://www.gutenberg.org/cache/epub/277/pg277.txt'
    },
    {
        id: '278',
        title: 'Guest\'s Confession',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=398',
        url: 'https://www.gutenberg.org/cache/epub/278/pg278.txt'
    },
    {
        id: '279',
        title: 'Impressions of a Cousin',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=399',
        url: 'https://www.gutenberg.org/cache/epub/279/pg279.txt'
    },
    {
        id: '280',
        title: 'In the Cage',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=400',
        url: 'https://www.gutenberg.org/cache/epub/280/pg280.txt'
    },
    {
        id: '281',
        title: 'John Delavoy',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=401',
        url: 'https://www.gutenberg.org/cache/epub/281/pg281.txt'
    },
    {
        id: '282',
        title: 'Julia Bride',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=402',
        url: 'https://www.gutenberg.org/cache/epub/282/pg282.txt'
    },
    {
        id: '283',
        title: 'Lady Barbarina',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=403',
        url: 'https://www.gutenberg.org/cache/epub/283/pg283.txt'
    },
    {
        id: '284',
        title: 'Longstaff\'s Marriage',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=404',
        url: 'https://www.gutenberg.org/cache/epub/284/pg284.txt'
    },
    {
        id: '285',
        title: 'Lord Beaupré',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=405',
        url: 'https://www.gutenberg.org/cache/epub/285/pg285.txt'
    },
    {
        id: '286',
        title: 'Louisa Pallant',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=406',
        url: 'https://www.gutenberg.org/cache/epub/286/pg286.txt'
    }
];

    