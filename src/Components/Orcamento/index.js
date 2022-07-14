import React from 'react';
import '../../Style/Orcamento.css';
import {useState, useEffect} from 'react';
import Card from './Card';
import Arquitetonico from './_Arquitetonico';
import Design from './_Design';
import Estrutural from './_Estrutural';
const Orcameto = ({areaConsruir, areaTerreno}) =>{
  const [useArquetetonico, setArquetetonico] = useState(false);
  const [useDesign, setDesign] = useState(false);
  const [useEstrutural, setEstrutural] = useState(false);

  useEffect(() => {
    setArquetetonico(Arquitetonico({areaConsruir, areaTerreno}));
    setDesign(Design({areaConsruir, areaTerreno}));
    setEstrutural(Estrutural({areaConsruir, areaTerreno}));
  }, []);

  return (
    useArquetetonico &&
    (
      <section className='Preco'>
        {Card(useArquetetonico)}
        {Card(useDesign)}
        {Card(useEstrutural)}
      </section>
    )
  );
};
export default Orcameto;
