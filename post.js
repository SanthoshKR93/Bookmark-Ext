var token,uid;

function urlset() {
var x = document.URL;
  document.getElementById("link1").value = x;

};


function postdata(){
   // console.log("hello");
    
    var XHR = new XMLHttpRequest();
    //Call the open function, POST-type of request, url, true-asynchronous
    XHR.open("POST", 'http://127.0.0.1:8000/linksapi/', true);
    //call the onload 
    XHR.setRequestHeader("Content-Type","application/json");
    val1 = document.getElementById("link1").value;
  val2 = document.getElementById("comment").value;
    var obj ={};
        obj["url"] = val1;
        obj["comment"] = val2;
        obj["author"] = 1;
    var sendjson = JSON.stringify(obj);
    //call send
    alert(sendjson); 
    XHR.send(sendjson);




    XHR.onreadystatechange = function(){
      if (this.readyState===XMLHttpRequest.DONE && this.status=== 200) {
        
        alert("Post Successful");

      }
        }
  }


  

  function logout(){
    alert("Post Successful");

  }
