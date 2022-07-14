export default function Card(props) {
  const {tipo, valores, areaConsruir, areaTerreno,
    itensExcluded, itensInclude, observacao} = props;
  return (
    <div className='card'>
      <h1>{tipo}</h1>
      <br></br>
      <h4>{valores.parcela}x de {valores.prazo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} no Cartão</h4>
      <h4>ou {valores.vista.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} à vista</h4>
      <br></br>
      <ol>
        {itensInclude}
        {itensExcluded}
      </ol>
      <ol style={{margin: '10px', listStyleType: 'disc'}}>
        {observacao}
      </ol>
      {tipo !== 'Design' &&
       ( <h3>Aproximadamente {areaConsruir} m²</h3>)
      }

    </div>
  );
}
