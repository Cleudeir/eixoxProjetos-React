import {projeto} from '../class/_Projeto';

export default function Design({areaConsruir}) {
  const itensInclude = [
    'Design de 01 ambiente',
    'Lista de materiais de acabamento',
    'Planta baixa e executiva do ambiente',
    '02 Imagens 3D realistas',
    'Suporte na leitura do projeto',
    '02 pedidos de revisão',
  ];
  const itensExcluded = [
    'Móveis (detalhamento de planejados)',
    'Acompanhamento da execução',
  ];
  const observacao = [
    'Considera-se um ambiente tendo até 25m²',
    'Caso seja maior, considerar 2 ou mais ambientes',
  ];

  const arquitetonico = new projeto('Design', areaConsruir);
  arquitetonico.itensIncludeInsert(itensInclude);
  arquitetonico.itensExcludedInsert(itensExcluded);
  arquitetonico.valoresFixInsert(899, 10);
  arquitetonico.observacaoInsert(observacao);
  return arquitetonico;
}
