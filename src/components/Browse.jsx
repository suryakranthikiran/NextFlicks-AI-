import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import useUpcomingMovies from "../customHooks/useUpcomingMovies";
import GptSearch from "./GptSearchPage";
import { useSelector } from "react-redux";

function Browse() {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          {" "}
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      {/* 
    mainConatiner
      - videoBackground
      - videoTitle
    Secondary container
      -movielist * n
        -cards *n  
    
    */}
    </div>
  );
}

export default Browse;
