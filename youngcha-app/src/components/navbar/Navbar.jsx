import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
  padding: 10px 20px;
  color: white;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #ff6f61;
`;

const NavButtons = styled.div`
  & button {
    margin-left: 10px;
    padding: 8px 16px;
    background-color: #ff6f61;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 4px;
  }

  & button:hover {
    background-color: #e35d50;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>YONGCHA</Logo>
      <NavButtons>
        <Link to={'/login'}>
          <button>로그인</button>
        </Link>
        <Link to={'/signup'}>
          <button>회원가입</button>
        </Link>
      </NavButtons>
    </NavbarContainer>
  );
};

export default Navbar;
