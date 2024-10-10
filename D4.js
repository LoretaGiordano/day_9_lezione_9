/* ESERCIZIO 1
Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const area = function (base, altezza) {
  return base * altezza
}
area(5, 3)
console.log("l'area del rettangolo è " + area(5, 3))

/* ESERCIZIO 2
Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (num0, num1) {
  if (num0 !== num1) {
    return num0 + num1
  } else {
    return (num0 + num1) * 3
  }
}
crazySum(5, 5)
crazySum(3, 5)
console.log('num0 !== num1, quindi 3 + 5 = ' + crazySum(3, 5))
console.log('num0 === num1, quindi 5 + 5 = ' + crazySum(5, 5))

/* ESERCIZIO 3
Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function (n1, n2) {
  if (n1 <= n2) {
    return Math.abs(n1 - n2)
  } else {
    n1 > n2
    return Math.abs(n1 - n2) * 3
  }
}
crazyDiff(17, 19)
crazyDiff(30, 19)
console.log('n1 <= n2, quindi 17 - 19 = ' + crazyDiff(14, 19))
console.log('n1 > n2, quindi 30 - 19 = ' + crazyDiff(30, 19))

/* ESERCIZIO 4
Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 
20 e 100 (incluso) oppure se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true
  } else {
    return false
  }
}
boundary(18)
boundary(88)
boundary(256)
boundary(400)
console.log('n = 18, quindi la funzione è ' + boundary(18))
console.log('n = 88, quindi la funzione è ' + boundary(88))
console.log('n = 256, quindi la funzione è ' + boundary(256))
console.log('n = 400, quindi la funzione è ' + boundary(400))

/* ESERCIZIO 5
Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già 
con "EPICODE" allora deve ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//LA STRINGA è "EPICODE IS THE BEST"
const option1 = 'EPICODE'
const option2 = ' IS THE BEST'
const option3 = 'EPICODE IS THE BEST'
const epify = function (str) {
  if (str !== option3) {
    return option1 + option2
  } else {
    return option3
  }
}
epify(option3)
epify(option2)
console.log('prova 1 ' + epify(option3))
console.log('prova 2 ' + epify(option2))

/* ESERCIZIO 6
Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che 
il parametro sia un multiplo di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (n) {
  if (n % 3 || n % 7 === 0) {
    return true
  } else {
    return false
  }
}
check3and7(33)
check3and7(11)
check3and7(27)
check3and7(23)
console.log('33 % 3 = ' + check3and7(33))
console.log('11 % 3 = ' + check3and7(11))
console.log('27 % 7 = ' + check3and7(27))
console.log('23 % 7 = ' + check3and7(23))

/* ESERCIZIO 7
Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro 
(es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function (str) {
  let newStr = ''
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i]
    return newStr
  }
}
reverseString('EPICODE')
console.log('da EPICODE a ' + reverseString('EPICODE'))

/* ESERCIZIO 8
Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa
senza il primo e l'ultimo carattere della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
