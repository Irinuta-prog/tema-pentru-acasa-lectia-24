// Înapoi la cele două echipe de gimnastică, Delfinii și Koala! 
//Există o nouă disciplină de gimnastică, care funcționează diferit. 
//Fiecare echipă concurează de 3 ori, iar apoi se calculează media celor 3 scoruri (deci un punctaj mediu pe echipă).
//O echipă câștigă NUMAI dacă are cel puțin DUBLUL scorului mediu al celeilalte echipe. Altfel, nicio echipă nu câștigă!
// 1. Creați o funcție „calcAverage” pentru a calcula media a 3 scoruri
// 2. Folosiți funcția pentru a calcula media pentru ambele echipe
// 3. Creați o funcție „checkWinner” care ia ca parametri scorul mediu al fiecărei echipe („avgDolhins” și „avgKoalas”), apoi înregistrează câștigătorul în consolă, împreună cu punctele de victorie, conform regulii de mai sus.Exemplu: „Koalas câștigă (30 vs. 13)”.
// 4. Utilizați funcția „checkWinner” pentru a determina câștigătorul atât pentru DATA 1, cât și pentru DATA 2.
// 5. Ignorați remizele de data aceasta.
// DATE TESTULUI 1: Delfinii scor 44, 23 și 71. Koalas scor 65, 54 și 49
// DATE TESTUL 2: Delfinii scor 85, 54 și 41. Koala scor 23, 34 și 27

// Ex1
function calcAverage(scor1, scor2, scor3) {
    return (scor1 + scor2 + scor3) / 3;
}
// Ex2
let scorMediuDelfinii1 = calcAverage(44, 23, 71);
let scorMediuKoala1 = calcAverage(65, 54, 49);
let scorMediuDelfinii2 = calcAverage(85, 54, 41);
let scorMediuKoala2 = calcAverage(23, 34, 27);
// Ex3
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Delfinii câștigă (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koala câștigă (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('Nicio echipă nu câștigă!');
    }
}
// Ex4
checkWinner(scorMediuDelfinii1, scorMediuKoala1); // DATA 1
checkWinner(scorMediuDelfinii2, scorMediuKoala2); // DATA 2
// dupa datele testului 2, vor castiga delfinii
