// IIFE
(function () {
    var correcto;
    var preguntas = [];
    var Question = function (question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    };

    Question.prototype.displayQuestion = function () {
        console.log(this.question);

        for (var i = 0; i < this.answers.length ; i++){
            console.log(i + ": " + this.answers[i]);
        }

        return prompt("Cual es la respuesta correcta?");
    };

    Question.prototype.checkAnswer = function (ans, callback) {
        var sc;
        if (ans !== "exit"){
            if (parseInt(ans) === this.correctAnswer){
                console.log("Correcto");
                correcto = true;
                sc = callback(true);
            } else {
                console.log("Incorrecto");
                correcto = false;
                sc = callback(false);
            }
        } else {
            console.log("Exit");
        }

        this.displayScore(sc);
    };

    Question.prototype.displayScore = function (score) {
        console.log('You current score is ' + score + "\n---------------------------");
        nextQuestion();
    };


    var quienEres = new Question('¿Quien eres?', ['Jon', 'Luis', 'Manu'], 0);
    var dondeTrabajas = new Question('¿Donde trabajas?', ['Nexus', 'Docomo', 'Bluu'], 2);

    preguntas.push(quienEres);
    preguntas.push(dondeTrabajas);

    function nextQuestion() {
        var n = Math.floor(Math.random() * preguntas.length);

        preguntas[n].checkAnswer(preguntas[n].displayQuestion(),
            keepScore);
    }

    function scoreCalculate() {
        var sc = 0;

        return function (correct) {
            if (correct){
                sc++;
            }

            return sc;
        }
    }

    var keepScore = scoreCalculate();

    nextQuestion();
}());