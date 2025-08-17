export interface MediaItem {
  id: string;
  title: string;
  year: number;
  director?: string;
  creator?: string;
  genre: string[];
  description: string;
  analysis: string;
  rating: number;
  imageUrl: string;
  streamingPlatforms?: string[];
  watchDate?: string;
  personalNotes?: string;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  items: MediaItem[];
}

export interface MediaType {
  id: string;
  name: 'Films' | 'TV Shows';
  collections: Collection[];
}

export type Genre = 
  | 'Comedy'
  | 'Animation'
  | 'Horror'
  | 'SciFi'
  | 'Drama'
  | 'Action'
  | 'Thriller'
  | 'Romance'
  | 'Documentary'
  | 'Fantasy'
  | 'Mystery'
  | 'Adventure';
