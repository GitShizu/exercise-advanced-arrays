// Crea una funzione safeParseJSON che prende una stringa e tenta di analizzarla come JSON. Se l'analisi fallisce, la funzione dovrebbe restituire null invece di generare un errore. Inoltre, la funzione dovrebbe stampare in console se l'analisi è stata un successo o meno.


const safeParseJSON = (string)=>{
    let conversion = true;
    try{
        const parsedString = JSON.parse(string);        
        return parsedString;
    }catch(error){
        conversion = false;
        return null;
    }finally{
        const outcome = (conversion)? 'Analisis successful' : 'Analisis unsuccessful';
        console.log(outcome);
    }
}

const testString = `["this", "that", "the other"]`;

// Test
// console.log(safeParseJSON(testString));