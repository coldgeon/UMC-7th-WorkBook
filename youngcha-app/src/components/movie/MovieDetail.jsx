import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from './movie';
import axios from 'axios';
import styled from 'styled-components';

//detail api 따와서 그거로 작업하기
const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export default function MovieDetail() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    const getDetail = async () => {
      const { data } = await axios.get(`${BASE_URL}/movie/${id}?language=en-US&page=1`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      setDetail(data);
    };
    getDetail();
  }, []);

  useEffect(() => {
    const getCredits = async () => {
      const { data } = await axios.get(`${BASE_URL}/movie/${id}/credits?language=en-US&page=1`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });

      const { crew, cast } = data;
      setCredits([...crew.slice(0, 10), ...cast.slice(0, 10)]);
    };
    getCredits();
  }, []);

  return (
    <DetailWrapper>
      <DetailPoster bgposter={detail.backdrop_path}>
        <DetailH2>{detail.original_title}</DetailH2>
        <Span>별점: {detail.vote_average}</Span>
        <Span>개봉날짜: {detail.release_date}</Span>
        <Span>상영시간: {detail.runtime}</Span>
        <SubTitle>{detail.tagline}</SubTitle>
        <Summary>{detail.overview}</Summary>
      </DetailPoster>
      <DetailH2>감독/출연</DetailH2>
      <CreditsWrapper>
        {credits.map((credit) => (
          <CreditsBox key={credit.credit_id}>
            <CreditsImg bgprofile={credit.profile_path}></CreditsImg>
            <CreditsLabel>{credit.original_name}</CreditsLabel>
          </CreditsBox>
        ))}
      </CreditsWrapper>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  padding: 10px;
`;

const DetailPoster = styled.div`
  padding: 20px;
  height: 450px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)),
    url(https://image.tmdb.org/t/p/original${(props) => props.bgposter});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 20px;
`;

const DetailH2 = styled.h2`
  font-weight: bold;
  padding-top: 20px;

  /* margin-bottom: 10px; */
  /* margin-top: 20px; */
`;

const Span = styled.p`
  padding-top: 15px;
  font-size: 21px;
`;

const SubTitle = styled.h3`
  margin-top: 20px;
  font-size: 36px;
  font-style: italic;
`;

const Summary = styled.span`
  margin-top: 20px;
  display: inline-block;
  width: 50%;
  font-size: 21px;
`;

const CreditsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 30px;
`;

const CreditsBox = styled.div`
  width: 130px;
  height: 200px;
  text-align: center;
`;

const CreditsImg = styled.div`
  /* background-image: url(https://image.tmdb.org/t/p/w100${(props) => props.bgprofile}); */
  width: 100%;
  height: 130px;
  background-color: white;
  border-radius: 500px;
`;

const CreditsLabel = styled.span`
  margin-top: 10px;
  font-size: 15px;
`;
