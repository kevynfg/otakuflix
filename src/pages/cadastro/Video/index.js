import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

// a sintaxe "to" substitui o href

function CadastroVideo() {
    return (
        <PageDefault>
            <h1>Página de Cadastro de Vídeo</h1>

            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>
        </PageDefault>
    );
}

export default CadastroVideo;