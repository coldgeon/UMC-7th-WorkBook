import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TOKEN = import.meta.env.VITE_TMDB_TOKEN;
export const BASE_URL = 'https://api.themoviedb.org/3';

export default function Movie({ category }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const { data } = await axios.get(`${BASE_URL}/movie/${category}?language=en-US&page=1`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      setMovies(data.results.slice(0, 20));
    };
    getMovies();
  }, []);
  return (
    <MoviesWrapper>
      {movies.map((mv) => (
        <MovieWrapper key={mv.id}>
          <Link to={`/movies/${mv.id}`}>
            <MovieImg src={mv.poster_path} />
            <Mv>{mv.title}</Mv>
          </Link>
        </MovieWrapper>
      ))}
    </MoviesWrapper>
  );
}

const MoviesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 25px;
`;
const MovieWrapper = styled.div`
  width: 180px;
  height: 310px;
  & :hover {
    background-color: black;
    opacity: 80%;
  }
`;

const MovieImg = styled.div`
  background-image: url(https://image.tmdb.org/t/p/w500${(props) => props.src});
  width: 100%;
  height: 250px;
  background-size: cover;
  border-radius: 15px;
`;

const Mv = styled.li`
  margin-top: 12px;
  list-style: none;
  font-size: 17px;
  text-align: center;
`;
