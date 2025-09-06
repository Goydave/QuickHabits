
export type Audiobook = {
    id: string;
    title: string;
    author: string;
    coverUrl: string;
    audioUrl: string;
};

// All audiobooks are from LibriVox (public domain)
export const AUDIOBOOKS: Audiobook[] = [
    {
        id: '1',
        title: 'The Adventures of Sherlock Holmes',
        author: 'Arthur Conan Doyle',
        coverUrl: 'https://picsum.photos/300/400?random=1',
        audioUrl: 'https://www.archive.org/download/adventures_sherlock_holmes_librivox/adventures_sherlock_holmes_01_doyle.mp3'
    },
    {
        id: '2',
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        coverUrl: 'https://picsum.photos/300/400?random=2',
        audioUrl: 'https://www.archive.org/download/pride_and_prejudice_librivox/pride_and_prejudice_01_austen.mp3'
    },
    {
        id: '3',
        title: 'Frankenstein',
        author: 'Mary Shelley',
        coverUrl: 'https://picsum.photos/300/400?random=3',
        audioUrl: 'https://www.archive.org/download/frankenstein_librivox/frankenstein_1_01_shelley.mp3'
    },
    {
        id: '4',
        title: 'Moby Dick',
        author: 'Herman Melville',
        coverUrl: 'https://picsum.photos/300/400?random=4',
        audioUrl: 'https://www.archive.org/download/moby_dick_librivox/moby_dick_001_002_melville.mp3'
    },
     {
        id: '5',
        title: 'The Art of War',
        author: 'Sun Tzu',
        coverUrl: 'https://picsum.photos/300/400?random=5',
        audioUrl: 'https://www.archive.org/download/art_of_war_librivox/art_of_war_01_sun_tzu.mp3'
    },
    {
        id: '6',
        title: 'Alice\'s Adventures in Wonderland',
        author: 'Lewis Carroll',
        coverUrl: 'https://picsum.photos/300/400?random=6',
        audioUrl: 'https://www.archive.org/download/alices_adventures_in_wonderland_librivox/wonderland_01_carroll.mp3'
    },
    {
        id: '7',
        title: 'The Wonderful Wizard of Oz',
        author: 'L. Frank Baum',
        coverUrl: 'https://picsum.photos/300/400?random=7',
        audioUrl: 'https://www.archive.org/download/wonderful_wizard_of_oz_librivox/wizard_of_oz_01_baum.mp3'
    },
    {
        id: '8',
        title: 'The Time Machine',
        author: 'H. G. Wells',
        coverUrl: 'https://picsum.photos/300/400?random=8',
        audioUrl: 'https://www.archive.org/download/the_time_machine_librivox/timemachine_01_wells.mp3'
    }
];
