
import { useState } from 'react';
import Banner from './componentes/Banner/Banner.js';

import Formulario from './componentes/Formulario/index.js';
import Time from './componentes/Time/index.js';

function App() {

  const times = [
    {
      nome:'Programação',
      corPrimaria:'#57c278',
      corSecundaria:'#D9f7e9',
    },
    {
      nome:'Front-End',
      corPrimaria:'#82cffa',
      corSecundaria:'#e8f8ff',
    },
    {
      nome:'Data Science',
      corPrimaria:'#a6d157',
      corSecundaria:'#f0f8e2',
    },
    {
      nome:'Devops',
      corPrimaria:'#E06B69',
      corSecundaria:'#FDE7E8',
    },
    {
      nome:'Ux e Design',
      corPrimaria:'#D86EBF',
      corSecundaria:'#FAE5F5',
    },
    {
      nome:'Mobile',
      corPrimaria:'#FEBA05',
      corSecundaria:'#FFF5D9',
    },
    {
      nome:'Inovação e Gestão',
      corPrimaria:'#FF8A29',
      corSecundaria:'#FFEEDF',
    },

  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />

      {times.map(time => <Time key={time.nome} nome={time.nome}corPrimaria={time.corPrimaria}corSecundaria={time.corSecundaria}/>)}

      
    </div>
  );
}

export default App;
