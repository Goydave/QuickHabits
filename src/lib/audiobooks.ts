
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
        id: '84',
        title: 'Frankenstein',
        author: 'Mary Shelley',
        coverUrl: 'https://picsum.photos/300/400?random=11',
        audioUrl: 'https://www.archive.org/download/frankenstein_librivox/frankenstein_1_01_shelley.mp3'
    },
    {
        id: '2701',
        title: 'Moby Dick; or, The Whale',
        author: 'Herman Melville',
        coverUrl: 'https://picsum.photos/300/400?random=4',
        audioUrl: 'https://www.archive.org/download/moby_dick_librivox/moby_dick_001_002_melville.mp3'
    },
    {
        id: '1661',
        title: 'The Adventures of Sherlock Holmes',
        author: 'Arthur Conan Doyle',
        coverUrl: 'https://picsum.photos/300/400?random=1',
        audioUrl: 'https://www.archive.org/download/adventures_sherlock_holmes_librivox/adventures_sherlock_holmes_01_doyle.mp3'
    },
    {
        id: '1342',
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        coverUrl: 'https://picsum.photos/300/400?random=10',
        audioUrl: 'https://www.archive.org/download/pride_and_prejudice_librivox/pride_and_prejudice_01_austen.mp3'
    },
    {
        id: '345',
        title: 'Dracula',
        author: 'Bram Stoker',
        coverUrl: 'https://picsum.photos/300/400?random=12',
        audioUrl: 'https://www.archive.org/download/dracula_librivox/dracula_01_stoker.mp3'
    },
    {
        id: '98',
        title: 'A Tale of Two Cities',
        author: 'Charles Dickens',
        coverUrl: 'https://picsum.photos/300/400?random=13',
        audioUrl: 'https://archive.org/download/a_tale_of_two_cities_librivox/tale_of_two_cities_01_dickens.mp3'
    },
    {
        id: '74',
        title: 'The Adventures of Tom Sawyer',
        author: 'Mark Twain',
        coverUrl: 'https://picsum.photos/300/400?random=14',
        audioUrl: 'https://www.archive.org/download/tomsawyer_librivox/tom_sawyer_01_twain.mp3'
    },
    {
        id: '174',
        title: 'The Picture of Dorian Gray',
        author: 'Oscar Wilde',
        coverUrl: 'https://picsum.photos/300/400?random=15',
        audioUrl: 'https://www.archive.org/download/picture_of_dorian_gray_librivox/picture_of_dorian_gray_01_wilde.mp3'
    },
    {
        id: '11',
        title: 'Alice\'s Adventures in Wonderland',
        author: 'Lewis Carroll',
        coverUrl: 'https://picsum.photos/300/400?random=6',
        audioUrl: 'https://www.archive.org/download/alices_adventures_in_wonderland_librivox/wonderland_01_carroll.mp3'
    },
    {
        id: '5200',
        title: 'Metamorphosis',
        author: 'Franz Kafka',
        coverUrl: 'https://picsum.photos/300/400?random=17',
        audioUrl: 'https://www.archive.org/download/metamorphosis_librivox/metamorphosis_01_kafka.mp3'
    },
    {
        id: '4300',
        title: 'Ulysses',
        author: 'James Joyce',
        coverUrl: 'https://picsum.photos/300/400?random=18',
        audioUrl: 'https://www.archive.org/download/ulysses_librivox/ulysses_01_joyce.mp3'
    },
    {
        id: '2600',
        title: 'War and Peace',
        author: 'Leo Tolstoy',
        coverUrl: 'https://picsum.photos/300/400?random=19',
        audioUrl: 'https://www.archive.org/download/war_and_peace_librivox/war_and_peace_001_tolstoy.mp3'
    },
    {
        id: '996',
        title: 'Don Quixote',
        author: 'Miguel de Cervantes',
        coverUrl: 'https://picsum.photos/300/400?random=20',
        audioUrl: 'https://www.archive.org/download/don_quixote_vol1_librivox/don_quixote_001_cervantes.mp3'
    },
    {
        id: '120',
        title: 'Treasure Island',
        author: 'Robert Louis Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=21',
        audioUrl: 'https://www.archive.org/download/treasure_island_librivox/treasureisland_01_stevenson.mp3'
    },
    {
        id: '1260',
        title: 'Jane Eyre',
        author: 'Charlotte Brontë',
        coverUrl: 'https://picsum.photos/300/400?random=22',
        audioUrl: 'https://www.archive.org/download/jane_eyre_librivox/jane_eyre_01_bronte.mp3'
    },
    {
        id: '768',
        title: 'Wuthering Heights',
        author: 'Emily Brontë',
        coverUrl: 'https://picsum.photos/300/400?random=23',
        audioUrl: 'https://www.archive.org/download/wuthering_heights_librivox/wuthering_heights_01_bronte.mp3'
    },
    {
        id: '36',
        title: 'The War of the Worlds',
        author: 'H.G. Wells',
        coverUrl: 'https://picsum.photos/300/400?random=24',
        audioUrl: 'https://www.archive.org/download/war_worlds_librivox/war_of_the_worlds_01_wells.mp3'
    },
    {
        id: '25344',
        title: 'The Scarlet Letter',
        author: 'Nathaniel Hawthorne',
        coverUrl: 'https://picsum.photos/300/400?random=25',
        audioUrl: 'https://www.archive.org/download/the_scarlet_letter_librivox/scarlet_letter_01_hawthorne.mp3'
    },
    {
        id: '1727',
        title: 'The Iliad',
        author: 'Homer',
        coverUrl: 'https://picsum.photos/300/400?random=26',
        audioUrl: 'https://www.archive.org/download/iliad_librivox/iliad_01_homer.mp3'
    },
     {
        id: '64317',
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        coverUrl: 'https://picsum.photos/300/400?random=9',
        audioUrl: 'https://www.archive.org/download/great_gatsby_librivox/great_gatsby_01_fitzgerald.mp3'
    },
    {
        id: '1952',
        title: 'The Yellow Wallpaper',
        author: 'Charlotte Perkins Gilman',
        coverUrl: 'https://picsum.photos/300/400?random=27',
        audioUrl: 'https://www.archive.org/download/yellow_wallpaper_librivox/yellow_wallpaper_gilman.mp3'
    },
    {
        id: '76',
        title: 'Adventures of Huckleberry Finn',
        author: 'Mark Twain',
        coverUrl: 'https://picsum.photos/300/400?random=28',
        audioUrl: 'https://www.archive.org/download/adventures_huckleberry_finn_librivox/huckleberry_finn_01_twain.mp3'
    },
    {
        id: '2542',
        title: 'A Doll\'s House',
        author: 'Henrik Ibsen',
        coverUrl: 'https://picsum.photos/300/400?random=29',
        audioUrl: 'https://www.archive.org/download/dolls_house_librivox/dollshouse_1_ibsen.mp3'
    },
    {
        id: '16',
        title: 'The Awakening, and Selected Short Stories',
        author: 'Kate Chopin',
        coverUrl: 'https://picsum.photos/300/400?random=30',
        audioUrl: 'https://www.archive.org/download/the_awakening_librivox/awakening_01_chopin.mp3'
    },
    {
        id: '219',
        title: 'Heart of Darkness',
        author: 'Joseph Conrad',
        coverUrl: 'https://picsum.photos/300/400?random=31',
        audioUrl: 'https://www.archive.org/download/heart_of_darkness_librivox/heart_of_darkness_1_conrad.mp3'
    },
    {
        id: '43',
        title: 'The Strange Case of Dr. Jekyll and Mr. Hyde',
        author: 'Robert Louis Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=32',
        audioUrl: 'https://www.archive.org/download/dr_jekyll_mr_hyde_librivox/jekyll_hyde_01_stevenson.mp3'
    },
    {
        id: '1080',
        title: 'The Kama Sutra of Vatsyayana',
        author: 'Vatsyayana',
        coverUrl: 'https://picsum.photos/300/400?random=33',
        audioUrl: 'https://www.archive.org/download/kamasutra_librivox/kamasutra_01_burton.mp3'
    },
    {
        id: '1259',
        title: 'Twenty Thousand Leagues under the Sea',
        author: 'Jules Verne',
        coverUrl: 'https://picsum.photos/300/400?random=34',
        audioUrl: 'https://www.archive.org/download/twenty_thousand_leagues_under_the_sea_librivox/20000_leagues_01_verne.mp3'
    },
    {
        id: '46',
        title: 'A Christmas Carol',
        author: 'Charles Dickens',
        coverUrl: 'https://picsum.photos/300/400?random=35',
        audioUrl: 'https://www.archive.org/download/christmas_carol_librivox/christmascarol_1_dickens.mp3'
    },
    {
        id: '1400',
        title: 'Great Expectations',
        author: 'Charles Dickens',
        coverUrl: 'https://picsum.photos/300/400?random=36',
        audioUrl: 'https://www.archive.org/download/greatexpectations_librivox/great_expectations_01_dickens.mp3'
    },
    {
        id: '1232',
        title: 'The Prince',
        author: 'Niccolò Machiavelli',
        coverUrl: 'https://picsum.photos/300/400?random=37',
        audioUrl: 'https://www.archive.org/download/prince_librivox/prince_01_machiavelli.mp3'
    },
    {
        id: '30254',
        title: 'The Romance of Lust',
        author: 'Anonymous',
        coverUrl: 'https://picsum.photos/300/400?random=38',
        audioUrl: 'https://www.archive.org/download/romance_of_lust_librivox/romance_of_lust_01.mp3'
    },
    {
        id: '55',
        title: 'The Wonderful Wizard of Oz',
        author: 'L. Frank Baum',
        coverUrl: 'https://picsum.photos/300/400?random=39',
        audioUrl: 'https://www.archive.org/download/wonderful_wizard_of_oz_librivox/wizard_of_oz_01_baum.mp3'
    },
    {
        id: '215',
        title: 'The Call of the Wild',
        author: 'Jack London',
        coverUrl: 'https://picsum.photos/300/400?random=40',
        audioUrl: 'https://www.archive.org/download/call_of_the_wild_librivox/call_of_the_wild_01_london.mp3'
    },
    {
        id: '1184',
        title: 'The Count of Monte Cristo',
        author: 'Alexandre Dumas',
        coverUrl: 'https://picsum.photos/300/400?random=41',
        audioUrl: 'https://www.archive.org/download/count_of_montecristo_librivox/count_of_montecristo_001_dumas.mp3'
    },
    {
        id: '203',
        title: 'The Time Machine',
        author: 'H. G. Wells',
        coverUrl: 'https://picsum.photos/300/400?random=42',
        audioUrl: 'https://www.archive.org/download/the_time_machine_librivox/timemachine_01_wells.mp3'
    },
    {
        id: '28054',
        title: 'The Island of Doctor Moreau',
        author: 'H. G. Wells',
        coverUrl: 'https://picsum.photos/300/400?random=43',
        audioUrl: 'https://www.archive.org/download/island_dr_moreau_librivox/island_of_dr_moreau_01_wells.mp3'
    },
    {
        id: '67979',
        title: 'The Prophet',
        author: 'Kahlil Gibran',
        coverUrl: 'https://picsum.photos/300/400?random=44',
        audioUrl: 'https://www.archive.org/download/the-prophet-gibran-librivox/prophet_01_gibran.mp3'
    },
    {
        id: '135',
        title: 'Les Misérables',
        author: 'Victor Hugo',
        coverUrl: 'https://picsum.photos/300/400?random=45',
        audioUrl: 'https://www.archive.org/download/les_miserables_volume_1_librivox/les_miserables_001_hugo.mp3'
    },
    {
        id: '1998',
        title: 'The Republic',
        author: 'Plato',
        coverUrl: 'https://picsum.photos/300/400?random=46',
        audioUrl: 'https://www.archive.org/download/republic_librivox/republic_01_plato.mp3'
    },
    {
        id: '3207',
        title: 'Leviathan',
        author: 'Thomas Hobbes',
        coverUrl: 'https://picsum.photos/300/400?random=47',
        audioUrl: 'https://www.archive.org/download/leviathan_librivox/leviathan_01_hobbes.mp3'
    },
    {
        id: '58585',
        title: 'The Communist Manifesto',
        author: 'Karl Marx and Friedrich Engels',
        coverUrl: 'https://picsum.photos/300/400?random=48',
        audioUrl: 'https://www.archive.org/download/communist_manifesto_librivox/communist_manifesto_1_marx_engels.mp3'
    },
    {
        id: '2814',
        title: 'Dubliners',
        author: 'James Joyce',
        coverUrl: 'https://picsum.photos/300/400?random=49',
        audioUrl: 'https://www.archive.org/download/dubliners_librivox/dubliners_01_joyce.mp3'
    },
    {
        id: '4280',
        title: 'A Portrait of the Artist as a Young Man',
        author: 'James Joyce',
        coverUrl: 'https://picsum.photos/300/400?random=50',
        audioUrl: 'https://www.archive.org/download/a_portrait_of_the_artist_as_a_young_man_librivox/portrait_artist_young_man_01_joyce.mp3'
    },
    {
        id: '103',
        title: 'Around the World in Eighty Days',
        author: 'Jules Verne',
        coverUrl: 'https://picsum.photos/300/400?random=51',
        audioUrl: 'https://www.archive.org/download/around_the_world_in_80_days_librivox/80days_01_verne.mp3'
    },
    {
        id: '829',
        title: 'Gulliver\'s Travels',
        author: 'Jonathan Swift',
        coverUrl: 'https://picsum.photos/300/400?random=52',
        audioUrl: 'https://www.archive.org/download/gullivers_travels_librivox/gulliver_01_swift.mp3'
    },
    {
        id: '209',
        title: 'The Turn of the Screw',
        author: 'Henry James',
        coverUrl: 'https://picsum.photos/300/400?random=53',
        audioUrl: 'https://www.archive.org/download/turn_of_the_screw_librivox/turn_of_the_screw_01_james.mp3'
    },
    {
        id: '145',
        title: 'Middlemarch',
        author: 'George Eliot',
        coverUrl: 'https://picsum.photos/300/400?random=54',
        audioUrl: 'https://www.archive.org/download/middlemarch_librivox/middlemarch_01_eliot.mp3'
    },
    {
        id: '1257',
        title: 'The Three Musketeers',
        author: 'Alexandre Dumas',
        coverUrl: 'https://picsum.photos/300/400?random=55',
        audioUrl: 'https://www.archive.org/download/three_musketeers_librivox/threemusketeers_01_dumas.mp3'
    },
    {
        id: '27827',
        title: 'The Brothers Karamazov',
        author: 'Fyodor Dostoevsky',
        coverUrl: 'https://picsum.photos/300/400?random=56',
        audioUrl: 'https://www.archive.org/download/brothers_karamazov_librivox/brothers_karamazov_001_dostoevsky.mp3'
    },
    {
        id: '6130',
        title: 'The Iliad of Homer',
        author: 'Homer, translated by Alexander Pope',
        coverUrl: 'https://picsum.photos/300/400?random=57',
        audioUrl: 'https://www.archive.org/download/iliad_pope_librivox/iliad_01_pope.mp3'
    },
    {
        id: '1728',
        title: 'The Odyssey',
        author: 'Homer',
        coverUrl: 'https://picsum.photos/300/400?random=58',
        audioUrl: 'https://www.archive.org/download/odyssey_butler_librivox/odyssey_01_butler.mp3'
    },
    {
        id: '2852',
        title: 'The Hound of the Baskervilles',
        author: 'Arthur Conan Doyle',
        coverUrl: 'https://picsum.photos/300/400?random=59',
        audioUrl: 'https://www.archive.org/download/hound_baskervilles_librivox/hound_of_the_baskervilles_01_doyle.mp3'
    },
    {
        id: '205',
        title: 'Walden, and On The Duty Of Civil Disobedience',
        author: 'Henry David Thoreau',
        coverUrl: 'https://picsum.photos/300/400?random=60',
        audioUrl: 'https://www.archive.org/download/walden_librivox/walden_01_thoreau.mp3'
    },
    {
        id: '16328',
        title: 'Beowulf',
        author: 'Anonymous',
        coverUrl: 'https://picsum.photos/300/400?random=61',
        audioUrl: 'https://www.archive.org/download/beowulf_librivox/beowulf_01_gummere.mp3'
    },
    {
        id: '1064',
        title: 'The Canterbury Tales, and Other Poems',
        author: 'Geoffrey Chaucer',
        coverUrl: 'https://picsum.photos/300/400?random=62',
        audioUrl: 'https://www.archive.org/download/canterbury_tales_librivox/canterbury_tales_01_chaucer.mp3'
    },
    {
        id: '158',
        title: 'Emma',
        author: 'Jane Austen',
        coverUrl: 'https://picsum.photos/300/400?random=63',
        audioUrl: 'https://www.archive.org/download/emma_librivox/emma_01_austen.mp3'
    },
    {
        id: '946',
        title: 'David Copperfield',
        author: 'Charles Dickens',
        coverUrl: 'https://picsum.photos/300/400?random=64',
        audioUrl: 'https://www.archive.org/download/david_copperfield_librivox/david_copperfield_001_dickens.mp3'
    },
    {
        id: '14264',
        title: 'The Jungle Book',
        author: 'Rudyard Kipling',
        coverUrl: 'https://picsum.photos/300/400?random=65',
        audioUrl: 'https://www.archive.org/download/jungle_book_librivox/jungle_book_01_kipling.mp3'
    },
    {
        id: '244',
        title: 'A Study in Scarlet',
        author: 'Arthur Conan Doyle',
        coverUrl: 'https://picsum.photos/300/400?random=66',
        audioUrl: 'https://www.archive.org/download/study_in_scarlet_librivox/study_in_scarlet_01_doyle.mp3'
    },
    {
        id: '16389',
        title: 'The Memoirs of Sherlock Holmes',
        author: 'Arthur Conan Doyle',
        coverUrl: 'https://picsum.photos/300/400?random=67',
        audioUrl: 'https://www.archive.org/download/memoirs_sherlock_holmes_librivox/memoirs_of_sherlock_holmes_01_doyle.mp3'
    },
    {
        id: '8800',
        title: 'The Return of Sherlock Holmes',
        author: 'Arthur Conan Doyle',
        coverUrl: 'https://picsum.photos/300/400?random=68',
        audioUrl: 'https://www.archive.org/download/return_sherlock_holmes_librivox/return_of_sherlock_holmes_01_doyle.mp3'
    },
    {
        id: '108',
        title: 'The Sign of the Four',
        author: 'Arthur Conan Doyle',
        coverUrl: 'https://picsum.photos/300/400?random=69',
        audioUrl: 'https://www.archive.org/download/sign_of_the_four_librivox/sign_of_the_four_01_doyle.mp3'
    },
    {
        id: '23',
        title: 'The Narrative of the Life of Frederick Douglass',
        author: 'Frederick Douglass',
        coverUrl: 'https://picsum.photos/300/400?random=70',
        audioUrl: 'https://www.archive.org/download/narrative_frederick_douglass_librivox/narrative_douglass_01_douglass.mp3'
    },
    {
        id: '514',
        title: 'Little Women',
        author: 'Louisa May Alcott',
        coverUrl: 'https://picsum.photos/300/400?random=71',
        audioUrl: 'https://www.archive.org/download/little_women_librivox/little_women_01_alcott.mp3'
    },
    {
        id: '2641',
        title: 'A Room with a View',
        author: 'E. M. Forster',
        coverUrl: 'https://picsum.photos/300/400?random=72',
        audioUrl: 'https://www.archive.org/download/room_with_a_view_librivox/roomwithaview_01_forster.mp3'
    },
    {
        id: '394',
        title: 'Cranford',
        author: 'Elizabeth Gaskell',
        coverUrl: 'https://picsum.photos/300/400?random=73',
        audioUrl: 'https://www.archive.org/download/cranford_librivox/cranford_01_gaskell.mp3'
    },
    {
        id: '4085',
        title: 'The Age of Innocence',
        author: 'Edith Wharton',
        coverUrl: 'https://picsum.photos/300/400?random=74',
        audioUrl: 'https://www.archive.org/download/age_of_innocence_librivox/ageofinnocence_01_wharton.mp3'
    },
    {
        id: '37106',
        title: 'The Secret Garden',
        author: 'Frances Hodgson Burnett',
        coverUrl: 'https://picsum.photos/300/400?random=75',
        audioUrl: 'https://www.archive.org/download/secret_garden_librivox/secretgarden_01_burnett.mp3'
    },
    {
        id: '2591',
        title: 'The House of Mirth',
        author: 'Edith Wharton',
        coverUrl: 'https://picsum.photos/300/400?random=76',
        audioUrl: 'https://www.archive.org/download/house_of_mirth_librivox/houseofmirth_1_01_wharton.mp3'
    },
    {
        id: '19337',
        title: 'The Wind in the Willows',
        author: 'Kenneth Grahame',
        coverUrl: 'https://picsum.photos/300/400?random=77',
        audioUrl: 'https://www.archive.org/download/wind_in_the_willows_librivox/wind_in_the_willows_01_grahame.mp3'
    },
    {
        id: '2554',
        title: 'Crime and Punishment',
        author: 'Fyodor Dostoevsky',
        coverUrl: 'https://picsum.photos/300/400?random=78',
        audioUrl: 'https://www.archive.org/download/crime_and_punishment_librivox/crime_and_punishment_001_dostoevsky.mp3'
    },
    {
        id: '61533',
        title: 'The Idiot',
        author: 'Fyodor Dostoevsky',
        coverUrl: 'https://picsum.photos/300/400?random=79',
        audioUrl: 'https://www.archive.org/download/the_idiot_2102_librivox/idiot_001_dostoyevsky.mp3'
    },
    {
        id: '600',
        title: 'Notes from the Underground',
        author: 'Fyodor Dostoevsky',
        coverUrl: 'https://picsum.photos/300/400?random=80',
        audioUrl: 'https://www.archive.org/download/notes_from_the_underground_librivox/notes_from_the_underground_01_dostoevsky.mp3'
    },
    {
        id: '1250',
        title: 'Madame Bovary',
        author: 'Gustave Flaubert',
        coverUrl: 'https://picsum.photos/300/400?random=81',
        audioUrl: 'https://www.archive.org/download/madame_bovary_librivox/bovary_1_01_flaubert.mp3'
    },
    {
        id: '161',
        title: 'Sense and Sensibility',
        author: 'Jane Austen',
        coverUrl: 'https://picsum.photos/300/400?random=82',
        audioUrl: 'https://www.archive.org/download/sense_and_sensibility_librivox/sense_and_sensibility_01_austen.mp3'
    },
    {
        id: '105',
        title: 'Persuasion',
        author: 'Jane Austen',
        coverUrl: 'https://picsum.photos/300/400?random=83',
        audioUrl: 'https://www.archive.org/download/persuasion_librivox/persuasion_01_austen.mp3'
    },
    {
        id: '141',
        title: 'Mansfield Park',
        author: 'Jane Austen',
        coverUrl: 'https://picsum.photos/300/400?random=84',
        audioUrl: 'https://www.archive.org/download/mansfield_park_librivox/mansfield_park_01_austen.mp3'
    },
    {
        id: '1212',
        title: 'Northanger Abbey',
        author: 'Jane Austen',
        coverUrl: 'https://picsum.photos/300/400?random=85',
        audioUrl: 'https://www.archive.org/download/northanger_abbey_librivox/northanger_abbey_01_austen.mp3'
    },
    {
        id: '20228',
        title: 'The Red Badge of Courage',
        author: 'Stephen Crane',
        coverUrl: 'https://picsum.photos/300/400?random=86',
        audioUrl: 'https://www.archive.org/download/red_badge_of_courage_librivox/red_badge_of_courage_01_crane.mp3'
    },
    {
        id: '42',
        title: 'The Merry Adventures of Robin Hood',
        author: 'Howard Pyle',
        coverUrl: 'https://picsum.photos/300/400?random=87',
        audioUrl: 'https://www.archive.org/download/robin_hood_librivox/merry_adventures_of_robin_hood_01_pyle.mp3'
    },
    {
        id: '41',
        title: 'The Legend of Sleepy Hollow',
        author: 'Washington Irving',
        coverUrl: 'https://picsum.photos/300/400?random=88',
        audioUrl: 'https://www.archive.org/download/legend_sleepy_hollow_librivox/legend_of_sleepy_hollow_irving.mp3'
    },
    {
        id: '20',
        title: 'Paradise Lost',
        author: 'John Milton',
        coverUrl: 'https://picsum.photos/300/400?random=89',
        audioUrl: 'https://www.archive.org/download/paradise_lost_librivox/paradiselost_01_milton.mp3'
    },
    {
        id: '33',
        title: 'The Scarlet Pimpernel',
        author: 'Baroness Orczy',
        coverUrl: 'https://picsum.photos/300/400?random=90',
        audioUrl: 'https://www.archive.org/download/scarlet_pimpernel_librivox/scarlet_pimpernel_01_orczy.mp3'
    },
    {
        id: '82',
        title: 'Ivanhoe',
        author: 'Walter Scott',
        coverUrl: 'https://picsum.photos/300/400?random=91',
        audioUrl: 'https://www.archive.org/download/ivanhoe_librivox/ivanhoe_01_scott.mp3'
    },
    {
        id: '2705',
        title: 'The Last of the Mohicans',
        author: 'James Fenimore Cooper',
        coverUrl: 'https://picsum.photos/300/400?random=92',
        audioUrl: 'https://www.archive.org/download/last_of_the_mohicans_librivox/last_of_the_mohicans_01_cooper.mp3'
    },
    {
        id: '1837',
        title: 'The Last Man',
        author: 'Mary Shelley',
        coverUrl: 'https://picsum.photos/300/400?random=93',
        audioUrl: 'https://www.archive.org/download/the_last_man_2004_librivox/lastman_1_01_shelley.mp3'
    },
    {
        id: '521',
        title: 'The Life and Adventures of Robinson Crusoe',
        author: 'Daniel Defoe',
        coverUrl: 'https://picsum.photos/300/400?random=94',
        audioUrl: 'https://www.archive.org/download/robinson_crusoe_librivox/robinson_crusoe_01_defoe.mp3'
    },
    {
        id: '3825',
        title: 'Pygmalion',
        author: 'George Bernard Shaw',
        coverUrl: 'https://picsum.photos/300/400?random=95',
        audioUrl: 'https://www.archive.org/download/pygmalion_librivox/pygmalion_1_shaw.mp3'
    },
    {
        id: '1155',
        title: 'The Importance of Being Earnest',
        author: 'Oscar Wilde',
        coverUrl: 'https://picsum.photos/300/400?random=96',
        audioUrl: 'https://www.archive.org/download/importance_of_being_earnest_librivox/earnest_1_wilde.mp3'
    },
    {
        id: '245',
        title: 'The Man Who Was Thursday',
        author: 'G.K. Chesterton',
        coverUrl: 'https://picsum.photos/300/400?random=97',
        audioUrl: 'https://www.archive.org/download/man_was_thursday_librivox/man_who_was_thursday_01_chesterton.mp3'
    },
    {
        id: '1322',
        title: 'Leaves of Grass',
        author: 'Walt Whitman',
        coverUrl: 'https://picsum.photos/300/400?random=98',
        audioUrl: 'https://www.archive.org/download/leaves_of_grass_librivox/leaves_of_grass_01_whitman.mp3'
    },
    {
        id: '19942',
        title: 'The Divine Comedy',
        author: 'Dante Alighieri',
        coverUrl: 'https://picsum.photos/300/400?random=99',
        audioUrl: 'https://www.archive.org/download/divine_comedy_librivox/divine_comedy_01_dante.mp3'
    },
    {
        id: '1513',
        title: 'Romeo and Juliet',
        author: 'William Shakespeare',
        coverUrl: 'https://picsum.photos/300/400?random=100',
        audioUrl: 'https://www.archive.org/download/romeo_and_juliet_librivox/romeo_and_juliet_1_shakespeare.mp3'
    },
    {
        id: '1533',
        title: 'Hamlet',
        author: 'William Shakespeare',
        coverUrl: 'https://picsum.photos/300/400?random=101',
        audioUrl: 'https://www.archive.org/download/hamlet_librivox/hamlet_1_shakespeare.mp3'
    },
    {
        id: '1524',
        title: 'Macbeth',
        author: 'William Shakespeare',
        coverUrl: 'https://picsum.photos/300/400?random=102',
        audioUrl: 'https://www.archive.org/download/macbeth_librivox/macbeth_1_shakespeare.mp3'
    },
    {
        id: '2265',
        title: 'Othello',
        author: 'William Shakespeare',
        coverUrl: 'https://picsum.photos/300/400?random=103',
        audioUrl: 'https://www.archive.org/download/othello_librivox/othello_1_shakespeare.mp3'
    },
    {
        id: '2267',
        title: 'The Tempest',
        author: 'William Shakespeare',
        coverUrl: 'https://picsum.photos/300/400?random=104',
        audioUrl: 'https://www.archive.org/download/tempest_librivox/tempest_1_shakespeare.mp3'
    },
    {
        id: '1795',
        title: 'A Midsummer Night\'s Dream',
        author: 'William Shakespeare',
        coverUrl: 'https://picsum.photos/300/400?random=105',
        audioUrl: 'https://www.archive.org/download/midsummer_nights_dream_librivox/midsummer_nights_dream_1_shakespeare.mp3'
    },
    {
        id: '2264',
        title: 'The Taming of the Shrew',
        author: 'William Shakespeare',
        coverUrl: 'https://picsum.photos/300/400?random=106',
        audioUrl: 'https://www.archive.org/download/taming_of_the_shrew_librivox/taming_of_the_shrew_1_shakespeare.mp3'
    },
    {
        id: '2266',
        title: 'The Merchant of Venice',
        author: 'William Shakespeare',
        coverUrl: 'https://picsum.photos/300/400?random=107',
        audioUrl: 'https://www.archive.org/download/merchant_of_venice_librivox/merchant_of_venice_1_shakespeare.mp3'
    },
    {
        id: '1787',
        title: 'King Lear',
        author: 'William Shakespeare',
        coverUrl: 'https://picsum.photos/300/400?random=108',
        audioUrl: 'https://www.archive.org/download/king_lear_librivox/king_lear_1_shakespeare.mp3'
    },
    {
        id: '23042',
        title: 'The Complete Works of William Shakespeare',
        author: 'William Shakespeare',
        coverUrl: 'https://picsum.photos/300/400?random=109',
        audioUrl: 'https://example.com/audio.mp3' // Placeholder
    },
    {
        id: '132',
        title: 'The Art of War',
        author: 'Sun Tzu',
        coverUrl: 'https://picsum.photos/300/400?random=110',
        audioUrl: 'https://www.archive.org/download/art_of_war_librivox/art_of_war_01_sun_tzu.mp3'
    },
    {
        id: '5000',
        title: 'Thus Spake Zarathustra',
        author: 'Friedrich Nietzsche',
        coverUrl: 'https://picsum.photos/300/400?random=111',
        audioUrl: 'https://www.archive.org/download/thus_spake_zarathustra_librivox/thus_spake_zarathustra_00_nietzsche.mp3'
    },
    {
        id: '4363',
        title: 'Beyond Good and Evil',
        author: 'Friedrich Nietzsche',
        coverUrl: 'https://picsum.photos/300/400?random=112',
        audioUrl: 'https://www.archive.org/download/beyond_good_and_evil_librivox/beyond_good_and_evil_01_nietzsche.mp3'
    },
    {
        id: '2848',
        title: 'The Antichrist',
        author: 'Friedrich Nietzsche',
        coverUrl: 'https://picsum.photos/300/400?random=113',
        audioUrl: 'https://www.archive.org/download/antichrist_librivox/antichrist_01_nietzsche.mp3'
    },
    {
        id: '3800',
        title: 'The Critique of Pure Reason',
        author: 'Immanuel Kant',
        coverUrl: 'https://picsum.photos/300/400?random=114',
        audioUrl: 'https://www.archive.org/download/critique_pure_reason_librivox/critique_of_pure_reason_01_kant.mp3'
    },
    {
        id: '574',
        title: 'The Souls of Black Folk',
        author: 'W. E. B. Du Bois',
        coverUrl: 'https://picsum.photos/300/400?random=115',
        audioUrl: 'https://www.archive.org/download/souls_of_black_folk_librivox/souls_of_black_folk_01_dubois.mp3'
    },
    {
        id: '32',
        title: 'Herland',
        author: 'Charlotte Perkins Gilman',
        coverUrl: 'https://picsum.photos/300/400?random=116',
        audioUrl: 'https://www.archive.org/download/herland_librivox/herland_01_gilman.mp3'
    },
    {
        id: '30',
        title: 'Little Women',
        author: 'Louisa May Alcott',
        coverUrl: 'https://picsum.photos/300/400?random=117',
        audioUrl: 'https://www.archive.org/download/little_women_librivox/little_women_01_alcott.mp3'
    },
    {
        id: '2708',
        title: 'The Pathfinder',
        author: 'James Fenimore Cooper',
        coverUrl: 'https://picsum.photos/300/400?random=118',
        audioUrl: 'https://www.archive.org/download/pathfinder_librivox/pathfinder_01_cooper.mp3'
    },
    {
        id: '940',
        title: 'The Deerslayer',
        author: 'James Fenimore Cooper',
        coverUrl: 'https://picsum.photos/300/400?random=119',
        audioUrl: 'https://www.archive.org/download/deerslayer_librivox/deerslayer_01_cooper.mp3'
    },
    {
        id: '18657',
        title: 'The Prairie',
        author: 'James Fenimore Cooper',
        coverUrl: 'https://picsum.photos/300/400?random=120',
        audioUrl: 'https://www.archive.org/download/the_prairie_librivox/prairie_01_cooper.mp3'
    },
    {
        id: '24022',
        title: 'The Pioneers',
        author: 'James Fenimore Cooper',
        coverUrl: 'https://picsum.photos/300/400?random=121',
        audioUrl: 'https://www.archive.org/download/pioneers_librivox/pioneers_01_cooper.mp3'
    },
    {
        id: '100',
        title: 'The Complete Works of William Shakespeare',
        author: 'William Shakespeare',
        coverUrl: 'https://picsum.photos/300/400?random=122',
        audioUrl: 'https://example.com/audio.mp3' // Placeholder
    },
    {
        id: '2595',
        title: 'The Innocents Abroad',
        author: 'Mark Twain',
        coverUrl: 'https://picsum.photos/300/400?random=123',
        audioUrl: 'https://www.archive.org/download/innocents_abroad_librivox/innocents_abroad_01_twain.mp3'
    },
    {
        id: '18372',
        title: 'Roughing It',
        author: 'Mark Twain',
        coverUrl: 'https://picsum.photos/300/400?random=124',
        audioUrl: 'https://www.archive.org/download/roughing_it_librivox/roughing_it_01_twain.mp3'
    },
    {
        id: '86',
        title: 'A Connecticut Yankee in King Arthur\'s Court',
        author: 'Mark Twain',
        coverUrl: 'https://picsum.photos/300/400?random=125',
        audioUrl: 'https://www.archive.org/download/connecticut_yankee_librivox/connecticut_yankee_01_twain.mp3'
    },
    {
        id: '102',
        title: 'The Prince and the Pauper',
        author: 'Mark Twain',
        coverUrl: 'https://picsum.photos/300/400?random=126',
        audioUrl: 'https://www.archive.org/download/prince_pauper_librivox/prince_and_the_pauper_01_twain.mp3'
    },
    {
        id: '2450',
        title: 'The Mysterious Stranger',
        author: 'Mark Twain',
        coverUrl: 'https://picsum.photos/300/400?random=127',
        audioUrl: 'https://www.archive.org/download/mysterious_stranger_librivox/mysterious_stranger_01_twain.mp3'
    },
    {
        id: '3176',
        title: 'The American Claimant',
        author: 'Mark Twain',
        coverUrl: 'https://picsum.photos/300/400?random=128',
        audioUrl: 'https://www.archive.org/download/american_claimant_librivox/american_claimant_01_twain.mp3'
    },
    {
        id: '3177',
        title: 'The £1,000,000 Bank-Note',
        author: 'Mark Twain',
        coverUrl: 'https://picsum.photos/300/400?random=129',
        audioUrl: 'https://www.archive.org/download/million_pound_bank_note_librivox/million_pound_bank_note_01_twain.mp3'
    },
    {
        id: '3190',
        title: 'The Tragedy of Pudd\'nhead Wilson',
        author: 'Mark Twain',
        coverUrl: 'https://picsum.photos/300/400?random=130',
        audioUrl: 'https://www.archive.org/download/puddnhead_wilson_librivox/puddnhead_wilson_01_twain.mp3'
    },
    {
        id: '2890',
        title: 'Following the Equator',
        author: 'Mark Twain',
        coverUrl: 'https://picsum.photos/300/400?random=131',
        audioUrl: 'https://www.archive.org/download/following_the_equator_librivox/following_the_equator_01_twain.mp3'
    },
    {
        id: '142',
        title: 'Hard Times',
        author: 'Charles Dickens',
        coverUrl: 'https://picsum.photos/300/400?random=132',
        audioUrl: 'https://www.archive.org/download/hard_times_librivox/hard_times_01_dickens.mp3'
    },
    {
        id: '580',
        title: 'The Pickwick Papers',
        author: 'Charles Dickens',
        coverUrl: 'https://picsum.photos/300/400?random=133',
        audioUrl: 'https://www.archive.org/download/pickwick_papers_librivox/pickwick_papers_001_dickens.mp3'
    },
    {
        id: '730',
        title: 'Oliver Twist',
        author: 'Charles Dickens',
        coverUrl: 'https://picsum.photos/300/400?random=134',
        audioUrl: 'https://www.archive.org/download/oliver_twist_librivox/oliver_twist_01_dickens.mp3'
    },
    {
        id: '882',
        title: 'Nicholas Nickleby',
        author: 'Charles Dickens',
        coverUrl: 'https://picsum.photos/300/400?random=135',
        audioUrl: 'https://www.archive.org/download/nicholas_nickleby_librivox/nicholas_nickleby_001_dickens.mp3'
    },
    {
        id: '675',
        title: 'The Old Curiosity Shop',
        author: 'Charles Dickens',
        coverUrl: 'https://picsum.photos/300/400?random=136',
        audioUrl: 'https://www.archive.org/download/old_curiosity_shop_librivox/old_curiosity_shop_01_dickens.mp3'
    },
    {
        id: '700',
        title: 'Barnaby Rudge',
        author: 'Charles Dickens',
        coverUrl: 'https://picsum.photos/300/400?random=137',
        audioUrl: 'https://www.archive.org/download/barnaby_rudge_librivox/barnaby_rudge_01_dickens.mp3'
    },
    {
        id: '821',
        title: 'Martin Chuzzlewit',
        author: 'Charles Dickens',
        coverUrl: 'https://picsum.photos/300/400?random=138',
        audioUrl: 'https://www.archive.org/download/martin_chuzzlewit_librivox/martin_chuzzlewit_001_dickens.mp3'
    },
    {
        id: '967',
        title: 'Dombey and Son',
        author: 'Charles Dickens',
        coverUrl: 'https://picsum.photos/300/400?random=139',
        audioUrl: 'https://www.archive.org/download/dombey_and_son_librivox/dombey_and_son_001_dickens.mp3'
    },
    {
        id: '564',
        title: 'Bleak House',
        author: 'Charles Dickens',
        coverUrl: 'https://picsum.photos/300/400?random=140',
        audioUrl: 'https://www.archive.org/download/bleak_house_librivox/bleak_house_001_dickens.mp3'
    },
    {
        id: '968',
        title: 'Little Dorrit',
        author: 'Charles Dickens',
        coverUrl: 'https://picsum.photos/300/400?random=141',
        audioUrl: 'https://www.archive.org/download/little_dorrit_librivox/little_dorrit_01_dickens.mp3'
    },
    {
        id: '786',
        title: 'Our Mutual Friend',
        author: 'Charles Dickens',
        coverUrl: 'https://picsum.photos/300/400?random=142',
        audioUrl: 'https://www.archive.org/download/our_mutual_friend_librivox/our_mutual_friend_001_dickens.mp3'
    },
    {
        id: '963',
        title: 'The Mystery of Edwin Drood',
        author: 'Charles Dickens',
        coverUrl: 'https://picsum.photos/300/400?random=143',
        audioUrl: 'https://www.archive.org/download/mystery_of_edwin_drood_librivox/mystery_of_edwin_drood_01_dickens.mp3'
    },
    {
        id: '204',
        title: 'The Invisible Man',
        author: 'H. G. Wells',
        coverUrl: 'https://picsum.photos/300/400?random=144',
        audioUrl: 'https://www.archive.org/download/invisible_man_librivox/invisible_man_01_wells.mp3'
    },
    {
        id: '35',
        title: 'The Time Machine',
        author: 'H. G. Wells',
        coverUrl: 'https://picsum.photos/300/400?random=145',
        audioUrl: 'https://www.archive.org/download/the_time_machine_librivox/timemachine_01_wells.mp3'
    },
    {
        id: '159',
        title: 'The War of the Worlds',
        author: 'H. G. Wells',
        coverUrl: 'https://picsum.photos/300/400?random=146',
        audioUrl: 'https://www.archive.org/download/war_worlds_librivox/war_of_the_worlds_01_wells.mp3'
    },
    {
        id: '5230',
        title: 'The First Men in the Moon',
        author: 'H. G. Wells',
        coverUrl: 'https://picsum.photos/300/400?random=147',
        audioUrl: 'https://www.archive.org/download/first_men_in_the_moon_librivox/first_men_in_the_moon_01_wells.mp3'
    },
    {
        id: '1187',
        title: 'The Food of the Gods and How It Came to Earth',
        author: 'H. G. Wells',
        coverUrl: 'https://picsum.photos/300/400?random=148',
        audioUrl: 'https://www.archive.org/download/food_of_the_gods_librivox/food_of_the_gods_01_wells.mp3'
    },
    {
        id: '59774',
        title: 'The Shape of Things to Come',
        author: 'H. G. Wells',
        coverUrl: 'https://picsum.photos/300/400?random=149',
        audioUrl: 'https://example.com/audio.mp3' // Placeholder
    },
    {
        id: '2236',
        title: 'The History of Mr. Polly',
        author: 'H. G. Wells',
        coverUrl: 'https://picsum.photos/300/400?random=150',
        audioUrl: 'https://www.archive.org/download/history_mr_polly_librivox/history_of_mr_polly_01_wells.mp3'
    },
    {
        id: '1169',
        title: 'Kipps: The Story of a Simple Soul',
        author: 'H. G. Wells',
        coverUrl: 'https://picsum.photos/300/400?random=151',
        audioUrl: 'https://www.archive.org/download/kipps_librivox/kipps_01_wells.mp3'
    },
    {
        id: '59775',
        title: 'The World Set Free',
        author: 'H. G. Wells',
        coverUrl: 'https://picsum.photos/300/400?random=152',
        audioUrl: 'https://example.com/audio.mp3' // Placeholder
    },
    {
        id: '644',
        title: 'The Sleeper Awakes',
        author: 'H. G. Wells',
        coverUrl: 'https://picsum.photos/300/400?random=153',
        audioUrl: 'https://www.archive.org/download/the_sleeper_awakes_1804_librivox/sleeperawakes_01_wells.mp3'
    },
    {
        id: '2247',
        title: 'The New Machiavelli',
        author: 'H. G. Wells',
        coverUrl: 'https://picsum.photos/300/400?random=154',
        audioUrl: 'https://www.archive.org/download/new_machiavelli_librivox/new_machiavelli_01_wells.mp3'
    },
    {
        id: '155',
        title: 'The Secret Agent: A Simple Tale',
        author: 'Joseph Conrad',
        coverUrl: 'https://picsum.photos/300/400?random=155',
        audioUrl: 'https://www.archive.org/download/secret_agent_librivox/secret_agent_01_conrad.mp3'
    },
    {
        id: '220',
        title: 'Lord Jim',
        author: 'Joseph Conrad',
        coverUrl: 'https://picsum.photos/300/400?random=156',
        audioUrl: 'https://www.archive.org/download/lord_jim_librivox/lord_jim_01_conrad.mp3'
    },
    {
        id: '95',
        title: 'Nostromo: A Tale of the Seaboard',
        author: 'Joseph Conrad',
        coverUrl: 'https://picsum.photos/300/400?random=157',
        audioUrl: 'https://www.archive.org/download/nostromo_librivox/nostromo_1_01_conrad.mp3'
    },
    {
        id: '2025',
        title: 'Under Western Eyes',
        author: 'Joseph Conrad',
        coverUrl: 'https://picsum.photos/300/400?random=158',
        audioUrl: 'https://www.archive.org/download/under_western_eyes_librivox/under_western_eyes_01_conrad.mp3'
    },
    {
        id: '499',
        title: 'The Rover',
        author: 'Joseph Conrad',
        coverUrl: 'https://picsum.photos/300/400?random=159',
        audioUrl: 'https://www.archive.org/download/the_rover_1912_librivox/rover_01_conrad.mp3'
    },
    {
        id: '525',
        title: 'The Arrow of Gold',
        author: 'Joseph Conrad',
        coverUrl: 'https://picsum.photos/300/400?random=160',
        audioUrl: 'https://www.archive.org/download/arrow_of_gold_librivox/arrow_of_gold_01_conrad.mp3'
    },
    {
        id: '526',
        title: 'Victory: An Island Tale',
        author: 'Joseph Conrad',
        coverUrl: 'https://picsum.photos/300/400?random=161',
        audioUrl: 'https://www.archive.org/download/victory_an_island_tale_2004_librivox/victory_01_conrad.mp3'
    },
    {
        id: '524',
        title: 'Chance',
        author: 'Joseph Conrad',
        coverUrl: 'https://picsum.photos/300/400?random=162',
        audioUrl: 'https://www.archive.org/download/chance_a_tale_in_two_parts_1912_librivox/chance_1_01_conrad.mp3'
    },
    {
        id: '475',
        title: 'The Shadow Line',
        author: 'Joseph Conrad',
        coverUrl: 'https://picsum.photos/300/400?random=163',
        audioUrl: 'https://www.archive.org/download/shadow_line_librivox/shadow_line_01_conrad.mp3'
    },
    {
        id: '2014',
        title: 'A Personal Record',
        author: 'Joseph Conrad',
        coverUrl: 'https://picsum.photos/300/400?random=164',
        audioUrl: 'https://www.archive.org/download/a_personal_record_2005_librivox/apersonalrecord_01_conrad.mp3'
    },
    {
        id: '185',
        title: 'The Voyage Out',
        author: 'Virginia Woolf',
        coverUrl: 'https://picsum.photos/300/400?random=165',
        audioUrl: 'https://www.archive.org/download/voyage_out_librivox/voyage_out_01_woolf.mp3'
    },
    {
        id: '67702',
        title: 'Mrs Dalloway',
        author: 'Virginia Woolf',
        coverUrl: 'https://picsum.photos/300/400?random=166',
        audioUrl: 'https://www.archive.org/download/mrs_dalloway_2004_librivox/mrsdalloway_01_woolf.mp3'
    },
    {
        id: '67918',
        title: 'To the Lighthouse',
        author: 'Virginia Woolf',
        coverUrl: 'https://picsum.photos/300/400?random=167',
        audioUrl: 'https://www.archive.org/download/to_the_lighthouse_2006_librivox/tothelightouse_1_01_woolf.mp3'
    },
    {
        id: '67926',
        title: 'Orlando: A Biography',
        author: 'Virginia Woolf',
        coverUrl: 'https://picsum.photos/300/400?random=168',
        audioUrl: 'https://www.archive.org/download/orlando_2006_librivox/orlando_01_woolf.mp3'
    },
    {
        id: '67980',
        title: 'A Room of One\'s Own',
        author: 'Virginia Woolf',
        coverUrl: 'https://picsum.photos/300/400?random=169',
        audioUrl: 'https://www.archive.org/download/a_room_of_ones_own_2006_librivox/roomofonesown_01_woolf.mp3'
    },
    {
        id: '67927',
        title: 'The Waves',
        author: 'Virginia Woolf',
        coverUrl: 'https://picsum.photos/300/400?random=170',
        audioUrl: 'https://www.archive.org/download/the_waves_2006_librivox/waves_01_woolf.mp3'
    },
    {
        id: '1589',
        title: 'Night and Day',
        author: 'Virginia Woolf',
        coverUrl: 'https://picsum.photos/300/400?random=171',
        audioUrl: 'https://www.archive.org/download/night_and_day_librivox/night_and_day_01_woolf.mp3'
    },
    {
        id: '2863',
        title: 'Jacob\'s Room',
        author: 'Virginia Woolf',
        coverUrl: 'https://picsum.photos/300/400?random=172',
        audioUrl: 'https://www.archive.org/download/jacobs_room_librivox/jacobs_room_01_woolf.mp3'
    },
    {
        id: '4079',
        title: 'The Common Reader',
        author: 'Virginia Woolf',
        coverUrl: 'https://picsum.photos/300/400?random=173',
        audioUrl: 'https://www.archive.org/download/common_reader_librivox/common_reader_01_woolf.mp3'
    },
    {
        id: '3335',
        title: 'The Second Common Reader',
        author: 'Virginia Woolf',
        coverUrl: 'https://picsum.photos/300/400?random=174',
        audioUrl: 'https://www.archive.org/download/second_common_reader_2006_librivox/secondcommonreader_01_woolf.mp3'
    },
    {
        id: '2875',
        title: 'Monday or Tuesday',
        author: 'Virginia Woolf',
        coverUrl: 'https://picsum.photos/300/400?random=175',
        audioUrl: 'https://www.archive.org/download/monday_or_tuesday_librivox/monday_or_tuesday_01_woolf.mp3'
    },
    {
        id: '121',
        title: 'Kidnapped',
        author: 'Robert Louis Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=176',
        audioUrl: 'https://www.archive.org/download/kidnapped_librivox/kidnapped_01_stevenson.mp3'
    },
    {
        id: '421',
        title: 'The Black Arrow',
        author: 'Robert Louis Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=177',
        audioUrl: 'https://www.archive.org/download/black_arrow_librivox/black_arrow_01_stevenson.mp3'
    },
    {
        id: '75',
        title: 'The Master of Ballantrae',
        author: 'Robert Louis Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=178',
        audioUrl: 'https://www.archive.org/download/master_of_ballantrae_librivox/master_of_ballantrae_01_stevenson.mp3'
    },
    {
        id: '3093',
        title: 'Catriona',
        author: 'Robert Louis Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=179',
        audioUrl: 'https://www.archive.org/download/catriona_librivox/catriona_01_stevenson.mp3'
    },
    {
        id: '417',
        title: 'The Wrecker',
        author: 'Robert Louis Stevenson and Lloyd Osbourne',
        coverUrl: 'https://picsum.photos/300/400?random=180',
        audioUrl: 'https://www.archive.org/download/wrecker_librivox/wrecker_01_stevenson_osbourne.mp3'
    },
    {
        id: '535',
        title: 'The Ebb-Tide',
        author: 'Robert Louis Stevenson and Lloyd Osbourne',
        coverUrl: 'https://picsum.photos/300/400?random=181',
        audioUrl: 'https://www.archive.org/download/the_ebb_tide_2004_librivox/ebbtide_1_01_stevenson.mp3'
    },
    {
        id: '536',
        title: 'Island Nights\' Entertainments',
        author: 'Robert Louis Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=182',
        audioUrl: 'https://www.archive.org/download/island_nights_entertainments_librivox/island_nights_entertainments_01_stevenson.mp3'
    },
    {
        id: '1249',
        title: 'An Inland Voyage',
        author: 'Robert Louis Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=183',
        audioUrl: 'https://www.archive.org/download/inland_voyage_librivox/inland_voyage_01_stevenson.mp3'
    },
    {
        id: '505',
        title: 'Travels with a Donkey in the Cévennes',
        author: 'Robert Louis Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=184',
        audioUrl: 'https://www.archive.org/download/travels_with_a_donkey_in_the_cevennes_2004_librivox/travelswithadonkey_01_stevenson.mp3'
    },
    {
        id: '416',
        title: 'Virginibus Puerisque, and Other Papers',
        author: 'Robert Louis Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=185',
        audioUrl: 'https://www_archive.org/download/virginibus_puerisque_2004_librivox/virginibus_01_stevenson.mp3'
    },
    {
        id: '447',
        title: 'The New Arabian Nights',
        author: 'Robert Louis Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=186',
        audioUrl: 'https://www.archive.org/download/new_arabian_nights_librivox/new_arabian_nights_01_stevenson.mp3'
    },
    {
        id: '415',
        title: 'The Merry Men, and Other Tales and Fables',
        author: 'Robert Louis Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=187',
        audioUrl: 'https://www.archive.org/download/merry_men_other_tales_librivox/merry_men_01_stevenson.mp3'
    },
    {
        id: '307',
        title: 'The Dynamiter',
        author: 'Robert Louis Stevenson and Fanny Van de Grift Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=188',
        audioUrl: 'https://www.archive.org/download/dynamiter_librivox/dynamiter_01_stevenson.mp3'
    },
    {
        id: '298',
        title: 'The Wrong Box',
        author: 'Robert Louis Stevenson and Lloyd Osbourne',
        coverUrl: 'https://picsum.photos/300/400?random=189',
        audioUrl: 'https://www.archive.org/download/the_wrong_box_2004_librivox/wrongbox_01_stevenson.mp3'
    },
    {
        id: '299',
        title: 'A Footnote to History: Eight Years of Trouble in Samoa',
        author: 'Robert Louis Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=190',
        audioUrl: 'https://www.archive.org/download/a_footnote_to_history_2004_librivox/footnotetohistory_01_stevenson.mp3'
    },
    {
        id: '348',
        title: 'The Silverado Squatters',
        author: 'Robert Louis Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=191',
        audioUrl: 'https://www.archive.org/download/silverado_squatters_librivox/silverado_squatters_01_stevenson.mp3'
    },
    {
        id: '297',
        title: 'Across the Plains, with Other Memories and Essays',
        author: 'Robert Louis Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=192',
        audioUrl: 'https://www.archive.org/download/across_the_plains_2004_librivox/acrosstheplains_01_stevenson.mp3'
    },
    {
        id: '208',
        title: 'Familiar Studies of Men and Books',
        author: 'Robert Louis Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=193',
        audioUrl: 'https://www.archive.org/download/familiar_studies_of_men_and_books_2004_librivox/familiarstudies_01_stevenson.mp3'
    },
    {
        id: '296',
        title: 'Memories and Portraits',
        author: 'Robert Louis Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=194',
        audioUrl: 'https://www.archive.org/download/memories_and_portraits_2004_librivox/memoriesandportraits_01_stevenson.mp3'
    },
    {
        id: '295',
        title: 'A Child\'s Garden of Verses',
        author: 'Robert Louis Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=195',
        audioUrl: 'https://www.archive.org/download/childs_garden_of_verses_librivox/childs_garden_of_verses_01_stevenson.mp3'
    },
    {
        id: '382',
        title: 'Underwoods',
        author: 'Robert Louis Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=196',
        audioUrl: 'https://www.archive.org/download/underwoods_2004_librivox/underwoods_01_stevenson.mp3'
    },
    {
        id: '503',
        title: 'Ballads',
        author: 'Robert Louis Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=197',
        audioUrl: 'https://www.archive.org/download/ballads_2004_librivox/ballads_01_stevenson.mp3'
    },
    {
        id: '30990',
        title: 'Songs of Travel, and Other Verses',
        author: 'Robert Louis Stevenson',
        coverUrl: 'https://picsum.photos/300/400?random=198',
        audioUrl: 'https://www.archive.org/download/songs_of_travel_2004_librivox/songsoftravel_01_stevenson.mp3'
    },
    {
        id: '228',
        title: 'The Man in the Iron Mask',
        author: 'Alexandre Dumas',
        coverUrl: 'https://picsum.photos/300/400?random=199',
        audioUrl: 'https://www.archive.org/download/man_in_the_iron_mask_librivox/man_in_the_iron_mask_01_dumas.mp3'
    },
    {
        id: '1258',
        title: 'Twenty Years After',
        author: 'Alexandre Dumas',
        coverUrl: 'https://picsum.photos/300/400?random=200',
        audioUrl: 'https://www.archive.org/download/twenty_years_after_librivox/twenty_years_after_001_dumas.mp3'
    },
    {
        id: '2680',
        title: 'The Vicomte de Bragelonne',
        author: 'Alexandre Dumas',
        coverUrl: 'https://picsum.photos/300/400?random=201',
        audioUrl: 'https://www_archive.org/download/vicomte_de_bragelonne_librivox/vicomte_de_bragelonne_001_dumas.mp3'
    },
    {
        id: '1013',
        title: 'The Black Tulip',
        author: 'Alexandre Dumas',
        coverUrl: 'https://picsum.photos/300/400?random=202',
        audioUrl: 'https://www.archive.org/download/black_tulip_librivox/black_tulip_01_dumas.mp3'
    },
    {
        id: '965',
        title: 'The Queen\'s Necklace',
        author: 'Alexandre Dumas',
        coverUrl: 'https://picsum.photos/300/400?random=203',
        audioUrl: 'https://www.archive.org/download/queens_necklace_librivox/queens_necklace_01_dumas.mp3'
    },
    {
        id: '1769',
        title: 'The Man Who Laughs',
        author: 'Victor Hugo',
        coverUrl: 'https://picsum.photos/300/400?random=204',
        audioUrl: 'https://www.archive.org/download/man_who_laughs_librivox/man_who_laughs_1_01_hugo.mp3'
    },
    {
        id: '2527',
        title: 'The Toilers of the Sea',
        author: 'Victor Hugo',
        coverUrl: 'https://picsum.photos/300/400?random=205',
        audioUrl: 'https://www.archive.org/download/toilers_of_the_sea_librivox/toilers_of_the_sea_1_01_hugo.mp3'
    },
    {
        id: '125',
        title: 'The Hunchback of Notre Dame',
        author: 'Victor Hugo',
        coverUrl: 'https://picsum.photos/300/400?random=206',
        audioUrl: 'https://www.archive.org/download/hunchback_of_notre_dame_librivox/hunchback_of_notre_dame_1_01_hugo.mp3'
    }
];
