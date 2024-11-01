import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Category() {
  return (
    <>
      <Title>카테고리</Title>
      <Wrapper>
        <Link to={'/movies/nowplaying'}>
          <Box>
            <Label>현재 상영 중인</Label>
          </Box>
        </Link>
        <Link to={'/movies/popular'}>
          <Box>
            <Label>인기있는</Label>
          </Box>
        </Link>
        <Link to={'/movies/toprated'}>
          <Box>
            <Label>높은 평가를 받은</Label>
          </Box>
        </Link>
        <Link to={'/movies/upcoming'}>
          <Box>
            <Label>개봉 예정인</Label>
          </Box>
        </Link>
      </Wrapper>
    </>
  );
}

const Title = styled.h1`
  text-align: center;
  margin-top: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
  & div:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
`;

const Box = styled.div`
  background-color: white;
  width: 320px;
  height: 220px;
  border-radius: 20px;
`;

const Label = styled.span`
  color: black;
  position: relative;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 5px;
  left: 13px;
  top: 170px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
`;
