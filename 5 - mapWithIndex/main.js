// Scrivi una funzione mapWithIndex che prende un array e restituisce un nuovo array in cui ogni elemento è una stringa che contiene l'elemento originale e il suo indice, formattato come "Elemento [indice]: [elemento]".

const mapWithIndex = (array)=>{
    const newArray = array.map((element, i) => `Element[${i}]: ${element}`)
    return newArray;
}
    

// Test
console.log(mapWithIndex([20, 55, 7]));


// For Each version:

// array.forEach((element, i) => {
//     const newElement = `Element[${i}]: ${element}`;
//     newArray.push(newElement);
// });