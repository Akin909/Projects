const quadrants = document.querySelectorAll('.quadrants');
const start = document.querySelector('.controls')
quadrants.forEach((quadrant)=>addEventListener('click',glow))
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const scoreOutput = document.querySelector('.score')
const playerOrder = [];
const compOrder = [];
let counter = 0;
let counterLimit = 3
let score = 0;

function glow(event){
  let quadrant = event.target;
  playerOrder.push(quadrant)
  console.log("player",playerOrder)
  quadrant.classList.add("active");
  setTimeout(()=>quadrant.classList.remove("active"),400);
  //Compares player input to computer order then ... do something
  if(playerOrder.every((element,i)=>{
    if(playerOrder.length===compOrder.length){
    return element === compOrder[i];
      }
    })){
      // alert("EQUALS");
      score += 1;
      scoreOutput.innerHTML  = score;
      counter = 0;
      counterLimit +=1;
    };
}

function glowRandom(){
  let i = getRandomArbitrary();
  counter++;
  console.log(counter)
  //counter stops the function once it has run a certain number of times
  if(counter<=counterLimit){
    quadrants[i].classList.add("active");
    compOrder.push(quadrants[i]);
    console.log("computer",compOrder)
    setTimeout(()=>quadrants[i].classList.remove("active"),600);
  }
  // else{
  //   clearInterval(sequence)
  // }
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
stopBtn.addEventListener('click',setSequence)
startBtn.addEventListener('click',setSequence)
