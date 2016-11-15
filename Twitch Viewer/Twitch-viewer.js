var users = ["GoBGG", "Jankos", "imaqtpie", "wtcNN"]
var streams = []
var offlineUsers = []
var url = "https://wind-bow.hyperdev.space/twitch-api/streams/"
console.clear()

var parent = document.getElementById("parent")

for (var i = 0; i < users.length; i++) {

  var script = document.createElement('script');
  script.src = 'https://wind-bow.hyperdev.space/twitch-api/streams/' + users[i] + "/" + '?callback=foo'
  document.getElementsByTagName('head')[0].appendChild(script);
}
var counter = -1

function foo(data) {
  counter++
  if (data.stream) {
    addElement(data, counter);

  } else if (!data.stream) {
    addOffline(counter)
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
    var newContent = document.createTextNode(users[counter] + " online, playing " + game)

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

function addOffline(counter) {
  // create outside span
  var newSpan1 = document.createElement("span")
  newSpan1.className = "triplets"

    // create text comntent of outside span
    var newContent1 = document.createTextNode(users[counter] + " is offline")
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
