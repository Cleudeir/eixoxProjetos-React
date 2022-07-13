export default function Precos({areas}) {
  return [
    {
      tipo: 'Design Basico',
      area: 599.90,
      vm2: 1,
      descricao:
          <>
            <li><img src={'./icons/v.png'} alt=''/> Design de 01 ambiente</li>
            <li><img src={'./icons/v.png'} alt=''/> Lista de materiais de acabamento</li>
            <li><img src={'./icons/x.png'} alt=''/> Móveis (detalhamento de planejados)</li>
            <li><img src={'./icons/v.png'} alt=''/> Planta baixa e executiva do ambiente </li>
            <li><img src={'./icons/v.png'} alt=''/> 02 Imagens 3D realistas </li>
            <li><img src={'./icons/v.png'} alt=''/> Suporte na leitura do projeto</li>
            <li><img src={'./icons/v.png'} alt=''/> 02 pedidos de revisão</li>
            <h5>* Considera-se um ambiente tendo até 25m². Caso seja maior, considerar 2 ou mais ambientes.</h5>
          </>,
    }, {
      tipo: 'Design Completo',
      area: 899.90,
      vm2: 1,
      descricao:
          <>
            <li><img src={'./icons/v.png'} alt=''/> Design de 01 ambiente</li>
            <li><img src={'./icons/v.png'} alt=''/> Lista de materiais de acabamento</li>
            <li><img src={'./icons/v.png'} alt=''/> Móveis (detalhamento de planejados)</li>
            <li><img src={'./icons/v.png'} alt=''/> Planta baixa e executiva do ambiente </li>
            <li><img src={'./icons/v.png'} alt=''/> 02 Imagens 3D realistas </li>
            <li><img src={'./icons/v.png'} alt=''/> Suporte na leitura do projeto</li>
            <li><img src={'./icons/v.png'} alt=''/> 02 pedidos de revisão</li>
            <h5>* Considera-se um ambiente tendo até 25m². Caso seja maior, considerar 2 ou mais ambientes.</h5>
          </>,
    }, {
      tipo: 'Arquitetônico',
      area: areas.areaTotal,
      vm2: 14,
      descricao:
      <>
        <li><img src={'./icons/v.png'} alt=''/> Aprovação na Prefeitura</li>
        <li><img src={'./icons/v.png'} alt=''/> Planta Humanizada</li>
        <li><img src={'./icons/v.png'} alt=''/> Planta Executiva</li>
        <li><img src={'./icons/v.png'} alt=''/> 02 cortes(Longitudinal e transversal)</li>
        <li><img src={'./icons/v.png'} alt=''/> Planta de cobertura</li>
        <li><img src={'./icons/v.png'} alt=''/> Fachada e Gradil</li>
        <li><img src={'./icons/v.png'} alt=''/> 03 pedidos de revisão</li>
      </>,
    }, {
      tipo: 'Estrutural',
      area: areas.areaTotal,
      vm2: 15,
      descricao:
      <>
        <li><img src={'./icons/v.png'} alt=''/> Calculo Estrutural de concreto armado</li>
        <li><img src={'./icons/v.png'} alt=''/> Planta de locação</li>
        <li><img src={'./icons/v.png'} alt=''/> Planta de forma</li>
        <li><img src={'./icons/v.png'} alt=''/> Planta de lajes</li>
        <li><img src={'./icons/v.png'} alt=''/> Detalhamento de pilares</li>
        <li><img src={'./icons/v.png'} alt=''/> Detalhamento de vigas</li>
        <li><img src={'./icons/v.png'} alt=''/> Detalhamento de fundação</li>
        <li><img src={'./icons/v.png'} alt=''/> 02 pedidos de revisão</li>
      </>,
    }, {
      tipo: 'Hidrossanitário',
      area: areas.areaTotal,
      vm2: 6.5,
      descricao:
      <>
        <li><img src={'./icons/v.png'} alt=''/> Distribuição dos pontos de agua fria</li>
        <li><img src={'./icons/v.png'} alt=''/> Distribuição dos pontos de esgoto</li>
        <li><img src={'./icons/v.png'} alt=''/> Lista de materiais</li>
        <li><img src={'./icons/v.png'} alt=''/> 02 pedidos de revisão</li>
      </>,
    }, {
      tipo: 'Instalação Elétrica',
      area: areas.areaTotal,
      vm2: 6.5,
      descricao: <><li><img src={'./icons/v.png'} alt=''/>Calculo e dimensionamento das fiações</li>
        <li><img src={'./icons/v.png'} alt=''/>Distribuição dos pontos de iluminação</li>
        <li><img src={'./icons/v.png'} alt=''/>Distribuição dos pontos de Tomada</li>
        <li><img src={'./icons/x.png'} alt=''/>Padrão da concessionária</li>
        <li><img src={'./icons/v.png'} alt=''/> 02 pedidos de revisão</li></>,
    },
  ];
}
