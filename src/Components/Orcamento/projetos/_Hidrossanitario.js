import {projeto} from '../class/_Projeto';

export default function Hidrossanitario({areaConsruir}) {
  const itensInclude = [
    'Distribuição dos pontos de agua fria',
    'Distribuição dos pontos de esgoto',
    'Lista de materiais',
    '02 pedidos de revisão',
  ];
  const itensExcluded = [
    'Acompanhamento da execução',
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
