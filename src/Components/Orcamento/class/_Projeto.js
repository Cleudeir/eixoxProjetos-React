export class projeto {
  constructor(tipo) {
    this.tipo = tipo;
    this.itensInclude = {};
    this.itensExcluded = {};
    this.observacao = {};
  }
  itensIncludeInsert(value) {
    this.itensInclude = value
  }
  itensExcludedInsert(value) {
    this.itensExcluded = value
  }
  observacaoInsert(value) {
    this.observacao = value
  }
}
