import {CHOICES} from "./gameChoices";
const randomComputerChoice = () =>
	CHOICES[Math.floor(Math.random() * CHOICES.length)];

const getRoundOutcome = (userChoice, computerChoice) => {
	let resultText;
	if (userChoice === "rock") {
		resultText = computerChoice === "scissors" ? "Victory!" : "Defeat!";
	}
	if (userChoice === "paper") {
		resultText = computerChoice === "rock" ? "Victory!" : "Defeat!";
	}
	if (userChoice === "scissors") {
		resultText = computerChoice === "paper" ? "Victory!" : "Defeat!";
	}

	if (userChoice === computerChoice) resultText = "Tie game!";
	return resultText;
};
export {randomComputerChoice, getRoundOutcome};