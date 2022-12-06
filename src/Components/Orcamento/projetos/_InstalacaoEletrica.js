import {projeto} from '../class/_Projeto';

export default function InstalacaoEletrica() {
  const itensInclude = [
    'Calculo e dimensionamento das fiações',
    'Distribuição dos pontos de iluminação',
    'Distribuição dos pontos de Tomada',
    'Lista de materiais',
    '02 pedidos de revisão',
  ];
  const itensExcluded = [
    'Acompanhamento da execução',
    'Padrão da concessionária',
  ];
  const observacao = [
    '',
  ];

  const arquitetonico = new projeto('Instalação Elétrica');
  arquitetonico.itensIncludeInsert(itensInclude);
  arquitetonico.itensExcludedInsert(itensExcluded);
  arquitetonico.observacaoInsert(observacao);
  return arquitetonico;
}
