var resp;

function setdata() {
let xhr = new XMLHttpRequest();
    //Call the open function, GET-type of request, url, true-asynchronous
    xhr.open('GET', 'http://127.0.0.1:8000/linksapi/', true)
    //call the onload 
    xhr.send();
    xhr.onload = function() 
        {
            //check if the status is 200(means everything is okay)
            if (this.status === 200) 
                {
                    //return server response as an object with JSON.parse
                    console.log(JSON.parse(this.responseText));
                    resp = JSON.parse(this.responseText);                    
        }
 }
     for (i=0;i<resp.length;i++) {
        //if (st == 1) {
            var str1 = resp[i].url;
            var str2 = resp[i].comment; 
            var x = document.createElement("LI");
            var a = document.createElement("a");
            var t1 = document.createTextNode(str1);
            var y = document.createElement("br");
            var s = document.createElement("small");
            var t2 = document.createTextNode("Comment :" + ' ' + str2);
            x.appendChild(a);
            a.href = str1;
            a.appendChild(t1);
            x.appendChild(y);
            s.appendChild(t2);
            x.appendChild(s);
            document.getElementById("createli").appendChild(x);
}
}
//}

