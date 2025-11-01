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

    answer9: ["takes"],
    answer10: ["is driving", "'s driving"],
    answer11: ["do not understand", "don't understand"],
    answer12: ["is acting", "'s acting"],
    answer13: ["studies"],
    answer14: ["is studying", "'s studying"],
    answer15: ["live"],
    answer16: ["are staying", "’re staying"],
    answer17: ["shines"],
    answer18: ["is raining", "'s raining"],
    answer19: ["think"],
    answer20: ["am thinking", "'m thinking"],
    answer21: ["eat"],
    answer22: ["are cooking", "'re cooking"],
    answer23: ["complains"],
    answer24: ["is enjoying", "'s enjoying"],
    answer25: ["opens"],
    answer26: ["is opening", "'s opening"],
    answer27: ["like"],
    answer28: ["are listening to", "'re listening to"],
    answer29: ["see"],
    answer30: ["disagree"],
    answer31: ["wears"],
    answer32: ["is wearing", "'s wearing"],
    answer33: ["do not work", "don't work"],
    answer34: ["are finishing", "'re finishing"],
    answer35: ["read"],
    answer36: ["am watching", "'m watching"],
    answer37: ["knows"],
    answer38: ["is hesitating", "'s hesitating"],
    answer39: ["exercises"],
    answer40: ["is resting", "'s resting"],
    answer41: ["expects"],
    answer42: ["are misbehaving", "'re misbehaving"],
    answer43: ["barks"],
    answer44: ["is sleeping", "'s sleeping"],
    answer45: ["arrives"],
    answer46: ["is", "'s"],
    answer47: ["believe"],
    answer48: ["am checking", "'m checking"]
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