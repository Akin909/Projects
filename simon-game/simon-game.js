const quadrants = document.querySelectorAll('.quadrants');
const start = document.querySelector('.controls')
quadrants.forEach((quadrant)=>addEventListener('click',glow))
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const playerOrder = [];
const compOrder = [];


function glow(event){
  let quadrant = event.target;
  playerOrder.push(quadrant)
  // console.log(playerOrder)
  quadrant.classList.add("active");
  setTimeout(()=>quadrant.classList.remove("active"),400);
}
let counter = 0;
function glowRandom(){
  let i = getRandomArbitrary();
  counter++;
  console.log(counter)
  //counter stops the function once it has run a certain number of times
  if(counter<=3){
  quadrants[i].classList.add("active");
  compOrder.push(quadrants[i]);
  // console.log(compOrder)
  setTimeout(()=>quadrants[i].classList.remove("active"),600);
}

}
function getRandomArbitrary(){
  return Math.round(Math.random()*3);
}
//Sets the interval has global scope so sets onload, is the only way that it can be cleared
let sequence = setInterval(glowRandom,1500);
function setSequence(event){

  if(event.target === stopBtn){
    clearInterval(sequence);
  }

}
// ()=>clearInterval(sequence)
//setTimeout(clearInterval(sequence),3000)
stopBtn.addEventListener('click',setSequence)
startBtn.addEventListener('click',setSequence)
