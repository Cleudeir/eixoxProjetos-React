import React from 'react';
import '../Style/DadosUser.css';
import {useState, useEffect} from 'react';
const DadosUser = ({PassarAreas}) =>{
  const areas =[
    {name: 'Quarto', pequeno: '9', ideal: '12', grande: '20'},
    {name: 'Suite', pequeno: '12', ideal: '13.7', grande: '25'},
    {name: 'Cozinha', pequeno: '5', ideal: '7.5', grande: '12'},
    {name: 'Sala', pequeno: '9', ideal: '12', grande: '30'},
    {name: 'Sala de jantar', pequeno: '9', ideal: '12', grande: '30'},
    {name: 'Banheiro Social', pequeno: '2.4', ideal: '3.5', grande: '5'},
    {name: 'Area de serviço', pequeno: '3', ideal: '4', grande: '6'},
    {name: 'Varanda coberta', pequeno: '3', ideal: '6', grande: '20'},
  ];

  const initialValue = {
    larguraTerreno: '0',
    comprimentoTerreno: '0',
    nPavimentos: '1',
    nApartamentos: '1',
  };
  for (let i = 0; i<areas.length; i++) {
    const dado1 = 't'+areas[i].name.replace(' ', '').replace(' ', '').replace('ç', 'c');
    const dado2 = 'n'+areas[i].name.replace(' ', '').replace(' ', '').replace('ç', 'c');
    initialValue[dado1] = areas[i].ideal;
    initialValue[dado2] = '0';
  }
  const [dadoForm, setDadoForm] = useState(initialValue);
  const [areaTotal, setareaTotal] = useState(0);
  const [areaDeTerreno, setareaDeTerreno] = useState(0);
  const [areaDeProjecao, setareaDeProjecao] = useState(0);
  const form = (e)=>{
    const {name, value} = e.target;
    if (value === '') {
      setDadoForm({...dadoForm, [name]: '0'} );
    } else {
      setDadoForm({...dadoForm, [name]: value} );
    }
  };
  // Calculo de Areas
  useEffect(() => {
    let areaDaCasa = 0;
    areas.forEach((x)=>{
      const dado1 = 't'+x.name.replace(' ', '').replace(' ', '').replace('ç', 'c');
      const dado2 = 'n'+x.name.replace(' ', '').replace(' ', '').replace('ç', 'c');
      const tamanho = parseFloat(dadoForm[dado1]);
      const quantidade = parseInt(dadoForm[dado2]);
      areaDaCasa = areaDaCasa + tamanho * quantidade;
    });
    const a = (parseInt(dadoForm.nPavimentos) * parseInt(dadoForm.nApartamentos) * (areaDaCasa)).toFixed(2);
    const b = (parseInt(dadoForm.larguraTerreno) * parseInt(dadoForm.comprimentoTerreno)).toFixed(2);
    setareaDeProjecao((areaDaCasa).toFixed(2));
    setareaTotal(a);
    setareaDeTerreno(b);
  });
  // -------
  return (
    <div className='DadosUser'>
      <h1>Como deseja seu projeto</h1>
      <div className='card'>
        <div className='Dados'>
          <div className='item'>
            <h4>Área do terreno:</h4>
            <div className='item--input'>
              <input type='number' placeholder='m' min='0' name={'larguraTerreno'} onChange={form}/>
        x
              <input type='number' placeholder='m' min='0' name={'comprimentoTerreno'} onChange={form}/>
            </div>
          </div>
          <div className='item'>
            <h4>Numero de pavimentos:</h4>
            <input type='number' placeholder='und' min='0' max='5' name={'nPavimentos'} onChange={form}/>
          </div>
          <div className='item'>
            <h4>Apartamentos por Andar:</h4>
            <input type='number' placeholder='und' min='0' name={'nApartamentos'} onChange={form}/>
          </div>
        </div>

        <div className='Dados'>
          {areas.map((x, i)=>{
            const name1 = 'n'+x.name.replace(' ', '').replace(' ', '').replace('ç', 'c');
            const name2 = 't'+x.name.replace(' ', '').replace(' ', '').replace('ç', 'c');
            return (
              <div className='item' key={i}>
                <h4>{x.name}:</h4>
                <div className='item--input'>
                  <input type='number' placeholder='und' min='0' max='9' name={name1} onChange={form}/>-
                  <select defaultValue={x.ideal} name={name2} onChange={form}>
                    <option value={x.pequeno}>Pequeno</option>
                    <option value={x.ideal}>Ideal</option>
                    <option value={x.grande}>Grande</option>
                  </select>
                </div>
              </div>
            );
          })}

        </div>
      </div>
      <div className='title'>
        <div className='title--item'>
          <h4>Area do terreno: </h4>
          <h4>{areaDeTerreno}m²</h4>
        </div>
        <div className='title--item'>
          <h4>Area de projeção: </h4>
          <h4>{areaDeProjecao}m²</h4>
        </div>
        <div className='title--item'>
          <h4>Area a construir: </h4>
          <h4>{areaTotal}m²</h4></div>
        <div className='title--item'>
          <h4>Taxa de Ocupação: </h4>
          <h4>
            {areaDeTerreno!=0?
                        (((areaDeProjecao/areaDeTerreno)*100).toFixed(2)):
                        '0.00'}%
          </h4>
        </div>
        <div className='title--item'>
          <h4>Coeficiente aproveitamento: </h4>
          <h4>
            {areaDeTerreno!=0?
                            ((areaTotal/areaDeTerreno)).toFixed(2):
                            '0.00'
            }</h4>
        </div>
      </div>
      <button type='button' onClick={()=>{
// eslint-disable-next-line new-cap
areaTotal!=0 && areaDeTerreno!=0 ? PassarAreas({areaTotal, areaDeTerreno}): alert('Preencha o formulario adequadamente!');
      }}>Orçar</button>
    </div>
  );
};
export default DadosUser;
