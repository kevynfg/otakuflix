import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresInicias = {
    nome: '',
    descricao: '',
    cor: '',
  }
//usar o SET antes para poder alterar o valor da const
const [categorias, setCategorias] = useState([]);
const [values, setValues] = useState(valoresInicias);

//a chave pode ser nome, descrição etc etc...
function setValue (chave, valor) {
  setValues({
    ...values,
    [chave]: valor, //nome: 'valor', quando coloca [] em volta
  })
}

function handleChange(recebeEvento){
    setValue(
      recebeEvento.target.getAttribute('name'),
      recebeEvento.target.value
    );
}

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infoDoEvento){
        infoDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);
        setValues(valoresInicias);
      }}>
        
        <FormField 
            label = "Nome da Categoria"
            type = "text"
            name = "nome"
            values = {values.nome}
            onChange = {handleChange}
        />

        <div>
        <label>
          Descrição:
          <input
            type="text"
            name="descricao"
            value = {values.descricao}
            onChange = {handleChange}
            />
        </label>
        </div>

        <FormField 
            label = "Cor"
            type = "color"
            name = "cor"
            values = {values.cor}
            onChange = {handleChange}
        />
{/* 
        <div>
        <label>
          Cor:
          <input
            type="color"
            name="color"
            value = {values.cor}
            onChange = {handleChange}
            />
        </label>
        </div> */}

        <button>
          Cadastrar
        </button>

      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
        )
      })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;