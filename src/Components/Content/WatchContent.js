import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
import useExternalId from '../../customHooks/useExternalId';
import { TMDBoptions } from '../../utils/constants';
import { IMG_CDN_URL } from '../../utils/constants';
import VideoBackground from '../BrowseSection/VideoBackground';

const WatchContent = () => {
  const contentData = useSelector((store) => store.content);
  const ImdbId = useSelector((store) => store.content.contentImdbId);

  const [DetailsOfContent,setDetailsOfContent]= useState('');
  const [VideoOfContent,setVideoOfContent] = useState('');
  const[videoKey,setVideoKey]=useState('');

  useExternalId();


  const fetchDetails = async () => {
    const contentDetails = await fetch(`https://api.themoviedb.org/3/movie/` + ImdbId + `?language=en-US`, TMDBoptions);
    const contentVideo = await fetch(`https://api.themoviedb.org/3/movie/` + ImdbId + `/videos?language=en-US`, TMDBoptions);
    const jsonContentDetails = await contentDetails.json();
    const jsonContentVideo = await contentVideo.json();

    const filteredData = jsonContentVideo?.results?.filter((vid) => vid.type === "Trailer");
    const trailer = (filteredData?.length) ? filteredData[0] : jsonContentVideo.results[1];
    setVideoKey(jsonContentVideo?.results[0]?.key);
    setDetailsOfContent(jsonContentDetails);
    console.log("JsonData",jsonContentDetails);

  };

  // console.log("fetched data final",fetchDetailsOfContent.poster_path);

  useEffect(() => {
    if (ImdbId != null) {
      fetchDetails();
    }

    // console.log(ImdbId);

  }, [ImdbId]);

  if (!DetailsOfContent) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-black min-h-screen min-w-screen p-12 ">
      <div className="  p-8 h-screen flex flex-row">
      <div className="w-1/3 ">
          {DetailsOfContent.poster_path ? (
            <img
              className="w-full h-2/3 "
              src={IMG_CDN_URL + DetailsOfContent.poster_path}
              alt="Poster"
            />
          ) : (
            <div>No poster available</div>
          )}
        </div>
        <div className=" w-full h-2/3  p-5">
          <iframe className='w-full h-screen -mt-7 aspect-video '
            src={"https://www.youtube.com/embed/" + videoKey + "?&autoplay=1&mute=1"}
          //allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>          {/* Add additional content details here */}
        </div>
      </div>

      


      {/* <div className="border  p-8 h-screen flex flex-row">
      <div className=" ">
          {fetchDetailsOfContent.poster_path ? (
            <img
              className="w-full h-2/3"
              src={IMG_CDN_URL + fetchDetailsOfContent.poster_path}
              alt="Poster"
            />
          ) : (
            <div>No poster available</div>
          )}
        </div>
        <div className="bg-slate-500 w-2/3 border ml-10">
          {/* Add additional content details here */}
     

      
    </div>
  );
};

export default WatchContent;
