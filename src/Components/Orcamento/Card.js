export default function Card(props) {
  const {tipo, valores, areaConsruir, areaTerreno,
    itensExcluded, itensInclude, observacao} = props;
  return (
    <div className='card'>
      <h1>{tipo}</h1>
      <div className='card--subTitle'>
      <h2>{valores.parcela}x de {valores.prazo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} no Cartão</h2>
      <h2>ou</h2>
      <h2>{valores.vista.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} à vista</h2>
      </div>
      <ol>
      {itensInclude.map((item, i)=>{
         const icon = './icons/v.png'
        return (
          <li key={i}>
            <h3><img src={icon} alt={i}/> {item}</h3>
          </li>);
      })}
      {itensExcluded.map((item, i)=>{
         const icon = './icons/x.png'
        return (
          <li key={i}>
            <h3><img src={icon} alt={i}/> {item}</h3>
          </li>);
      })}
      </ol>
      <ol style={{margin: '10px', listStyleType: 'disc'}}>
        {observacao.map((item, i)=>(<h5 key={i}>{item}</h5>))}
      </ol>
    </div>
  );
}
