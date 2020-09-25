//console.log("tohle je z externiho souboru");
//Javascript ma camelCase syntax prvni pismeno je malym a dalsi je velke : javaScript//getElementById
//V JS je jedno jake uvozovky pouzivame ""/''

/* V javascriptu se prirazuji hodnoty dynamicky
var je klicove slovo oznacujici promenou (funguje ve vsech verzich javascriptu) */
//var nadpis = "ahoj";)
/* Existuji i konstanty (declared by const) (steje jako v c #define)*/
let nadpis = document.getElementById('nadpis');
const zapati = document.querySelector("footer");
const trump = document.querySelector("img");

trump.addEventListener("click", function(){
    console.log("mys na trumpovi");
    trump.src = "images/trump2.jpg";
})
trump.addEventListener("click", function(){
    console.log("mys z trumpa")
   trump.src = "images/trum1.jpg";
});
nadpis.addEventListener("click",function(){
    console.log("tohle je po kliknuti");
    nadpis.classList.add("bg-success");
    nadpis.classList.add("text-right");
    nadpis.classList.remove("text-center");
//muzeme nechat text zmizet: nadpis.style.display = "none";
nadpis.classList.add("bg-success");
nadpis.classList.add("text-right");
nadpis.classList.remove("text-center");
});

zapati.addEventListener("mouseover", function(){
    console.log("toto je po pohybu na const zapati");
//zapati.classList.add("text-right");
zapati.classList.remove("text-center");
zapati.style.backgroundColor = "yellow";
zapati.classList.add("text-center");
zapati.classList.remove("text-center");
zapati.style.fontFamily = "Comic Sans MS";
zapati.style.color = "red";
zapati.style.fontSize = "200%";
zapati.innerHTML = "Hit me with your car so i can collect disability cheks";
})