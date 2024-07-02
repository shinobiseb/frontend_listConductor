import { MusicCardRequirements } from "../assets/types"

export default function MusicCard( info : MusicCardRequirements) {
  return (
    <div className='p-2 mx-1 sm:p-5 w-36 sm:w-40 bg-gray rounded-md'>
        <div className="aspect-square">
            <img className="w-full h-full object-cover overflow-hidden" src={info.img}/>
        </div>
        <h4 className='text-md font-semibold'>{info.title}</h4>
        <p className='text-sm'>{info.author}</p>
    </div>
  )
}
