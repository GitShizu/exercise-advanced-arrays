// Scrivi una funzione processNumbers che prende un array, convalida che contenga solo numeri e restituisce un nuovo array con ogni numero elevato al quadrato. Se un elemento dell'array non è un numero, genera un errore indicando a quale indice si trova il valore non numerico.


const processNumbers = (array)=>{
    newArray = [];
    elementNumber = Number(element);
    array.forEach((element, i) => {
        if(typeof elementNumber === 'number' || !isNaN(elementNumber)){
            newArray.push(elementNumber*elementNumber)        
        }else{
            throw new Error(`Invalid numeric value @ index n° ${i}`)  
        }  

    });
    return newArray;
}
// Test
// console.log(processNumbers([4,6,18,'x']));