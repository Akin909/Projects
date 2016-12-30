//Is for commented out code
/* Is for commenting code in general */

const startBtn = document.querySelector('.start');
let playing = false;

  const quadrants = document.querySelectorAll('.quadrants');
  const stopBtn = document.querySelector('.stop');
  const scoreOutput = document.querySelector('.score')
  let playerOrder = [];
  let compOrder = [];
  let randomSequence = [];
  let audio;
  let counter = 0;
  let counterLimit = 1
  let score = 0;
  let sequence;
  let on = false;
  /*Sets the interval has global scope so sets onload, is the only way that it can be cleared*/

function begin(){
  on = true;
  glowRandom();
  generateArray();

  }
  quadrants.forEach((quadrant)=>addEventListener('click',glow));


/* core glowing functionality seperated out to be reused */
// if(on){
  function glowing(quadrant){
      quadrant.classList.add("active");
      audio = quadrant.firstElementChild;
      audio.play();
      setTimeout(()=>quadrant.classList.remove("active"),400);
    }

  function glow(event){
    if(Array.from(quadrants).indexOf(event.target)===-1){return ;}
        let quadrant = event.target;
        audio = quadrant.firstElementChild;
        playerOrder.push(quadrant);
        glowing(quadrant);
        // console.log("player",playerOrder);
    /*Right length is declared here as it must be within this functions scope to register changes an compare properly*/
    let rigthLength = (playerOrder.length === compOrder.length);

    /*Compares player input to computer order then adds score and increases counter;*/
    let correctAnswer = playerOrder.every((element,i)=>{
      if(rigthLength){
        return element === compOrder[i];
      }
    });
    if(correctAnswer){
      setTimeout(function(){
        score += 1;
        scoreOutput.innerHTML  = score;
        counter = 0;
        counterLimit +=1;},500);
        compOrder.push(quadrants[randomNum()])
        playerOrder =[];
        glowRandom();
      }
      //rigthLength && !correctAnswer
      else if(compOrder.indexOf(quadrant)=== -1 || playerOrder.indexOf(quadrant)!==compOrder.indexOf(quadrant)){
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

          },1000)
        /* Once replayed game should continue on by iterating counter */
        if(correctAnswer){reset = true;}
        if(reset){
          counter = 0;
          compOrder.push(quadrants[randomNum()]);
          glowRandom();
        }
    }
  }
  function glowRandom(){
    /*counter stops the function once it has run a certain number of times*/
    counter++;
      setTimeout(()=>{
        for(let i = 0;i<compOrder.length; i += 1 ){
          console.log("iterating through quadrants");
          setTimeout(()=>glowing(compOrder[i]),800*(i));
      }
    },1000);

    console.log("computer",compOrder,"length",compOrder.length);
}

  function generateArray(){
    compOrder = [];
    for(let j = 0;j<counterLimit;j += 1){
      el = Math.round(Math.random()*3);
      randomSequence.push(el);
    }
    randomSequence.forEach((element)=>{
      quadrants.forEach((quadrant)=>{
      if(element === Array.from(quadrants).indexOf(quadrant)&&compOrder.length<counterLimit){
        compOrder.push(quadrant);
      }
    })
  })
    return compOrder;
  }
  function randomNum(){
    return Math.floor(Math.random()*3)
  }
// }

startBtn.addEventListener('click',begin);
