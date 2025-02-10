let currentQuestion = 1;

function checkAnswer(question, isCorrect) {
    if (isCorrect) {
        document.getElementById("q" + question).classList.add("hidden");
        currentQuestion++;

        if (currentQuestion <= 3) {
            document.getElementById("q" + currentQuestion).classList.remove("hidden");
        } else {
            // Den Text ausblenden
            document.getElementById("quiz-info").style.display = "none"; // Text wird hier ausgeblendet
            document.getElementById("result").classList.remove("hidden");
        }
    } else {
        alert("Oops! Falsche Antwort. Versuch es nochmal! ❤️");
    }
}

function openLetter() {
    document.getElementById("envelope").classList.add("open");
}
