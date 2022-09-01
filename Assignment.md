Your task is to create what I'm working on right this second actually! A playlist manager!

I'll give you a set of "tracks" that you can use to test things out but here's the gist

Requirements
- Playlists should be a list of songs in the order the user added them
- SPA -> this should be a single page app, you go to the site, and have everything you need to manage playlists on one page
- Display the duration of each song like youtube "minutes:seconds"
- Show what % of users liked each song

Users should be able to
- create new playlists
- to delete playlists
- update existing playlists
- shuffle a playlists song order
- unshuffle the order so they can always go back to normal

Tech stack (required)
- Vitejs + Typescript (:GigaChad:) + react
  - make sure that for the tsconfig.json the "strict" property is set to true!!! If this property isn't there let me know and I'll give you a tsconfig.json, and don't worry about it because setting up the tsconfig.json is by far one of the hardest parts of typescript.
- Setup guide: https://vitejs.dev/guide/  (basically just run yarn create vite yourAppNameHere --template react-ts)
  - Why vite? Mainly because Vite is king of single page apps! And it's super fast
- Tailwind css
  - With tailwind you can use something like this: https://www.hyperui.dev/ to get UI elements super fast. You just go there, click on one you want, and copy the block. Boom! Component ready to use and/or customize! You can also search up other tailwind ui libraries if you don't like how that one looks!
  - setup guide https://tailwindcss.com/docs/guides/vite
 
-----------------------------------------

BONUS
- try to make a youtube player so all the songs are playable :pagman: 
- use this library (https://github.com/localForage/localForage) to allow users to save their playlists in the browser. This library interacts with a minidatabase in your browser so no server is needed!
- calculate total duration of a playlist
- display how long it's been since the track was uploaded (x years y days ago)
- add search to making a playlist so you can search for the song you wanna add

NOTE
- Realtime playback NOT needed
- Login NOT needed
- Actual database NOT needed
- This will be a website with some pre-filled songs that users can create playlists from.

Note this might be tricky to setup, but that's a good thing. Even for me it can sometime take a while to setup a project. There's been many a time where I deleted a whole project folder to re-set it up after writing a bunch of code. The important thing is to not let frustration hold you back. It might be annoying, and it might not be clear what's wrong. That's ok though it happens to everyone. Go back re-read the steps and make sure you followed everything correctly. Struggling with code is really good for learning, it's like the "what doesn't kill you or stop you makes you stronger" but for coding that's like 10x as true. If you reach your goal after struggling it's like +100 knowledge

-------------------------------------


Launching the site
- Once you've got the site working, or enough that you want to deploy the site so you can share it and/or show it off, use github pages! You can check it out on your own or I can help you with that later because it can be a real pain since they change how it works a lot. 
