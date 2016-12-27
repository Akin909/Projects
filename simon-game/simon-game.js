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
  console.log(playerOrder)
  quadrant.classList.add("active");
  setTimeout(()=>quadrant.classList.remove("active"),400);
}

function glowRandom(){
  let i = getRandomArbitrary();
  let counter=0;
  counter += 1
  // while(counter<3){
  // quadrants[i].classList.add("active");
  // compOrder.push(quadrants[i]);
  // console.log(compOrder)
  // setTimeout(()=>quadrants[i].classList.remove("active"),400);
  // }
  return;
}
function getRandomArbitrary(){
  return Math.round(Math.random()*3);
}

function setSequence(){
  // debugger;
let sequence = setInterval(()=>glowRandom(),1500);

}
// setTimeout(clearInterval(sequence),3000)
startBtn.addEventListener('click',setSequence)
