//Is for commented out code
/* Is for commenting code in general */

const startBtn = document.querySelector('.start');
let playing = false;


function start(){
  const quadrants = document.querySelectorAll('.quadrants');
  const stopBtn = document.querySelector('.stop');
  const scoreOutput = document.querySelector('.score')
  const playerOrder = [];
  const compOrder = [];
  let counter = 0;
  let counterLimit = 1
  let score = 0;
  /*Sets the interval has global scope so sets onload, is the only way that it can be cleared*/
  let sequence = setInterval(glowRandom,1500);

  quadrants.forEach((quadrant)=>addEventListener('click',glow))

  function glow(event){

    let quadrant = event.target;
    const audio = quadrant.firstElementChild
    playerOrder.push(quadrant)
    // console.log("player",playerOrder,"player length",length)
    quadrant.classList.add("active");
    audio.play()
    setTimeout(()=>quadrant.classList.remove("active"),400);

    /*Right length is declared here as it must be within this functions scope to register changes an compare properly*/
    let rigthLength = (playerOrder.length === compOrder.length);

    /*Compares player input to computer order then adds score and increases counter;*/

    let correctAnswer = playerOrder.every((element,i)=>{
      if(rigthLength){
        return element === compOrder[i];
      }
    });

    if(correctAnswer){
        score += 1;
        scoreOutput.innerHTML  = score;
        counter = 0;
        counterLimit +=1;
      }
      else if(rigthLength && !correctAnswer){
          scoreOutput.innerHTML = "!!";
          function replaySequence(quadrant){
            console.log("quadrant",quadrant)
            if(compOrder.indexOf(quadrant)===-1){
              compOrder.forEach((quadrant)=>glow())
            }
          }
        replaySequence(quadrant)
    }
  }

  function glowRandom(){
    let i = getRandomArbitrary();
    counter++;
    console.log(counter)
    /*counter stops the function once it has run a certain number of times*/
    if(counter<=counterLimit){
      quadrants[i].classList.add("active");
      compOrder.push(quadrants[i]);
      // console.log("computer",compOrder,"length",compOrder.length)
      quadrants[i].firstElementChild.play()
      setTimeout(()=>quadrants[i].classList.remove("active"),600);
    }
    else{
      // counter+=0
      /*clearInterval(sequence)*/
    }
  }

  function getRandomArbitrary(){
    return Math.round(Math.random()*3);
  }

  function stopSequence(event){
      clearInterval(sequence);
    }
  stopBtn.addEventListener('click',stopSequence)
}


// startBtn.addEventListener('click',start)
