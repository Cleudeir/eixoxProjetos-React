export default function Card(props) {
  const {tipo, itensExcluded, itensInclude, observacao} = props;
  return (

    <div className='card--orcamento'>
      <h1>{tipo}</h1>
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
