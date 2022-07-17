export default function MiniCard({modeloType, setOpacity, key, setAreaConsruir}) {
    const {descricao, areaConsruir, titulo} = modeloType
    return (
      <div className='miniCard' onClick={(e)=>{
        setOpacity(0)
        setTimeout(()=>{
          setAreaConsruir(areaConsruir)
          setOpacity(1);
          }, 700)
       }}>
        <div className="title">
        <h2>{titulo}</h2>
        <div className="subTitle">
        <h3>Modelo#{key+1}</h3>
        <h3>{areaConsruir} m²</h3>
        </div>
        <div>
        </div>
        </div>
        <ol>
        {descricao.map((x, i)=>{
          const icon = {base: './icons/', iconName: 'v', extension: '.png'};
          return (
          <>
           <li key={i}><h4>{x}</h4></li>
           </>)
        })}
        </ol>
    </div>
    )
  }
