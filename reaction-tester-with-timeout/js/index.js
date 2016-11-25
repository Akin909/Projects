var element = document.createElement("div")
var parent = document.getElementById("parent")
console.log(element)
var points = 0

// // window.onclick = function (e){
// // }

var generateClass = function() {
  var colors = ["yellow", "green", "blue", 'red', "purple", "orange"]
  element.style.borderRadius = getRadius()

  element.style.width = getRandomArbitrary(50, 200) + "px"
  element.style.position = "absolute";
  element.style.left = getRandomArbitrary(100, 600) + "px"
  element.style.top = getRandomArbitrary(290, 500) + "px"
  element.style.height = getRandomArbitrary(50, 200) + "px"
    // element.style.border = "solid black 3px"
  element.style.backgroundColor = colors[getRandomArbitrary(0, colors.length + 1)]

  element.onclick = function(e) {
    var pointsDiv = document.getElementById("points")
    console.log(points)
    points += 1
    pointsDiv.innerHTML = "<p>Score: <p>" + points
  }

  parent.appendChild(element)

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function getRadius() {
    var num = getRandomArbitrary(1, 3)

    if (num === 1) {
      return element.style.borderRadius = 100 + "%"
    } else if (num === 2) {
      return element.style.borderRadius = 0 + "%"
    }
  }
}
var myInterval = window.setInterval(generateClass, 800)
window.setInterval(generateClass, 800);

function winner(timeoutHandle,myInterval) {
  console.log("points", points)
  if (points < 10) {
    var reset = document.createElement("button")
    reset.className = "reset"
    reset.textContent = "Play Again!!"
    var banner = document.createElement("span");
    banner.className = "banner";
    banner.innerHTML = "<p>Aww try again</p>"
    parent.appendChild(banner);
    banner.appendChild(reset);
    reset.addEventListener("click", function(e) {
      clearTimeout(timeoutHandle)
      clearInterval(myInterval)
});
    
  }else if (points >= 10) {
    var banner = document.createElement("span");
    banner.innerHTML = "<p>Well Done!!</p>";
    banner.className = "banner"
    var reset = document.createElement("button")
    reset.className = "reset"
    reset.textContent = "Play Again!!"
    parent.appendChild(banner);
    banner.appendChild(reset);
    reset.addEventListener("click", function(e) {
      // banner.ClassList.toggle()
      clearTimeout(timeoutHandle)
      clearInterval(myInterval)
    })
  }
}

var timeoutHandle = setTimeout(winner, 15000);
timeoutHandle;
// timeoutHandle =setTimeout(
// in your click function, call clearTimeout
// window.clearTimeout(timeoutHandle);

// then call setTimeout again to reset the timer
// timeoutHandle = window.setTimeout(...);

// document.onclick = function(e){
//   console.log("hello")
//  clearInterval(myInterval)
// }