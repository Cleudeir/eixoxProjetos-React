export class projeto {
  constructor(tipo, areaConsruir, areaTerreno) {
    this.tipo = tipo;
    this.areaConsruir = areaConsruir;
    this.areaTerreno = areaTerreno;
    this.valores = {vista: 0, prazo: 0, parcela: 0};
    this.itensInclude = {};
    this.itensExcluded = {};
    this.observacao = {};
  }
  itensIncludeInsert(value) {
    const icon = {base: './icons/', iconName: 'v', extension: '.png'};
    this.itensInclude = (
      <>{value.map((item, i)=>{
        return (
          <li key={icon.iconName+i}>
            <img src={icon.base+icon.iconName+icon.extension} alt={i+'c'}/> {item}
          </li>);
      })}</>
    );
  }
  itensExcludedInsert(value) {
    const icon = {base: './icons/', iconName: 'x', extension: '.png'};
    this.itensExcluded = (
      <>{value.map((item, i)=>{
        return (
          <li key={icon.iconName+i}>
            <img src={icon.base+icon.iconName+icon.extension} alt={i+'b'}/> {item}
          </li>);
      })}</>
    );
  }
  valoresInsert(value, acrescimo) {
    const area = this.areaConsruir;
    let factor = -0.0005 * this.areaConsruir + 1;
    if (factor<0.6) {
      factor = 0.6;
    }
    console.log(factor);
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
    this.observacao = (
      <>{value.map((item, i)=>{
        return (
          <li key={i+'a'} >
            {item}
          </li>);
      })}</>
    );
  }
}
