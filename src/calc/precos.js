export default function CardPrecos({area, tipo, descricao, vm2}) {
  console.log(area, tipo, descricao, vm2);
  const descricao = descricao;

  let fatorArea = -0.0004*area+1.0004;
  if (fatorArea<0.6) {
    fatorArea=0.6;
  }
  if (tipo.substr(0, 6) !=='Design') {
    vm2 = (vm2 * fatorArea).toFixed(2);
  }
  let vBase = parseFloat(area*vm2).toFixed(2);
  if (vBase<400) {
    vBase=399.90;
  }

  const vVista = parseFloat(vBase).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
  const vPrazo = parseInt(vBase*1.06);
  let qntDividido = Math.ceil(vPrazo/200);
  if (qntDividido>12) {
    qntDividido = 12;
  }
  const vDiv= vPrazo/qntDividido;

  const vDividido = parseFloat(vDiv).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

  if (tipo.substr(0, 6) !=='Design') {
    valorTotal = parseFloat(valorTotal + parseInt(vBase));
  }
  return ({});
};
