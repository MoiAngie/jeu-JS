body onload="alert('Votre Message')">>



/*  mes fonctions pour animer les boutons "thèmes" */

function bigLogo(x) {
  x.style.height = "120px";
  x.style.width = "120px";
}

function normLogo(x) {
  x.style.height = "100px";
  x.style.width = "100px";
}

/* Je définis mes variables à utiliser dans le jeu au niveau du visuel

var X = "img/Romain.png";
var O = "img/benoit.png";*/

/*  je crée une variable pour définir à qui c'est le tour (pair = joueur N°1, impair = joueur N°2) */

let i = 0;

/*  je définis alors toutes les cases du jeu par une constante  */

const cases = document.querySelectorAll('.case');


/* Je crée la fonction tour qui va permettre de jouer chacun son tour  */
/* on incrémente i à chaque tour*/
/* on lui dit de retourner i divisé par 2, ? c'est pour 'on fait quoi alors?',
si le résultat est égal/id à 0 (égal pair), alors on fait quoi?, il affiche 0 ou x */

function turn() {
  i++;
  return i % 2 ? === 0 ? 'O' : 'X';
}

/*Je crée une autre fonction pour afficher le gagnant de la partie en rajoutant
qu'il vide toutes les cases après pour recommencer une partie*/

function afficheWinner(winner) {
  alert (`${winner} a gagné !`);
  cases.forEach(el => el.innerHTML = '');
}

/*je mets ensuite les fonctions qui vont dire si c'est gagné quand 3 cases alignées ont la même head et donc pas vides:)/*
en 1er , les lignes horizontales */

function win() {
  if (cases[0].innerHTML !== '' &&
  cases[0].innerHTML === cases[1].innerHTML &&
  cases[1].innerHTML === cases[2].innerHTML) {
    afficheWinner(cases[0].innerHTML);
  }
  if (cases[3].innerHTML !== '' &&
  cases[3].innerHTML === cases[4].innerHTML &&
  cases[4].innerHTML === cases[5].innerHTML) {
    afficheWinner(cases[3].innerHTML);
  }
  if (cases[6].innerHTML !== '' &&
  cases[6].innerHTML === cases[7].innerHTML &&
  cases[7].innerHTML === cases[8].innerHTML) {
    afficheWinner(cases[6].innerHTML);
  }

// Pour les verticales
  if (cases[0].innerHTML !== '' &&
  cases[0].innerHTML === cases[3].innerHTML &&
  cases[3].innerHTML === cases[6].innerHTML) {
    afficheWinner(cases[0].innerHTML);
  }
  if (cases[1].innerHTML !== '' &&
  cases[1].innerHTML === cases[4].innerHTML &&
  cases[4].innerHTML === cases[7].innerHTML) {
    afficheWinner(cases[1].innerHTML);
  }
  if (cases[2].innerHTML !== '' &&
  cases[2].innerHTML === cases[5].innerHTML &&
  cases[5].innerHTML === cases[8].innerHTML) {
    afficheWinner(cases[2].innerHTML);
  }

// Pour les diagonales
  if (cases[0].innerHTML !== '' &&
  cases[0].innerHTML === cases[4].innerHTML &&
  cases[4].innerHTML === cases[8].innerHTML) {
    afficheWinner(cases[0].innerHTML);
  }
  if (cases[2].innerHTML !== '' &&
  cases[2].innerHTML === cases[4].innerHTML &&
  cases[4].innerHTML === cases[6].innerHTML) {
    afficheWinner(cases[2].innerHTML);
  }
}

/* Je crée ensuite une fonction pour jouer (qd on clique, on utilise la fonction tour)*/
/* j'ajoute que c'est à faire que si la case est vide avec le !this.innerHTML et qu'elle appelle la fonction winner si c'est gangé*/

function play() {
  if (!this.innerHTML) this.innerHTML = turn();
  win();
}

/* ici pour dire que lorsqu'on clique sur chacune des cases,
on lui demande avec l'addEventListener de lancer la fonction jouer à chaque click)*/

cases.forEach(head => head.addEventListener('click', play));
