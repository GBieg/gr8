let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds){
  // clear any timerDisplay
  clearInterval(countdown);

  const now = Date.now() // curent time in ms;
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // FIRST check IF we should stop

    if (secondsLeft < 0) {
      clearInterval(countdown);
      return
    }

    // display
    displayTimeLeft(secondsLeft)
  }, 1000)
}

function displayTimeLeft(seconds){
  const minutes = Math.floor(seconds / 60); // we care only about the WHOLE minutes = Math.floor will get the lower value of it.
  const remainderSeconds = seconds % 60;
const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
timerDisplay.textContent = display;
document.title = display; // showing the time on the tab
  console.log({minutes, remainderSeconds});


}

function displayEndTime(timestamp){
  const end = new Date(timestamp);
  const hours = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `be back at ${hours}:${minutes < 10 ? '0' : ''}${minutes}`
}

function startTimer(){
  // console.log(this.dataset.time);
  const seconds = parseInt(this.dataset.time);
  timer(seconds);

}

buttons.forEach(button => button.addEventListener('click', startTimer))

document.customForm.addEventListener('submit', function(e){
  e.preventDefault() // prevent from refreshing;
  const mins = this.minutes.value;
  console.log(mins);
  timer(mins * 60);
  this.reset();
})
