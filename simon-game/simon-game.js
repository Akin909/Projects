const quadrants = document.querySelectorAll('.quadrants');
const start = document.querySelector('.controls')
quadrants.forEach((quadrant)=>addEventListener('click',glow))

function glow(event){
  let quadrant = event.target;
  quadrant.classList.add("active");

  setTimeout(()=>quadrant.classList.remove("active"),400);
}

function glowRandom(){
  let i = getRandomArbitrary();
  quadrants[i].classList.add("active");
  setTimeout(()=>quadrants[i].classList.remove("active"),400);
}
function getRandomArbitrary(){
  return Math.round(Math.random()*3);
}

function setSequence(){

  let sequence = setInterval(glowRandom,2000);
  sequence();
  setTimeout(clearInterval(sequence),3000)

}
setSequence()
