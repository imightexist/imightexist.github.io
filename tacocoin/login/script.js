//websocket for nerds which i am not 😎
var ws = new WebSocket("ws://localhost:6005");

ws.onmessage = function (evt) {
    login2(evt.data);
}

function setCookie(cname, cvalue, exdays) {
    //w3schools my best friend! ctrl+c ctrl+v
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function login(){
    ws.send("{'auth'," + document.getElementById("username").value + "," + document.getElementById("password").value + "}");
}

function login2(string){
    if (string == "none") {
        document.getElementById("error").style.removeProperty("display");
    } else {
        setCookie("token",string,"10");
        window.location = "../home/index.html";
    }
}