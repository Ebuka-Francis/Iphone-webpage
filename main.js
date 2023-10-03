function openNav(){
    document.getElementById("myNav").style.width = "80%";
}

function closeNav(){
    document.getElementById("myNav").style.width ="0%";
}
function inPut(){
     const x = document.getElementById("myInput");
 if (x.style.display === "block") {
    x.style.display = "none";
 }
    else {
        x.style.display = "block";
    }
}