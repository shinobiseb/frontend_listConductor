// tracks.ts
export type Track = {
  artist: string;
  title: string;
  duration: number;
  link: string;
  info: {
    scoreData: {
      likes: number;
      dislikes: number;
    };
    views: number;
    uploadedOn: Date;
  };
  isAgeRestricted: boolean;
};

export type Tracklist = Track[];

export type PlaylistType = {
  name: string;
  tracks: Tracklist;
};

export const tracks: Tracklist = [
  {
    artist: 'Death Grips',
    title: 'Guillotine',
    duration: 227_000,
    link: 'https://youtu.be/Orlbo9WkZ2E',
    info: {
      scoreData: {
        likes: 251_698,
        dislikes: 11_437,
      },
      views: 13_828_077,
      uploadedOn: new Date('April 26, 2011'),
    },
    isAgeRestricted: false,
  },
  {
    artist: 'JID',
    title: 'Dance Now',
    duration: 261_000,
    link: 'https://youtu.be/EVlGLtCnN-Y',
    info: {
      scoreData: {
        likes: 143_251,
        dislikes: 1_459,
      },
      views: 3_737_037,
      uploadedOn: new Date('August 9, 2022'),
    },
    isAgeRestricted: false,
  },
  // Add other tracks here...
];
