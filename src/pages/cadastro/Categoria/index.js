import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

// a sintaxe "to" substitui o href

function CadastroCategoria() {
    return (
        <PageDefault>
            <h1>Página de Cadastro de Categoria</h1>



            <Link to="/">
                ir para home
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;