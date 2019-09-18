import React, {useContext} from 'react';
import {MovieContext} from './MovieContext';

const Nav = (props) => {
  const [movies, setMovies] = useContext(MovieContext)

  return(
    <nav>
      <h3>Dev Ed</h3>
      <h3>List of Movies: {movies.length}</h3>
    </nav>
  );
}

export default Nav;
