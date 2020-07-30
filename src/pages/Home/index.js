import React from 'react';
import styled from 'styled-components';
import Menu from '../../components/Menu'
// import dadosIniciais from './data/dados_iniciais.json';
// import BannerMain from './components/BannerMain';
// import Carousel from './components/Carousel';
// import Footer from './components/Footer';

//container do App
const AppWrapper = styled.div`
 background: #141414;
`;

function Home() {
  return (
    <AppWrapper className="App">
      <Menu />

    </AppWrapper>
  );
}

export default Home;