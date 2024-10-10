import styled from 'styled-components';
import { FaSearch, FaFilm } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SidebarContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 20px;
  width: 200px;
  /* height: 100vh; */
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;

  &:hover {
    color: #ff6f61;
  }

  & .icon {
    margin-right: 10px;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarItem>
        <Link to={'/search'}>
          <FaSearch className="icon" /> 찾기
        </Link>
      </SidebarItem>
      <SidebarItem>
        <Link to={'/movies'}>
          <FaFilm className="icon" /> 영화
        </Link>
      </SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;
