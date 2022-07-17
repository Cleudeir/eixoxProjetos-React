export class Modelo {
    constructor(titulo) {
      this.titulo = titulo;
      this.areaConsruir = 0;
      this.descricao = [];
    }

    insert(nome, tamanho, quantidade, area) {
      this[nome] = {quantidade, tamanho, area}
      this.descricao.push(`0${quantidade} ${[nome]}`)
    }

    areaConstruirCalc(obj) {
      let acumulador = 0
      for (const key in obj) {
        if (obj[key].area && obj[key].quantidade) {
          acumulador += obj[key].area * obj[key].quantidade
        }
      }
      console.log(acumulador)

      this.areaConsruir = acumulador
    }
  }
