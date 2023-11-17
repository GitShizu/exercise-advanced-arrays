// Scrivi una funzione chiamata divide che prende due parametri, dividendo e divisore. Se il divisore è 0, genera un nuovo errore con il messaggio "Impossibile dividere per zero". Altrimenti, restituisci il risultato della divisione.

const divide = (dividend, divisor)=>{
    if(divisor === 0){
        throw new Error("Impossibile dividere per zero") 
    }
    return dividend / divisor;    
}

// Test
// console.log(divide(6,0));