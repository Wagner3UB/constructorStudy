import { Prodotto } from "./product.js";

const prodotto1 = new Prodotto("T-shirt", 120);
const prodotto2 = new Prodotto("Pantaloni", 200);

console.log(prodotto1.nome);
console.log("Prezzo: " + prodotto1.prezzo + "€");
console.log("10% sconto: " + prodotto1.sconto.valoreSconto + "€");
console.log("Prezzo finale: " + prodotto1.sconto.valoreFinale + "€");
console.log("\n");
console.log(prodotto2.nome);
console.log("Prezzo: " + prodotto2.prezzo + "€");
console.log("10% sconto: " + prodotto2.sconto.valoreSconto + "€");
console.log("Prezzo finale: " + prodotto2.sconto.valoreFinale + "€");

