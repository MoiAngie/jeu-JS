/*  je crée une variable pour définir à qui c'est le tour (pair = joueur N°1, impair = joueur N°2) */

var i = 0;

/*  je définis alors toutes les cases du jeu par une constante  */

var cases = document.querySelectorAll(".case");

/* Je crée la fonction tour qui va permettre de jouer chacun son tour  */
/* on incrémente i à chaque tour*/
/* on lui dit de retourner i divisé par 2, ? c'est pour 'on fait quoi alors?',
si le résultat est égal/id à 0 (égal pair), alors on fait quoi?, il affiche 0 ou x */

function tour() {
    i++;
    return i % 2 === 0 ? "X" : "O";
}

/*Je crée une autre fonction pour afficher le gagnant de la partie en rajoutant
qu'il vide toutes les cases après pour recommencer une partie*/

function afficheWinner(winner) {
    swal(`${winner} a gagné! Prêt pour la revanche?`)
    cases.forEach(vide => vide.innerHTML = '');
}

/*  Je crée une fonction en cas d'égalité avec un reset aussi une fois la partie terminée */

/*function affichDraw() {
    swal("Egalité!", "On s'en refait une?", "warning")
    cases.forEach(vide => vide.innerHTML = '');
}

/*je mets ensuite les fonctions qui vont dire si c'est gagné quand 3 cases alignées ont la même valeur et donc pas vides:)/*
en 1er , les lignes horizontales */
function winState() {
    if (cases[0].innerHTML !== '' && cases[0].innerHTML === cases[1].innerHTML && cases[1].innerHTML === cases[2].innerHTML) {
       afficheWinner(cases[0].innerHTML);
    }
    else if (cases[3].innerHTML !== '' && cases[3].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[5].innerHTML) {
        afficheWinner(cases[3].innerHTML);
    }
    else if (cases[6].innerHTML !== '' && cases[6].innerHTML === cases[7].innerHTML && cases[7].innerHTML === cases[8].innerHTML) {
        afficheWinner(cases[6].innerHTML);
    }
// Pour les verticales
    else if (cases[0].innerHTML !== '' && cases[0].innerHTML === cases[3].innerHTML && cases[3].innerHTML === cases[6].innerHTML) {
        afficheWinner(cases[0].innerHTML);
    }
    else if (cases[1].innerHTML !== '' && cases[1].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[7].innerHTML) {
        afficheWinner(cases[1].innerHTML);
    }
    else if (cases[2].innerHTML !== '' && cases[2].innerHTML === cases[5].innerHTML && cases[5].innerHTML === cases[8].innerHTML) {
        afficheWinner(cases[2].innerHTML);
    }
// Pour les diagonales
    else if (cases[0].innerHTML !== '' && cases[0].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[8].innerHTML) {
        afficheWinner(cases[0].innerHTML);
    }
    else if (cases[2].innerHTML !== '' && cases[2].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[6].innerHTML) {
        afficheWinner(cases[2].innerHTML);
    }
}

/* Je crée une autre fonction en cas d'égalité
function drawState() {
  if (cases[].innerHTML !== '')
      affichDraw(cases[].innerHTML);
}*/


/* Je crée ensuite une fonction pour jouer (qd on clique, on utilise la fonction tour)*/
/* j'ajoute que c'est à faire que si la case est vide avec le !this.innerHTML et qu'elle appelle la fonction winner si c'est gagné*/


function game() {
    if (!this.innerHTML) {
        this.innerHTML = tour()
        winState();
    }
  /*  else (!this.innerHTML) {
      this.innerHTML = tour()
      drawState();
    }*/
}


/* ici pour dire que lorsqu'on clique sur chacune des cases,
on lui demande avec l'addEventListener de lancer la fonction jouer à chaque click)*/

cases.forEach(caseSeule => caseSeule.addEventListener("click", game));

/*  mes fonctions pour animer les boutons "thèmes" */

function bigLogo(x) {
  x.style.height = "120px";
  x.style.width = "120px";
}

function normLogo(x) {
  x.style.height = "100px";
  x.style.width = "100px";
}
