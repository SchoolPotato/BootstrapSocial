function invertIcon(id){
    let imageID = document.getElementById(id);

    if(imageID.getAttribute("style") == "background-color: #2E72AD; max-width: 2.5rem;"){
        imageID.setAttribute("style", "background-color: white; max-width: 2.5rem;");
    } else if(imageID.getAttribute("style") == "background-color: white; max-width: 2.5rem;"){
        imageID.setAttribute("style", "background-color: #2E72AD; max-width: 2.5rem;");
    }
}

let requestButton = document.getElementById("friendRequest");

function friendRequest(){
    let buttonID = requestButton

    buttonID.innerHTML = "Request Sent!";
    setTimeout(function(){ buttonID.innerHTML = "Revoke Request"; buttonID.setAttribute("onclick", `revokeRequest()`)}, 1000);
}

function revokeRequest(){
    let buttonID = requestButton

    buttonID.innerHTML = "Request Revoked."
    setTimeout(function(){ buttonID.innerHTML = "Send Friend Request"; buttonID.setAttribute("onclick", `friendRequest()`)}, 1000);
}