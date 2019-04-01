function login() {

    //alert("Post Successful");
    var XHR = new XMLHttpRequest();
    //Call the open function, POST-type of request, url, true-asynchronous
    XHR.open("POST", 'http://127.0.0.1:8000/login/', true);
    //call the onload 
    XHR.setRequestHeader("Content-Type","application/json");
    val1 = document.getElementById("uname").value;
    val2 = document.getElementById("pass").value;
    var obj ={};
        obj["username"] = val1;
        obj["password"] = val2;
    var sendjson = JSON.stringify(obj);
    //call send
    alert(sendjson); 
    XHR.send(sendjson);

    

    XHR.onreadystatechange = function() {
      if (xhttp.readyState==4) {
          var response = XHR.responseText;
          token = response.token;
          uid = response.author;
          alert(token);
                }



  };
  }