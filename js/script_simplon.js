var x = "img/simplontransparentnoir.png";
var o = "img/simplon2.png";
var blank = "img/blank.jpg";
var pause = 0;
var all = 0;
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var h = 0;
var i = 0;
var temp="";
var ok = 0;
var cf = 0;
var choice=9;
var aRandomNumber = 0;
var comp = 0;
var t = 0;
var wn = 0;
var ls = 0;
var ts = 0;
function logicOne() {
if ((a==1)&&(b==1)&&(c==1)) all=1;
if ((a==1)&&(d==1)&&(g==1)) all=1;
if ((a==1)&&(e==1)&&(i==1)) all=1;
if ((b==1)&&(e==1)&&(h==1)) all=1;
if ((d==1)&&(e==1)&&(f==1)) all=1;
if ((g==1)&&(h==1)&&(i==1)) all=1;
if ((c==1)&&(f==1)&&(i==1)) all=1;
if ((g==1)&&(e==1)&&(c==1)) all=1;
if ((a==2)&&(b==2)&&(c==2)) all=2;
if ((a==2)&&(d==2)&&(g==2)) all=2;
if ((a==2)&&(e==2)&&(i==2)) all=2;
if ((b==2)&&(e==2)&&(h==2)) all=2;
if ((d==2)&&(e==2)&&(f==2)) all=2;
if ((g==2)&&(h==2)&&(i==2)) all=2;
if ((c==2)&&(f==2)&&(i==2)) all=2;
if ((g==2)&&(e==2)&&(c==2)) all=2;
if ((a != 0)&&(b != 0)&&(c != 0)&&(d != 0)&&(e != 0)&&(f != 0)&&(g != 0)&&(h != 0)&&(i != 0)&&(all == 0)) all = 3;
}
function logicTwo() {
if ((a==2)&&(b==2)&&(c== 0)&&(temp=="")) temp="C";
if ((a==2)&&(b== 0)&&(c==2)&&(temp=="")) temp="B";
if ((a== 0)&&(b==2)&&(c==2)&&(temp=="")) temp="A";
if ((a==2)&&(d==2)&&(g== 0)&&(temp=="")) temp="G";
if ((a==2)&&(d== 0)&&(g==2)&&(temp=="")) temp="D";
if ((a== 0)&&(d==2)&&(g==2)&&(temp=="")) temp="A";
if ((a==2)&&(e==2)&&(i== 0)&&(temp=="")) temp="I";
if ((a==2)&&(e== 0)&&(i==2)&&(temp=="")) temp="E";
if ((a== 0)&&(e==2)&&(i==2)&&(temp=="")) temp="A";
if ((b==2)&&(e==2)&&(h== 0)&&(temp=="")) temp="H";
if ((b==2)&&(e== 0)&&(h==2)&&(temp=="")) temp="E";
if ((b== 0)&&(e==2)&&(h==2)&&(temp=="")) temp="B";
if ((d==2)&&(e==2)&&(f== 0)&&(temp=="")) temp="F";
if ((d==2)&&(e== 0)&&(f==2)&&(temp=="")) temp="E";
if ((d== 0)&&(e==2)&&(f==2)&&(temp=="")) temp="D";
if ((g==2)&&(h==2)&&(i== 0)&&(temp=="")) temp="I";
if ((g==2)&&(h== 0)&&(i==2)&&(temp=="")) temp="H";
if ((g== 0)&&(h==2)&&(i==2)&&(temp=="")) temp="G";
if ((c==2)&&(f==2)&&(i== 0)&&(temp=="")) temp="I";
if ((c==2)&&(f== 0)&&(i==2)&&(temp=="")) temp="F";
if ((c== 0)&&(f==2)&&(i==2)&&(temp=="")) temp="C";
if ((g==2)&&(e==2)&&(c== 0)&&(temp=="")) temp="C";
if ((g==2)&&(e== 0)&&(c==2)&&(temp=="")) temp="E";
if ((g== 0)&&(e==2)&&(c==2)&&(temp=="")) temp="G";
}
function logicThree() {
if ((a==1)&&(b==1)&&(c==0)&&(temp=="")) temp="C";
if ((a==1)&&(b==0)&&(c==1)&&(temp=="")) temp="B";
if ((a==0)&&(b==1)&&(c==1)&&(temp=="")) temp="A";
if ((a==1)&&(d==1)&&(g==0)&&(temp=="")) temp="G";
if ((a==1)&&(d==0)&&(g==1)&&(temp=="")) temp="D";
if ((a==0)&&(d==1)&&(g==1)&&(temp=="")) temp="A";
if ((a==1)&&(e==1)&&(i==0)&&(temp=="")) temp="I";
if ((a==1)&&(e==0)&&(i==1)&&(temp=="")) temp="E";
if ((a==0)&&(e==1)&&(i==1)&&(temp=="")) temp="A";
if ((b==1)&&(e==1)&&(h==0)&&(temp=="")) temp="H";
if ((b==1)&&(e==0)&&(h==1)&&(temp=="")) temp="E";
if ((b==0)&&(e==1)&&(h==1)&&(temp=="")) temp="B";
if ((d==1)&&(e==1)&&(f==0)&&(temp=="")) temp="F";
if ((d==1)&&(e==0)&&(f==1)&&(temp=="")) temp="E";
if ((d==0)&&(e==1)&&(f==1)&&(temp=="")) temp="D";
if ((g==1)&&(h==1)&&(i==0)&&(temp=="")) temp="I";
if ((g==1)&&(h==0)&&(i==1)&&(temp=="")) temp="H";
if ((g==0)&&(h==1)&&(i==1)&&(temp=="")) temp="G";
if ((c==1)&&(f==1)&&(i==0)&&(temp=="")) temp="I";
if ((c==1)&&(f==0)&&(i==1)&&(temp=="")) temp="F";
if ((c==0)&&(f==1)&&(i==1)&&(temp=="")) temp="C";
if ((g==1)&&(e==1)&&(c==0)&&(temp=="")) temp="C";
if ((g==1)&&(e==0)&&(c==1)&&(temp=="")) temp="E";
if ((g==0)&&(e==1)&&(c==1)&&(temp=="")) temp="G";
}
function clearOut() {
document.game.you.value="0";
document.game.computer.value="0";
document.game.ties.value="0";
}
function checkSpace() {
if ((temp=="A")&&(a==0)) {
ok=1;
if (cf==0) a=1;
if (cf==1) a=2;
}
if ((temp=="B")&&(b==0)) {
ok=1;
if (cf==0) b=1;
if (cf==1) b=2;
}
if ((temp=="C")&&(c==0)) {
ok=1;
if (cf==0) c=1;
if (cf==1) c=2;
}
if ((temp=="D")&&(d==0)) {
ok=1;
if (cf==0) d=1;
if (cf==1) d=2;
}
if ((temp=="E")&&(e==0)) {
ok=1;
if (cf==0) e=1;
if (cf==1) e=2;
}
if ((temp=="F")&&(f==0)) {
ok=1
if (cf==0) f=1;
if (cf==1) f=2;
}
if ((temp=="G")&&(g==0)) {
ok=1
if (cf==0) g=1;
if (cf==1) g=2;
}
if ((temp=="H")&&(h==0)) {
ok=1;
if (cf==0) h=1;
if (cf==1) h=2;
}
if ((temp=="I")&&(i==0)) {
ok=1;
if (cf==0) i=1;
if (cf==1) i=2;
}
}
function yourChoice(chName) {
pause = 0;
if (all!=0) ended();
if (all==0) {
cf = 0;
ok = 0;
temp=chName;
checkSpace();
if (ok==1) {
document.images[chName].src = x;
}
if (ok==0)taken();
process();
if ((all==0)&&(pause==0)) myChoice();
   }
}
function taken() {
swal("Occupé!", "Essaye une autre...", "warning")
pause=1;
}
function myChoice() {
temp="";
ok = 0;
cf=1;
logicTwo();
logicThree();
checkSpace();
while(ok==0) {
aRandomNumber=Math.random()
comp=Math.round((choice-1)*aRandomNumber)+1;
if (comp==1) temp="A";
if (comp==2) temp="B";
if (comp==3) temp="C";
if (comp==4) temp="D";
if (comp==5) temp="E";
if (comp==6) temp="F";
if (comp==7) temp="G";
if (comp==8) temp="H";
if (comp==9) temp="I";
checkSpace();
}
document.images[temp].src= o;
process();
}
function ended() {
swal("Game over!", "Pour recommencer, appuie sur le bouton 'Nouvelle partie'", "error")
}
function process() {
logicOne();
if (all==1){ swal("Bravo!", "Tu as gagné", "success"); wn++; }
if (all==2){ swal("Boohh...", "Tu as perdu", "error"); ls++; }
if (all==3){ swal("Egalité!", "On s'en refait une?", "info"); ts++; }
if (all!=0) {
document.game.you.value = wn;
document.game.computer.value = ls;
document.game.ties.value = ts;
   }
}
function playAgain() {
if (all==0) {
if(confirm("Quoi que qu'est-ce?")) reset();
}
if (all>0) reset();
}
function reset() {
all = 0;
a = 0;
b = 0;
c = 0;
d = 0;
e = 0;
f = 0;
g = 0;
h = 0;
i = 0;
temp="";
ok = 0;
cf = 0;
choice=9;
aRandomNumber = 0;
comp = 0;
document.images.A.src= blank;
document.images.B.src= blank;
document.images.C.src= blank;
document.images.D.src= blank;
document.images.E.src= blank;
document.images.F.src= blank;
document.images.G.src= blank;
document.images.H.src= blank;
document.images.I.src= blank;
if (t==0) { t=2; myChoice(); }
t--;
}
var ie4 = (document.all) ? true : false;
var nn4 = (document.layers) ? true : false;

function bigLogo(x) {
  x.style.height = "120px";
  x.style.width = "120px";
}

function normLogo(x) {
  x.style.height = "100px";
  x.style.width = "100px";
}
