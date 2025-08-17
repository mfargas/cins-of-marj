import { MediaItem, Collection } from '@/types';

export interface MediaType {
  id: string;
  name: 'Films' | 'TV Shows';
  collections: Collection[];
}

const sampleFilms: MediaItem[] = [
  {
    id: '1',
    title: 'The Matrix',
    year: 1999,
    director: 'Lana and Lilly Wachowski',
    genre: ['SciFi', 'Action', 'Thriller'],
    description: 'A computer programmer discovers that reality as he knows it is a simulation created by machines, and joins a rebellion to break free.',
    analysis: 'The Wachowskis\' groundbreaking film revolutionized action cinema with its innovative bullet-time effects and philosophical exploration of reality vs. illusion. The film\'s blend of cyberpunk aesthetics, martial arts choreography, and existential questions about consciousness creates a unique cinematic experience that continues to influence filmmakers today.',
    rating: 10,
    imageUrl: '/images/matrix.jpg',
    streamingPlatforms: ['HBO Max', 'Netflix'],
    watchDate: '2024-01-15',
    personalNotes: 'The "red pill or blue pill" scene is one of the most iconic moments in cinema. The film\'s visual effects were revolutionary for their time.'
  },
  {
    id: '2',
    title: 'Back to the Future',
    year: 1985,
    director: 'Robert Zemeckis',
    genre: ['SciFi', 'Adventure', 'Comedy'],
    description: 'A teenager is accidentally sent back in time to 1955, where he must ensure his parents fall in love to secure his own existence.',
    analysis: 'Zemeckis\' time-travel masterpiece perfectly balances humor, heart, and science fiction. The film\'s intricate plotting, memorable characters, and innovative special effects create a timeless adventure that appeals to audiences of all ages. The relationship between Marty and Doc Brown is the emotional core that makes the film so enduring.',
    rating: 10,
    imageUrl: '/images/back-to-future.jpg',
    streamingPlatforms: ['Peacock', 'Amazon Prime'],
    watchDate: '2024-02-20',
    personalNotes: 'The DeLorean time machine design is iconic. The film\'s attention to detail in the 1955 sequences is remarkable.'
  },
  {
    id: '3',
    title: 'Everything Everywhere All At Once',
    year: 2022,
    director: 'Daniel Kwan and Daniel Scheinert',
    genre: ['SciFi', 'Comedy', 'Drama', 'Action'],
    description: 'A Chinese immigrant is swept up in an insane adventure where she must connect different lives she could have led.',
    analysis: 'The Daniels\' multiverse epic is a masterclass in creative storytelling and emotional depth. The film\'s innovative approach to the multiverse concept, combined with its exploration of family relationships and immigrant experiences, creates a unique blend of absurdist humor and genuine heart. Michelle Yeoh\'s performance anchors the film\'s wild narrative.',
    rating: 10,
    imageUrl: '/images/everything-everywhere.jpg',
    streamingPlatforms: ['Showtime', 'Paramount+'],
    watchDate: '2024-03-10',
    personalNotes: 'The hot dog fingers universe is pure genius. The film\'s emotional climax is incredibly moving despite the absurdity.'
  },
  {
    id: '4',
    title: 'The Incredibles',
    year: 2004,
    director: 'Brad Bird',
    genre: ['Animation', 'Action', 'Adventure', 'Comedy'],
    description: 'A family of undercover superheroes must save the world while dealing with the challenges of family life.',
    analysis: 'Bird\'s superhero family drama transcends its animated format to deliver a genuinely mature and emotionally resonant story. The film\'s exploration of midlife crisis, family dynamics, and the desire to recapture past glory is handled with sophistication rarely seen in family films. The action sequences are thrilling and the character development is exceptional.',
    rating: 9,
    imageUrl: '/images/incredibles.jpg',
    streamingPlatforms: ['Disney+'],
    watchDate: '2024-01-30',
    personalNotes: 'Edna Mode\'s "No capes!" scene is perfect. The film\'s 60s aesthetic is beautifully realized.'
  },
  {
    id: '5',
    title: 'Coco',
    year: 2017,
    director: 'Lee Unkrich',
    genre: ['Animation', 'Adventure', 'Comedy', 'Drama'],
    description: 'A young boy dreams of becoming a musician despite his family\'s ban on music, leading him on a journey to the Land of the Dead.',
    analysis: 'Pixar\'s celebration of Mexican culture and family traditions is both visually stunning and emotionally powerful. The film\'s exploration of memory, legacy, and the importance of family creates a deeply moving experience. The animation of the Land of the Dead is breathtaking, and the music plays a crucial role in the storytelling.',
    rating: 9,
    imageUrl: '/images/coco.jpg',
    streamingPlatforms: ['Disney+'],
    watchDate: '2024-02-15',
    personalNotes: 'The "Remember Me" sequence is heartbreaking. The film\'s respect for Mexican culture is evident in every detail.'
  },
  {
    id: '6',
    title: 'Cinema Paradiso',
    year: 1988,
    director: 'Giuseppe Tornatore',
    genre: ['Drama', 'Romance'],
    description: 'A filmmaker recalls his childhood growing up in a Sicilian village and his relationship with the local cinema projectionist.',
    analysis: 'Tornatore\'s love letter to cinema and small-town life is a masterpiece of emotional storytelling. The film\'s exploration of nostalgia, friendship, and the magic of movies creates a deeply personal and universal experience. The relationship between young Toto and Alfredo is beautifully developed, and the film\'s ending is one of the most moving in cinema.',
    rating: 10,
    imageUrl: '/images/cinema-paradiso.jpg',
    streamingPlatforms: ['Criterion Channel', 'Amazon Prime'],
    watchDate: '2024-03-01',
    personalNotes: 'The final montage of kisses is pure cinema magic. The film captures the communal experience of movie-going perfectly.'
  },
  {
    id: '7',
    title: 'The Dark Knight',
    year: 2008,
    director: 'Christopher Nolan',
    genre: ['Action', 'Crime', 'Drama', 'Thriller'],
    description: 'Batman faces his greatest challenge as the Joker wreaks havoc on Gotham City, testing the limits of justice and morality.',
    analysis: 'Nolan\'s Batman sequel transcends the superhero genre to become a complex exploration of morality, justice, and the nature of heroism. Ledger\'s Joker is one of the most compelling villains in cinema, and the film\'s exploration of the cost of heroism and the thin line between order and chaos is thought-provoking. The film\'s practical effects and grounded approach set new standards for the genre.',
    rating: 10,
    imageUrl: '/images/dark-knight.jpg',
    streamingPlatforms: ['HBO Max', 'Netflix'],
    watchDate: '2024-02-28',
    personalNotes: 'Heath Ledger\'s Joker performance is legendary. The film\'s moral complexity elevates it above typical superhero fare.'
  },
  {
    id: '8',
    title: 'Titanic',
    year: 1997,
    director: 'James Cameron',
    genre: ['Drama', 'Romance', 'Disaster'],
    description: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',
    analysis: 'Cameron\'s epic romance set against the backdrop of one of history\'s most famous disasters is a masterclass in emotional storytelling and technical achievement. The film\'s blend of intimate romance and grand spectacle creates a unique cinematic experience. While the love story is fictional, the historical accuracy of the ship\'s sinking is remarkable, and the film\'s emotional impact is undeniable.',
    rating: 9,
    imageUrl: '/images/titanic.jpg',
    streamingPlatforms: ['Disney+', 'Amazon Prime'],
    watchDate: '2024-01-25',
    personalNotes: 'The ship\'s sinking sequence is technically brilliant. The film\'s emotional climax is incredibly powerful.'
  },
  {
    id: '9',
    title: 'Some Like It Hot',
    year: 1959,
    director: 'Billy Wilder',
    genre: ['Comedy', 'Romance'],
    description: 'Two musicians witness a mob hit and disguise themselves as women to join an all-female band to escape the mob.',
    analysis: 'Wilder\'s cross-dressing comedy is a masterpiece of timing, wit, and social commentary. The film\'s exploration of gender roles and sexuality was groundbreaking for its time, and the chemistry between Lemmon, Curtis, and Monroe is electric. The film\'s humor remains fresh and relevant, and its influence on comedy cinema is immeasurable.',
    rating: 9,
    imageUrl: '/images/some-like-it-hot.jpg',
    streamingPlatforms: ['HBO Max', 'Criterion Channel'],
    watchDate: '2024-02-10',
    personalNotes: 'Tony Curtis\' Cary Grant impression is hilarious. The film\'s ending line is one of the best in comedy history.'
  },
  {
    id: '10',
    title: 'It\'s Always Fair Weather',
    year: 1955,
    director: 'Stanley Donen and Gene Kelly',
    genre: ['Musical', 'Comedy', 'Drama'],
    description: 'Three World War II buddies reunite ten years later and discover how their lives have changed since the war.',
    analysis: 'Donen and Kelly\'s post-war musical is a sophisticated exploration of friendship, change, and the passage of time. The film\'s innovative use of CinemaScope and its blend of comedy, drama, and musical numbers create a unique cinematic experience. The film\'s exploration of how war changes people and the difficulty of maintaining friendships over time is surprisingly mature for a musical.',
    rating: 8,
    imageUrl: '/images/its-always-fair-weather.jpg',
    streamingPlatforms: ['Criterion Channel', 'Amazon Prime'],
    watchDate: '2024-03-15',
    personalNotes: 'The roller skate dance sequence is a technical marvel. The film\'s exploration of post-war disillusionment is poignant.'
  }
];

