import Playlist from "./Playlist"
import MusicCard from "./MusicCard"

export default function Gallery() {
  return (
    <main className='text-white h-full w-full p-2 overflow-y-auto'>
      <section className="recentPlaylists sm:h-2/5 w-full flex-col flex justify-center">
        <h2 className="text-left text-lg font-semibold px-1">Recently Played</h2>
        <ul className="w-full h-full flex flex-row overflow-x-auto justify-left items-center">
          <li>
            <MusicCard 
              title="Guitar Vibes" 
              author="Shinobisyntax" 
              img="https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?cs=srgb&dl=pexels-brent-keane-181485-1751731.jpg&fm=jpg"
              />
          </li>
          <li>
            <MusicCard 
              title="Guitar Vibes" 
              author="Shinobisyntax" 
              img="https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?cs=srgb&dl=pexels-brent-keane-181485-1751731.jpg&fm=jpg"
              />
          </li>
          <li>
            <MusicCard 
              title="Guitar Vibes" 
              author="Shinobisyntax" 
              img="https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?cs=srgb&dl=pexels-brent-keane-181485-1751731.jpg&fm=jpg"
              />
          </li>
        </ul>
      </section>
    </main>
  )
}