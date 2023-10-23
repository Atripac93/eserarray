// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
  }
  
  const paul = {
    name: "Paul",
    lastName: "Flynn",
    isAmbassador: false,
  }
  
  const amy = {
    name: "Amy",
    lastName: "Reed",
    isAmbassador: false,
  }
  
  const prices = [34, 5, 2]
  const shippingCost = 50
  let utenteCheEffettuaLAcquisto = amy //cambia il valore qui per provare se il tuo algoritmo //

 let arrayvuoto = [];
 arrayvuoto.push(marco, paul, amy);

 let utenti = [marco, paul, amy];


utenti.forEach((utente) => {
  let costoTotale = prices.reduce((acc, prezzo) => acc + prezzo, 0); 
  if (utente.isAmbassador) {
    costoTotale *= 0.7; 
  }
  if (costoTotale <= 100) {
    costoTotale += shippingCost; 
  }
  utente.totaleCarrello = costoTotale; 
});

utenti.forEach((utente) => {
  console.log(
    `${utente.name} ${utente.lastName} ${
      utente.isAmbassador ? "è" : "non è"
    } un ambassador. Il costo totale del carrello è ${utente.totaleCarrello}.`
  );
});


const ambassadorArray = utenti.filter((utente) => utente.isAmbassador);

console.log("Gli utenti ambassador sono/e:");
ambassadorArray.forEach((ambassador) => {
  console.log(`${ambassador.name} ${ambassador.lastName}`);
});
 

// for(i = 0; i< utenti.length; i++){
 //   if (utenti[i].isAmbassador) {
   //   if(utenti[i].totaleCarta >= freeShipping) {   
  //      utenti[i].totaleCarta * 0,7;
    //  }else{
    //    utenti[i].totaleCarta= (utenti[i].totaleCarta + shippingCost) * 0,7; 
   //   }
   // }else{
   //     if(utenti[i].totaleCarta < freeShipping){    
   //   }else{
   //      utenti[i].totaleCarta +=  shippingCost  ; 
   //   }     
   // }
    
//}

//for(i = 0; i< utenti.length; i++){
  //  let question = utenti[i].isAmbassador? "E` ambassador" : "No ambassador";

//console.log(`${utenti[i].name} ${utenti[i].lastName} ${utenti[i].isAmbassador}`)
//console.log(`il costo totale ${utenti[i].name} ${utenti[i].lastName} e ${utenti[i].totaleCarta}`)
//}
//console.log("Utenti Ambassador");//


    


