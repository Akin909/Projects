// console.clear()

$(document).ready(function() {
  
  $("#subButton").click(function(e){
    e.preventDefault()
    var searchTerm = $('#search').val();
var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchTerm + "&format=json&callback=?"
$.ajax({
  type: "GET",
  dataType: "json",
  url:url,
  async:false,
  success: function(data){
    console.log("data 1,0: ", data[1][0],"data 2,0: ", data[2][0],"data 3,0", data[3][0])
    // // $("#output").html("")
    for (var i = 0; i<data.length;i++){
      // if(data[1][i]!==null)
      $('#output').prepend("<div class=\"searchItems\"><p><u><a href="+data[3][0]+">" +data[1][i]+"</a></u></p>"+"<p>"+data[2][i]+"</p></div>" )
      
    }
       
  }
})
  })
   $("#randomButton").on('click',function(){ window.open( "https://en.wikipedia.org/wiki/Special:Random") })
                
})