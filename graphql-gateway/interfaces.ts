// interfaces.ts
export interface Artist {
    name: string;
  }
  
  export interface Track {
    id: string;
    title: string;
    artist: Artist;
    preview: string;
  }
  
  export interface DeezerResponse {
    data: {
      tracks: {
        data: Track[];
      };
    };
  }
  