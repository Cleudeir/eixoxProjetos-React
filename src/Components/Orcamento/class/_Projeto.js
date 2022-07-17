export class projeto {
  constructor(tipo, areaConsruir) {
    this.tipo = tipo;
    this.areaConsruir = areaConsruir;
    this.valores = {vista: 0, prazo: 0, parcela: 0};
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
  valoresInsert(value, acrescimo) {
    const area = this.areaConsruir;
    let factor = -0.0005 * this.areaConsruir + 1;
    if (factor<0.6) {
      factor = 0.6;
    }
    const vista = area * value * factor;
    const prazoTotal = vista * (1 + acrescimo / 100);
    let parcela = Math.floor(prazoTotal / 250);
    if (parcela<3) {
      parcela = 2;
    } else if (parcela>12) {
      parcela = 12;
    }
    const prazo = +parseFloat(prazoTotal/parcela).toFixed(2);
    this.valores = {
      vista,
      prazo,
      parcela,
    };
  }
  valoresFixInsert(vista, acrescimo) {
    const prazoTotal = vista * (1 + acrescimo / 100);
    let parcela = Math.floor(prazoTotal / 250);
    if (parcela<3) {
      parcela = 2;
    } else if (parcela>12) {
      parcela = 12;
    }
    const prazo = +parseFloat(prazoTotal/parcela).toFixed(2);
    this.valores = {
      vista,
      prazo,
      parcela,
    };
  }
  observacaoInsert(value) {
    this.observacao = value
  }
}
