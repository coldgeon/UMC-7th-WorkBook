import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const TOKEN = import.meta.env.VITE_TMDB_TOKEN;
const BASE_URL = 'https://api.themoviedb.org/3';

export default function Movie() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const { data } = await axios.get(`${BASE_URL}/movie/popular?language=en-US&page=1`, {
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
          <MovieImg src={mv.poster_path}></MovieImg>
          <Mv>{mv.title}</Mv>
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
  gap: 10px;
`;
const MovieWrapper = styled.div`
  width: 180px;
  height: 270px;
  margin-top: 20px;
  & :hover {
    background-color: black;
    opacity: 80%;
  }
`;

const MovieImg = styled.div`
  background-image: url(https://image.tmdb.org/t/p/w500${(props) => props.src});
  width: 100%;
  height: 95%;
  background-size: cover;
  border-radius: 15px;
`;

const Mv = styled.li`
  margin-top: 10px;
  list-style: none;
  font-size: 15px;
  text-align: center;
`;
