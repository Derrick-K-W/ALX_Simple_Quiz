// Function to check the answer
function checkAnswer() {
    // The correct answer
    const correctAnswer = "4";

    // Get the selected radio button element (user's answer)
    const userAnswerElement = document.querySelector('input[name="quiz"]:checked');

    // Check if an answer is selected
    if (userAnswerElement) {
        // Extract the value from the selected radio button element
        const userAnswer = userAnswerElement.value;

        // Now compare the selected answer directly with the correct answer
        if (userAnswer === correctAnswer) {
            // Display feedback for the correct answer
            document.getElementById("feedback").textContent = "Correct! Well done.";
        } else {
            // Display feedback for the wrong answer
            document.getElementById("feedback").textContent = "That's incorrect. Try again!";
        }
    } else {
        // Handle the case where no answer is selected
        document.getElementById("feedback").textContent = "Please select an answer.";
    }
}

// Add event listener to the Submit Answer button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
