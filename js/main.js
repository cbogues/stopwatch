const startButton = document.querySelector('[data-action="start"]');
const stopButton = document.querySelector('[data-action="stop"]');
const resetButton = document.querySelector('[data-action="reset"]');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
let timerTime = 00;
let isRunning = false;
let interval;

// start the timer
function startTimer() {
	if (isRunning) return;

	isRunning = true;
	interval = setInterval(incrementTimer, 1000);
}

// stop the timer
function stopTimer() {
	if(!isRunning) return;
	isRunning = false;
	clearInterval(interval);


}

// reset the timer
function resetTimer() {
	stopTimer();

	timerTime = 0;
	minutes.innerText = '00';
	seconds.innerText = '00';

}

// to make sure Minutes and seconds are incrementing properly
function incrementTimer() {
	timerTime++;


	const numOfMinutes = Math.floor(timerTime / 60);
	const numOfSeconds = timerTime % 60;

	// console.log({numOfMinutes, numOfSeconds});

	minutes.innerText = pad(numOfMinutes);
	seconds.innerText = pad(numOfSeconds);
	// console.count('hello');

}

// Adds the '0' to single digit numbers
function pad(number) {
	return (number < 10) ? '0' + number : number;
	// if(number < 10){
	// 	return'0' + number;
	// } else {
	// 	return number;
	// }
}



// event listeners
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click',resetTimer);
