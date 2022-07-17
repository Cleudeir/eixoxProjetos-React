export default function MiniCard({modeloType, setOpacity, setAreaConsruir}) {
    const {descricao, areaConsruir, titulo} = modeloType
    return (
      <div className='miniCard' onClick={(e)=>{
        setOpacity(0)
        setTimeout(()=>{
          setAreaConsruir(areaConsruir)
          setOpacity(1);
          }, 700)
       }}>
        <h2>{titulo}</h2>
        <ol>
        {descricao.map((x, i)=>{
          const icon = {base: './icons/', iconName: 'v', extension: '.png'};
          return (
          <>
           <li key={i}>{x}</li>
           </>)
        })}
        </ol>
        <h2>{areaConsruir} m²</h2>
    </div>
    )
  }
