import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';


const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`;


// "children" recebe todo o conteúdo interno de algo, no caso
// recebe a mensagem da pagina cadastro/Video
function PageDefault({ children }) {
    return (
        //Deixar a tag <></> são chamados de fragments
        //Entram no lugar das divs
        <>
            <Menu />
                <Main>
                    {children}
                </Main>
            <Footer />
        </>
    );
}

export default PageDefault;