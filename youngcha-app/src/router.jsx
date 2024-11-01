import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import Search from './pages/search/Search';
import Home from './components/home/Home';
import NowPlaying from './components/movie/Category/NowPlaying';
import TopRated from './components/movie/Category/TopRated';
import UpComing from './components/movie/Category/UpComing';
import Popular from './components/movie/Category/Popular';
import Category from './components/movie/Category/Category';
import MovieDetail from './components/movie/MovieDetail';

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/movies/popular" element={<Popular />}></Route>
        <Route path="/movies/nowplaying" element={<NowPlaying />}></Route>
        <Route path="/movies/toprated" element={<TopRated />}></Route>
        <Route path="/movies/upcoming" element={<UpComing />}></Route>
        <Route path="/movies" element={<Category />}></Route>
        <Route path="/movies/:id" element={<MovieDetail />}></Route>
      </Routes>
    </>
  );
}
