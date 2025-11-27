// Function to check the user's answer
function checkAnswer() {
    // 1. Identify the correct answer
    const correctAnswer = "4";

    // 2. Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const feedback = document.getElementById("feedback");

    // If no option is selected, handle it gracefully
    if (!selectedOption) {
        feedback.textContent = "Please select an answer before submitting.";
        return;
    }

    const userAnswer = selectedOption.value;

    // 3. Compare user's answer with the correct one
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// 4. Add event listener to the "Submit Answer" button
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
