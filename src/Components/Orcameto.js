import React from 'react';
import '../Style/Orcameto.css';
import {useState, useEffect} from 'react';
import {projeto} from '../main';
const Orcameto = ({areas}) =>{
  const [useData, setData] = useState(false);

  useEffect(() => {
    const altura = window.document.querySelector('.Preco').offsetTop-60;
    window.scrollTo(0, altura);
    const areaConsruir = 300;
    const areaTerreno = 1000;
    const itensInclude = [
      'Design de 01 ambiente',
      'Lista de materiais de acabamento',
      'Planta baixa e executiva do ambiente',
      '02 Imagens 3D realistas',
      'Suporte na leitura do projeto',
      '02 pedidos de revisão',
    ];
    const itensExcluded = [
      'Móveis (detalhamento de planejados)',
    ];

    const arquitetonico = new projeto('arquitetonico', areaConsruir, areaTerreno);
    arquitetonico.itensIncludeInsert(itensInclude);
    arquitetonico.itensExcludedInsert(itensExcluded);
    arquitetonico.valoresInsert(8.85, 10);
    console.log(arquitetonico);
  }, []);

  /*
<div className='card--preco'>
      <div className='card--conteiner'>
        <div className='card'>
          <h1>{tipo}</h1>
          <br></br>
          <h4>{qntDividido}x de {vDividido} no Cartão</h4>
          <h4>ou {vVista} à vista</h4>
          <br></br>
          <ol>
            {descricao}
          </ol>
          {tipo.substr(0, 6) !=='Design' &&
            <h3>Aproximadamente {area}m²</h3>
          }
        </div>
      </div>
    </div>
    */
  return (
    <section className='Preco'>
      {useData && useData}

    </section>
  );
};
export default Orcameto;
