var Question = function (question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
    this.toConsole = function () {
        console.log(this.question);
        for (var i = 0; i < answers.length; i++){
            console.log(this.answers[i]);
        }
        console.log("¿Cual crees que es la respuesta?");

        return function (el) {
            if (el === "exit"){
                console.log("EXIT")
            } else {
                if (el == correctAnswer){
                    console.log("OK!!!");
                    getNewQuestion(true);
                } else {
                    console.log("ERROR!!!");
                    getNewQuestion(false);
                }
            }
        }
    }
};

var preguntas = [];
var totalResult;

function getNewQuestion (result) {
    if (result == ""){
        totalResult = 0;
    } else if (true){
        totalResult++;
    }

    console.log("Tienes " + totalResult + " Puntos.");

    preguntas[Math.floor(Math.random() * 2)].toConsole()(prompt());
}

function init () {
    var quienEres = new Question('¿Quien eres?', ['Jon', 'Luis', 'Manu'], 0);
    var dondeTrabajas = new Question('¿Donde trabajas?', ['Nexus', 'Docomo', 'Bluu'], 2);

    preguntas.push(quienEres);
    preguntas.push(dondeTrabajas);

    getNewQuestion("");
}

init();
