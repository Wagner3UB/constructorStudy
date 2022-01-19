const calcSconto = (prezzo) => {
  return prezzo * 0.1;
} 
const valoreFinale = (prezzo) => {
  return prezzo - calcSconto(prezzo);
}

export class Sconto {
  constructor(prezzo){
    this.prezzo = prezzo;
    this.valoreFinale = valoreFinale(prezzo);
    this.valoreSconto = calcSconto(prezzo);
  }
}
