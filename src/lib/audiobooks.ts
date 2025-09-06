
export type Audiobook = {
    id: string;
    title: string;
    author: string;
    coverUrl: string;
    audioUrl:string;
};

// All audiobooks are from LibriVox (public domain)
export const AUDIOBOOKS: Audiobook[] = [
    {
        id: '1661',
        title: 'The Adventures of Sherlock Holmes',
        author: 'Arthur Conan Doyle',
        coverUrl: 'https://picsum.photos/300/400?random=1',
        audioUrl: 'https://ia800204.us.archive.org/29/items/adventures_sherlock_holmes_librivox/adventures_sherlock_holmes_01_doyle.mp3'
    },
    {
        id: '1342',
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        coverUrl: 'https://picsum.photos/300/400?random=10',
        audioUrl: 'https://ia800206.us.archive.org/12/items/pride_and_prejudice_librivox/pride_and_prejudice_01_austen.mp3'
    },
     {
        id: '64317',
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        coverUrl: 'https://picsum.photos/300/400?random=9',
        audioUrl: 'https://ia801908.us.archive.org/29/items/great_gatsby_librivox/great_gatsby_01_fitzgerald.mp3'
    },
    {
        id: '84',
        title: 'Frankenstein',
        author: 'Mary Shelley',
        coverUrl: 'https://picsum.photos/300/400?random=11',
        audioUrl: 'https://ia800203.us.archive.org/21/items/frankenstein_librivox/frankenstein_1_01_shelley.mp3'
    },
    {
        id: '2701',
        title: 'Moby Dick; or, The Whale',
        author: 'Herman Melville',
        coverUrl: 'https://picsum.photos/300/400?random=4',
        audioUrl: 'https://ia800309.us.archive.org/15/items/moby_dick_librivox/moby_dick_001_002_melville.mp3'
    },
    {
        id: '345',
        title: 'Dracula',
        author: 'Bram Stoker',
        coverUrl: 'https://picsum.photos/300/400?random=12',
        audioUrl: 'https://ia800201.us.archive.org/17/items/dracula_librivox/dracula_01_stoker.mp3'
    },
    {
        id: '98',
        title: 'A Tale of Two Cities',
        author: 'Charles Dickens',
        coverUrl: 'https://picsum.photos/300/400?random=13',
        audioUrl: 'https://ia800202.us.archive.org/33/items/a_tale_of_two_cities_librivox/tale_of_two_cities_01_dickens.mp3'
    },
    {
        id: '74',
        title: 'The Adventures of Tom Sawyer',
        author: 'Mark Twain',
        coverUrl: 'https://picsum.photos/300/400?random=14',
        audioUrl: 'https://ia800209.us.archive.org/13/items/tomsawyer_librivox/tom_sawyer_01_twain.mp3'
    },
    {
        id: '174',
        title: 'The Picture of Dorian Gray',
        author: 'Oscar Wilde',
        coverUrl: 'https://picsum.photos/300/400?random=15',
        audioUrl: 'https://ia800208.us.archive.org/21/items/picture_of_dorian_gray_librivox/picture_of_dorian_gray_01_wilde.mp3'
    },
    {
        id: '11',
        title: 'Alice\'s Adventures in Wonderland',
        author: 'Lewis Carroll',
        coverUrl: 'https://picsum.photos/300/400?random=6',
        audioUrl: 'https://ia800204.us.archive.org/11/items/alices_adventures_in_wonderland_librivox/wonderland_01_carroll.mp3'
    },
    {
        id: '5200',
        title: 'Metamorphosis',
        author: 'Franz Kafka',
        coverUrl: 'https://picsum.photos/300/400?random=17',
        audioUrl: 'https://ia800201.us.archive.org/28/items/metamorphosis_librivox/metamorphosis_01_kafka.mp3'
    },
    {
        id: '120',
        title: 'Treasure Island',
        author: 'Robert Louis Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=21',
        audioUrl: 'https://ia800209.us.archive.org/24/items/treasure_island_librivox/treasureisland_01_stevenson.mp3'
    },
    {
        id: '1260',
        title: 'Jane Eyre',
        author: 'Charlotte Brontë',
        coverUrl: 'https://picsum.photos/300/400?random=22',
        audioUrl: 'https://ia800204.us.archive.org/10/items/jane_eyre_librivox/jane_eyre_01_bronte.mp3'
    },
    {
        id: '768',
        title: 'Wuthering Heights',
        author: 'Emily Brontë',
        coverUrl: 'https://picsum.photos/300/400?random=23',
        audioUrl: 'https://ia800201.us.archive.org/34/items/wuthering_heights_librivox/wuthering_heights_01_bronte.mp3'
    },
    {
        id: '36',
        title: 'The War of the Worlds',
        author: 'H.G. Wells',
        coverUrl: 'https://picsum.photos/300/400?random=24',
        audioUrl: 'https://ia800206.us.archive.org/30/items/war_worlds_librivox/war_of_the_worlds_01_wells.mp3'
    },
    {
        id: '1952',
        title: 'The Yellow Wallpaper',
        author: 'Charlotte Perkins Gilman',
        coverUrl: 'https://picsum.photos/300/400?random=27',
        audioUrl: 'https://ia800301.us.archive.org/23/items/yellow_wallpaper_librivox/yellow_wallpaper_gilman.mp3'
    },
    {
        id: '43',
        title: 'The Strange Case of Dr. Jekyll and Mr. Hyde',
        author: 'Robert Louis Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=32',
        audioUrl: 'https://ia800202.us.archive.org/3/items/dr_jekyll_mr_hyde_librivox/jekyll_hyde_01_stevenson.mp3'
    },
    {
        id: '46',
        title: 'A Christmas Carol',
        author: 'Charles Dickens',
        coverUrl: 'https://picsum.photos/300/400?random=35',
        audioUrl: 'https://ia800201.us.archive.org/18/items/christmas_carol_librivox/christmascarol_1_dickens.mp3'
    },
    {
        id: '132',
        title: 'The Art of War',
        author: 'Sun Tzu',
        coverUrl: 'https://picsum.photos/300/400?random=110',
        audioUrl: 'https://ia800208.us.archive.org/30/items/art_of_war_librivox/art_of_war_01_sun_tzu.mp3'
    },
     {
        id: '1513',
        title: 'Romeo and Juliet',
        author: 'William Shakespeare',
        coverUrl: 'https://picsum.photos/300/400?random=100',
        audioUrl: 'https://ia800209.us.archive.org/18/items/romeo_and_juliet_librivox/romeo_and_juliet_1_shakespeare.mp3'
    }
];
