var users = ["imaqtpie", "freecodecamp", "WagamamaTV"]
var url = "https://wind-bow.hyperdev.space/twitch-api/streams/"
console.clear()

function twitchPage(url) {

  var request = new XMLHttpRequest()
  request.open('GET', url)
  request.setRequestHeader("Api-User-Agent","Mozilla/5.0")
  request.onload = function() {
    console.log("response: ", request.response)
    if (request.status === 200) {
      saveStuff(JSON.parse(request.response))

      function saveStuff(data) {
        console.log("data: ", data)
        if (data.stream) {
          var channel = data.stream.channel
          console.log("channel: ", channel)
          var game = data.stream.game
          var logo = data.stream.channel.logo
          console.log("logo: ", logo)
          var imgElement = document.getElementById('profilepic')
          imgElement.innerHTML = `<img src=` + logo + `>`
          var stuffElement = document.getElementById('stuff')
          stuffElement.textContent = "Online, playing " + game
        } else {
          var stuffElement = document.getElementById('stuff')
          stuffElement.textContent = "User is offline"
        }
      }
    }
  }

  request.send()
}
twitchPage(url + users[0])

console.clear()

function twitchPage1(url) {

  var request = new XMLHttpRequest()
  request.open('GET', url)
  request.onload = function() {
    console.log("response: ", request.response)
    if (request.status === 200) {
      saveStuff(JSON.parse(request.response))

      function saveStuff(data) {
        console.log("data: ", data)
        if (data.stream) {
          var channel = data.stream.channel
          var game = data.stream.game
          var logo = data.stream.channel.logo
          console.log("channel: ", channel)
          console.log(typeof !data.stream)
          var imgElement = document.getElementById('profilepic1')
          imgElement.innerHTML = `<img src=` + logo + `>`
          // var linkElement = document.getElementById('firstLink')
          // linkElement.textContent = `<a href=`+ channel +`></a>`
          var stuffElement = document.getElementById('stuff1')
          stuffElement.textContent = "Online, playing " + game
        } else {
          var stuffElement = document.getElementById('stuff1')
          stuffElement.textContent = "User is offline"
          
        }
      }
    }
  }

  request.send()
}
twitchPage1(url + users[1])

function twitchPage2(url) {

  var request = new XMLHttpRequest()
  request.open('GET', url)
  request.onload = function() {
    console.log("response: ", request.response)
    if (request.status === 200) {
      saveStuff(JSON.parse(request.response))

      function saveStuff(data) {
        console.log("data: ", data)
        if (data.stream) {
          var game = data.stream.game
          var logo = data.stream.channel.logo
          console.log("logo: ", logo)
          var imgElement = document.getElementById('profilepic2')
          console.log("imgElement: ",imgElement)
          imgElement.innerHTML = `<img src=` + logo + `>`
          var stuffElement = document.getElementById('stuff2')
          stuffElement.textContent = "Online, playing " + game
        } else {
          var stuffElement = document.getElementById('stuff2')
          stuffElement.textContent = "User is offline"
        }
      }
    }
  }

  request.send()
}

twitchPage2(url + users[2])
// var follow = function(){
//   var searchTerm = document.getElementById('search').value
//   users.unshift(searchTerm)
//   console.log(users)
//   twitchPage(url+users[0])
//   }

// subButton.addEventListener('click', follow(), false);

  //      // if (!subButton.onclick)  { }else{
  //     var beginSearch = function() {
  //   var searchTerm = document.getElementById('search').value
  //   var newUrl = "https://wind-bow.hyperdev.space//twitch-api/streams/" + searchTerm
  // var subButton  = document.getElementById("subButton")
  //   subButton.addEventListener('click', beginSearch(), false);
  //   console.log("url: ", url)
  //   twitchPage(newUrl)
  // }
  //    }