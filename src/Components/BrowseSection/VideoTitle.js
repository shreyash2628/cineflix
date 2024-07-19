import { useSelector } from "react-redux";


const VideoTitle = ({ title, overview,vote_average }) => {
  const content = useSelector(store => store.content);

  return (
    <div className="  w-screen aspect-video pt-[7%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{content.contentName}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/3">{content.contentOverview}</p>
       
      <p className="text-slate-400 font-bold text-lg w-1/4">IMDB {content.contentVote}</p>
      <div className="my-4 md:m-0">
        <button className=" bg-slate-100 text-black py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block mx-2  bg-gray-500 text-white p-4 px-12 text-xl hover:bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
