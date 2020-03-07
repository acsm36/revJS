/**
 * 1 : Langage de programmation
 */

/**
 * déclarer des variables en JS
 * 3 mots clés différents : var, let et const. Je préconise let, puis const si cela est possible
 */
let number = 10;

/**
 * le mot clé pour déclarer la variable en 1er et le nom de la variable (déclaration de variable)
 * en même temps que l'on déclare notre variable, nous pouvons lui assigner une valeur grâce au symbole = (affection de valeur)
 */
let number2;
number2 = 15;
number2 = 5;

/**
 * le JS est un langage à typage faible et dynamique, càd qu'une variable de type Number peut par la suite contenir une valeur d'un autre type comme String par exemple.
 */
let type = 10;
type = "type";

/**
 * pour connaître facilement le type d'une variable en JS :
 */
console.log(toString.call(type));

/**
 * le JS nous permet de déclarer des fonctions, càd un ensemble d'instructions qui sera exécuter à chaque qu'on l'appelle
 * Pour déclarer une fonction, on utilise le mot clé function puis on donne un nom à notre fonction suivi de parenthèse
 * déclarer une fonction c'est lui "donner une identité", "dire comment elle doit agir" mais elle n'agit pas encore
 */
function hello() {
    console.log("Hello World !");
}

hello();

/**
 * les fonctions peuvent prendre des paramètres, càd des variables dont on se servira dans les instructions de notre fonction
 */

 function helloYou(name) {
    console.log("Hello " + name + " !");
 }

 helloYou("Joan");
 helloYou("Isabelle");

 /**
  * nous pouvons faire des conditions en js grâce aux mots clé if et else OU switch case
  */

function estMajeur(prenom, age) {
    if(age >= 18) {
        console.log(`${prenom} est majeur, il a ${age} ans !`);
    } else {
        console.log(`${prenom} est mineur, il a ${age} ans !`);
    }
}

estMajeur("Jean", 45);
estMajeur("Laurie", 5);

function signeAstro(astro) {
    switch(astro) {
        case "Gémeaux" :
            console.log("Vous êtes de l'élément de l'air");
            break;
        case "Scorpion" :
            console.log("Vous êtes de l'élément du feu");     
            break;
        default : 
            console.log("Déso, pas déso, mais je suis pas astrologue mais petit père !");
            break;       
    }
}

signeAstro("Gémeaux");
signeAstro("Scorpion");
signeAstro("Lion");

/**
 * grâce au JS, nous pouvons aussi faire des boucles : 3 manières classiques que nous retrouverons dans tous les langages de programmation : for(), while(), do{ } while()
 */

 //Les boucles while et do while sont similaires sauf sur un point crucial ! la boucle do while s'effectuera au minimum une fois, même si sa condition pour s'activer n'est pas vrai, comme le montre l'exemple qui suit :
let i = 2;
do {
    console.log("Dans le do while : " + i);
    console.log("Le résultat du modulo est : " + i % 2);
    i++;
} while (i % 2 === 1)
console.log("i = " + i);


let n = 2;
while (n % 2 === 1) {
    console.log("Dans le while : " + n);
    n++;
}
console.log("n = " + n);


/***********************************************************/

/**
* 2 : Manipulation du DOM
*/

//console.log(document, toString.call(document));
const li = [...document.getElementsByTagName("li")];

li.forEach(function(item, index){
    let value = parseInt(item.innerText);
    value += index;
    item.innerText = value;
    //console.log(arr);
});

const btn = document.querySelector("button");
console.log(btn);

btn.addEventListener("click", function(e) {
    //console.log(e);
    e.preventDefault();
    btn.style.color = "red";
});

//setTimeout est la fonction que l'on utilise en JS lorsque l'on désire que des instructions se lancent après un certain temps (en ms), ici le console.log s'effectuera une fois au bout de 5s après le chargement du fichier JS
setTimeout(function(){
    console.log("je suis le setTimeout !");
}, 5000);

//setInterval est la fonction que l'on utilise en JS lorsque l'on désire que des instructions se lancent après un certain temps (en ms) et se répète indéfiniement, ici le console.log s'effectuera une fois au bout de 2s après le chargement du fichier JS puis toutes les 2s.
setInterval(function () {
    console.log("je suis le setInterval !");
}, 2000);