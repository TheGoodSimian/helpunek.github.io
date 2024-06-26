function checkAnswers() {
    const answers = {
        answer1: ["work"],
        answer2: ["have"],
        answer3: ["are not buying", "aren't buying"],
        answer4: ["am not feeling", "'m not feeling"],
        answer5: ["feel"],
        answer6: ["have to"],
        answer7: ["go up"],
        answer8: ["are skyrocketing"],
   /*      answer10:[""],
        answer11:[""],
        answer12:[""],
        asnwer13:[""], */
    };

    let score = 0;
    let totalQuestions = Object.keys(answers).length;

    for (let id in answers) {
        let userAnswer = document.getElementById(id).value.trim().toLowerCase();
        if (answers[id].includes(userAnswer)) {
            score++;
            document.getElementById(id).style.borderColor = "green";
        } else {
            document.getElementById(id).style.borderColor = "red";
        }
    }

    let result = document.getElementById("result");
    result.innerHTML = `You got ${score} out of ${totalQuestions} correct.`;
}