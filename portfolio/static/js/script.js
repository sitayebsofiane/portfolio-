var myCitation="aprés plusieurs fromations DEVELOPPEUR WEB je recherche un poste qui me permettra de continuer "+
 "mon évolution et d'exprimer ma curiositée pour les nouvelles technologies";
var myArray=myCitation.split("");
var timeLooper;
function loop(){
    if(myArray.length>0){
        document.getElementById("citation").innerHTML +=myArray.shift();
    }else{
        clearTimeout(timeLooper);
    }
    timeLooper=setTimeout("loop()",70);
};
loop();
// message d'erreur
function cv(){
var message = document.getElementById("message");
message.textContent = "Aha !malin tu veut voir mon cv sans donner le nom de ton entreprise!";
}
var entreprise = document.getElementById("nom").nodeValue;
alert(cv);