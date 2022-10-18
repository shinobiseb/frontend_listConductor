export type VoteData = {
  likes: number;
  dislikes: number;
};
export type Metrics = {
  scoreData: VoteData;
  views: number;
  uploadedOn: Date;
};

/**
 * Type to describe a single track.
 * Imagine this as like a outline or scaffold for an object.
 * Note that `duration` is in milliseconds
 */
export type Track = {
  artist: string;
  title: string;
  duration: number;
  link: string;
  info: Metrics;
  isAgeRestricted: boolean;
};

// List of tracks is just an array of them!
// export type Tracklist = Track[];

export type Tracklist = {
  title: string,
  playlist: Track[]
}

export const tracks: Tracklist = 
{
  title: "tracks",
  playlist: [
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
        dislikes: 1459,
      },
      views: 3_737_037,
      uploadedOn: new Date('August 9, 2022'),
    },
    isAgeRestricted: false,
  },
  {
    artist: 'Kendrick Lamar',
    title: 'DNA',
    duration: 285_000,
    link: 'https://youtu.be/NLZRYQMLDW4',
    info: {
      scoreData: {
        likes: 2_543_126,
        dislikes: 10_234,
      },
      views: 241_002_076,
      uploadedOn: new Date('April 18, 2017'),
    },
    isAgeRestricted: false,
  },
  {
    artist: 'S3RL',
    title: 'Hentai',
    duration: 185_000,
    link: 'https://youtu.be/rS9vLE0JeEE',
    info: {
      scoreData: {
        likes: 54_124,
        dislikes: 0,
      },
      views: 2_093_043,
      uploadedOn: new Date('August 19, 2019'),
    },
    isAgeRestricted: true,
  },
  {
    artist: 'Bas (ft. J. Cole & Lil Tjay)',
    title: 'The Jackie',
    duration: 261_000,
    link: 'https://youtu.be/betIekbYy40',
    info: {
      scoreData: {
        likes: 278_439,
        dislikes: 9_176,
      },
      views: 8_809_107,
      uploadedOn: new Date('July 9, 2021'),
    },
    isAgeRestricted: false,
  },
  {
    artist: 'Kate Bush',
    title: 'Running Up That Hill',
    duration: 295_000,
    link: 'https://youtu.be/wp43OdtAAkM',
    info: {
      scoreData: {
        likes: 2_196_783,
        dislikes: 2_545,
      },
      views: 127_064_801,
      uploadedOn: new Date('January 15, 2011'),
    },
    isAgeRestricted: false,
  },
  {
    artist: "WEEDMANE (feat. WESTBIERTY'S & noCPR)",
    title: 'STRAIGHT OUTTA DARKNESS Pt. 2',
    duration: 267_000,
    link: 'https://youtu.be/L13VPRYVbAg',
    info: {
      scoreData: {
        likes: 239,
        dislikes: 15,
      },
      views: 8_102,
      uploadedOn: new Date('October 22, 2020'),
    },
    isAgeRestricted: true,
  },
  {
    artist: 'merge! ft yameii',
    title: 'lonley at the top',
    duration: 204_000,
    link: 'https://youtu.be/pnWpRN8oZ5k',
    info: {
      scoreData: {
        likes: 15_652,
        dislikes: 876,
      },
      views: 607_899,
      uploadedOn: new Date('October 3, 2020'),
    },
    isAgeRestricted: false,
  },
  {
    artist: 'Astralproject1on',
    title: 'La la La (Siren)',
    duration: 339_000,
    link: 'https://youtu.be/N0rt01IITq8',
    info: {
      scoreData: {
        likes: 11_901,
        dislikes: 492,
      },
      views: 438_920,
      uploadedOn: new Date('November 30, 2019'),
    },
    isAgeRestricted: false,
  },
  {
    artist: 'Justice',
    title: 'Phantom Pt. II (Soulwax Remix)',
    duration: 444_000,
    link: 'https://youtu.be/Q6O6cNntQGA',
    info: {
      scoreData: {
        likes: 5_271,
        dislikes: 873,
      },
      views: 483_845,
      uploadedOn: new Date('January 11, 2013'),
    },
    isAgeRestricted: false,
  },
],
}