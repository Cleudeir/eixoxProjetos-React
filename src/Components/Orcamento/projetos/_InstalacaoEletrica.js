import {projeto} from '../class/_Projeto';

export default function InstalacaoEletrica({areaConsruir}) {
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

  const arquitetonico = new projeto('Hidrossanitário', areaConsruir);
  arquitetonico.itensIncludeInsert(itensInclude);
  arquitetonico.itensExcludedInsert(itensExcluded);
  arquitetonico.valoresInsert(16, 10);
  arquitetonico.observacaoInsert(observacao);
  return arquitetonico;
}
