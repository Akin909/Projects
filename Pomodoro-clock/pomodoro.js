const time = document.querySelector('div.time');
const start = document.querySelector('button.start');
const stop = document.querySelector('button.stop')
const input = document.querySelector('input')
const footer = document.querySelector('div.footer')
let timerMinutes;
let myTimer;
let currentSeconds;
countdownActive = false

input.classList.add('shaking');

start.addEventListener('click',startTimer)
stop.addEventListener('click',() => {
  time.textContent =``;
  countdownActive = false;
  clearInterval(myTimer);
 })

input.addEventListener('click',()=>{
  footer.appendChild(input);
  input.style.opacity = 0;
  window.getComputedStyle(input).opacity;
  input.style.opacity = 1;
  input.classList.add('move');
  input.classList.remove('shaking')
});

function startTimer(event){
  timerMinutes = input.value;
  if(input.value.match(/[a-z]/i)||input.value === ""){
      input.value = ""
        footer.appendChild(input);
        input.style.opacity = 0;
        window.getComputedStyle(input).opacity;
        input.style.opacity = 1;
        input.classList.add('move');
      time.textContent = "Please insert a number"

      return;
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

  const now = new Date();
  console.log("start seconds",currentSeconds,"seconds now",now.getSeconds())

  let seconds = (59+(currentSeconds-now.getSeconds()))%60
    if(seconds.toString().length<2){
    seconds = `0${seconds}`
  };


  let minutes = Math.floor(timerMinutes-(seconds/60));
  if(minutes.toString().length<2){
    minutes = `0${minutes}`
  }
  if(seconds === "01"){
    timerMinutes -= 1
    //timerMinutes is updated globally and minutes is defined from that minutes -= 1;
  };
  console.log("seconds",seconds,"minutes",minutes)
  let timer = `${minutes}:${seconds}`;
  time.textContent = timer;
  if(timerMinutes  < 1 && seconds ==="00"){
    timerMinutes = 0; seconds = 0;
    clearInterval(myTimer)
  }
 }
