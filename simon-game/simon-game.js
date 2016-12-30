//Is for commented out code
/* Is for commenting code in general */

const startBtn = document.querySelector('.start');
let playing = false;

  const quadrants = document.querySelectorAll('.quadrants');
  const stopBtn = document.querySelector('.stop');
  const scoreOutput = document.querySelector('.score')
  let playerOrder = [];
  let compOrder = [];
  let audio;
  let counter = 0;
  let counterLimit = 1
  let score = 0;
  let sequence;
  let reset = false;
  /*Sets the interval has global scope so sets onload, is the only way that it can be cleared*/

function begin(){
    sequence = setInterval(function(){glowRandom()},1000)
}
  quadrants.forEach((quadrant)=>addEventListener('click',glow));


/* core glowing functionality seperated out to be reused */
  function glowing(quadrant){
      // console.log(quadrant)
      quadrant.classList.add("active");
      audio.play();
      setTimeout(()=>quadrant.classList.remove("active"),400);
    }

  function glow(event){

    if(Array.from(quadrants).indexOf(event.target)===-1){return ;}
        let quadrant = event.target;
        audio = quadrant.firstElementChild;
        playerOrder.push(quadrant);
        glowing(quadrant);
        console.log("player",playerOrder);
    /*Right length is declared here as it must be within this functions scope to register changes an compare properly*/
    let rigthLength = (playerOrder.length === compOrder.length);

    /*Compares player input to computer order then adds score and increases counter;*/
    let correctAnswer = playerOrder.every((element,i)=>{
      if(rigthLength){
        return element === compOrder[i];
      }
    });
    console.log(correctAnswer);
    if(correctAnswer){

      setTimeout(function(){
        score += 1;
        scoreOutput.innerHTML  = score;
        counter = 0;
        counterLimit +=1;},500);
        compOrder = [];
        playerOrder =[];


      } else if(rigthLength && !correctAnswer){
        scoreOutput.innerHTML = "!!";
        setTimeout(()=>scoreOutput.innerHTML = score,1000)
        playerOrder = [];
      /* function beneath is to allow the sequence to be repeated if the incorrect answer is input firstly a scaled timeout to prevent replay all firing off at once*/
        function repeatPattern(j){
          setTimeout(()=>glowing(compOrder[j]),800*j);
        }
          setTimeout(()=>{
            for(let j=0;j<compOrder.length;j += 1){
              repeatPattern(j);
            }
            reset = true
          },1000)
        /* Once replayed game should continue on by iterating counter */

        if(reset){
          debugger;
          counter = 0;
        }
    }
  }
  function glowRandom(){
    let i = getRandomArbitrary();
    audio = quadrants[i].firstElementChild
    counter++;
    // console.log("counter",counter)

    /*counter stops the function once it has run a certain number of times*/
    if(counter<=counterLimit){
      compOrder.push(quadrants[i]);
      glowing(quadrants[i])
      console.log("computer",compOrder,"length",compOrder.length)
      }else{
        /* Do something with i which is still iterating */
    }
  }

  function getRandomArbitrary(){
    return Math.round(Math.random()*3);
  }

  function stopSequence(event){
      clearInterval(sequence);
      console.log("stop game")
    }
stopBtn.addEventListener('click',stopSequence)
startBtn.addEventListener('click',begin)
