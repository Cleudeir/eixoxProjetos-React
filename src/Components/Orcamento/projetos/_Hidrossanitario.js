import {projeto} from '../class/_Projeto';

export default function Hidrossanitario() {
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

  const arquitetonico = new projeto('Hidrossanitário');
  arquitetonico.itensIncludeInsert(itensInclude);
  arquitetonico.itensExcludedInsert(itensExcluded);
  arquitetonico.observacaoInsert(observacao);
  return arquitetonico;
}
