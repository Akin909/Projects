var streams = []
var offlineUsers = []
var url = "https://wind-bow.hyperdev.space/twitch-api/streams/"
console.clear()
var added =[]
var users = ["GoBGG", "Jankos", "imaqtpie", "wtcNN","ThaldrinLol"]
document.getElementById("subBtn").onclick = function(event){
  var userInput = document.getElementById("userInput").value 
  users.push(userInput);
  console.log(users);
  var script = document.createElement('script');
  script.src = 'https://wind-bow.hyperdev.space/twitch-api/streams/' + users[users.length-1] + "/" + '?callback=foo'
  document.getElementsByTagName('head')[0].appendChild(script);
}
console.log("users: ", users)



var parent = document.getElementById("parent")
 
for (var i = 0; i < users.length; i++) {
  var script = document.createElement('script');
  script.src = 'https://wind-bow.hyperdev.space/twitch-api/streams/' + users[i] + "/" + '?callback=foo'

  document.getElementsByTagName('head')[0].appendChild(script);
 // })(i)
}
var counter = 0

function foo(data) {
 
  counter++
  if (data.stream) {
   
    addElement(data, counter);
    added.push(data.stream.channel.display_name)
  } 
  
  // console.log('counter: ', counter, ' users.length: ', users.length)
  //Set to trigger once has made all script tags/calls then checks if user has been added and if not reports users that have not been added
  if (counter == users.length){
    
     users.forEach(function(x){
        if (added.indexOf(x) == -1) {
          addOffline(x);
        }
      });  
  }  
  
}

function addElement(data, counter) {
  // set variable from data values
  var channel = data.stream.channel
  var game = data.stream.game
  var logo = data.stream.channel.logo
  // create outside span
  var newSpan = document.createElement("span")
  newSpan.className = "triplets"
  
    // create text contents of outside span
    var newContent = document.createTextNode(data.stream.channel.display_name + " online, playing " + game)
    
    // append text contents to outside span
    newSpan.appendChild(newContent)
    
    // create image container content of outside span
    var imgDiv = document.createElement("div")
    imgDiv.className = "imgDiv"
      
      // create image text element for image container
      var imgContent = document.createTextNode("image")
      // append image text element to image container
      imgDiv.appendChild(imgContent)
      
      // set inner html of image container swapping out image text element
      imgDiv.innerHTML = `<img src=` + logo + `>`


    // append image container to outside span
    newSpan.appendChild(imgDiv)
  
  // add outside container to streams array  
  streams.push(newSpan)
  
  // append outside container to parent
  parent.appendChild(newSpan)
}

function addOffline(user) {
  // create outside span
  var newSpan1 = document.createElement("span")
  newSpan1.className = "triplets"
  
    // create text comntent of outside span 
    var newContent1 = document.createTextNode(user + " is offline")
    // append text contents to outside span
    newSpan1.appendChild(newContent1)

    // create image container content of outside span
    var imgDiv1 = document.createElement("div")
    imgDiv1.className = "imgDiv"
    
        
      // create image text element for image container
      var imgContent1 = document.createTextNode("image")
      // append image text element to image container
      imgDiv1.appendChild(imgContent1)
      
      // set inner html of image container swapping out image text element
      imgDiv1.innerHTML = `<img src="https://cdn1.iconfinder.com/data/icons/micon-social-pack/512/twitch-512.png">`
  
    
   // append image container to outside span
  newSpan1.appendChild(imgDiv1)

  // append outside container to parent
  parent.appendChild(newSpan1)
}