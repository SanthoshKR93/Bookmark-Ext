function register() {
        
    //alert("Post Successful");
    var XHR = new XMLHttpRequest();
    //Call the open function, POST-type of request, url, true-asynchronous
    XHR.open("POST", 'http://127.0.0.1:8000/register/', true);
    //call the onload 
    XHR.setRequestHeader("Content-Type","application/json");
    val1 = document.getElementById("uname1").value;
    val2 = document.getElementById("pass1").value;
    var obj ={};
        obj["username"] = val1;
        obj["password"] = val2;
    var sendjson = JSON.stringify(obj);
    //call send
    alert(sendjson); 
    XHR.send(sendjson);

    XHR.onreadystatechange = function(){
        if (this.readyState===XMLHttpRequest.DONE && this.status=== 200) {
          
           // window.location = "login.html";
  
        }
          }
          
  }