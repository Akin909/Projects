const types = document.querySelectorAll('div.pick-type');
const gameSquares =
document.querySelectorAll('div.game-square')
let circle = false;
let cross = false;
let circleMarker =  document.createElement('div')
circleMarker.classList.add('circle')



console.log(gameSquares,types)
types.forEach((type)=>{
  type.addEventListener('click',(event)=> {
    let that = event.target
    that.className.includes('X')?(cross=true,circle=false):(circle=true,cross=false);

  })
})


gameSquares.forEach((square)=> addEventListener('click',drawMarker))


function drawMarker(event){
  let that = event.target;
  console.log("cross "+cross,"circle "+circle )
  if(circle && that.className.includes("game-square")){
    let mark = document.createElement('div');
    mark.classList.add('circle');
    that.appendChild(mark);
  }
  if(cross && that.className.includes("game-square")){
    let xmark = document.createElement('div');
    xmark.classList.add('cross');
    xmark.innerHTML += "X"
    that.appendChild(xmark)
  }
}
