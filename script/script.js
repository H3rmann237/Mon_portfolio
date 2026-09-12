//électionnez votre titre principal et changez son texte avec JavaScript.
const title = document.getElementById("nom");

title.textContent = " Bienvenue ! " ;

//sélectionnez toutes vos cartes de projet (querySelectorAll) et loggez combien ont été trouvées
const cards = document.querySelectorAll(".projet-card");

console.log(cards.length);

//bouclez sur ces cartes et ajoutez-leur une classe Tailwind (par ex. shadow-lg) à chacune.
cards.forEach(card => {
    card.classList.add("text-3xl");
});

//Écrivez une fonction isAdult(age) utilisant if/else, et testez-la avec 3 valeurs différentes(logguées).
function isAdult(age){
    if (age <18){
        return console.log("vous êtes mineur");
    }
    else if (age > 18) {
        return console.log("vous êtes majeur");
    } else {
        return console.log("vous venez d'être majeur");
    }
}

isAdult(5)
isAdult(18)
isAdult(45)


//En bouclant sur vos cartes de projet, construisez un tableau contenant le titre de chacune (via push),puis loggez ce tableau complet dans la console.

const tableau = []

cards.forEach(card => {
    const titre = document.getElementById("titre-port").textContent;

    tableau.push(titre);
});

console.log(tableau)
