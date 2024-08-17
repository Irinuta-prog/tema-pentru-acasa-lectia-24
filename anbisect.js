//Creaţi o funcţie care să ne spună dacă un an e bisect sau ba.
//Dacă un an este divizibil cu 4 și nu este divizibil cu 100, este bisect.
//Dacă un an este divizibil cu 400, este bisect (aceasta este excepția pentru secole).

function esteAnBisect(an) {
    if ((an % 4 === 0 && an % 100 !== 0) || an % 400 === 0) {
        return true;
    } else {
        return false;
    }
}
//verific daca anul se divide la 4 si nu e divizibil cu 100
//verific daca anul e divizibil cu 400
// compar aceste 2 expresii 

console.log(esteAnBisect(2024));  //true
console.log(esteAnBisect(2023)); // false