const sampleTVShows: MediaItem[] = [
  {
    id: '5',
    title: 'Breaking Bad',
    year: 2008,
    creator: 'Vince Gilligan',
    genre: ['Drama', 'Thriller', 'Crime'],
    description: 'A high school chemistry teacher turned methamphetamine manufacturer partners with a former student.',
    analysis: 'Gilligan\'s exploration of moral decay and transformation is masterful. The show\'s character development and cinematography set new standards for television drama.',
    rating: 10,
    imageUrl: '/images/breaking-bad.jpg',
    streamingPlatforms: ['Netflix'],
    watchDate: '2024-02-15',
    personalNotes: 'The transformation of Walter White is one of the most compelling character arcs ever written.'
  },
  {
    id: '6',
    title: 'The Office',
    year: 2005,
    creator: 'Greg Daniels',
    genre: ['Comedy'],
    description: 'A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.',
    analysis: 'The show\'s cringe humor and documentary style revolutionized sitcoms. Its character-driven comedy and emotional depth make it more than just a workplace comedy.',
    rating: 10,
    imageUrl: '/images/office.jpg',
    streamingPlatforms: ['Peacock', 'Netflix'],
    watchDate: '2024-03-01',
    personalNotes: 'Michael Scott\'s character development from season 1 to the finale is beautifully handled.'
  },
  {
    id: '7',
    title: 'Stranger Things',
    year: 2016,
    creator: 'The Duffer Brothers',
    genre: ['SciFi', 'Horror', 'Drama'],
    description: 'When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces.',
    analysis: 'The show\'s 80s nostalgia and Spielbergian storytelling create a unique blend of horror and coming-of-age drama. The child actors deliver remarkable performances.',
    rating: 8,
    imageUrl: '/images/stranger-things.jpg',
    streamingPlatforms: ['Netflix'],
    watchDate: '2024-02-28',
    personalNotes: 'The first season perfectly captures the magic of 80s adventure films while being genuinely scary.'
  }
];

const createCollections = (items: MediaItem[]): Collection[] => {
  const genres: { [key: string]: MediaItem[] } = {};
  
  items.forEach(item => {
    item.genre.forEach(genre => {
      if (!genres[genre]) {
        genres[genre] = [];
      }
      genres[genre].push(item);
    });
  });

  return Object.entries(genres).map(([genre, genreItems]) => ({
    id: genre.toLowerCase(),
    name: genre,
    description: `${genre} films and shows that left a lasting impact`,
    items: genreItems
  }));
};

export const mediaData: MediaType[] = [
  {
    id: 'films',
    name: 'Films',
    collections: createCollections(sampleFilms)
  },
  {
    id: 'tv-shows',
    name: 'TV Shows',
    collections: createCollections(sampleTVShows)
  }
];
