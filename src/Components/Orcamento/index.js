import React from 'react';
import '../../Style/Orcamento.css';
import {useState, useEffect} from 'react';
import Card from './Card';
import Arquitetonico from './projetos/_Arquitetonico';
import Design from './projetos/_Design';
import Estrutural from './projetos/_Estrutural';
import Hidrossanitario from './projetos/_InstalacaoEletrica';
import InstalacaoEletrica from './projetos/_InstalacaoEletrica';
import MiniCard from './MiniCard.js';
import {Modelo} from './class/_Modelo';
const Orcameto = () =>{
  const [areaConsruir, setAreaConsruir] = useState(false);
  const [useModelos, setModelos] = useState(false);
  const [useOpacity, setOpacity] = useState(1)

/*
  const areas =[
    {name: 'Quarto', pequeno: '9', ideal: '12', grande: '20'},
    {name: 'Suite', pequeno: '12', ideal: '13.7', grande: '25'},
    {name: 'Cozinha', pequeno: '5', ideal: '7.5', grande: '12'},
    {name: 'Sala', pequeno: '9', ideal: '12', grande: '30'},
    {name: 'Sala de jantar', pequeno: '9', ideal: '12', grande: '30'},
    {name: 'Banheiro Social', pequeno: '2.4', ideal: '3.5', grande: '5'},
    {name: 'Area de serviço', pequeno: '3', ideal: '4', grande: '6'},
    {name: 'Varanda coberta', pequeno: '3', ideal: '6', grande: '20'},
  ]
*/

useEffect(()=>{
  const modelos = []

  const modelo01 = new Modelo('kitnet')
  modelo01.insert('Quarto', 'Pequeno', 2, 9)
  modelo01.insert('Sala', 'Pequeno', 1, 5)
  modelo01.insert('Banheiro Social', 'Pequeno', 1, 2.4)
  modelo01.insert('Cozinha', 'Pequena', 1, 5)
  modelo01.areaConstruirCalc(modelo01)
  modelos.push(modelo01)
  console.log(modelo01)

  const modelo02 = new Modelo('Apartamento - Pequeno')
  modelo02.insert('Quarto', 'Pequeno', 2, 9)
  modelo02.insert('Suite', 'Pequeno', 1, 12)
  modelo02.insert('Sala', 'Pequeno', 1, 5)
  modelo02.insert('Banheiro Social', 'Pequeno', 1, 2.4)
  modelo02.insert('Cozinha', 'Pequena', 1, 5)
  modelo02.areaConstruirCalc(modelo02)
  modelos.push(modelo02)
  console.log(modelo02)

  setModelos(modelos)
}, [])
  return (
    (
    <>
      {useModelos && (
         <div className='Preco'>
          {useModelos.map((modeloType)=>(MiniCard({modeloType, setOpacity, setAreaConsruir})))}
      </div> )
      }
      {areaConsruir && <section className='Preco' style={{opacity: useOpacity, transition: 'ease-in-out 0.7s'}}>
          {Card(Design({areaConsruir}))}
          {Card(Arquitetonico({areaConsruir}))}
          {Card(Estrutural({areaConsruir}))}
          {Card(Hidrossanitario({areaConsruir}))}
          {Card(InstalacaoEletrica({areaConsruir}))}
      </section>}
    </>
    )
  );
};
export default Orcameto;
