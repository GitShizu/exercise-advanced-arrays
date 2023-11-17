// Crea una funzione safeParseJSON che prende una stringa e tenta di analizzarla come JSON. Se l'analisi fallisce, la funzione dovrebbe restituire null invece di generare un errore. Inoltre, la funzione dovrebbe stampare in console se l'analisi è stata un successo o meno.


const safeParseJSON = (string)=>{
    let conversion = true;
    try{
        const parsedString = JSON.parse(string); 
        console.warn('Analisis unsuccessful')       
        return parsedString;
    }catch(error){
        console.log('Analisis successful');
        return null;
    }
}


// Test
// const testString = `["this", "that", "the other"]`;
// console.log(safeParseJSON(testString));