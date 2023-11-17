// Crea una funzione removeShortWords che prende un array di stringhe e una lunghezza minima. Dovrebbe restituire un nuovo array contenente solo le stringhe che sono più lunghe della lunghezza minima. Usa .filter() e assicurati che la funzione non tenga conto delle maiuscole e minuscole.

const removeShortWords = (array, minLength)=>{     
   return array.filter(string => string.length > minLength);
}


// Test
// console.log(removeShortWords(['clavicembalo', 'gatto', 'Gianny', 'babbuino'], 5))