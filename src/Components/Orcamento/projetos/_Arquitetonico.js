import {projeto} from '../class/_Projeto';

export default function Arquitetonico({areaConsruir}) {
  const itensInclude = [
    'Aprovação na Prefeitura',
    'Planta Humanizada',
    'Planta Executiva',
    'Planta de cobertura',
    'Fachada e Gradil',
    '03 pedidos de revisão',
  ];
  const itensExcluded = [
    'Acompanhamento da execução',
  ];
  const observacao = [
    '',
  ];

  const arquitetonico = new projeto('Arquitetonico', areaConsruir);
  arquitetonico.itensIncludeInsert(itensInclude);
  arquitetonico.itensExcludedInsert(itensExcluded);
  arquitetonico.valoresInsert(8.85, 10);
  arquitetonico.observacaoInsert(observacao);
  return arquitetonico;
}
