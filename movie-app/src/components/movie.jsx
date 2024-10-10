import { useEffect, useState } from 'react';
import { MOVIES } from '../mocks/movies';
import styles from './movie.module.css';

export default function Movie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(MOVIES.results);
  }, []);

  return (
    <>
      <div
        style={{
          //   display: 'grid',
          //   gridTemplateColumns: 'repeat(10,1fr)',
          //   listStyle: 'none',
          //   gap: '20px',
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap',
        }}
      >
        {movies.map((movie) => (
          <div key={movie.id} className={styles.movie}>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} style={{}} alt="" />
            {/* <div className={styles.poster}></div> */}
            {/* <span>{movie.title}</span> */}
          </div>
        ))}
      </div>
    </>
  );
}
