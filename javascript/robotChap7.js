document.getElementById("lefteye").style.backgroundColor = "black";
document.getElementById("righteye").style.backgroundColor = "red";
document.getElementById("mouth").style.backgroundColor = "white";
document.getElementById("head").style.backgroundColor = "gold";
document.getElementById("body").style.border = "2px black soild";
document.getElementById("mouth").style.borderRadius = "4px";
document.getElementById("righteye").style.border = "4px yellow dotted";
document.getElementById("leftarm").style.backgroundColor = "#FF00FF";
document.getElementById("body").style.color = "#FF0000";
document.getElementById("head").style.borderTop = "5px black soild";
//document.getElementById("head").style.transform = "rotate(15deg)";
var rightEye = document.getElementById("righteye");
rightEye.addEventListener("click", moveUpDown);

function moveUpDown(e) {
    var robotPart = e.target;
    var top = 0;
    var id = setInterval(frame, 10) // draw every 10ms
    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top === 20) {
            clearInterval(id);
        }
    }
}