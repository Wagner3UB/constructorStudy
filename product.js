import { Sconto } from "./valor.js";

export class Prodotto {
  constructor(paramNome, paramPrezzo) {
    this.nome = paramNome;
    this.prezzo = paramPrezzo;
    this.sconto = new Sconto(this.prezzo);
  }
};