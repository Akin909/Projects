console.clear()
const clear = document.getElementById('C')
var input = document.getElementById('input')
const operators = ["/", "+", "-","="]
//excellent inbuilt function which finds all the elements with a specific type e.g. button divs here and returns a node list which is an array like object
keys = document.querySelectorAll("div.button")
console.log(keys)
clear.onclick = (event) => input.innerHTML = "";
//for each key i.e. button an event listener is added that lengths the input string by the value given till an equals is encountered then the value is evaluated
keys.forEach((key) => {
  key.onclick = function(event) {

    var btnVal = this.innerHTML
    var inputVal = input.innerHTML += btnVal
    if(inputVal.indexOf("x")>-1){ 
      inputVal = inputVal.replace(/x/,"*")
    }
    //Run operation
    var end = inputVal.charAt(inputVal.length - 1)

    //if the last character entered is an "=" evaluate all the contents of input once spaces and "=" have been removed
    if (operators.indexOf(end) < 0) {
  
      let current = input.innerHTML
      // input.innerHTML = "";
      console.log("is there an equals",btnVal.indexOf("=") > -1)
      if (btnVal.indexOf("=") > -1) {
        inputVal = inputVal.replace(/\s/g, '')
        inputVal = inputVal.replace(/=+/,"")
        input.innerHTML = eval(inputVal)
      }
    }
  }
})