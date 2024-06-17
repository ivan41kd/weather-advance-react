import Header from './components/Header';
import Container from './components/Container';
import HeaderInfo from './components/ui/HeaderInfo';
import Main from './components/Main';
import MainInfo from './components/ui/MainInfo';
import './App.css';
import { ForecastInfo } from './components/ui/ForecastInfo';
export interface ChildrenProps {
  children: JSX.Element | React.ReactNode;
}

function App() {
  return (
    <>
      <Header>
        <Container>
          <HeaderInfo></HeaderInfo>
        </Container>
      </Header>
      <Main>
        <MainInfo>
          <ForecastInfo></ForecastInfo>
        </MainInfo>
      </Main>
    </>
  );
}

export default App;
