const time = document.querySelector('div.time');
const start = document.querySelector('button.start');
const stop = document.querySelector('button.stop')
const input = document.querySelector('input')

let timerMinutes;
let myTimer;
let currentSeconds;
countdownActive = false


start.addEventListener('click',startTimer)
stop.addEventListener('click',() => {
  time.textContent =``;
  countdownActive = false;
  clearInterval(myTimer);
 })



function startTimer(event){
  timerMinutes = input.value;
  if(input.value === ""){
      input.classList.add('move');
    }
  const nowAgain = new Date();
  currentSeconds = nowAgain.getSeconds();
    if(!countdownActive && input.value !== ""){
      countdownActive = true;
      myTimer = setInterval(makeTimer,1000);
    }
    return;


}


function makeTimer(){
  // countdownActive = true;
  const now = new Date();
  console.log("start seconds",currentSeconds,"seconds now",now.getSeconds())
  // currentSeconds <= now.getSeconds()?...:currentSeconds - now.getSeconds();
  let seconds = (59+(currentSeconds-now.getSeconds()))%60
    if(seconds.toString().length<2){
    seconds = `0${seconds}`
  };

  let minutes = Math.floor(timerMinutes-(seconds/60));

  if(seconds === "01"){
    timerMinutes -= 1
    //timerMinutes is updated globally and minutes is defined from that minutes -= 1;
  };
  // console.log("seconds",seconds,"minutes",minutes)
  let timer = `${minutes}:${seconds}`;
  time.textContent = timer;
  if(timerMinutes  < 1 && seconds ==="00"){
    timerMinutes = 0; seconds = 0;
    clearInterval(myTimer)
  }
 }
