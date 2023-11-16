// Scrivi una funzione processNumbers che prende un array, convalida che contenga solo numeri e restituisce un nuovo array con ogni numero elevato al quadrato. Se un elemento dell'array non è un numero, genera un errore indicando a quale indice si trova il valore non numerico.


const processNumbers = (array)=>{
    newArray = [];
    array.forEach((element, i) => {
    if(typeof element === 'number'){
        newArray.push(element*10)        
    }else{
        throw new Error(`Invalid numeric value @ index n° ${i}`)  
    }  

    });
    return newArray;
}

console.log(processNumbers([4,6,18,'x']));