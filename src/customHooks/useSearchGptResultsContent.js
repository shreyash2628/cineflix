// import { useDispatch } from 'react-redux';
// import { useEffect } from "react";
// import { TMDBoptions } from '../utils/constants';
// import { addSearchedContent } from '../utils/Store/GptSearchedSlice';

// const useSearchGptResultsContent = (searchedContent) => {
//     const dispatch = useDispatch();
    
//     useEffect(() => {
//         const delayFetch = setTimeout(() => {
//             const getSearchContent = async () => {
//                 const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=` + searchedContent + `&include_adult=false&language=en-US&page=1`, TMDBoptions);
//                 const json = await data.json();
//                 dispatch(addSearchedContent(json));
//             };
//             getSearchContent();
//         }, 2000); // Delay of 2 seconds

//         return () => clearTimeout(delayFetch); // Clear timeout on component unmount
//     }, [searchedContent, dispatch]);
// };

// export default useSearchGptResultsContent;
