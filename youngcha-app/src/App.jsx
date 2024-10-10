import styled from 'styled-components';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/SideBar';
import Router from './router';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 120vh;
`;

const MainContent = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
`;

const PageContent = styled.div`
  background-color: black;
  flex: 1;
  color: white;
  padding: 10px;
  font-size: 24px;
`;

const App = () => {
  return (
    <AppContainer>
      <Navbar />
      <MainContent>
        <Sidebar />
        <PageContent>
          <Router />
        </PageContent>
      </MainContent>
    </AppContainer>
  );
};

export default App;
