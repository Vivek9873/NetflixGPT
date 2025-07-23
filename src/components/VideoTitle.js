import InfoIcon from "./infoIcon"
import PlayIcon from "./PlayIcon"


const VideoTitle = ({title,overview}) => {
  return (
    <div className="pt-[15%] px-6 md:px-20 absolute bg-gradient-to-r from-black w-screen aspect-video text-white">
        <h1 className="text-2xl md:text-5xl font-bold">{title}</h1>
        <p className=" hidden md:inline-block text-lg py-6 w-2/4  ">{overview}</p>
        <div className="flex my-4 md:my-0">
            <button className="flex items-center gap-2 bg-white text-black rounded-lg py-1 md:py-4 px-3 md:px-12 text-xl hover:bg-opacity-80"><PlayIcon className={"w-4 h-4"}/><span> Play</span></button>
            <button className=" hidden md:flex items-center gap-2 mx-2 bg-gray-500 text-white rounded-lg p-4 px-12 text-xl bg-opacity-50 hover:bg-opacity-30"> <InfoIcon className={"w-4 h-4"}/><span>More Info</span></button>
        </div>
    </div>
  )
}

export default VideoTitle