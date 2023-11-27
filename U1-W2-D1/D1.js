/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
 */
let esercizio1="let: indica una variabile alla quale possiamo assegnare  un nome che sarà soltanto uno per ogni let visto che le variabili non possono essere ripetute, ma il valore dato da noi all'interno che siano numeri o stringhe possono cambiare  const: questa è simile a let ma con la differenza che il valore dato all'interno di esso non può essere cambiato .Possiamo dare diversi valori come :Stringhe inseriamo del testo, Aritmetici possiamo fare calcoli, booleani dare un valore true o false, logici  come & and l l  or !not, ternari che stabiliscono una regola"
console.log(' Esercizio1')


//  ESERCIZIO 2
//  Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.

const myName = 'Salvatore'
console.log('Esercizio2')
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/let numero1 = 12
let numero2 =20
let totale= numero1+numero2
console.log('Esercizio3',totale  )

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12 
console.log('Esercizio4')
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
  */
  // myName ='Malanchino'
//  console.log('myName')

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let y=4-x 
console.log('esercizio 6',y)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
 const name1='john'
 let name2='John'
 console.log(name2===name1)
 console.log( name2.toLowerCase()===name1)


/* SCRIVI QUI LA TUA RISPOSTA */
