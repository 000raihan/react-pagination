import React, {useEffect, useState} from 'react';
import Movie from './components/Movie';
import Pagination from './components/Pagination';
import "./App.css"


const FEATURED_API = "https://api.themoviedb.org/3/movie/now_playing?api_key=39b616a19667f17d8ffcaa175fc93491&language=en-US";
// const IMG_API = "https://image.tmdb.org/t/p/w1280";
// const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5e e918f014970082a0088b1 &query=";


function App() {
  const [movies, setMovies] = useState([])
  // const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(5)

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
    })
  }, []);


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = movies.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
    <div className="movie-container">
    
      {movies.length > 0 &&
        currentPosts.map((movie) => (
        <Movie key={movie.id} {...movie} />
      ))}
    </div>
    
    <Pagination 
    postsPerPage={postsPerPage}
    totalPosts = {movies.length}
    paginate = {paginate}
    
    />
    </>
  );
}

export default App;