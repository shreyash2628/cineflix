import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { TMDBoptions } from '../../utils/constants';

const VideoBackground = ({ id }) => {
    const [Trailer, setTrailer] = useState(null);
    const mode = useSelector(store => store.switchMode?.mode);
    const fetchTrailer = async () => {
        if (mode === "Movies") {
            const data = await fetch(`https://api.themoviedb.org/3/movie/` + id + `/videos?language=en-US`, TMDBoptions);
            const jsonData = await data.json();
            const filteredData = jsonData?.results?.filter((vid) => vid.type === "Trailer");
            const trailer = (filteredData?.length) ? filteredData[0] : jsonData.results[1];
            setTrailer(trailer);
        } else {
            const data = await fetch(`https://api.themoviedb.org/3/tv/` + id + `/videos?language=en-US`, TMDBoptions);
            const jsonData = await data.json();
            const filteredData = jsonData?.results?.filter((vid) => vid.type === "Trailer");
            const trailer = (filteredData?.length) ? filteredData[0] : jsonData?.results;
            setTrailer(trailer);
        }
    }
    useEffect(() => {
        fetchTrailer()
    }, [mode]);

    if (Trailer === null) return;

    return (
        <div >
            <iframe className='w-screen aspect-video '
                src={"https://www.youtube.com/embed/" + Trailer?.key + "?&autoplay=1&mute=1"}
            ></iframe>
        </div>
    )
}

export default VideoBackground
