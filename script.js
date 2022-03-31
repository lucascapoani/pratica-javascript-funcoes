// Nome do Aluno - nota 1 - nota 2 - média - Aprovado/Reprovado


var nomes = ["Lucas", "Maria", "José", "João", "Priscila"];
var notasA= [8.5, 7.5, 8.0, 6.0, 6.5];
var notasB= [7.0, 6.5, 5.0, 8.0, 7.0];

function media(n1,n2){
    return (n1 + n2)/2
}

function passou(media){

    if (media > 6){
        return "Aprovado"
    } else {
        return "Reprovado"
    }
}

for (var index in nomes){

    var nota1 = notasA[index];
    var nota2 = notasB[index];
    var m = media(nota1,nota2);

    console.log(nomes[index] + " - " + nota1 + " - " + nota2 + " - " + m + " - " + passou(m));
}